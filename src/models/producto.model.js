const mongodb = require('mongoose');
const schema = mongodb.Schema;

const ProductoSchema = new schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    peso: { type: Number, required: true }
  });

const producto = mongodb.model('Producto', ProductoSchema);
module.exports = producto;