const mongodb = require('mongoose');
const schema = mongodb.Schema;

const EnvioTerrestreSchema = new schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
    cantidad: { type: Number, required: true },
    fecha_registro: { type: Date, default: Date.now, required: true },
    fecha_entrega: { type: Date, required: true },
    bodega_entrega: { type: mongoose.Schema.Types.ObjectId, ref: 'Bodega', required: true },
    precio_envio: { type: Number, required: true },
    placa_vehiculo: { type: String, required: true },
    numero_guia: { type: String, required: true },
    descuento: { type: Number }
});

const envioTerrestre = mongodb.model('EnvioTerrestre', EnvioTerrestreSchema);
module.exports = envioTerrestre;