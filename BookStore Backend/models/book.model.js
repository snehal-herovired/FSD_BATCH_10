const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    reviews: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users',

            },
            comment: {
                type: String,

            },
            rating: {
                type: String,

            }
        }
    ],


}, {
    timestamps: true
})

const books = mongoose.model('book', bookSchema);

module.exports = books;