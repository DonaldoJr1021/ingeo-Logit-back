// call the handlers to get the results
const handerls = require('../handlers/envioMaritimo.handler');

// list all Envios Maritimos
const EnvioMaritimoHandler = handerls().get;

// create Envios Maritimos
const createEnvioMaritimoHandler = handerls().post;

// update Envios Maritimos
const updateEnvioMaritimoHandler = handerls().put;

// delete Envios Maritimo
const deleteEnvioMaritimoHandler = handerls().delete;

module.exports = {
    EnvioMaritimoHandler,
    createEnvioMaritimoHandler,
    updateEnvioMaritimoHandler,
    deleteEnvioMaritimoHandler
}