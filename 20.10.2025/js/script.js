function exibir(){
    document.getElementById("deslize").innerHTML = "Seu mouse esta sobre o texto";
}

function retirar(){
    document.getElementById("deslize").innerHTML = "";
} 

function trocarCor(){
    document.getElementById("colunaCor").style.color='red';
}

function tirarCor(){
    document.getElementById("colunaCor").style.color='black';
}

function trocarTam(){

    if(document.getElementById("colunaTam").style.fontSize == "2rem"){
        document.getElementById("colunaTam").style.fontSize = "";
        document.getElementById("colunaTam").querySelector("h3").style.fontSize = "";
    }else{
        document.getElementById("colunaTam").style.fontSize = "2rem";
        document.getElementById("colunaTam").querySelector("h3").style.fontSize = "2rem";
    }
}


function alterarLamp(){
    let lamp = document.getElementById("lamp")
    if(lamp.src.includes("img/pic_bulboff.gif")){
        lamp.src = "img/pic_bulbon.gif"
    } else{
        lamp.src = "img/pic_bulboff.gif"
    }

}