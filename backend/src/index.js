const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

/**
 * Indicando que vai ser usado o JSON para requisições
 */
app.use(express.json());

app.use(routes);

app.listen(3333);