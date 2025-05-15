const express = require('express');
const router = express.Router();
const { listarPostagens, criarPostagem } = require('../controllers/postController');

// Rota para listar todas as postagens
router.get('/', listarPostagens);

// Rota para criar uma nova postagem
router.post('/', criarPostagem);

module.exports = router;
