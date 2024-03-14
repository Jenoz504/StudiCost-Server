const mongoose = require('mongoose')

const PeriodosSchema = mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    nombre: {
        type: String,
        required: true
    },
    fechainicio: {
        type: String,
        required: true
    },
    fechacierre: {
        type: String,
        required: true
    },
    estudiante: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Periodos', PeriodosSchema);