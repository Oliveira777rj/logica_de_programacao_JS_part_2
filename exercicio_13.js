// verifique se pode dirigir, possuindo habilitação e sendo maior de idade


let idade = 12;
let habilitado = false;

if(idade >= 18 && habilitado == true){

    console.log('Você é maior de idade e está habilitada, pode dirigir')
}else if(idade >= 18 && habilitado == false){
    console.log(`Sua idade é ${idade} mas pela falta de habilitação você não poderá dirigir!`)
}else{
    console.log('Você não possui idade e nem habilitação para dirigir.')
}