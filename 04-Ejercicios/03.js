/**
 * indice valida que no se menor a cero y que el elemneto exista * en el array
 */

function indice(array, indice){
    if(indice < 0 || indice >= array.length){
        return false;
    }else{
        return array[indice];
    }
}
let resultado = indice([1,2,3,4,5], 20);
console.log("el indice es: ", resultado); // 3