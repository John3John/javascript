// par chave_valor

const saudacao = 'Hello!' //Contexto 1

function exec(){
    const saudacao = 'Tudo bem?'
    return saudacao
}

const cliente = {
    nome: 'Wesley',
    idade: 37,
    peso: 90,
    endereco: {
        logradouro: 'Rua: Se fosse fácil não tinha tanta vaga.',
        numero: 157
    }
}

console.log(exec())
console.log(saudacao)
console.log(cliente)