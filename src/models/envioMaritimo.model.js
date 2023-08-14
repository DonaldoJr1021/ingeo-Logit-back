const mongodb = require('mongoose');
const schema = mongodb.Schema;

const EnvioMaritimoSchema = new schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
    cantidad: { type: Number, required: true },
    fecha_registro: { type: Date, default: Date.now, required: true },
    fecha_entrega: { type: Date, required: true },
    puerto_entrega: { type: mongoose.Schema.Types.ObjectId, ref: 'Puerto', required: true },
    precio_envio: { type: Number, required: true },
    numero_flota: { type: String, required: true },
    numero_guia: { type: String, required: true },
    descuento: { type: Number }
});

const envioMaritimo = mongodb.model('EnvioMaritimo', EnvioMaritimoSchema);
module.exports = envioMaritimo;