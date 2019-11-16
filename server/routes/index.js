const express = require('express');
const app = express();

app.use(require('./profile'));
app.use(require('./autor'));

app.use(require('./libro'));
module.exports = app;