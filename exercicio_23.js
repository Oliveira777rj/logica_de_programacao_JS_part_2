// Escreva uma função que descreva o tipo de dados

function verificarDado (valor){

    if(typeof valor === 'string'){
        console.log('este dado é uma string')
    }else if(typeof valor === 'number'){
        console.log('este dado é um number')
    }else if(typeof valor === 'boolean'){
        console.log('este dado é um boolean')
    }
}

verificarDado('11')
verificarDado(11)
verificarDado(true)


