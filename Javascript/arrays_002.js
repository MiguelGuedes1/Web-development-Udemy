/*   Cria um programa com uma sequencia de numeros de 0 a 50 em que se o numero for divisivel por 2
 em vez de aparecer o numero dois na tela(terminal) aparece a palavra fizz, se for divisivel por 5 aparece
a palavra buzz e se for divisivel por ambos aparece a palavra fizzbuzz   */

var numeros_aleatorios = []
var contador = 0

function acrescentar_numero() {
contador++;

    if(contador%3==0&&contador%5==0){
        numeros_aleatorios.push("FizzBuzz");
    }
    else if(contador%3==0){
        numeros_aleatorios.push("Fizz");
    }
    else if(contador%5==0){
        numeros_aleatorios.push("Buzz");
    }

    else{
        numeros_aleatorios.push(contador)
    }

    console.log(numeros_aleatorios)
}

// Chamadas da função acrescentar_numero():
acrescentar_numero();









