const express = require('express');
const puertoRoutes = express.Router();
const controllerPuerto = require('../controllers/puerto.controller');

puertoRoutes.get('/puerto', controllerPuerto.PuertoHandler);
puertoRoutes.post('/createPuerto', controllerPuerto.createPuertoHandler);
puertoRoutes.put('/updatePuerto/:id', controllerPuerto.updatePuertoHandler);
puertoRoutes.delete('/deletePuerto/:id', controllerPuerto.deletePuertoHandler);


module.exports = puertoRoutes;