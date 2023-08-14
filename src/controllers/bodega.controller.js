// call the handlers to get the results
const handerls = require('../handlers/bodega.handler');

// list all Bodegas
const BodegaHandler = handerls().get;

// create Bodegas
const createBodegaHandler = handerls().post;

// update Bodegas
const updateBodegaHandler = handerls().put;

// delete Bodega
const deleteBodegaHandler = handerls().delete;

module.exports = {
    BodegaHandler,
    createBodegaHandler,
    updateBodegaHandler,
    deleteBodegaHandler
}