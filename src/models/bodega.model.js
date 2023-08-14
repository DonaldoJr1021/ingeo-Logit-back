const mongodb = require('mongoose');
const schema = mongodb.Schema;

const BodegaSchema = new schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    capacidad: { type: Number, required: true }
});

const Bodega = mongodb.model('Bodega', BodegaSchema);
module.exports = Bodega;