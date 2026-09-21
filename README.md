# ⚔️ Guilda API

Uma API REST simples desenvolvida em **Node.js + Express** para gerenciar aventureiros de uma guilda.

Este projeto faz parte dos meus estudos de **desenvolvimento back-end**, com foco em construção de APIs, rotas HTTP, manipulação de dados e fundamentos de CRUD.

---

## 🧙 Sobre o projeto

A **Guilda API** permite cadastrar e consultar aventureiros através de uma API REST.

O projeto começou de forma simples, utilizando um array em memória para armazenar os aventureiros. A ideia é evoluir a aplicação gradualmente, adicionando novas operações e posteriormente persistência de dados.

> **Status:** 🚧 Em desenvolvimento

---

## 🛠️ Tecnologias

* **Node.js**
* **Express.js**
* **JavaScript**
* **JSON**
* **Postman** para testes das requisições

---

## 📂 Estrutura atual

```text
guilda-api/
├── node_modules/
├── package.json
├── package-lock.json
└── app.js
```

---

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Acesse a pasta

```bash
cd guilda-api
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

```bash
node app.js
```

O servidor será iniciado na porta:

```text
http://localhost:3000
```

Ao iniciar, o terminal deverá exibir:

```text
Servidor da guilda, rodando na porta 3000.
```

---

## 📜 Rotas disponíveis

### 🏠 Página inicial

**GET**

```http
GET /
```

Resposta:

```text
⚔️ Guilda API online. Bem-vindo à guilda aventureiro(a)!
```

---

### 🧙 Listar aventureiros

**GET**

```http
GET /aventureiros
```

Exemplo de resposta:

```json
[
    {
        "id": 1,
        "nome": "Apheru",
        "classe": "Guerreiro"
    },
    {
        "id": 2,
        "nome": "Jin Woo",
        "classe": "Monarca"
    }
]
```

---

### 🔎 Buscar aventureiro por ID

**GET**

```http
GET /aventureiros/:id
```

Exemplo:

```http
GET /aventureiros/1
```

Resposta:

```json
{
    "id": 1,
    "nome": "Apheru",
    "classe": "Guerreiro"
}
```

Caso o aventureiro não exista:

```json
{
    "mensagem": "Aventureiro não encontrado"
}
```

A API retorna o status:

```text
404 Not Found
```

---

### ➕ Cadastrar aventureiro

**POST**

```http
POST /aventureiros
```

Exemplo de corpo da requisição:

```json
{
    "id": 3,
    "nome": "Naillath",
    "classe": "Mago"
}
```

Resposta:

```json
{
    "id": 3,
    "nome": "Naillath",
    "classe": "Mago"
}
```

---

## 🧪 Testando com Postman

As requisições podem ser testadas utilizando o **Postman**.

Exemplo para cadastrar um aventureiro:

```text
POST http://localhost:3000/aventureiros
```

No **Body**, selecione:

```text
raw → JSON
```

E envie:

```json
{
    "id": 1,
    "nome": "Apheru",
    "classe": "Guerreiro"
}
```

Depois, utilize:

```text
GET http://localhost:3000/aventureiros
```

para visualizar os aventureiros cadastrados.

---

## ⚠️ Persistência dos dados

Atualmente, os aventureiros são armazenados em um **array em memória**:

```javascript
const aventureiros = [];
```

Isso significa que os dados **não são persistidos**.

Se o servidor for encerrado ou reiniciado, todos os aventureiros cadastrados serão perdidos.

Essa limitação faz parte da versão atual do projeto e será resolvida em etapas futuras com a implementação de um banco de dados.

---

## 🗺️ Próximos passos

O projeto será evoluído gradualmente para implementar outras operações de uma API CRUD:

* [x] GET `/`
* [x] GET `/aventureiros`
* [x] GET `/aventureiros/:id`
* [x] POST `/aventureiros`
* [ ] PUT `/aventureiros/:id`
* [ ] PATCH `/aventureiros/:id`
* [ ] DELETE `/aventureiros/:id`
* [ ] Validação dos dados recebidos
* [ ] Tratamento de erros
* [ ] Separação das responsabilidades em arquivos
* [ ] Persistência com banco de dados
* [ ] Testes automatizados
* [ ] Documentação da API

---

## 🎯 Objetivo do projeto

Mais do que construir uma API funcional, este projeto tem como objetivo praticar os fundamentos necessários para o desenvolvimento **back-end com Node.js**:

* HTTP
* Métodos HTTP
* Rotas
* Parâmetros de rota
* Status codes
* JSON
* CRUD
* Express
* Manipulação de requisições e respostas
* Tratamento de erros
* Persistência de dados
* Organização de projetos back-end

---

## ⚔️ Evolução

A Guilda API está sendo construída por etapas.

A ideia é começar com o básico, entender cada parte da aplicação e evoluir gradualmente até transformar a pequena guilda em uma API back-end mais completa.

**Do primeiro aventureiro ao sistema completo da guilda.** ⚔️
