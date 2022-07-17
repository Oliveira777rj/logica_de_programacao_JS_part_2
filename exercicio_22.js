// Escreva uma função que receba uma idade e se a idade for maior que 18 ela podera tirar habilitação

function informarIdade(idade){

    if(idade >= 18){
        console.log(`Sua idade é ${idade}, pode se matricular na auto escola`)
    }else if(idade === undefined){
        console.log('Informe sua idade')
    }else{
        console.log(`Sua idade é ${idade}, não poderá se matricular na auto escola`)
        
    }
}

informarIdade(22)