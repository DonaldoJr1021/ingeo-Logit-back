const mongodb = require('mongoose');
const schema = mongodb.Schema;

const ClienteSchema = new schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    direccion: { type: String, required: true }
});

const cliente = mongodb.model('Cliente', ClienteSchema);
module.exports = cliente;