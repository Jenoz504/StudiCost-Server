const mongoose = require('mongoose')

const PeriodosSchema = mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    fechainicio: {
        type: String,
        required: true
    },
    fechacierre: {
        type: String,
        required: true
    },
    institucion: {
        type: String,
        required: true
    },
    propietario: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Periodos', PeriodosSchema);