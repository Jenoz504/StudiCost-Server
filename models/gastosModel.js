const mongoose = require('mongoose')

const gastosSchema = mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: false
    },
    clase: {
        type: String,
        required: false
    },
    estudiante: {
        type: String,
        required: false
    }
})
module.exports = mongoose.model('Gastos', gastosSchema);