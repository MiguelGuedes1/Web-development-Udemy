 // $("h1").css("color","blue");         alterar css de um elemento
//  $("button").css("background","red")   alterar css de um elemento

  //  $("button").addClass("adicionarcursor") // adicionar uma classe previamente criada no CSS


  $("button").click(function(){
    $("h1").css("color","red")              // adicionar um eventlistener.... ex:click
})

/*     $("button:eq(1)").click(function(){
    $("h1").css("color","red")
})   */                                     // para especificar um elemento usas o :eq(0/1/2/3)


  

$("html").keypress(function(event){                 // evento de tecla pressionada
    var teclapressionada=event.key
    if(teclapressionada==="a"){
    $("h1").text("Mike vai ser programador")}  /*.css("color","blue")*/ 
})


/*      $("h1").before("<button>botao criado</button>") // botao criado antes do H1
$("h1").after("<button>botao criado</button>")  // botao criado depois do H1
$("h1").prepend("<button>botao criado</button>")    // botao criado ao lado esq. do H1
$("h1").append("<button>botao criado</button>")     // botao criado ao lado dir. do H1     */









/*  $("button").click(function(){
    $("h1").text("Mike vai ser programador")
    $("h1").remove()
    $("h1").show()
    $("h1").hide()
    $("h1").Toggle()
    $("h1").slideup()
    $("h1").slidedown()
})    */    


/*    $("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5})     // criar animaçao
})    */



$("button").click(function(){
    $("h1").fadeToggle()
    
})