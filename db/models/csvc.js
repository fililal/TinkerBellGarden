var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'No Name'
    },
    type: {
        type: String,
        default: 'Hoạt động'
    },
    details: {
        type: String,
        default: 'No Details'
    }
});

module.exports = mongoose.model('csvc', productSchema, 'csvc');