const express = require('express');
const bodyParser = require('body-parser');

//routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');

//criando e chamando a API/Server Web do Express
const app = express();

//configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);

//exportando nossa API
module.exports = app;