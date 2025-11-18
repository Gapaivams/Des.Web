function salvar(){
    const nome = document.getElementById("nome").value;
    const genero = [...document.querySelectorAll("input[type='radio']:checked")].map(rd => rd.value);
    let check = null

    for(let i = 0; i<genero.length;i++){
        check = genero[i];
    }

    document.getElementById("msg").innerHTML = 'Olá, ' +nome+'! ' + 'Vejo que você gosta de ' + genero
}