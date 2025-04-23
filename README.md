# 📋 TASKS API - NestJS + MySQL

## ✅ Funcionalidades

- Criar tarefas
- Listar tarefas
- Atualizar tarefas
- Deletar tarefas

## 🚀 Requisitos

- [Node.js] (v18+)
- [MySQL](https://www.mysql.com/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

---

## 🛠️ Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/tasks-api.git
cd tasks-api


2. Instale as dependências:

npm install


3. Configure o banco de dados:

CREATE DATABASE tasks;

USE tasks;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT NOT NULL,
  status VARCHAR(100) NOT NULL
);


4. ▶️ Rodando o projeto

npm run start

http://localhost:8000


5. 🧪 Testando a API

🔹 POST /tasks
{
  "titulo": "Nova tarefa",
  "descricao": "Testando banco",
  "status": "Em andamento"
}

🔹 GET /tasks
Lista todas as tarefas.

🔹 PUT /tasks/1
Atualiza uma tarefa existente.

{
  "titulo": "Tarefa atualizada",
  "descricao": "Descrição nova",
  "status": "Concluída"
}

🔹 DELETE /tasks/:id
Deleta uma tarefa pelo id.

🧠 Tecnologias
NestJS
MySQL
TypeScript
MySQL2 (driver)
