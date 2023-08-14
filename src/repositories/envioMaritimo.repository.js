const envioMaritimo_model = require('../models/envioMaritimo.model');
let response = {
    error: null,
    data: null,
    code: null,
    message: null,
    type: null
};

/**
 * 
 * @returns EnvioMaritimo list
 * developer: Donaldo Parra
 */
// List all EnvioMaritimos
const listEnvioMaritimo = async () => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        // Search for all EnvioMaritimos
        const result = await envioMaritimo_model.find({});

        if(result && result.length > 0){
            response.error = false;
            response.data = result;
            response.code = 200;
            response.message = "Envios Maritimos Obtenidos con exito";
            response.type = "OK";
        }else if(result.length == 0){
            response.error = false;
            response.data = [];
            response.code = 200;
            response.message = "No Hay Envio Maritimos";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = [];
            response.code = 301;
            response.message = "Error al listar los Envios Maritimos";
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
 * @param {EnvioMaritimo} 
 * @returns response
 * development: Donaldo Parra
 */
// create new EnvioMaritimo
const createEnvioMaritimo = async (EnvioMaritimo) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        // Create a instance of the EnvioMaritimo model
        const EnvioMaritimoToSave = new envioMaritimo_model(EnvioMaritimo);

        // Save the EnvioMaritimo
        const result = await EnvioMaritimoToSave.save();
        if(result){
            response.error = false;
            response.data = result;
            response.code = 200;
            response.message = "Envio Maritimo Creado con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al crear un nuevo Envio Maritimo";
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
 * @param {idEnvioMaritimo, EnvioMaritimo} 
 * @returns response
 * Developer: Donaldo Parra
 */
// Update EnvioMaritimo data
const updateEnvioMaritimo = async (idEnvioMaritimo, EnvioMaritimo) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        const EnvioMaritimoToUpdate = await envioMaritimo_model.findByIdAndUpdate(idEnvioMaritimo, EnvioMaritimo);
        
        if(EnvioMaritimoToUpdate){
            response.error = false;
            response.data = EnvioMaritimoToUpdate;
            response.code = 200;
            response.message = "Datos del Envio Maritimo actualizados con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al actualizar los datos del Envio Maritimo";
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
 * @param {idEnvioMaritimo} 
 * @returns response
 * Developer: Donaldo Parra
 */
// Delete EnvioMaritimo data
const deleteEnvioMaritimo = async (idEnvioMaritimo) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        const EnvioMaritimoDeleted = await envioMaritimo_model.findByIdAndDelete(idEnvioMaritimo);
        
        if(EnvioMaritimoDeleted){
            response.error = false;
            response.data = EnvioMaritimoDeleted;
            response.code = 200;
            response.message = "Envio Maritimo eliminado con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al eliminar el Envio Maritimo";
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
    listEnvioMaritimo,
    createEnvioMaritimo,
    updateEnvioMaritimo,
    deleteEnvioMaritimo
}