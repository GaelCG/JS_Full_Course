/**
 * Crear un array de longitud n, y que sus elementos sean numeros de 1 hasta n
 */

function array(n){
    let arr = [];
    for(let i = 0; i < n; i++){
       arr[i]= i+1;
    }
    return arr;
}

console.log(array(5)); // [1, 2, 3, 4, 5]