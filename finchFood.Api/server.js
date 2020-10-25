'use strict'
const app = require('../finchFood.Api/bin/express');
const variables = require('../finchFood.Api/bin/configuration/variables');

app.listen(variables.Api.port, () => {
    console.info(`API inicializada com sucesso na porta ${variables.Api.port}.`);
});