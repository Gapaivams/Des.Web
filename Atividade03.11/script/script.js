const prod1 = document.getElementById("produto1")
const prod2 = document.getElementById("produto2")
const prod3 = document.getElementById("produto3")

function clique1(){
    if(prod1.style.backgroundColor == ""){
        prod1.style.backgroundColor = "yellow";
        prod1.querySelector("h2").style.fontSize = "3rem";
    } else {
        prod1.style.backgroundColor = "";
        prod1.querySelector("h2").style.fontSize = ""; 
    }
}
function clique2(){
    if(prod2.style.backgroundColor == ""){
        prod2.style.backgroundColor = "yellow";
        prod2.querySelector("h2").style.fontSize = "3rem";
    } else {
        prod2.style.backgroundColor = "";
        prod2.querySelector("h2").style.fontSize = ""; 
    }
}
function clique3(){
    if(prod3.style.backgroundColor == ""){
        prod3.style.backgroundColor = "yellow";
        prod3.querySelector("h2").style.fontSize = "3rem";
    } else {
        prod3.style.backgroundColor = "";
        prod3.querySelector("h2").style.fontSize = ""; 
    }
}