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
    ubicacion: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Instituciones', InstitucionesSchema);