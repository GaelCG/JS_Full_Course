const usuarios = [
    {edad: 19, nombre:'Maria'},
    {edad: 21, nombre: 'Gael'},
    {edad: 16, nombre: 'Costilla'},

];

const lista = usuarios.filter(usuario => usuario.edad > 18).map(usuario => usuario.nombre);
console.log(lista); // ['Gael', 'Costilla']