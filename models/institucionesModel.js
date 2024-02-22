const mongoose = require('mongoose')

const InstitucionesSchema = mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    estudiante: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Instituciones', InstitucionesSchema);