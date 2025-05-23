# Rede Cruzeiro Social

Rede social acadêmica exclusiva para estudantes da Universidade Cruzeiro do Sul.  
Apenas usuários com e-mail institucional `@cs.cruzeirodosul.edu.br` podem acessar.

---

## 🧱 Tecnologias

- **Frontend**: Vue.js
- **Backend**: Node.js (Express)
- **Banco de dados**: a definir (MongoDB ou PostgreSQL)

---

## 🚧 Funcionalidades previstas

- Autenticação com e-mail institucional
- Perfis de usuário
- Feed de postagens
- Comentários e curtidas
- Sistema de amizade ou seguidores
- Moderação de conteúdo

---

## 🚀 Rodando localmente

```bash
# Backend
cd server
npm install
npm run dev

# Frontend
cd client
npm install
npm run serve
```

---

## 🤝 Contribuindo

Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para instruções sobre como colaborar com o projeto.

---

## 🌿 Manual de Branches

Para manter o projeto organizado e colaborativo, utilizamos o seguinte fluxo de branches:

### 🌱 Principais Branches

| Branch | Função |
|--------|--------|
| `main` | Código estável, versão de produção |
| `dev`  | Desenvolvimento ativo, base para features |

---

### 🔧 Branches temporárias

Use sempre o padrão:

- `feature/nome-da-funcionalidade`
- `bugfix/nome-da-correção`
- `hotfix/nome-da-correção-crítica` (opcional, vai direto pra `main`)

---

### 💻 Comandos úteis

✅ Criar uma nova branch a partir de `dev`:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/nome-da-feature
```

✅ Enviar branch nova para o repositório:

```bash
git push -u origin feature/nome-da-feature
```

✅ Depois, abra um **Pull Request** para `dev` no GitHub.

---

### 📌 Dicas

- Sempre sincronize a `dev` antes de criar uma branch nova (`git pull origin dev`)
- Nomeie as branches com clareza e use **kebab-case** ou **snake_case**
- Nunca envie mudanças direto para `main` (ela é protegida!)