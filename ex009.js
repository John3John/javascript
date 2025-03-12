function Podometro(){
    this.passos = 0

    setInterval(function(){
        this.passos++
        console.log(this.passos)
    }.bind(this),1000)
}

new Podometro

/*Função para contar passos, usando .bind(this)
para aponta-lo para dentro da função.*/


//-----------------Exercício--------------------
//Fazer um progama que tenha um temporizador.

function temporizador(){
    this.tempo = 0

    setInterval(function(){
        this.tempo++
        console.log(this.tempo)
    }.bind(this),500)
}

new temporizador



//-----------------Exercício2--------------------
//Fazer um progama que tenha um temporizador regressivo.

function cont_regressivo(){
    this.regressivo = 8

    setInterval(function(){
        this.regressivo--
        console.log(this.regressivo)
    }.bind(this),1000)
}

new cont_regressivo



//-----------------Exercício_3--------------------
//Usando uma outra forma de "amarrar o 'this'"

function contagem(){
    this.contar = 0

    const self = this
    setInterval(function(){
        this.contar++
        console.log(this.contar)
    },500)
}

new contagem









