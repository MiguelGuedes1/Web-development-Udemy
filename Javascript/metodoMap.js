// metodo para percorrer array e MODIFICAR dados

const produtos= [
    {
        nome:"Calça",
        id:2,
        valor:50,
        numero_cliente:88
    },
    {
        nome:"Camisa",
        id:5,
        valor:25,
        numero_cliente:66
    },
    {
        nome:"Sapato",
        id:7,
        valor:65,
        numero_cliente:99
    },
    {
        nome:"Casaco",
        id:1,
        valor:250,
        numero_cliente:43
    },
]

produtos.map((produto)=>{
        if(produto.valor>200){
            produto.Especial="Categoria Premium"   // defines o novo parametro
        }
})

console.log(produtos)

