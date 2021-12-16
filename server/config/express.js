const express = require('express');
const app = express();
const path = require('path');
const rotas = require('../app/routes/index');

app.use(express.json());


app.set('clientPath', path.join(__dirname, '../..', 'client'));
app.use(express.static(app.get('clientPath')));

app.use( (req, res, proximo) =>{
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Http, data');
    res.set('Access-Control-Allow-Methods', 'GET, HEAD, DELETE, PUT');
    proximo();
});

rotas(app);



module.exports = app;