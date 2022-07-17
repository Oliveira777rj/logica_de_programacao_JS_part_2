// Crie uma classe que simula um carrinho de compra de um e-commerce

class Carrinho {

    constructor(itens,qtd,valorTotal){

        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

}

let carrinho = new Carrinho([

    {
        id: 01,
        nome: 'camisa',
        qtd: 1,
        preco:20
    },

    {
        id: 02,
        nome: 'calça',
        qtd: 2,
        preco: 50
    }
],3,120)

console.log(carrinho)