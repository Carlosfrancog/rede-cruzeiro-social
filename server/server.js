const express = require('express');
const cors = require('cors');
const app = express();

const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/posts', postRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
