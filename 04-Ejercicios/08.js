/**
 * Crear lagoritmo que tome un array de objetos y devuelva un array de pares
 */

let array =[
{id: 1,name: "Luis"},
{id: 2,name: "Maria"},
{id: 3,name: "Juan"}];

let pares = [
    [1, "Luis"],
    [2, "Maria"],
    [3, "Juan"]
]

function arrayIndice(arr){
    let pares = [];
    for(idx in arr){
        let elemento = arr[idx];
        pares[idx] = [elemento.id, elemento.name];
    }
    return pares;
}
let resultado = arrayIndice(array);
console.log(resultado); // [[1, "Luis"], [2, "Maria"], [3, "Juan"]]
