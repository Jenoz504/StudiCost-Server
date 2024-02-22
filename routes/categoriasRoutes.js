const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');

router.post('/', categoriasController.crearCategorias);
router.get('/:estudiante', categoriasController.obtenerCategoriasDelEstudiante);
router.get('/:id', categoriasController.obtenerCategoria);
router.put('/:id/', categoriasController.actualizarCategorias); 
router.delete('/:id/', categoriasController.eliminarCategoriass);
module.exports = router;