function getdados(){
    let dados = document.querySelectorAll("input");
    let divdados = document.getElementById("dados"); 

    for(let i=0; i<dados.length; i++){
        let paragrafo = document.createElement("p");
        paragrafo.innerHTML = dados[i].value;
        divdados.appendChild(paragrafo);
    }

}