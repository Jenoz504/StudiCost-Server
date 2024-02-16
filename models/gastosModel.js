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
    costoClase: {
        type: Number,
        required: false
    },
    nota: {
        type: Number,
        required: false
    }
})
module.exports = mongoose.model('Categorias', CategoriasSchema);