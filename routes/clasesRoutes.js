const express = require('express');
const router = express.Router();
const clasesController = require('../controllers/clasesController');

router.post('/', clasesController.crearclase);
router.get('/:estudiante', clasesController.obtenerClasesDelEstudiante);
router.get('/:id', clasesController.obtenerClase);
router.put('/:id/', clasesController.actualizarClases); 
router.delete('/:id/', clasesController.eliminarClase);
module.exports = router;