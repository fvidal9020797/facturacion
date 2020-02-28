const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let invoice = new Schema({
    nit: {
        type: String,
    },
    name: {
        type: String,
    },
    
}, {
    timestamps: true,
    collection: 'invoice'
});
module.exports = mongoose.model('invoice', invoice);