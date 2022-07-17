// Escreva uma função que recebe um número e o decremente de 1 em 1 com um loop, imprima somente os valore pares

function decrementarValor (valor){

    for(let n = valor; n >= 0; n--){
        if(n % 2 == 0){
            console.log(n)
        }
    }
}

decrementarValor()