function Podometro(){
    this.passos = 0

    setInterval(function(){
        this.passos++
        console.log(this.passos)
    }.bind(this),1000)
}

new Podometro