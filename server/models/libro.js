const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let libro = new Schema({
    codigo: {
        type: String,
    },
    titulo: {
        type: String,
    },
    subtitulo: {
        type: String,
    },
    anio: {
        type: String,
    },
    num_pag: {
        type: String,
    },
    autor_id: {
        type: String,
        ref: 'Autor'
    },

}, {
    timestamps: true,
    collection: 'libro'
});
module.exports = mongoose.model('Libro', libro);