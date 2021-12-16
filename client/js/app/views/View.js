class View{

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){
        throw new Error('Você deve sobrescrever esse método na classe filha!');
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}