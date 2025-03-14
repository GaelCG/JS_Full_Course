const usuarios = [
    { nombre: 'Javier', id: 23 },
    {nombre: 'lucas', id: 18},
]

//const resultado = usuarios.indexOf({id: 18, name: 'lucas'});
const resultado = usuarios.find((usuario) => 
    usuario.id === 18);
console.log(resultado); // -1