const periodosModel = require('../models/periodosModel');


exports.crearPeriodo = async (req, res) => {
    try {
        let periodo = new periodosModel(req.body);
        await periodo.save();
        res.send(periodo);    
        console.log(periodo);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.obtenerPeriodosDelEstudiante = async (req, res) => {
    try {
        const periodo = await periodosModel.find({estudiante: req.body.id})
        res.json(periodo);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);    
    }
}

exports.obtenerPeriodo = async (req, res) => {
    try {
        const periodo = await periodosModel.findById(req.params.id)

        if (!periodo) {
          res.status(404).json({msg: 'el periodo no existe'});  
        }
        res.json(periodo);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);        
    }
}

exports.actualizarPeriodo = async (req, res) => {
    try {
        const {id, fechainico, fechacierre, institucion, estudiante} = req.body;
        let periodo = await periodosModel.findById(req.params.id);

        if (!periodo) {
            res.status(404).json({msg: "La periodo no existe"});
        }
        
        periodo.id = id;
        periodo.fechainico = fechainico;
        periodo.fechacierre = fechacierre;
        periodo.institucion = institucion;        
        periodo.estudiante = estudiante;

    } catch (error) {
        console.log(error);
        res.status(500).send(error);    
    }
}


exports.eliminarPeriodo = async (req, res) => {
    try {
        const periodo = await periodosModel.findByIdAndDelete(req.params.id);
        
        if (!periodo) {
            res.status(404).json({msg: "el periodo no existe"});
        }

        res.json({msg: "La farmacia ha sido eliminada"})        

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
};
