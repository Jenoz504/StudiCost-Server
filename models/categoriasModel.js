const mongoose = require('mongoose')

const CategoriasSchema = mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    },
    estudiante: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Categorias', CategoriasSchema);