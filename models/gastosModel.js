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
    propietario: {
        type: String,
        required: false
    }
})
module.exports = mongoose.model('Categorias', CategoriasSchema);