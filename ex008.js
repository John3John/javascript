const pessoa = {
    saudacao : 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}


pessoa.falar()
const falar = pessoa.falar
falar() 
//Saída ficou (undefined) devido a um conflito de paradgimas.
//Paradigma funcional vs Paradigma Orientado a Objeto.(OO)



const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

//bind serve para amarrar o 'this', para que ele aponte para onde queremos.