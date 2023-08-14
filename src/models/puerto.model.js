const mongodb = require('mongoose');
const schema = mongodb.Schema;

const PuertoSchema = new schema({
    nombre: { type: String, required: true },
    ubicacion: { type: String, required: true },
    capacidad: { type: Number, required: true }
  });

const puerto = mongodb.model('Puerto', PuertoSchema);
module.exports = puerto;