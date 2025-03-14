/**
 * Crear algoritmo que devuelda cantidad de numeros
 * positivos, negativos y ceros en un array
 */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function countNumbers(arr) {
    let positivo = 0;
    let negativo = 0;
    let ceros = 0;
    
    for(numero of arr){
        if (numero > 0){
            positivo++;
        }else if(numero < 0){
            negativo++;
        }else{
            ceros++;
        }
    }
    return [positivo, negativo, ceros];
}
let valores = countNumbers(array);
console.log("Positivos: "+ valores[0] + ", Negativos:" +valores[1]+ ", Ceros: "+valores[2]); 