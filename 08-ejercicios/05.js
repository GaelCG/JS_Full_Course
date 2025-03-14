const usuarios = [
    { nombre: 'manuel', edad: 34, plan : 'premium' },
    { nombre: 'luisa', edad: 25, plan : 'free' },
    { nombre: 'juan', edad: 45, plan : 'premium' },
    { nombre: 'pedro', edad: 23, plan : 'free' },
    { nombre: 'pablo', edad: 56, plan : 'gold' },
    { nombre: 'maria', edad: 29, plan : 'free' }
];

function mayor(usuarios){
    return usuarios.reduce((acc, usuario) => {
        if(usuario.edad > acc.edad){
            return usuario;
        }
        return acc;
    });
}

console.log(mayor(usuarios)); // { nombre: 'pablo', edad: 56, plan : 'gold' }