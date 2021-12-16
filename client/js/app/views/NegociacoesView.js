class NegociacoesView extends View {

    constructor(elemento){
        super(elemento);
    }

    _template(model){
        return `
        <table class="table table-striped table-hover table-borderless  table-light">
            <thead>
                <tr>
                    <th onclick="controler.ordena('data')">Data</th>
                    <th onclick="controler.ordena('quantidade')">Quantidade</th>
                    <th onclick="controler.ordena('valor')">Valor</th>
                    <th onclick="controler.ordena('volume')">Total</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.listaNegociacoes.map( neg => {

                    return `
                    <tr>
                        <td>${DateHelper.dataParaTexto(neg.data)}</td>
                        <td>${neg.quantidade}</td>
                        <td>R$${neg.valor}</td>
                        <td>R$${neg.volume}</td>
                    </tr>
                    `
                }).join('')}    
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>
                    R$${model.volumeTotal}
                </td>
            </tfoot>
        </table>    
        `;
    }

}