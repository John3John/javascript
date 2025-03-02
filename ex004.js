// novo recurso #2015

const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro : 'Rua ABC',
        numero:1000
    }
}

const {nome, idade} = pessoa //{ } as chaves representam um operador de destruturação, tira de dentro pessoa o nome e a idade
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const{endereço:{logradouro,numero}} = pessoa
console.log(logradouro,numero)