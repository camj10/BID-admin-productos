const mongoose = require('mongoose');
const ProductoSchema = new mongoose.Schema({
    titulo: { 
        type: String,
        minlength:[10, 'El minimo es de 10'] 
    },
    price: { type: String },
    descripcion: { 
        type: String,
        minlength:[10, 'El minimo es de 10'] 
    },
}, { timestamps: true });
module.exports.Producto = mongoose.model('Producto', ProductoSchema);

