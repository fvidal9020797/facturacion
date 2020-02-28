const express = require('express');
const app = express();

// app.use(require('./profile'));
// app.use(require('./autor'));

// app.use(require('./libro'));

app.use(require('./test'));
app.use(require('./invoice'));
module.exports = app;