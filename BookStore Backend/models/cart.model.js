const mongoose = require('mongoose');

// const cartItemSchema = new mongoose.Schema({
//   bookId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'books',
//     required: true,
//   },
//   quantity: {
//     type: Number,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   totalPrice: {
//     type: Number,
//     required: true,
//   },
// });

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    books: [
        {
            bookId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'books',
                required: true,
            },
         quantity: {
                type: Number,
                required: true,
            },
        
            price: {
                type: Number,
                required: true,
            },
            totalPrice: {
                type: Number,
                required: true,
            }
        }
    ],
    totalItems: {
        type: Number,
        default: 0,
    },
    totalPrice: {
        type: Number,
        default: 0,
    },
});

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;
