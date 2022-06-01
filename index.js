function print(mat){
    let renglon = ""
    for (let i=mat.length-1; i >= 0 ; i-- ){
        renglon="[ "
        for(let j=mat[0].length-1; j >= 0 ; j--){
            renglon += ""+mat[i][j]+ " ";
        }
        renglon += "]"
        console.log(renglon);
    }
}

function sumaMat(matA, matB){
    if(matA.length === matB.length && matA[0].length === matB[0].lengt){ 
        let R = new Array(matA.length);
        for(let i=0; i< R.length; i++){
            R[i] = new Array(matA[0].length)
        }
        
        for (let i=0; i < matA.length; i++ ){
            for(let j=0; j < matA[0].length; j++){
                R[i][j] = matA[i][j] + matB[i][j];
                // console.log(respuestaAr);
            }
        }
        return R;
    }
    else 
        return "operacion en discordancia de matrices";
}

function restaMat(matA, matB){
    let R = new Array(matA.length);
    for(let i=0; i< R.length; i++){
        R[i] = new Array(matA[0].length)
    }

    for (let i=0; i < matA.length; i++ ){
        for(let j=0; j < matA[0].length; j++){
            R[i][j] = matA[i][j] - matB[i][j];
           // console.log(respuestaAr);
        }
    }
    return R;
}

function multiplicaMat(matA, matB){
    let R = new Array(matA.length);
    for(let i=0; i< R.length; i++){
        R[i] = new Array(matA[0].length)
    }

    for (let i=0; i < matA.length; i++ ){
        for(let j=0; j < matA[0].length; j++){
            let suma=0;
            for(let k=0; k < matA[0].length; k++){
                debugger;
                suma += matA[i][k] * matB[k][j];
            }
            R[i][j]= suma;
        }
    }
    return R;
}

let A = [[2,0,1,1],
        [3,0,0,1],
        [5,1,1,1]]

let B = [[1,0,1],
        [1,2,1],
        [1,1,0]]

//print(A)
//console.table(B)

let matR = sumaMat(A, B);
console.table(matR)

matR = multiplicaMat( A, B);
console.table(matR)
/*
function print(value) {
    const precision = 14
    document.write(math.format(value, precision) + '<br>')
  }

  // functions and constants
  print(math.round(math.e, 3))            // 2.718
  print(math.atan2(3, -3) / math.pi)      // 0.75
  print(math.log(10000, 10))              // 4
  print(math.sqrt(-4))                    // 2i
  print(math.pow([[-1, 2], [3, 1]], 2))   // [[7, 0], [0, 7]]
  print(math.derivative('x^2 + x', 'x'))  // 2 * x + 1

  // expressions
  print(math.evaluate('12 / (2.3 + 0.7)'))    // 4
  print(math.evaluate('12.7 cm to inch'))     // 5 inch
  print(math.evaluate('9 / 3 + 2i'))          // 3 + 2i
  print(math.evaluate('det([-1, 2; 3, 1])'))  // -7

  // chained operations
  const a = math.chain(3)
      .add(4)
      .multiply(2)
      .done()
  print(a)  // 14


let arreglo = [1, 2, 3, 4, 5];
let arreglo2d = [[1,2,3, 10],
                [4,5,6, 11],
                [7,8,9, 12]]

let arreglo3d = [ [[1,2,3],[3,4,5],[5,6,7]], [[7,8,9],[9,10,11],[11,12,13]], [[13,14,15],[15,16,17],[17,18,19]] ]

 let respuestaAr = arreglo3d[0][0][0]  * 5;
 
 //console.log(respuestaAr);
 /*let indice = 0;
 x
 indice = 1;
 respuestaAr = arreglo[indice]  * 5 ;
 console.log(respuestaAr);
 indice = 2;
 respuestaAr = arreglo[indice]  * 5 ;
 console.log(respuestaAr);
 for (let i=0; i < arreglo.length; i++ ){
    respuestaAr = arreglo[i]  * 5 ;
    console.log(respuestaAr);
 }

for (let i=0; i < arreglo2d.length; i++ ){
    for(let j=0; j < arreglo2d[0].length; j++){
        respuestaAr = arreglo2d[i][j]  * 5 ;
       // console.log(respuestaAr);
    }
}
console.table(arreglo2d)
 /*console.log(arreglo2d.length);
 console.log(arreglo2d[0].length);
for (let i=0; i < arreglo3d.length; i++ ){
    for(let j=0; j < arreglo3d[0].length; j++){
        for(let k=0; k < arreglo3d[0][0].length; k++){
            respuestaAr = arreglo3d[i][j][k]  * 5 ;
            console.log(respuestaAr);
        }
    }
}*/