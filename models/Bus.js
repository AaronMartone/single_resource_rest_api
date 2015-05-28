var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var busSchema = new Schema({
    number: {
        type: String,
        required: '{Bus.number} is required'
    },
    dest: {
        type: String,
        required: '{Bus.dest} is required'
    },
    model: String,
    gas: Number,
    status: String
});

var Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;