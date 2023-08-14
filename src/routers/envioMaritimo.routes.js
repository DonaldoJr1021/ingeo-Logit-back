const express = require('express');
const envioMaritimoRoutes = express.Router();
const controllerEnvioMaritimo = require('../controllers/envioMaritimo.controller');

envioMaritimoRoutes.get('/envioMaritimo', controllerEnvioMaritimo.EnvioMaritimoHandler);
envioMaritimoRoutes.post('/createEnvioMaritimo', controllerEnvioMaritimo.createEnvioMaritimoHandler);
envioMaritimoRoutes.put('/updateEnvioMaritimo/:id', controllerEnvioMaritimo.updateEnvioMaritimoHandler);
envioMaritimoRoutes.delete('/deleteEnvioMaritimo/:id', controllerEnvioMaritimo.deleteEnvioMaritimoHandler);


module.exports = envioMaritimoRoutes;