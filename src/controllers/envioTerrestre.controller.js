// call the handlers to get the results
const handerls = require('../handlers/envioTerrestre.handler');

// list all Envios Terrestres
const EnvioTerrestreHandler = handerls().get;

// create Envios Terrestres
const createEnvioTerrestreHandler = handerls().post;

// update Envios Terrestres
const updateEnvioTerrestreHandler = handerls().put;

// delete Envios Terrestre
const deleteEnvioTerrestreHandler = handerls().delete;

module.exports = {
    EnvioTerrestreHandler,
    createEnvioTerrestreHandler,
    updateEnvioTerrestreHandler,
    deleteEnvioTerrestreHandler
}