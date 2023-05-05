var numero_de_botoes=document.querySelectorAll(".drum").length

for(var i=0;i<numero_de_botoes;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",clicarbotao) // percorre o for pelo numero de botoes,neste caso sao 7

function clicarbotao(){
   

    var sonsdiferentes=this.innerHTML // this dentro da função clicarbotao refere-se ao botão atual que acionou o evento click.
    var animacao=this
    var som=null

 
    switch(sonsdiferentes){
        case "w":
            var som = new Audio('sounds/crash.mp3');
            som.play();
            animacao.classList.add("pressed")
            setTimeout(function() {
                animacao.classList.remove("pressed")},100)
            
            break;
        case"a":
            var som = new Audio('sounds/kick-bass.mp3');
            som.play();
            animacao.classList.add("pressed")
            setTimeout(function() {
                animacao.classList.remove("pressed")},100)
            break;
        case"s":
            var som = new Audio('sounds/snare.mp3');
            som.play();
            animacao.classList.add("pressed")
            setTimeout(function() {
                animacao.classList.remove("pressed")},100)
            break;
        case"d":
            var som = new Audio('sounds/tom-1.mp3');
            som.play();
            animacao.classList.add("pressed")
            setTimeout(function() {
                animacao.classList.remove("pressed")},100)
            break;
        case"j":
            var som = new Audio('sounds/tom-2.mp3');
            som.play();
            animacao.classList.add("pressed")
            setTimeout(function() {
                animacao.classList.remove("pressed")},100)
            break;
       
        case"k":
            var som = new Audio('sounds/tom-3.mp3');
            som.play();
            animacao.classList.add("pressed")
            setTimeout(function() {
                animacao.classList.remove("pressed")},100)
            break;
        case"l":
            var som = new Audio('sounds/tom-4.mp3');
            som.play();
            animacao.classList.add("pressed")
            setTimeout(function() {
                animacao.classList.remove("pressed")},100)
            break;
    
        default: console.log(sonsdiferentes)
    }
}
}

document.addEventListener("keypress",pressionarteclas)    // criar funçao em que o utilizador clica numa tecla e algo acontece        tipo funçao = keypress

function pressionarteclas(event){       // event é o acontecimento de algo ... ou seja se o utilizador clica numa tecla algo acontece
    var teclapressionada=event.key     // aqui defini se que a variavel teclapressionada é igual a uma determinada tecla pressioanda
       switch(teclapressionada){
        case "w":
            var som = new Audio('sounds/crash.mp3');
            som.play();
            break;
        case"a":
            var som = new Audio('sounds/kick-bass.mp3');
            som.play();
            break;
        case"s":
            var som = new Audio('sounds/snare.mp3');
            som.play();
            break;
        case"d":
            var som = new Audio('sounds/tom-1.mp3');
            som.play();
            break;
        case"j":
            var som = new Audio('sounds/tom-2.mp3');
            som.play();
            break;
        case"k":
            var som = new Audio('sounds/tom-3.mp3');
            som.play();
            break;
        case"l":
            var som = new Audio('sounds/tom-4.mp3');
            som.play();
            break;
    
        default: console.log(sonsdiferentes)
       }
    }





//var som = new Audio('sounds/tom-1.mp3');
//som.play();