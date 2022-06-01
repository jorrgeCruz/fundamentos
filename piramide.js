let tope = 9

for(let i=1; i<=tope; i++){
    let espacios="";
    let numeroDelRenglon="";
    for(let j =0 ; j < tope-i ; j++){
        espacios += " ";
    }
    for(let j =1 ; j <= i ; j++){
        espacios += j;
        numeroDelRenglon += j; 
    }
    
    espacios += " x 8 + " + i + " = " + (parseInt(numeroDelRenglon) * 8 + parseInt(i));
    console.log(espacios);
}

