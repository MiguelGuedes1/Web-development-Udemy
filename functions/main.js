const prompt = require('prompt-sync')();

/* Neste desafio, você vai criar uma função que nos diga quantos dias, semanas e 
meses nos restam se vivermos até os 90 anos.

Ele usará sua idade atual como entrada e console.logs uma mensagem com nosso tempo restante neste formato:
Você tem x dias, y semanas e z meses restantes.

Onde x, y e z são substituídos pelos números reais calculados.

Para este desafio, suponha que o ano tenha 365 dias, 52 semanas e 12 meses.  */

function lifeinweeks(age){

mesestotal=90*12  //1080
semanastotal=90*52  //4680
diastotal=90*365  //32850

usuario_meses_total=age*12
usuario_semanas_total=age*52
usuario_dias_total=age*365

console.log(`You have ${diastotal-usuario_dias_total} days, ${semanastotal-usuario_semanas_total} weeks, and ${mesestotal-usuario_meses_total} months left.`)
}

idade=prompt("Digite a sua idade: ")
lifeinweeks(idade)
