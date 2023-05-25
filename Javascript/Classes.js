// Criaçao de uma classe

class jogadores_porto{
    constructor(nome,salario){
        this.nome=nome
        this.salario=salario
    }

    salarioAposRendimento(salario){
        return this.salario +20000
    }
}

const Guarda_Redes=new jogadores_porto("Diogo Costa",200000)

//console.log(Guarda_Redes)

console.log(Guarda_Redes.salarioAposRendimento())

