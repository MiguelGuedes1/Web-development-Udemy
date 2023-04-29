// funçao para saber se um convidado esta na lista de uma festa em que os nomes estao guardados num array

function guestlist(teu_nome){
    var convidados_vip=["Dinis","Liliana","Miguel","Maria"]

    if(convidados_vip.includes(teu_nome)){
        console.log("Seu nome esta na lista,pode entrar")
    }
    else{
        console.log("Seu nome nao esta na lista, saia por favor")
    }

}

guestlist("Miguel")