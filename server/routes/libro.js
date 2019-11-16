const express = require('express');
const app = express();
let Libro = require('../models/libro');
let cors = require('cors');
app.use(cors());

app.post('/libro', (req, res) => {
    let body = req.body;
    let libro = new Libro({
        codigo: body.codigo,
        titulo: body.titulo,
        subtitulo: body.subtitulo,
        anio: body.anio,
        num_pag: body.num_pag,
        autor_id: body.autor_id,
    });
    libro.save((err, libroDB) => {
        if (err) {
            return res.status(400).json({
                status: false,
                err
            });
        }
        res.send(libroDB);
    });
});

app.get('/libro', (req, res) => {
    res.setHeader('Access-Control-Expose-Headers', ' Content-Range');
    res.set('Content-Range', 'items 0-9/13');
    Libro.find().populate('autor_id').exec((err, libroDB) => {
        if (err) {
            return res.status(400).json({
                status: false,
                err
            });
        }
        res.json(libroDB);
    });
});

app.get('/libro/:id', (req, res) => {
    let id = req.params.id;
    res.setHeader('Access-Control-Expose-Headers', ' Content-Range');
    res.set('Content-Range', 'items 0-9/13');
    Libro.findById({ _id: id }).populate('autor_id').exec((err, libroDB) => {
        if (err) {
            return res.status(400).json({
                status: false,
                err
            });
        }
        res.json(libroDB);
    });
});

app.put('/libro/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    Libro.findByIdAndUpdate({ _id: id }, body, {
        new: true,
        runValidators: false,
        useFindAndModify: false
    }).populate('autor_id').exec((err, libroDB) => {
        if (err) {
            return res.status(400).json({
                status: false,
                err
            });
        }
        res.json(libroDB);
    });
});


module.exports = app;