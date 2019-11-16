const jwt = require('jsonwebtoken');

//=======================
//VERIFICAR TOKEN
//=======================

let verificarToken = (req, res, next) => {
    let token = req.get('Authorization');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                status: false,
                err
            });
        }
        req.usuario = decoded.usuario;
        next();
    });

};

//=======================
//VERIFICAR ADMIN ROLE
//=======================
let verificarAdminRol = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role !== "ADMIN_ROLE") {
        return res.status(401).json({
            status: false,
            message: 'No tiene permisos para crear un nuevo usuario'
        });
    }
    next();
};
let verificarTokenRemote = async(user, password) => {
    let fetch = require('node-fetch');
    const Bluebird = require('bluebird');
    fetch.Promise = Bluebird;
    var FormData = require('form-data');
    var result;
    const uri = 'https://shrouded-retreat-42788.herokuapp.com/api/v1/sign_in';
    // let form = new FormData();
    // form.append('sign_in[email]', 'luisitocomunica@gmail.com');
    // form.append('sign_in[password]', 'password');
    var formBody = [];
    let obj = {};
    obj['sign_in[email]'] = 'luisitocomunica@gmail.com';
    obj['sign_in[password]'] = 'password';
    let parr = {
        "sign_in[email]": user,
        "sign_in[password]": password
    };

    for (var property in parr) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(parr[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    await fetch(uri, {
            method: 'POST',
            body: formBody,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(ress => ress.json())
        .then(data => {
            result = {
                data
            };
        })
        .catch(err => {
            result = {
                status: false,
                err
            };
        });
    return result;
};
module.exports = {
    verificarToken,
    verificarAdminRol,
    verificarTokenRemote
};