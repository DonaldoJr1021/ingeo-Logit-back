// call the handlers to get the results
const handerls = require('../handlers/cliente.handler');

// list all clientes
const ClienteHandler = handerls().get;

// create clientes
const createClienteHandler = handerls().post;

// update clientes
const updateClienteHandler = handerls().put;

// delete cliente
const deleteClienteHandler = handerls().delete;

module.exports = {
    ClienteHandler,
    createClienteHandler,
    updateClienteHandler,
    deleteClienteHandler
}