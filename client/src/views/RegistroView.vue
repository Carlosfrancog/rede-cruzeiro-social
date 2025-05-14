<template>
  <div class="registro-container">
    <div class="form-card">
      <h2>📝 Criar Conta</h2>
      <form @submit.prevent="registrar">
        <input v-model="nome" type="text" placeholder="Nome completo" required />
        <input v-model="email" type="email" placeholder="E-mail institucional" required />
        <input v-model="senha" type="password" placeholder="Senha" required />
        <button type="submit" class="btn-principal">Criar Conta</button>
        <router-link to="/">
          <button type="button" class="btn-secundario">Já tenho conta</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const nome = ref('')
const email = ref('')
const senha = ref('')

function registrar() {
  alert(`Registro: ${nome.value}, ${email.value}`)
}
</script>

<style scoped>
.registro-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 470px; /* mesma largura */
  padding: 2rem;
  flex-wrap: wrap;
  margin-left: 75vh;  /* "empurra" para o meio */
  margin-right: 0;
}

.form-card {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  border: 2px solid #000000;
}

h2 {
  text-align: center;
  color: #00439b;
  margin-bottom: 1.5rem;
}

input {
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
  font-size: 1rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  border: none;
}

.btn-principal {
  background-color: #000292;
  color: white;
}

.btn-secundario {
  background-color: #42b72a;
  color: white;
  margin-top: 0.75rem;
}

.btn-homeback {
  background-color: #4487df;
  color: white;
  margin-top: 0.75rem;
}
</style>
