require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser'); // procesador de codigo
const Req = require('../server/models/request');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())
app.use(require('./routes/index'));
app.get('/', (req, res) => {
    res.json({
        status: true,
    })
});

// mongoose.connect('mongodb://localhost:27017/profile', { useNewUrlParser: true, useCreateIndex: true });

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto', process.env.PORT);
});