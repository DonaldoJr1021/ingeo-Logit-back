const producto_model = require('../models/producto.model');
let response = {
    error: null,
    data: null,
    code: null,
    message: null,
    type: null
};

/**
 * 
 * @returns Producto list
 * developer: Donaldo Parra
 */
// List all Productos
const listProducto = async () => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        // Search for all Productos
        const result = await producto_model.find({});

        if(result && result.length > 0){
            response.error = false;
            response.data = result;
            response.code = 200;
            response.message = "Productos Obtenidos con exito";
            response.type = "OK";
        }else if(result.length == 0){
            response.error = false;
            response.data = [];
            response.code = 200;
            response.message = "No Hay Productos";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = [];
            response.code = 301;
            response.message = "Error al listar los Productos";
            response.type = "Error";
        }

    } catch (error) {
        response.error = true;
        response.data = [];
        response.code = 500;
        response.message = error.message;
        response.type = "Error";
    }

    return response;
};

/**
 * 
 * @param {Producto} 
 * @returns response
 * development: Donaldo Parra
 */
// create new Producto
const createProducto = async (Producto) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        // Create a instance of the Producto model
        const ProductoToSave = new producto_model(Producto);

        // Save the Producto
        const result = await ProductoToSave.save();
        if(result){
            response.error = false;
            response.data = result;
            response.code = 200;
            response.message = "Producto Creado con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al crear un nuevo Producto";
            response.type = "Error";
        }

    } catch (error) {
        response.error = true;
        response.data = "";
        response.code = 500;
        response.message = error.message;
        response.type = "Error";
    }

    return response;
};

/**
 * 
 * @param {idProducto, Producto} 
 * @returns response
 * Developer: Donaldo Parra
 */
// Update Producto data
const updateProducto = async (idProducto, Producto) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        const ProductoToUpdate = await producto_model.findByIdAndUpdate(idProducto, Producto);
        
        if(ProductoToUpdate){
            response.error = false;
            response.data = ProductoToUpdate;
            response.code = 200;
            response.message = "Datos del Producto actualizados con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al actualizar los datos del Producto";
            response.type = "Error";
        }
    } catch (error) {
        response.error = true;
        response.data = "";
        response.code = 500;
        response.message = error.message;
        response.type = "Error";
    }

    return response;
};

/**
 * 
 * @param {idProducto} 
 * @returns response
 * Developer: Donaldo Parra
 */
// Delete Producto data
const deleteProducto = async (idProducto) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        const ProductoDeleted = await producto_model.findByIdAndDelete(idProducto);
        
        if(ProductoDeleted){
            response.error = false;
            response.data = ProductoDeleted;
            response.code = 200;
            response.message = "Producto eliminado con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al eliminar el Producto";
            response.type = "Error";
        }
    } catch (error) {
        response.error = true;
        response.data = "";
        response.code = 500;
        response.message = error.message;
        response.type = "Error";
    }

    return response;
};

module.exports = {
    listProducto,
    createProducto,
    updateProducto,
    deleteProducto
}