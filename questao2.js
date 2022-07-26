var numeroEntrada = 30 //Número que deseja saber se pertence à sequência Fibonacci
var somaFibonacci = 0
var numeroAnterior = 0
var numeroAtual = 1
var pertenceFibonacci = false

while (somaFibonacci <= numeroEntrada) {
    if (somaFibonacci == numeroEntrada) {
        pertenceFibonacci = true
    }
    somaFibonacci = numeroAnterior + numeroAtual
    numeroAnterior = numeroAtual
    numeroAtual = somaFibonacci
    console.log(somaFibonacci)
}

var resultado = pertenceFibonacci ? "Pertence" : "Não pertence"
console.log(resultado)
