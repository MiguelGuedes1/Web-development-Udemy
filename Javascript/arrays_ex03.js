/*  cria uma funçao que escolha um nome a sorte de um array  */

const prompt = require('prompt-sync')();

function escolhernome(nomes){
    return nomes[Math.floor(Math.random() * nomes.length)];
  }
  


guestlist=['']
numero_convidados=prompt("Insira o numero de convidados: ")

  for(var i=0;i<numero_convidados;i++){
    guestlist[i]=prompt(`Digite o nome do ${i+1} convidado: `)
  }

console.log(`Os convidados sao ${guestlist}`)
console.log(`Quem vai pagar o jantar hoje é o ${escolhernome(guestlist)}`)


