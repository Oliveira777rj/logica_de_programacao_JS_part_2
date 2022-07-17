// Crie um objeto que simula um endereço de um cliente

class Endereco{
    constructor(rua, bairro, cidade, estado){

        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;

    }

    set novaRua(novaRua){
        this.rua = novaRua;
    }
    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }
    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado){
        this.novoEstado = novoEstado;
    }

}

let endereço = new Endereco('Boiuna','Taquara','Rio de Janeiro','Rio de Janeiro')
console.log(endereço)

endereço.novaRua = 'Curumau';
endereço.novoBairro = 'Canaã';
endereço.cidade = 'Bahia';
endereço.estado = 'Salvador';

console.log(endereço)