/* var funcionario={
    nome:"Miguel",
    idade:22,
    antigotrabalho:["Hotel Pestana","Mercadona"],
    antigo_salario:1200,
}     */


function funcionario(nome,idade,antigo_salario,domina_ingles){
    this.nome=nome
    this.idade=idade
    this.antigo_salario=antigo_salario
    this.domina_ingles=domina_ingles
    this.limpar_casa=function limpar_casa(){
        console.log("A limpar a casa")
    }


}

var funcionario1=new funcionario ("Miguel",32,800,"Sim")
 console.log(funcionario1.limpar_casa)

 var funcionario2=new funcionario ("Pedro",20,600,"Sim")

 console.log(funcionario2)



