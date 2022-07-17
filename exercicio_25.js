// Escreva uma função que informa se o texto acima de 10 caracteres está muito longo e abaixo de 10 estṕa dentro do limite

function checarTamanhoDoTexto(texto){

    if(texto.length > 10){
        console.log('Acima de 10 caracteres, texto muito longo')
    }else{
        console.log('Texto dentro do limite de 10 caracteres')
    }
}

checarTamanhoDoTexto('Ola mundo, meu nome é')