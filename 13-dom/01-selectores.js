//HTMLElement
let htmlElemnt = document.getElementById('cuerpo');
//HTMLCollection -> se parece a un array pero no lo es
let elementosRed = document.getElementsByClassName('red');
//NodeList
let elementosChanchito = document.getElementsByName("chanchito");
//HTMLCollection
let parrafos = document.getElementsByTagName('p');

//HTMLELEMENT
let el = document.querySelector('#cuerpo'); // Devuelve el primer elemento que coincida con el selector
//NodeList
let els = document.querySelectorAll('p'); // Devuelve todos los elementos que coincidan con el selector

let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');
console.log(plive, pstatic);

let nuevoP = document.createElement('p');
document.body.append(nuevoP);
console.log(plive, pstatic);
