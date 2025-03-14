const letras = ['a', 'b', 'c', 'd', 'e', 
                'f', 'g', 'h', 'i', 'j'];
//letras.pop(); // elimina el ultimo elemento
//letras.shift(); // elimina el primer elemento
// comienzo 
//let comienzo = letras.shift();
//console.log(comienzo, letras); // a

// en medio
console.log(letras); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
letras.splice(2, 2); // elimina el elemento en la posicion 2
console.log(letras); // ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
