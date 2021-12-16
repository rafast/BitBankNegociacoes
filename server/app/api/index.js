class Negociacao {
    constructor(){
        this.dataHoje = new Date();
        this.dataSemanaPassada = new Date();
        this.dataSemanaPassada.setDate(this.dataHoje.getDate() - 7);
        this.dataSemanaRetrasada = new Date();
        this.dataSemanaRetrasada.setDate(this.dataHoje.getDate() - 14);
        
        this.listaNegociacoes = [
            { data: this.dataHoje, quantidade: 3, valor: 100 },
            { data: this.dataHoje, quantidade: 5, valor: 220 },
            { data: this.dataHoje, quantidade: 8, valor: 370 },
            { data: this.dataSemanaPassada, quantidade: 2, valor: 120 },
            { data: this.dataSemanaPassada, quantidade: 4, valor: 145 },
            { data: this.dataSemanaPassada, quantidade: 1, valor: 400 },
            { data: this.dataSemanaRetrasada, quantidade: 6, valor: 85 },
            { data: this.dataSemanaRetrasada, quantidade: 8, valor: 65 },
            { data: this.dataSemanaRetrasada, quantidade: 4, valor: 225 }
        ];
    }

    listaTodas(){
        return this.listaNegociacoes;
    }

    listaSemanaAtual(){
        return this.listaNegociacoes.filter((negociacao) =>{
            return negociacao.data > this.dataSemanaPassada;
        });
    }

    listaSemanaPassada(){
        return this.listaNegociacoes.filter((negociacao) =>{
            return (negociacao.data < this.dataHoje) && (negociacao.data > this.dataSemanaRetrasada);
        });
    }

    listaSemanaRetrasada(){
        return this.listaNegociacoes.filter((negociacao) =>{
            return negociacao.data < this.dataSemanaPassada;
        });
    }

    adiciona(negociacao){
        negociacao.data = new Date(negociacao.data.replace(/-/g,'/'));
        this.listaNegociacoes.push(negociacao);
    }
}

module.exports = new Negociacao();

