const express = require('express');
const router = express.Router();
const clasesController = require('../controllers/clasesController');

router.post('/', clasesController.crearClase);
router.get('/porestudiante/:estudiante', clasesController.obtenerClasesDelEstudiante);
router.get('/:id', clasesController.obtenerClase);
router.put('/:id/', clasesController.actualizarClases); 
router.delete('/:id/', clasesController.eliminarClase);
module.exports = router;