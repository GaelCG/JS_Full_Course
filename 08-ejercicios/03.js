const usuarios = [
    { nombre: 'manuel', edad: 34, plan : 'premium' },
    { nombre: 'luisa', edad: 25, plan : 'free' },
    { nombre: 'juan', edad: 45, plan : 'premium' },
    { nombre: 'pedro', edad: 23, plan : 'free' },
    { nombre: 'pablo', edad: 56, plan : 'gold' },
    { nombre: 'maria', edad: 29, plan : 'free' }
];

function obtenerUsuariosPremium(usuarios){
    return usuarios.filter(usuario => usuario.plan === 'premium' || usuario.plan === 'gold');
}

console.log(obtenerUsuariosPremium(usuarios)); // [{ nombre: 'manuel', edad: 34, plan : 'premium' }, { nombre: 'juan', edad: 45, plan : 'premium' }, { nombre: 'pablo', edad: 56, plan : 'gold' }]