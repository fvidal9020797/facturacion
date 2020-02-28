const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let detailInvoice = new Schema({
    item: {
        type: Schema.Types.ObjectId,
        ref: 'item'
    },
    invoice: {
        type: Schema.Types.ObjectId,
        ref: 'invoice'
    },
    price: {
        type: String,
    },
    quantity: {
        type: String,
    },
    total_price_quantity: {
        type: String,
    },
}, {
    timestamps: true,
    collection: 'detail_invoice'
});
module.exports = mongoose.model('detailInvoice', detailInvoice);