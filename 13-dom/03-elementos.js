let el = document.createElement('p');
el.innerHTML = 'elemento creado';
document.body.append(el);
//el.innerText = 'texto cambiado';
//el.innerHTML = '<strong>Texto cambiado</strong>';
el.style = 'background-color: red; color: white; padding: 10px; border-radius: 5px;';
el.clasName = 'parrafo';
el.id = 'mi-parrafo';
//el.miPropiedad = 'mi valor personalizado';
el.setAttribute('mipropiedad', 'mi valor personalizado');
el.getAttribute('mipropiedad'); // 'mi valor personalizado'
el.hasAttribute('mipropiedad'); // true