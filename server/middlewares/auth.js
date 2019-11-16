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
let verificarTokenRemote = async(token) => {
    let fetch = require('node-fetch');
    const Bluebird = require('bluebird');
    fetch.Promise = Bluebird;
    var result;
    const uri = 'http://localhost:3000/profile';
    await fetch(uri, {
            method: 'delete',
            body: token
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