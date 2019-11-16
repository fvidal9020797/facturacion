const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let profile = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'se necesita el email']
    },
    nombre: {
        type: String,
        required: [true, 'se necesita el nombre']
    },
    apellido: {
        type: String,
        required: [true, 'se necesita el apellido']
    },
    token: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true,
    collection: 'profiles'
});
module.exports = mongoose.model('Profile', profile);