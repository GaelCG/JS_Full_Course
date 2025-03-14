/**
 * Crear un algoritmo que devuelda un array
 * de objetos en base a pares
 */
let pairs = [
    [1, { name: 'Juan' }],
    [2, { name: 'Pedro' }],
    [3, { name: 'Diego' }]
];

function collection(pairs){
   let arr = [];
   for(idx in pairs){
       let elemento = pairs[idx];
       arr[idx] = elemento[1];
       arr[idx].id = elemento[0];
   }
   return arr;
}
let result = collection(pairs);
console.log(result); // [{ id: 1, name: 'Juan' }, { id: 2, name: 'Pedro' }, { id: 3, name: 'Diego' }]
