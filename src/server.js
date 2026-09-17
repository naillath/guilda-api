const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('⚔️ Guilda API online. Bem-vindo à guilda aventureiro(a)!');
});

app.listen(port, () => {
    console.log(`Servidor da guilda, rodando na porta ${port}.`);
});