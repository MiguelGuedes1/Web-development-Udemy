// unir arrays com spread operator

const array_1=[1,2,3,34]

const array_2=[5,6,88,999]

const array_3=[...array_1,...array_2]     // usas os tres pontinhos para concatenar

//console.log(array_3)

// unir arrays na criaçao de outro array

const array_4=[1000,1001,...array_2]

//console.log(array_4)


// criar um objecto com os elementos de outros elementos

carro={nome:"Renault"}
ano={ano:2020}
cor={cor:"Azul"}
desportivo={desportivo:true,suspensao:"Ar"}

// criacao de novo objecto

const detalhes_carro={...carro,...ano,...cor,...desportivo,dono:"Miguel Guedes"}    // alem de unir podes criar elementos novos como o dono aqui

console.log(detalhes_carro)




