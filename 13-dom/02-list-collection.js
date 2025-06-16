let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
console.log(collection, list);

//let item1 = collection.namedItem('chanchito');
//let item2 = collection.item(3);
//let item3 = collection[3];

// iterar elementos 
// for ( let el of collection) {
//     console.log(el);
// }
// Array.from(collection).forEach(el =>  console.log(el));

// convertir a array
// [...collection].forEach(el => console.log(el));
// // convertir a array

// let item = list.item(3);
// let item2 = list[3];
//list.forEach(el => console.log(el));
let entries = list.entries();
let keys = list.keys();
let values = list.values();