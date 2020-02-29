require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser'); // procesador de codigo
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

mongoose.connect(process.env.URL_DB, { useNewUrlParser: true, useCreateIndex: true }); //fvidal  Iogear3com.

// mongodb+srv://fvidal:Iogear3com.@cluster0-wlkmk.mongodb.net/test?retryWrites=true&w=majority


app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto', process.env.PORT);
});

module.exports = {
    app
}