let el = document.createElement('p');
el.innerText = 'Elemento Creado';

document.body.append(el);
el.remove();

document.body.prepend(el); // Añade al principio del body
let div = document.createElement('div');
div.innerText = 'Div creado';
el.replaceWith(div); // Reemplaza el elemento
document.body.replaceChild(el, div); // Reemplaza el elemento
document.body.appendChild(el); // Añade al final del body
//document.body.insertBefore(div,el);
document.body.insertAdjacentElement('beforebegin', div); // Añade antes del body
document.body.insertAdjacentText('afterbegin', 'Texto al inicio del body'); // Añade texto al inicio del body