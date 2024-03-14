const Clases = require('../models/clasesModel');

exports.crearClase = async (req, res) => {
    try {
        let clase = new Clases(req.body);
        await clase.save();
        res.send(clase);    
        console.log(clase);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.obtenerClasesDelEstudiante = async (req, res) => {
    try {
        const clases = await Clases.find({ estudiante: req.params.estudiante });
        res.json(clases);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);    
    }
}

exports.obtenerClase = async (req, res) => {
    try {
        const clase = await Clases.findById(req.params.id)

        if (!clase) {
          res.status(404).json({msg: 'la clase no existe'});  
        }
        res.json(clase);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);        
    }
}

exports.actualizarClases = async (req, res) => {
    try {
        const {nombre, periodo, costoClase, nota, estudiante} = req.body;
        let clase = await Clases.findById(req.params.id);

        if (!clase) {
            res.status(404).json({msg: "La clase no existe"});
        }
        
        clase.nombre = nombre;
        clase.periodo = periodo;
        clase.costoClase = costoClase;
        clase.nota = nota;
        clase.estudiante = estudiante;
        clase.save();
        res.json(clase);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);    
    }
}

exports.eliminarClase = async (req, res) => {
    try {
        const clase = await Clases.findByIdAndDelete(req.params.id);
        
        if (!clase) {
            res.status(404).json({msg: "La clase no existe"});
        }

        res.json({msg: "La clase ha sido eliminada"})        

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
};