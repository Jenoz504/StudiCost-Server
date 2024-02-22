const mongoose = require('mongoose')

const clasesSchema = mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    nombre: {
        type: String,
        required: true
    },
    periodo: {
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
    },
    estudiante: {
        type: String,
        required: false
    }
})
module.exports = mongoose.model('Categorias', CategoriasSchema);