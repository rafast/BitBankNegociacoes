class NegociacaoService{

    constructor(){
        this._http = new HttpService();
    }

    cadastrarNegociacao(negociacao){
        return this._http
        .post('/negociacoes', negociacao);
    }

    obterNegociacoes(url){

        return new Promise ( (resolve, reject) =>{
            this._http
               .get(url)
               .then(negociacoes => {
                   resolve(negociacoes.data.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
               })
               .catch(erro => {
                   console.log(erro);
                   reject('Não foi possível obter as negociações da semana')
               })
        })
        
    }

    obterTodasNegociacoes(){
        return Promise.all([
            this.obterNegociacoes('/negociacoes/semanaAtual'),
            this.obterNegociacoes('/negociacoes/semanaPassada'),
            this.obterNegociacoes('/negociacoes/semanaRetrasada')
        ]).then( resultados => {
            let negociacoes = resultados.reduce( (dados, negociacao) => dados.concat(negociacao), []);
            return negociacoes;
        }).catch( (erro) => {
            throw new Error(erro);
        });
    }
}