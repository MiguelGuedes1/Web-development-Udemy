// O metodo filter serve para filtrar arrays com as condiçoes que desejamos

let numbers=[2,3,43,54,52,23,99,1000]

const maiores_numeros=numbers.filter((x)=>{
    if(x>50){
        return x
    }
})


console.log(maiores_numeros)

// metodo filter para criar novo array de objectos


let utilizadores=[{
    nome:"Miguel",
    idade:32,
    salario:1200,
    disponivel:true
},

{
    nome:"Sara",
    idade:22,
    salario:1500,
    disponivel:false
},

{
    nome:"Quim",
    idade:51,
    salario:700,
    disponivel:false
},

{
    nome:"Matilde",
    idade:18,
    salario:950,
    disponivel:true
}]

const funcionarios_disponiveis=utilizadores.filter((bem_pagos)=>{
   return bem_pagos.salario<1000
})

console.log(funcionarios_disponiveis)