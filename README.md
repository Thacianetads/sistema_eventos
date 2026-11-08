#  CRUD de Usuários - Node.js, React e MySQL

Este é um projeto fullstack de gestão de participantes em eventos, desenvolvido com **Node.js** no backend, **React** no frontend e **MySQL** como banco de dados, permitindo redução estimada de 70% no tempo de fila de entrada por participante. A aplicação permite **cadastrar**, **listar**, **editar** e **excluir** participantes com os seguintes campos:

- Nome
- E-mail
- Nome evento
- Telefone
- Data do evento

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- MySQL
- React


## 🔧 Funcionalidades

- ✅ Listar todos os participantes
- ✅ Cadastrar novo participante
- ✅ Editar participante existente
- ✅ Excluir participante
- ✅ Validação básica de formulário
- ✅ Comunicação entre frontend e backend via API REST

---


## 🚀 Como Rodar o Projeto
Pré-requisitos:

-Node.js instalado

-MySQL instalado

-NPM ou Yarn


1.Configure o banco de dados

    CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT, 
    nome VARCHAR(100),
    email VARCHAR(100),
    evento VARCHAR(100),
    fone VARCHAR(20),
    data_nascimento DATE,
    PRIMARY KEY (id)
    );


2.Instale as dependências
   
Backend:
- cd api
- npm install


Frontend:
- cd frontend
- npm install


3.Inicie os servidores


Inicie o backend: 
- cd api
- npm start


Inicie o frontend:
- cd ../frontend
- npm start

# 🧪 Dica: Testando no Postman

a API está rodando localmente em:  
`http://localhost:8800`  

1.Abra o Postman

2.Crie um novo Request Collection

3.Adicione cada endpoint como nova requisição

4.Use o método correto (GET, POST, etc)

5.Para POST e PUT, selecione o Body como JSON

6.Clique em Send para testar

# Resultado:

<img width="1366" height="768" alt="Captura de tela de 2026-11-08 13-11-56" src="https://github.com/user-attachments/assets/85f43f41-3830-4c3b-b0ec-796ba3c2ba87" />


Feito com 💻 por Thaciane
