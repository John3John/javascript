//Função anônima exemplo:
const soma = function (x, y){
    return x + y
}


//Exercícios:
const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(3, 4))
}

imprimirResultado(3, 4)

imprimirResultado(3, 4, soma)


imprimirResultado(3, 4, function(x, y){
    return x - y
})


imprimirResultado(3, 4, (x, y) => x * y)



const pessoa = {
    falar: function(){
        console.log('Opa')
    }
}

pessoa.falar()

