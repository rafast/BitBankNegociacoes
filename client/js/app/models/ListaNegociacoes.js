class ListaNegociacoes{

    constructor(){
        this._listaNegociacoes = [];
    }

    get listaNegociacoes(){
        return [].concat(this._listaNegociacoes);
    }

    adiciona(negociacao){
        this._listaNegociacoes.push(negociacao);
    }

    esvazia(){
        this._listaNegociacoes = [];
    }

    get volumeTotal(){
        return this._listaNegociacoes.reduce((total, negociacao) => total += negociacao.volume, 0.0);
    }

    ordena(criterio){
        this._listaNegociacoes.sort(criterio);
    }

    inverteOrdem(){
        this._listaNegociacoes.reverse();
    }
}