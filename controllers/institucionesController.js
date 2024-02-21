const institucionesModel = require('../models/institucionesModel');


exports.crearInstitucion = async (req, res) => {
    try {
        let institucion = new institucionesModel(req.body);
        await institucion.save();
        res.send(institucion);    
        console.log(institucion);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.obtenerInstitucionesDelUsuario = async (req, res) => {
    try {
        const instituciones = await institucionesModel.find({propietario: req.body.id})
        res.json(instituciones);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);    
    }
}

exports.obtenerInstitucion = async (req, res) => {
    try {
        const institucion = await institucionesModel.findById(req.params.id)

        if (!institucion) {
          res.status(404).json({msg: 'la institucion no existe'});  
        }
        res.json(institucion);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);        
    }
}

exports.actualizarInstitucion = async (req, res) => {
    try {
        const {id, nombre, direccion, propietario} = req.body;
        let institucion = await institucionesModel.findById(req.params.id);

        if (!institucion) {
            res.status(404).json({msg: "La intitucion no existe"});
        }
        
        institucion.id = id;
        institucion.nombre = nombre;
        institucion.direccion = direccion;        
        institucion.propietario = propietario;

    } catch (error) {
        console.log(error);
        res.status(500).send(error);    
    }
}


exports.eliminarInstitucion = async (req, res) => {
    try {
        const institucion = await institucionesModel.findByIdAndDelete(req.params.id);
        
        if (!institucion) {
            res.status(404).json({msg: "la institucion no existe"});
        }

        res.json({msg: "La institucion ha sido eliminada"})        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
};
