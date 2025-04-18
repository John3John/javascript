console.log(typeof Object)       // verifica o tipo da de Object 
console.log(typeof new Object()) // cria um objeto 


const Cliente = function() {} // cria minha própria função chamada Cliente.
console.log(typeof Cliente)   // verificando o tipo de Cliente
console.log(typeof new Cliente) // instanciando uma função com o 'new Cliente' que cria um objeto


class Produto {} // ES 2015 (ES6) //Crei uma classe, mas internamente na verdade é uma função.
console.log(typeof Produto)
console.log(typeof new Produto()) // Instanciando essa classe temos o objeto.


//EX
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o seu nome: ', (nome) => {
    console.log(`É um prazer te conhecer ${nome}! Seja Bem-Vindo ao curso de Javascript!`);
    rl.close();
});