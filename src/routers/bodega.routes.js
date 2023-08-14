const express = require('express');
const bodegaRoutes = express.Router();
const controllerBodega = require('../controllers/bodega.controller');

bodegaRoutes.get('/bodega', controllerBodega.BodegaHandler);
bodegaRoutes.post('/createBodega', controllerBodega.createBodegaHandler);
bodegaRoutes.put('/updateBodega/:id', controllerBodega.updateBodegaHandler);
bodegaRoutes.delete('/deleteBodega/:id', controllerBodega.deleteBodegaHandler);


module.exports = bodegaRoutes;