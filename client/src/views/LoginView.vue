<template>
  <div class="container">
    <div class="left">
      <h1>🚀 Rede Cruzeiro Social</h1>
      <p>
        A Rede Cruzeiro Social ajuda você a se conectar e compartilhar com outros estudantes da <strong>Universidade Cruzeiro do Sul</strong>.
      </p>
    </div>

    <div class="right">
      <form @submit.prevent="login">
        <input type="email" placeholder="E-mail institucional" v-model="email" required />
        <input type="password" placeholder="Senha" v-model="senha" required />
        <button type="submit">Entrar</button>
        <router-link to="/registro">
          <button type="button" class="btn-secundario">Criar nova conta</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';
import { ref } from 'vue'

const email = ref('')
const senha = ref('')

async function login() {
  try {
    const resposta = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value.toLowerCase(),
        senha: senha.value
      })
    });

    const dados = await resposta.json();
    console.log('Dados recebidos:', dados);

    if (!resposta.ok) {
      alert(`Erro: ${dados.erro}`);
      return;
    }

    alert(`Bem-vindo, ${dados.usuario.nome}`);
    localStorage.setItem('usuario', JSON.stringify(dados.usuario));
    router.push('/home');
  } catch (erro) {
    console.error(erro);
    alert('Erro na conexão com o servidor');
  }
}

</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 470px;
  background-color: #f4f8fb;;
  padding: 2rem;
  flex-wrap: wrap;
  border: 2px solid #000000;
  margin-left: 75vh;
  margin-right: 0;
}

.left {
  max-width: 500px;
}

.left h1 {
  color: #00439b;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.left p {
  font-size: 1.25rem;
  color: #1c1e21;
}

.right {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

input {
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #0528f1;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.btn-secundario {
  margin-top: 1rem;
  background-color: #42b72a;
}
</style>
