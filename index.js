function insertarElemento(evt){
    evt.preventDefault();
    let cadenaArreglo = document.getElementById("array").value;
    let elemento = document.getElementById("elemento").value;
    let indice = document.getElementById("indice").value;
    indice = parseInt(indice);
    let arreglo = cadenaArreglo.split(',');
    console.log(arreglo, elemento, indice);
    document.getElementById("salida").innerHTML =  "<p> el arreglo nuevo es" + arreglo +  "</p>";

}

document.getElementById("check").addEventListener("click", insertarElemento, false);