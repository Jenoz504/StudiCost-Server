const Estudiantes = require('../models/estudiantesModel');

exports.crearEstudiante = async (req, res) => {
    try {
        let estudiante = new Estudiantes(req.body);
        await estudiante.save();
        res.send(estudiante);    
        console.log("ESTUDIANTE GUARDADO ",estudiante);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.obtenerEstudiantes = async (req, res) => {
    try {
        const estudiante = await Estudiantes.find({})
        res.json(estudiante);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);    
    }
}

exports.obtenerestudiante = async (req, res) => {
    try {
        const estudiante = await Estudiantes.findById(req.params.id)

        if (!estudiante) {
          res.status(404).json({msg: 'El estudiante no existe'});  
        }
        res.json(estudiante);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);        
    }
}

exports.actualizarestudiante = async (req, res) => {
    try {
        const {id, nombre, apellido, edad, presupuesto} = req.body;
        let estudiante = await Estudiantes.findById(req.params.id);

        if (!estudiante) {
            res.status(404).json({msg: "La estudiante no existe"});
        }
        
        estudiante.id = id;
        estudiante.nombre = nombre;
        estudiante.apellido = apellido;
        estudiante.edad = edad;
        estudiante.presupuesto = presupuesto;

    } catch (error) {
        console.log(error);
        res.status(500).send(error);    
    }
}

exports.eliminarestudiante = async (req, res) => {
    try {
        const estudiante = await Estudiantes.findByIdAndDelete(req.params.id);
        
        if (!estudiante) {
            res.status(404).json({msg: "El estudiante no existe"});
        }

        res.json({msg: "El estudiante ha sido eliminada"})        

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
};