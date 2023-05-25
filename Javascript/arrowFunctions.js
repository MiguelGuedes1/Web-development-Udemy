// Arrow fucntions

// metodo tradicional de funçoes -- 

 function funçao(idade){
    if(idade>=18){
        console.log("Podes tirar a carta")
    }
    else{
        console.log(" Nao podes tirar a carta")
    }
}

funçao(133)


// funcao com arrow function

let funçao2=(idade2)=> {
    if (idade2 >= 18) {
        console.log("Podes tirar a carta")
    }
    else {
        console.log(" Nao podes tirar a carta")
    }
}

funçao2(12)

let utilizadores={
    nome:"Miguel",
    idade:21,
    salario:1000,
    
    exibir_infos:()=>{
        console.log(this.nome)
        console.log(this.idade)
        console.log(this.salario)
    }

  }




        