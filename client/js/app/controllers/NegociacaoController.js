class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._ordemAtual = '';

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia', 'ordena', 'inverteOrdem');

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto');
    }

    adiciona(event){
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = 'Negociação adicionada com sucesso!';
     
        this._limpaFormulario();
    }

    ordena(coluna){
        if (this._ordemAtual == coluna){
            this._listaNegociacoes.inverteOrdem();
        }else{
            this._listaNegociacoes.ordena((a,b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;
    }

    importaNegociacoes(url){
        let service = new NegociacaoService();

        service
        .obterNegociacoes(url)
        .then(negociacoes => {
          negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
          this._mensagem.texto = 'Negociações do período importadas com sucesso';
        })
        .catch(error => this._mensagem.texto = error); 
    }

    importaTodasNegociacoes(){
        let service = new NegociacaoService();

        service
        .obterTodasNegociacoes()
        .then(negociacoes => {
          negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
          this._mensagem.texto = 'Negociações do período importadas com sucesso';
        })
        .catch(error => this._mensagem.texto = error); 
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value), 
            this._inputQuantidade.value, 
            this._inputValor.value);
    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;

        this._inputData.focus();
    }

    apagarTodasAsNegociacoes(){
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = 'Lista de negociações apagada com sucesso!';
    }

    cadastrar(event){
        event.preventDefault();
        const $ = document.querySelector.bind(document);

        const inputData = $('#data');
        const inputQuantidade = $('#quantidade');
        const inputValor = $('#valor');

        const negociacao = {
            data: inputData.value,
            quantidade: inputQuantidade.value,
            valor: inputValor.value
        }

        const service = new NegociacaoService();

        service
        .cadastrarNegociacao(negociacao)
        .then((resolve) => {
            inputData.value = '';
            inputQuantidade.value = 1;
            inputValor.value = 0.0;
            inputData.focus();
            alert('Negociação enviada com sucesso');
            })
        .catch((erro) => alert(`Não foi possível enviar a negociação: ${erro}`));
    }
}