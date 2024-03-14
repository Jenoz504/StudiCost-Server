const gastosModel = require('../models/gastosModel');


exports.crearGasto = async (req, res) => {
    try {
        let gasto = new gastosModel(req.body);
        await gasto.save();
        res.send(gasto);    
        console.log(gasto);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.obtenerGastosDelEstudiante = async (req, res) => {
    try {
        const gasto = await gastosModel.find({estudiante: req.params.estudiante})
        res.json(gasto);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);    
    }
}

exports.obtenerGasto = async (req, res) => {
    try {
        const gasto = await gastosModel.findById(req.params.id)

        if (!gasto) {
          res.status(404).json({msg: 'el gasto no existe'});  
        }
        res.json(gasto);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);        
    }
}

exports.actualizargasto = async (req, res) => {
    try {
        const {id, descripcion, categoria, clase, estudiante} = req.body;
        let gasto = await gastosModel.findById(req.params.id);

        if (!gasto) {
            res.status(404).json({msg: "La gasto no existe"});
        }
        
        gasto.id = id;
        gasto.descripcion = descripcion;
        gasto.categoria = categoria;
        gasto.clase = clase;        
        gasto.estudiante = estudiante;
        gasto.save();
        res.json(gasto);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);    
    }
}


exports.eliminarGasto = async (req, res) => {
    try {
        const gasto = await gastosModel.findByIdAndDelete(req.params.id);
        
        if (!gasto) {
            res.status(404).json({msg: "el gasto no existe"});
        }

        res.json({msg: "La farmacia ha sido eliminada"})        

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
};
