const Categorias = require('../models/categoriasModel');

exports.crearCategorias = async (req, res) => {
    try {
        let categoria = new Categorias(req.body);
        await categoria.save();
        res.send(categoria);    
        console.log(categoria);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
exports.obtenerCategoriasDelEstudiante= async (req, res) => {
    try {
        const categoria = await Categorias.find({estudiante: req.body.id})
        res.json(categoria);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);    
    }
}

exports.obtenerCategoria = async (req, res) => {
    try {
        const categoria = await Categorias.findById(req.params.id)

        if (!categoria) {
          res.status(404).json({msg: 'la categoria no existe'});  
        }
        res.json(categoria);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);        
    }
}


exports.actualizarCategorias = async (req, res) => {
    try {
        const {id, nombre, descripcion, estudiante} = req.body;
        let categorias = await Categorias.findById(req.params.id);

        if (!categorias) {
            res.status(404).json({msg: "La categoria no existe"});
        }
        
        categorias.id = id;
        categorias.nombre = nombre;
        categorias.descripcion = descripcion;
        categorias.estudiante = estudiante;
    } catch (error) {
        console.log(error);
        res.status(500).send(error);    
    }
}

exports.eliminarCategorias = async (req, res) => {
    try {
        const categoria = await Categorias.findByIdAndDelete(req.params.id);
        
        if (!categoria) {
            res.status(404).json({msg: "La categoria no existe"});
        }

        res.json({msg: "La farmacia ha sido eliminada"})        

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}