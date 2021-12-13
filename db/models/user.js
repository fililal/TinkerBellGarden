var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    userName: {
        type: String,
        default: 'No Name'
    },
    password: {
        type: String,
        default: '0'
    },
    address: {
        type: String,
        default: 'No Details'
    }
});

module.exports = mongoose.model('user', productSchema, 'user');