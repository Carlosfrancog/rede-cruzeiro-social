// Backend básico com Express
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.json());

app.get('/usuarios', (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, 'data', 'usuarios.json'));
  res.send(JSON.parse(data));
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
