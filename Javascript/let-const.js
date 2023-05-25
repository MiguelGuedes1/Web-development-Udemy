// variaveis let que sejam criadas entre {} ex id´s funçoes etc.. têm um valor reservado a aquele escopo

let n=20
let condicao=5

if(condicao<10){
    let n=99
    console.log(n)
}

console.log(n)