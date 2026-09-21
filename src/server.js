const express = require('express');

const app = express();
const port = 3000;

const aventureiros = [];

app.use(express.json());

app.get('/', (req, res) => {
    res.send('⚔️ Guilda API online. Bem-vindo à guilda aventureiro(a)!');
});

app.get('/aventureiros', (req, res) => {
    res.json(aventureiros);
});

app.get('/aventureiros/:id', (req, res) => {
    const id = Number(req.params.id);
    const aventureiro = aventureiros.find(aventureiro => aventureiro.id === id);

    if(!aventureiro) {
        return res.status(404).json({
            mensagem: "Aventureiro não encontrado"
        });
    }

    res.json(aventureiro);
});

app.post('/aventureiros', (req, res) => {
    const aventureiro = req.body;

    aventureiros.push(aventureiro);

    res.json(aventureiro);
});

app.put('/aventureiros/:id', (req, res) => {
    const id = Number(req.params.id);
    const aventureiro = aventureiros.find(aventureiro => aventureiro.id === id);

    if(!aventureiro) {
        return res.status(404).json({
            mensagem: "Aventureiro não encontrado"
        });
    }

    if(!req.body.nome || !req.body.classe) {
        return res.status(400).json({
            mensagem: "Nome e classe são obrigatórios"
        });
    }

    const indice = aventureiros.findIndex(aventureiro => aventureiro.id === id);

    res.json(aventureiros[indice] = {id: id, ...req.body});

});

app.listen(port, () => {
    console.log(`Servidor da guilda, rodando na porta ${port}.`);
});
