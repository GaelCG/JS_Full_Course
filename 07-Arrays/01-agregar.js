const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
//a gregar al final del array 
letras.push('k');

// agrear al principio del array
letras.unshift('z');

console.log(letras); // ['z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
letras.splice(2,0,1,2);
console.log(letras); // ['z', 'a', 1, 2, 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']

// splice (posicion, cantidad de elementos a borrar, elementos a agregar)
/**
 * splice(2, 0, 1, 2) => agrega 1 y 2 en la posicion 2
 * splice(2, 1, 1, 2) => reemplaza el elemento en la posicion 2 por 1 y 2
 * splice se usa para agregar, reemplazar y eliminar elementos de un array
 * 
 */