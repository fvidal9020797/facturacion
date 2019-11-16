const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let autor = new Schema({
    nombre: {
        type: String,
    },
    apellido: {
        type: String,
    },
}, {
    timestamps: true,
    collection: 'autor'
});
module.exports = mongoose.model('Autor', autor);