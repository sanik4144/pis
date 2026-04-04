const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    buyingPrice: {
        type: Number,
    },
    sellingPrice: {
        type: Number,
    },
    profit: {
        type: Number,
    },
    profitPercentage: {
        type: Number,
    },
    extraProfit: {
        type: Number,
    },
    stock: {
        type: Number,
    }
})

module.exports = productSchema;