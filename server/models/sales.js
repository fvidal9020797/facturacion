const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let sales = new Schema({
    number: {
        type: String,
        unique: true,
        required: [true, 'se necesita el numero de la venta']
    },
    total_price: {
        type: String,
        required: [true, 'se necesita el total del precio']
    },
}, {
    timestamps: true,
    collection: 'sales'
});
module.exports = mongoose.model('sales', sales);