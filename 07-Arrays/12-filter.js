const usuarios = [
    {name: 'gael', age: 20},
    {name: 'jorge', age: 25},
    {name: 'luis', age: 30},
    {name: 'jose', age: 35},
];

const mayoresDe30 = usuarios.filter(usuario => usuario.age > 30);
console.log(mayoresDe30);