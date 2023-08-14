const puerto_model = require('../models/puerto.model');
let response = {
    error: null,
    data: null,
    code: null,
    message: null,
    type: null
};

/**
 * 
 * @returns Puerto list
 * developer: Donaldo Parra
 */
// List all Puertos
const listPuerto = async () => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        // Search for all puertos
        const result = await puerto_model.find({});

        if(result && result.length > 0){
            response.error = false;
            response.data = result;
            response.code = 200;
            response.message = "Puertos Obtenidos con exito";
            response.type = "OK";
        }else if(result.length == 0){
            response.error = false;
            response.data = [];
            response.code = 200;
            response.message = "No Hay Puertos";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = [];
            response.code = 301;
            response.message = "Error al listar los puertos";
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
 * @param {Puerto} 
 * @returns response
 * development: Donaldo Parra
 */
// create new Puerto
const createPuerto = async (Puerto) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        // Create a instance of the Puerto model
        const puertoToSave = new puerto_model(Puerto);

        // Save the puerto
        const result = await puertoToSave.save();
        if(result){
            response.error = false;
            response.data = result;
            response.code = 200;
            response.message = "Puerto Creado con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al crear un nuevo puerto";
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
 * @param {idPuerto, Puerto} 
 * @returns response
 * Developer: Donaldo Parra
 */
// Update Puerto data
const updatePuerto = async (idPuerto, Puerto) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        const puertoToUpdate = await puerto_model.findByIdAndUpdate(idPuerto, Puerto);
        
        if(puertoToUpdate){
            response.error = false;
            response.data = puertoToUpdate;
            response.code = 200;
            response.message = "Datos del puerto actualizados con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al actualizar los datos del puerto";
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
 * @param {idPuerto} 
 * @returns response
 * Developer: Donaldo Parra
 */
// Delete Puerto data
const deletePuerto = async (idPuerto) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        const PuertoDeleted = await puerto_model.findByIdAndDelete(idPuerto);
        
        if(PuertoDeleted){
            response.error = false;
            response.data = PuertoDeleted;
            response.code = 200;
            response.message = "Puerto eliminado con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al eliminar el puerto";
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
    listPuerto,
    createPuerto,
    updatePuerto,
    deletePuerto
}