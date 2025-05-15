const { getAllPosts, addPost } = require('../models/postModel');

// GET /api/posts
function listarPostagens(req, res) {
  try {
    const posts = getAllPosts();
    res.status(200).json(posts);
  } catch (err) {
    console.error('Erro ao listar postagens:', err.message);
    res.status(500).json({ erro: 'Erro ao listar postagens' });
  }
}

// POST /api/posts
function criarPostagem(req, res) {
  try {
    const { autor, conteudo } = req.body;

    if (!autor || !conteudo) {
      return res.status(400).json({ erro: 'Autor e conteúdo são obrigatórios' });
    }

    const novaPostagem = {
      id: Date.now(),
      autor,
      conteudo,
      data: new Date().toISOString()
    };

    addPost(novaPostagem);

    res.status(201).json({ mensagem: 'Postagem criada com sucesso', post: novaPostagem });
  } catch (err) {
    console.error('Erro ao criar postagem:', err.message);
    res.status(500).json({ erro: 'Erro ao criar postagem' });
  }
}

module.exports = {
  listarPostagens,
  criarPostagem
};
