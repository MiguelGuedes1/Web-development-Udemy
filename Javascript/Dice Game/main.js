function startgame(){

// Dado 1
var randomnumber1=Math.floor(Math.random()*6)+1

alterarimagem="images/"+"dice"+randomnumber1+".png"

dado1=document.querySelector(".img1")

dado1.setAttribute("src",alterarimagem)

// Dado 2

var randomnumber2=Math.floor(Math.random()*6)+1

alterarimagem="images/"+"dice"+randomnumber2+".png"

dado2=document.querySelector(".img2")

dado2.setAttribute("src",alterarimagem)

// Resultado do lançamento dos dados

var resultado=document.querySelector(".container h1")

    if(randomnumber1>randomnumber2){
        resultado.innerHTML=`Player 1 win`
    }

    else if(randomnumber2>randomnumber1){
        resultado.innerHTML=`Player 2 win`
    }

    else{
        resultado.innerHTML=`Draw`
    }

}





