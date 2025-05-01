import express from 'express';
import usuariosController from '../controllers/UsuariosController.js';

const router = express.Router();

router.post('/users',usuariosController.criar) //http://localhost/api/users
router.get('/users',usuariosController.listarUsuarios)
router.get('/users/:id', usuariosController.buscarPorid)
router.put('/users/:id', usuariosController.alterarDados)

export default router;