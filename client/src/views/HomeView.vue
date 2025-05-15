<template>
  <div class="home-container">
    <header>
      <h1>🎓 Rede Cruzeiro Social</h1>
      <button @click="logout">Sair</button>
    </header>

    <section class="nova-postagem">
      <h2>Nova Postagem</h2>
      <p><strong>Postando como:</strong> {{ usuario.nome }}</p>
      <form @submit.prevent="criarPostagem">
        <textarea v-model="conteudo" placeholder="O que você quer compartilhar?" required></textarea>
        <button type="submit">Publicar</button>
      </form>
    </section>

    <section class="feed">
      <h2>📰 Feed</h2>
      <div v-if="postagens.length === 0">Nenhuma postagem ainda.</div>
      <div v-for="post in postagens" :key="post.id" class="post">
        <p><strong>{{ post.autor }}</strong> - {{ formatarData(post.data) }}</p>
        <p>{{ post.conteudo }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const usuario = JSON.parse(localStorage.getItem('usuario') || '{}')
const autor = ref(usuario.nome || '')
const conteudo = ref('')
const postagens = ref([])

function formatarData(dataIso) {
  return new Date(dataIso).toLocaleString()
}

async function buscarPostagens() {
  const res = await fetch('http://localhost:3000/api/posts')
  postagens.value = await res.json()
}

async function criarPostagem() {
  const res = await fetch('http://localhost:3000/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      autor: autor.value,
      conteudo: conteudo.value
    })
  })

  const dados = await res.json()

  if (res.ok) {
    alert('Postagem publicada!')
    conteudo.value = ''
    buscarPostagens()
  } else {
    alert('Erro: ' + dados.erro)
  }
}

function logout() {
  localStorage.removeItem('usuario')
  router.push('/')
}

onMounted(buscarPostagens)
</script>

<style scoped>
.home-container {
  max-width: 700px;
  margin: auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #003366;
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
}

header h1 {
  font-size: 1.5rem;
}

header button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}

section.nova-postagem {
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.nova-postagem h2 {
  margin-bottom: 1rem;
}

textarea {
  width: 100%;
  height: 100px;
  margin-top: 0.5rem;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

button {
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #004d99;
}

section.feed {
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  max-height: 400px;
  overflow-y: auto;
}

.feed h2 {
  margin-bottom: 1rem;
}

.post {
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
}

.post p:first-child {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.post p:last-child {
  font-size: 1.1rem;
  color: #333;
}
</style>
