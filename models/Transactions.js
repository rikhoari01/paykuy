const mongoose = require("mongoose");

const transactionsScheme = new mongoose.Schema({
    totalPrice: {
        type: String,
        required: true,
    },
    expDate: {
        type: Date,
        required: true,
    },
    status: {
        type: Boolean,  
        default: 0,
    },
    paymentMethod: {
        type: String
    },
    imageUrl: {
        type: String
    },
    foreignId: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Transaction", transactionsScheme);