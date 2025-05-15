const { findUserByEmail, addUser } = require('../models/userModel');

function isValidEmail(email) {
  return email.endsWith('@cs.cruzeirodosul.edu.br');
}

function register(req, res) {
  try {
    let { nome, email, senha } = req.body;
    console.log('Recebido:', nome, email, senha); // 👈 log útil

    if (!nome || !email || !senha) {
      console.log('Campos obrigatórios faltando');
      return res.status(400).json({ erro: 'Preencha todos os campos' });
    }

    email = email.toLowerCase();
    console.log('Email formatado:', email);

    if (!email.endsWith('@cs.cruzeirodosul.edu.br')) {
      console.log('Email inválido:', email);
      return res.status(400).json({ erro: 'E-mail inválido, use o institucional' });
    }

    if (findUserByEmail(email)) {
      console.log('Usuário já existe');
      return res.status(409).json({ erro: 'Usuário já registrado' });
    }

    console.log('Adicionando usuário...');
    addUser({ nome, email, senha });

    console.log('Usuário registrado com sucesso!');
    return res.status(201).json({ mensagem: 'Usuário registrado com sucesso' });

  } catch (err) {
    console.error('❌ Erro no register:', err.message);
    return res.status(500).json({ erro: 'Erro interno no servidor' });
  }
}


function login(req, res) {
  const { email, senha } = req.body;

  const user = findUserByEmail(email);

  if (!user || user.senha !== senha) {
    return res.status(401).json({ erro: 'E-mail ou senha inválidos' });
  }

  return res.status(200).json({ mensagem: 'Login bem-sucedido', usuario: { nome: user.nome, email: user.email } });
}

module.exports = {
  register,
  login
};
