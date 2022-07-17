// crie dos arrays um com 5 elementos outro os menos e faça uma função que verifique o muneros de elementos, se pussuir menos que 5, imprima Poucos elementos e mais elemntos

let nomes = ['michel', 'joao', 'lucimar', 'robeta', 'cersei'];
const nums = [1,2,3];

function verifica (arr){

    if(arr >= 5){
        console.log(` A array ${arr} possui muitos elementos`)
    }else{
        console.log(` A array ${arr} possui poucos elementos`)
        
    }
}

verifica(nomes)
verifica(nums)


 