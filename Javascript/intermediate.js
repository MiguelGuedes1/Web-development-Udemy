const prompt = require('prompt-sync')();

console.log("---------Love Calculator---------")

var primeiro_nome=prompt("Insira o primeiro nome: ")
var segundo_nome=prompt("Insira o segundo nome: ")
var percentagem_amor = Math.random();

percentagem_amor=percentagem_amor*100
percentagem_amor=Math.floor(percentagem_amor) +1
console.log(`${primeiro_nome} e ${segundo_nome} têm ${percentagem_amor}% de chances de serem um casal`);

if(percentagem_amor<=50){
    console.log("Esqueçam nao vao ser um casal")
}

else if(percentagem_amor>50 && percentagem_amor<=75){
    console.log("É provavel voces serem um casal no futuro")
}

else if(percentagem_amor>75){
    console.log("Voces vao ser um casal")
}


