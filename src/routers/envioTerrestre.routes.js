const express = require('express');
const envioTerrestreRoutes = express.Router();
const controllerEnvioTerrestre = require('../controllers/envioTerrestre.controller');

envioTerrestreRoutes.get('/envioTerrestre', controllerEnvioTerrestre.EnvioTerrestreHandler);
envioTerrestreRoutes.post('/createEnvioTerrestre', controllerEnvioTerrestre.createEnvioTerrestreHandler);
envioTerrestreRoutes.put('/updateEnvioTerrestre/:id', controllerEnvioTerrestre.updateEnvioTerrestreHandler);
envioTerrestreRoutes.delete('/deleteEnvioTerrestre/:id', controllerEnvioTerrestre.deleteEnvioTerrestreHandler);


module.exports = envioTerrestreRoutes;