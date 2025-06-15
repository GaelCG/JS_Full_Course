const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 18, nombre: 'Luca', plan: 'free' },
    { edad: 19, nombre: 'Gael', plan: 'free' },
    { edad: 20, nombre: 'Mar', plan: 'gold' },
    { edad: 21, nombre: 'Luna', plan: 'premium' },
];

const pagos = usuarios.filter ( u => u.plan !== 'free' && u.edad >= 18)

pagos.sort((a,b) => {
    if (a.edad < b.edad) {
        return 1;
    }
    if (a.edad > b.edad) {
        return -1;
    }
    return 0;
});

const lista = pagos.map( u => 
    `<li>${u.nombre}</li>`);

const html = `
<ul> 
    ${lista.join('')}
</ul>`
console.log(html);