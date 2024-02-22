const express = require('express');
const router = express.Router();
const periodosController = require('../controllers/periodosController');

router.post('/', periodosController.crearPeriodo);
router.get('/:estudiante', periodosController.obtenerPeriodosDelEstudiante);
router.get('/:id', periodosController.obtenerPeriodo);
router.put('/:id/', periodosController.actualizarPeriodo); 
router.delete('/:id/', periodosController.eliminarPeriodo);
module.exports = router;