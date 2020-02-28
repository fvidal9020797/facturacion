const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let item = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'se necesita el nombre del item']
    },
}, {
    timestamps: true,
    collection: 'item'
});
module.exports = mongoose.model('item', item);