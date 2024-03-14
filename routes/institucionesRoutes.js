const express = require('express');
const router = express.Router();
const institucionesController = require('../controllers/institucionesController');

router.post('/', institucionesController.crearInstitucion);
router.get('/porestudiante/:estudiante', institucionesController.obtenerInstitucionesDelEstudiante);
router.get('/:id', institucionesController.obtenerInstitucion);
router.put('/:id/', institucionesController.actualizarInstitucion); 
router.delete('/:id/', institucionesController.eliminarInstitucion);
module.exports = router;