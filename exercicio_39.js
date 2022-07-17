// Crie uma classe que simule uma conta de banco

class Conta {
    constructor (saldo){
        this.saldo = saldo;
    }
    deposito(valor){
        this.saldo += valor;
    }
    saque(valor){
        this.saldo -= valor;
    }
}

let conta = new Conta(1000)

conta.saque(900)

console.log(conta.saldo)