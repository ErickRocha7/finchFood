const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');
const usuarioRouter = require('../routes/usuario-router');

//criando e chamando a API/Server Web do Express
const app = express();

//configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//configurando a conexao com banco de dados
//mongoose.connect(variables.Database.connection, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.connect(variables.Database.connection, { useNewUrlParser : true});

//configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);
app.use('/api/usuario', usuarioRouter);

//exportando nossa API
module.exports = app;