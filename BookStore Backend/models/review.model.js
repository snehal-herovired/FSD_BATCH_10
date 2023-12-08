const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "books",
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    }

}, { timestamps: true });

const reviewModel = mongoose.model('review', reviewSchema);
module.exports = reviewModel;