// call the handlers to get the results
const handerls = require('../handlers/puerto.handler');

// list all Puertos
const PuertoHandler = handerls().get;

// create Puertos
const createPuertoHandler = handerls().post;

// update Puertos
const updatePuertoHandler = handerls().put;

// delete Puerto
const deletePuertoHandler = handerls().delete;

module.exports = {
    PuertoHandler,
    createPuertoHandler,
    updatePuertoHandler,
    deletePuertoHandler
}