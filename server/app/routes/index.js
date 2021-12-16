const negociacoes = require('../api/index');

module.exports = (app) => {

    app.get('/negociacoes/semanaAtual', (req, res) =>{
        res.json(negociacoes.listaSemanaAtual());
    });

    app.get('/negociacoes/semanaPassada', (req, res) =>{
        setTimeout(()=>{
            res.json(negociacoes.listaSemanaPassada());
        }, 3000);
    });

    app.get('/negociacoes/semanaRetrasada', (req, res) =>{
        res.json(negociacoes.listaSemanaRetrasada());
    });

    app.post('/negociacoes', (req, res) =>{
        const { data, quantidade, valor } = req.body;
        const negociacao = { data: data, quantidade: quantidade, valor: valor}
        negociacoes.adiciona(negociacao);
        res.status(200);
        res.json(negociacao);
    });
};