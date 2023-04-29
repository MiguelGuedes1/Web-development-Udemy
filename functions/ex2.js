const prompt = require('prompt-sync')();

/*  Desafio do Calculador de IMC
Crie um calculador de IMC usando funções JavaScript.

O Índice de Massa Corporal (IMC) é uma forma de estimar a quantidade de gordura corporal. É usado na 
medicina para calcular o risco de doenças cardíacas.
Você pode calculá-lo usando a fórmula abaixo, onde o peso é dividido pela altura ao quadrado.

BMI=PESO/ALTURA ao quadrado

Seu desafio é criar uma função que receba o peso e a altura como entradas e forneça o valor de IMC 
calculado como saída. A saída deve ser arredondada para o número inteiro mais próximo.

O primeiro parâmetro deve ser o peso e o segundo deve ser a altura.

NOTA: Você não precisa escrever nenhum alerta, prompt ou console logs. Seu código deve conter apenas a 
função, o resultado deve ser retornado pela função. Você não precisa chamar a função.   */

function calc_bmi(peso,altura){
    bmi=peso/(altura*2)
    return Math.round(bmi)
}


var peso_utilizador=prompt("Insira o seu peso: ")
var altura_utilizador=prompt("Insira a sua altura: ")

bmi= calc_bmi(peso_utilizador,altura_utilizador)

console.log(`A sua massa gorda corporal ou seja o seu bmi é ${bmi}`)



