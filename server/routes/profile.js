const express = require('express');
const app = express();
let Profile = require('../models/profile');
const { verificarTokenRemote } = require('../middlewares/auth');
let cors = require('cors');
app.use(cors());
app.post('/perfil', async(req, res) => {
    res.setHeader('content-type', 'application/json');
    let body = req.body;
    let reqqq = await verificarTokenRemote('123');
    console.log(reqqq);
    let profile = new Profile({
        email: body.email,
        nombre: body.nombre,
        apellido: body.apellido,
        token: '1234'
    });
    profile.save((err, profileDB) => {
        if (err) {
            return res.status(400).json({
                status: false,
                err
            });
        }
        res.send(profileDB);
    });
});


app.put('/perfil/:id', async(req, res) => {
    res.setHeader('content-type', 'application/json');
    let email = req.params.email;
    let body = req.body;

    Profile.findByIdAndUpdate(id, {
        nombre: body.nombre,
        apellido: body.apellido
    }, (err, profileDB) => {
        if (err) {
            return res.status(400).json({
                status: false,
                err
            });
        }
        res.send(profileDB);
    });
});

app.get('/perfil/:email', (req, res) => {
    let email = req.params.email;
    res.setHeader('Access-Control-Expose-Headers', ' Content-Range');
    Profile.findOne({ email: email }, (err, profileDB) => {
        if (err) {
            return res.status(400).json({
                status: false,
                err
            });
        }

        res.json(profileDB);
    });
});

app.delete('/perfil', (req, res) => {
    return res.json({
        status: 'ok'
    });
    // let _token = req.params._token;
    // Profile.findOne({ token: _token }, (err, profileDB) => {
    //     if (err) {
    //         return res.status(400).json({
    //             status: false,
    //             err
    //         });
    //     }
    //     res.json(profileDB);
    // });
});
app.post('/login', async(req, res) => {
    let body = req.body;
    let obj = JSON.stringify(body);

    // console.log(JSON.parse(obj)['sign_in[email]']);
    let reqqq = await verificarTokenRemote(JSON.parse(obj)['sign_in[email]'], JSON.parse(obj)['sign_in[password]']);
    res.send(reqqq);
});
module.exports = app;