/*  Cria uma função em JS que exiba a sequência de fibonnaci. O numero de elementos da sequencia é 
defenido pelo usuario */

function fibonacci_generator(n) {
    var a = 0, b = 1, fibonacci = [0, 1];
     
    for (var i = 2; i < n; i++) {
      fibonacci[i] = a + b;
      a = b;
      b = fibonacci[i];
    }
   
    console.log(fibonacci);
}
    fibonacci_generator(3)




    

