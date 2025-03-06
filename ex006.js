function rand({min = 0, max = 2000}){
    const valor = Math.random() * (max - min) + (min)
    return Math.floor(valor)
}

const objeto = {max: 50, min: 40}
console.log(rand(objeto))