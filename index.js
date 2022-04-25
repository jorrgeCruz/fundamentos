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
        console.log(respuestaAr);
    }
}*/
 /*console.log(arreglo2d.length);
 console.log(arreglo2d[0].length);*/
for (let i=0; i < arreglo3d.length; i++ ){
    for(let j=0; j < arreglo3d[0].length; j++){
        for(let k=0; k < arreglo3d[0][0].length; k++){
            respuestaAr = arreglo3d[i][j][k]  * 5 ;
            console.log(respuestaAr);
        }
    }
}