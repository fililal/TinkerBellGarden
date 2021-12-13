var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'No Name'
    },
    type: {
        type: String,
        default: '0'
    },
    details: {
        type: String,
        default: 'No Details'
    },
    day: {
        type: Number
    },
    month: {
        type: Number
    }
});

module.exports = mongoose.model('product', productSchema, 'product');