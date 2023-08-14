const envioTerrestre_model = require('../models/envioTerrestre.model');
let response = {
    error: null,
    data: null,
    code: null,
    message: null,
    type: null
};

/**
 * 
 * @returns EnvioTerrestre list
 * developer: Donaldo Parra
 */
// List all EnvioTerrestres
const listEnvioTerrestre = async () => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        // Search for all EnvioTerrestres
        const result = await envioTerrestre_model.find({});

        if(result && result.length > 0){
            response.error = false;
            response.data = result;
            response.code = 200;
            response.message = "Envios Terrestres Obtenidos con exito";
            response.type = "OK";
        }else if(result.length == 0){
            response.error = false;
            response.data = [];
            response.code = 200;
            response.message = "No Hay Envio Terrestres";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = [];
            response.code = 301;
            response.message = "Error al listar los Envios Terrestres";
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
 * @param {EnvioTerrestre} 
 * @returns response
 * development: Donaldo Parra
 */
// create new EnvioTerrestre
const createEnvioTerrestre = async (EnvioTerrestre) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        // Create a instance of the EnvioTerrestre model
        const EnvioTerrestreToSave = new envioTerrestre_model(EnvioTerrestre);

        // Save the EnvioTerrestre
        const result = await EnvioTerrestreToSave.save();
        if(result){
            response.error = false;
            response.data = result;
            response.code = 200;
            response.message = "Envio Terrestre Creado con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al crear un nuevo Envio Terrestre";
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
 * @param {idEnvioTerrestre, EnvioTerrestre} 
 * @returns response
 * Developer: Donaldo Parra
 */
// Update EnvioTerrestre data
const updateEnvioTerrestre = async (idEnvioTerrestre, EnvioTerrestre) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        const EnvioTerrestreToUpdate = await envioTerrestre_model.findByIdAndUpdate(idEnvioTerrestre, EnvioTerrestre);
        
        if(EnvioTerrestreToUpdate){
            response.error = false;
            response.data = EnvioTerrestreToUpdate;
            response.code = 200;
            response.message = "Datos del Envio Terrestre actualizados con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al actualizar los datos del Envio Terrestre";
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
 * @param {idEnvioTerrestre} 
 * @returns response
 * Developer: Donaldo Parra
 */
// Delete EnvioTerrestre data
const deleteEnvioTerrestre = async (idEnvioTerrestre) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        const EnvioTerrestreDeleted = await envioTerrestre_model.findByIdAndDelete(idEnvioTerrestre);
        
        if(EnvioTerrestreDeleted){
            response.error = false;
            response.data = EnvioTerrestreDeleted;
            response.code = 200;
            response.message = "Envio Terrestre eliminado con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al eliminar el Envio Terrestre";
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
    listEnvioTerrestre,
    createEnvioTerrestre,
    updateEnvioTerrestre,
    deleteEnvioTerrestre
}