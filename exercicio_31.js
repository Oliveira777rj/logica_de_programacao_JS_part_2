// adicione o propriedade janelas com valor 20 e remova propriedade rodas

let onibus = {

    rodas:8,
    limite:40,
    portas:2
}

onibus.janelas = 20
delete onibus.rodas

console.log(onibus.janelas)
console.log(onibus.rodas) // excluido

