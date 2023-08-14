const express = require('express');
const productoRoutes = express.Router();
const controllerProducto = require('../controllers/puerto.controller');

productoRoutes.get('/producto', controllerProducto.ProductoHandler);
productoRoutes.post('/createProducto', controllerProducto.createProductoHandler);
productoRoutes.put('/updateProducto/:id', controllerProducto.updatePuertoHandler);
productoRoutes.delete('/deleteProducto/:id', controllerProducto.deletePuertoHandler);


module.exports = productoRoutes;