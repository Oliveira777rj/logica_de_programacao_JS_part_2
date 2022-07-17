// crie um objeto calculadora com seguintes metodos: soma, subtração, multiplica e dividir, e metodos com 2 parâmetros

const calculadora ={

    soma: function(a,b){
        return a + b
    },

    subtracao: function(a,b){
        return a - b
    },

    multiplica: function(a,b){
        return a * b
    },

    divisao: function(a,b){
        return a / b
    }

}

console.log(calculadora.soma(10,1))
console.log(calculadora.subtracao(11,1))
console.log(calculadora.multiplica(10,2))
console.log(calculadora.divisao(20,2))
