const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    nombre: { type: String },
    apellido: { type: String },
    edad: {type: Number}
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);

