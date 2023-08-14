// call the handlers to get the results
const handerls = require('../handlers/producto.handler');

// list all Productos
const ProductoHandler = handerls().get;

// create Productos
const createProductoHandler = handerls().post;

// update Productos
const updateProductoHandler = handerls().put;

// delete Producto
const deleteProductoHandler = handerls().delete;

module.exports = {
    ProductoHandler,
    createProductoHandler,
    updateProductoHandler,
    deleteProductoHandler
}