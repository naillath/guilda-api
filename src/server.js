const express = require('express');

const app = express();
const port = 3000;

const aventureiros = [];

app.use(express.json());

app.get('/', (req, res) => {
    res.send('⚔️ Guilda API online. Bem-vindo à guilda aventureiro(a)!');
});

app.get('/aventureiros', (req, res) => {
    res.status(200).json({
        mensagem: "Lista de aventureiros",
        aventureiros: aventureiros
    });
});

app.get('/aventureiros/:id', (req, res) => {
    const id = Number(req.params.id);
    const aventureiro = aventureiros.find(aventureiro => aventureiro.id === id);

    if (!aventureiro) {
        return res.status(404).json({
            mensagem: "Aventureiro não encontrado"
        });
    }

    res.status(200).json({
        mensagem: "Aventureiro encontrado",
        aventureiro: aventureiro
    });
});

app.post('/aventureiros', (req, res) => {
    const aventureiro = req.body;

    aventureiros.push(aventureiro);

    res.status(201).json({
        mensagem: "Aventureiro regitrado com sucesso",
        aventureiro: aventureiro
    });
});

app.put('/aventureiros/:id', (req, res) => {
    const id = Number(req.params.id);
    const aventureiro = aventureiros.find(aventureiro => aventureiro.id === id);

    if (!aventureiro) {
        return res.status(404).json({
            mensagem: "Aventureiro não encontrado"
        });
    }

    if (!req.body.nome || !req.body.classe) {
        return res.status(400).json({
            mensagem: "Nome e classe são obrigatórios"
        });
    }

    const indice = aventureiros.findIndex(aventureiro => aventureiro.id === id);

    res.status(200).json({
        mensagem: "Aventureiro atualizado com sucesso",
        aventureiro: aventureiros[indice] = { id: id, ...req.body }
    });
});

app.patch('/aventureiros/:id', (req, res) => {
    const id = Number(req.params.id);
    const aventureiro = aventureiros.find(aventureiro => aventureiro.id === id);

    if (!aventureiro) {
        return res.status(404).json({
            mensagem: "Aventureiro não encontrado"
        });
    }

    if (req.body.nome !== undefined) {
        aventureiro.nome = req.body.nome;
    }

    if (req.body.classe !== undefined) {
        aventureiro.classe = req.body.classe;
    }

    res.status(200).json({
        mensagem: "Aventureiro atualizado com sucesso",
        aventureiro: aventureiro});
});

app.delete('/aventureiros/:id', (req, res) => {
    const id = Number(req.params.id);
    const aventureiro = aventureiros.find(aventureiro => aventureiro.id === id);

    if(!aventureiro) {
        return res.status(404).json({
            mensagem: "Aventureiro não encontrado"
        });
    }

    const indice = aventureiros.findIndex(aventureiro => aventureiro.id === id);

    if (indice !== -1) {
        aventureiros.splice(indice, 1);
    }

    res.status(200).json({
        mensagem: "Aventureiro deletado com sucesso",
        aventureiro: aventureiro   
    });
});

app.listen(port, () => {
    console.log(`Servidor da guilda, rodando na porta ${port}.`);
});
