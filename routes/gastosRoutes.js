const express = require('express');
const router = express.Router();
const gastosController = require('../controllers/gastosController');

router.post('/', gastosController.crearGasto);
router.get('/porestudiante/:estudiante', gastosController.obtenerGastosDelEstudiante);
router.get('/:id', gastosController.obtenerGasto);
router.put('/:id/', gastosController.actualizargasto); 
router.delete('/:id/', gastosController.eliminarGasto);
module.exports = router;