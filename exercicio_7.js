// não faz parte do curso, apenas realizei afim de praticar.

const { stdin, stdout } = require('process')
const readline = require('readline')

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.question('Qual a sua idade? ',(idade) =>{

    rl.question('Qual seu nome? ',(nome) =>{

        if(idade >= 18){
            console.log(`Sua idade é ${idade}, seja bem vindo ${nome}.`)
            
        }else{
            console.log(`Sua idade é ${idade}, infelizmente ${nome} menor de idade não entra.`)
        }
        rl.close()
    })
})