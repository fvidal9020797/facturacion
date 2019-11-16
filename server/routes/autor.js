const express = require('express');
const app = express();
let Autor = require('../models/autor');
let cors = require('cors');
app.use(cors());

app.post('/autor', (req, res) => {
    let body = req.body;
    let autor = new Autor({
        nombre: body.nombre,
        apellido: body.apellido
    });
    autor.save((err, autorDB) => {
        if (err) {
            return res.status(400).json({
                status: false,
                err
            });
        }
        res.send(autorDB);
    });
});

app.get('/autor', (req, res) => {
    let body = req.query;
    res.setHeader('Access-Control-Expose-Headers', ' Content-Range');
    res.set('Content-Range', 'items 0-9/13');
    Autor.find((err, autorDB) => {
        if (err) {
            return res.status(400).json({
                status: false,
                err
            });
        }
        res.json(autorDB);
    });
});

app.get('/autor/:id', (req, res) => {
    let id = req.params.id;
    res.setHeader('Access-Control-Expose-Headers', ' Content-Range');
    res.set('Content-Range', 'items 0-9/13');
    Autor.findById({ _id: id }, (err, autorDB) => {
        if (err) {
            return res.status(400).json({
                status: false,
                err
            });
        }
        res.json(autorDB);
    });
});

app.put('/autor/:id', (req, res) => {
    let id = req.params.id;
    Autor.findByIdAndUpdate({ _id: id }, {
        new: true,
        runValidators: false,
        useFindAndModify: false
    }, (err, autorDB) => {
        if (err) {
            return res.status(400).json({
                status: false,
                err
            });
        }
        res.json(autorDB);
    });
});

module.exports = app;