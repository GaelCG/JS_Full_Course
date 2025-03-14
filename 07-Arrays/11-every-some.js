let usuarios = [
    {id: 1, activo: true},
    {id: 2, activo: true},
    {id: 3, activo: true},
    
];

/*let todosActivos = usuarios.every(u =>{
    console.log('Todos activos', u.id );
    return u.activo;
}); // true*/

let algunosActivo = usuarios.some(u =>{
    console.log('Alguno activo', u.id );
    return u.activo;
}); // true
console.log(algunosActivo);