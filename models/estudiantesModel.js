const mongoose = require('mongoose')

const estudiantesSchema = mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: false
    },
    edad: {
        type: Number,
        required: false
    },
    presupuesto: {
        type: Number,
        required: false
    }
})
module.exports = mongoose.model('Estudiantes', estudiantesSchema);