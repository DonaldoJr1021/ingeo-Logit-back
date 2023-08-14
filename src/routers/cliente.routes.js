const express = require('express');
const clienteRoutes = express.Router();
const controllerCliente = require('../controllers/cliente.controller');

clienteRoutes.get('/cliente', controllerCliente.ClienteHandler);
clienteRoutes.post('/createCliente', controllerCliente.createClienteHandler);
clienteRoutes.put('/updateCliente/:id', controllerCliente.updateClienteHandler);
clienteRoutes.delete('/deleteCliente/:id', controllerCliente.deleteClienteHandler);


module.exports = clienteRoutes;