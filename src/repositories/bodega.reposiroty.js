const bodega_model = require('../models/bodega.model');
let response = {
    error: null,
    data: null,
    code: null,
    message: null,
    type: null
};

/**
 * 
 * @returns Bodega list
 * developer: Donaldo Parra
 */
// List all Bodega
const listBodega = async () => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        // Search for all bodega
        const result = await bodega_model.find({});

        if(result && result.length > 0){
            response.error = false;
            response.data = result;
            response.code = 200;
            response.message = "Bodegas Obtenidas con exito";
            response.type = "OK";
        }else if(result.length == 0){
            response.error = false;
            response.data = [];
            response.code = 200;
            response.message = "No Hay Bodegas";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = [];
            response.code = 301;
            response.message = "Error al listar las Bodegas";
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
 * @param {Bodega} 
 * @returns response
 * development: Donaldo Parra
 */
// create new Bodega
const createBodega = async (Bodega) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        // Create a instance of the Bodega model
        const bodegaToSave = new bodega_model(Bodega);

        // Save the bodega
        const result = await bodegaToSave.save();
        if(result){
            response.error = false;
            response.data = result;
            response.code = 200;
            response.message = "Bodega Creada con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al crear una nueva bodega";
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
 * @param {idBodega, Bodega} 
 * @returns response
 * Developer: Donaldo Parra
 */
// Update Bodega data
const updateBodega = async (idBodega, Bodega) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        const bodegaToUpdate = await bodega_model.findByIdAndUpdate(idBodega, Bodega);
        
        if(bodegaToUpdate){
            response.error = false;
            response.data = bodegaToUpdate;
            response.code = 200;
            response.message = "Datos de la bodega actualizados con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al actualizar los datos de la bodega";
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
 * @param {idBodega} 
 * @returns response
 * Developer: Donaldo Parra
 */
// Delete Bodega data
const deleteBodega = async (idBodega) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        const BodegaDeleted = await bodega_model.findByIdAndDelete(idBodega);
        
        if(BodegaDeleted){
            response.error = false;
            response.data = BodegaDeleted;
            response.code = 200;
            response.message = "Bodega eliminada con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al eliminar la bodega";
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
    listBodega,
    createBodega,
    updateBodega,
    deleteBodega
}