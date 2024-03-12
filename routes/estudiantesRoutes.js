const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');

router.post('/', estudiantesController.crearEstudiante);
router.get('/', estudiantesController.obtenerEstudiantes);
router.get('/:id', estudiantesController.obtenerestudiante);
router.get('/byusuario/:usuario', estudiantesController.obtenerEstudiantePorUsuario)
router.put('/:id/', estudiantesController.actualizarestudiante); 
router.delete('/:id/', estudiantesController.eliminarestudiante);
module.exports = router;