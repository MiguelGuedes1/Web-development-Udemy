// Crie um programa em que diga ao utilizador se o ano que ele inseriu é um ano bissexto
 
/* Anos bissextos são aqueles múltiplos de 4
   Esses anos não podem ser multiplos de 100, exceto os múltiplos de 400 */

const prompt = require('prompt-sync')();


function anobissexto(ano_utilizador){
   

if(ano_utilizador%4==0 && (ano_utilizador%100!=0 || ano_utilizador%400==0) ){
        console.log("O ano que inseriu é bissexto")
    }
else{
    console.log("O ano que inseriu não é bissexto")
 }

}

anobissexto(2004)




