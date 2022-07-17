// não faz parte do curso, apenas realizei afim de praticar.

const { listenerCount } = require('process');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número de 1 a 5: ', (num) =>{

    if(num == 1) {
        console.log('valor 1')
    }else if(num == 2){
        console.log('valor 2')
    }else if(num == 3){
        console.log('valor 3')
    }else if(num == 4){
        console.log('valor 4')
    }else if(num == 5){
        console.log('valor 5')
    }else{
        console.log('valor não correspondendo.')
    }   
    rl.close()
})
