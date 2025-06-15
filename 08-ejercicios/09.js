const usuario = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 18, nombre: 'Luca', plan: 'free' },
    { edad: 19, nombre: 'Gael', plan: 'free' },
    { edad: 20, nombre: 'Mar', plan: 'gold' },
    { edad: 21, nombre: 'Luna', plan: 'premium' },
]

const users = [
    { age: 17, name: 'Nico', plan: 'premium' }, 
    { age: 18, name: 'Luca', plan: 'free' },
    { age: 19, name: 'Gael', plan: 'free' },
    { age: 20, name: 'Mar', plan: 'gold' },
    { age: 21, name: 'Luna', plan: 'premium' },
]

// unificar las estructuras de usuarios y users
// fusionar los array
// ordenar por edad
/// crear platilla html:
// <li>nombre: name, Edad: age </li>

const usuariosNormalizados = usuario.map( u => ({
    age: u.edad,
    name: u.nombre,
    plan: u.plan
}));

const usuariosUnidos = [...usuariosNormalizados, ...users];

const usuariosOrdenados = usuariosUnidos.sort((a, b) => a.age - b.age);

const platillaHtml = usuariosOrdenados.map( u =>
    `<li>Nombre: ${u.name}, Edad: ${u.age}</li>`
).join('');
console.log(platillaHtml);