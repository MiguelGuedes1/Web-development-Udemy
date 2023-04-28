const prompt = require('prompt-sync')();

var name,idade,altura; 

name=prompt("Qual é o seu nome: ")
console.log(name.toUpperCase(0))
idade=prompt("Qual é a sua idade: ")
altura=prompt("Qual é a sua altura: ")

console.log(`O nome do usuario é ${name}, tem ${idade} anos e mede ${altura}m`)

var texto,limite_maximo=140,caracteres_texto;

texto=prompt("Insira um texto: ")
caracteres_texto=texto.length

console.log(`Voce escreveu ${caracteres_texto} caracteres e ainda podia escrever ${limite_maximo-caracteres_texto}`)




