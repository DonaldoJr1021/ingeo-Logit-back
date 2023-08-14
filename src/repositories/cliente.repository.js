const cliente_model = require('../models/cliente.model');
let response = {
    error: null,
    data: null,
    code: null,
    message: null,
    type: null
};

/**
 * 
 * @returns Client list
 * developer: Donaldo Parra
 */
// List all Cliente
const listCliente = async () => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        // Search for all Client
        const result = await cliente_model.find({});

        if(result && result.length > 0){
            response.error = false;
            response.data = result;
            response.code = 200;
            response.message = "Clientes obtenidos con éxito";
            response.type = "OK";
        }else if(result.length == 0){
            response.error = false;
            response.data = [];
            response.code = 200;
            response.message = "No Hay Clientes";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = [];
            response.code = 301;
            response.message = "Error al listar los clientes";
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
 * @param {Cliente} 
 * @returns response
 * development: Donaldo Parra
 */
// create new Cliente
const createCliente = async (cliente) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        // Create a instance of the Client model
        const clienteToSave = new cliente_model(cliente);

        // Save the Client
        const result = await clienteToSave.save();
        if(result){
            response.error = false;
            response.data = result;
            response.code = 200;
            response.message = "Cliente Registrado con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al crear un nuevo cliente";
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
 * @param {idCliente, Cliente} 
 * @returns response
 * Developer: Donaldo Parra
 */
// Update Cliente data
const updateCliente = async (idCliente, Cliente) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        const ClienteToUpdate = await cliente_model.findByIdAndUpdate(idCliente, Cliente);
        
        if(ClienteToUpdate){
            response.error = false;
            response.data = ClienteToUpdate;
            response.code = 200;
            response.message = "Datos del cliente actualizados con éxito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al actualizar los datos del cliente";
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
 * @param {idCliente} 
 * @returns response
 * Developer: Donaldo Parra
 */
// Delete Cliente data
const deleteCliente = async (idCliente) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        const ClienteDeleted = await cliente_model.findByIdAndDelete(idCliente);
        
        if(ClienteDeleted){
            response.error = false;
            response.data = ClienteDeleted;
            response.code = 200;
            response.message = "Cliente eliminado con exito";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error al eliminar el cliente";
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
    listCliente,
    createCliente,
    updateCliente,
    deleteCliente
}