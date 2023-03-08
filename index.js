//
function verificarFrase(evt){
    
    evt.preventDefault();
    let frase = document.getElementById("frase").value;
    //console.log(frase)
    document.getElementById("salida").innerHTML =  "<p>La frase escrita: <strong>" + frase + "</strong> es o no es palindromo</p>";

}

document.getElementById("check").addEventListener("click", verificarFrase, false);