// Destructing com arrays

const frutas=["Banana","Maça","Laranja"]

const[fruta_1,fruta_2,fruta_3]=frutas

console.log(fruta_1)



// destructing com objectos ou seja transformar elementos de um objecto em variaveis

const produto={
    nome:"Calça",
    id:2,
    valor:50,
    numero_cliente:88
}

const {                              // passar elementos para variaveis
    nome:name,
    id,
    valor:value,
    numero_cliente:numero

}=produto

console.log(value)



