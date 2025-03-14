const usuarios = [
    { nombre: 'manuel', edad: 34, plan : 'premium' },
    { nombre: 'luisa', edad: 25, plan : 'free' },
    { nombre: 'juan', edad: 45, plan : 'premium' },
    { nombre: 'pedro', edad: 23, plan : 'free' },
    { nombre: 'pablo', edad: 56, plan : 'gold' },
    { nombre: 'maria', edad: 29, plan : 'free' }
];

function cuantosPremium(usuarios){
    return usuarios.filter(n=> n.plan != 'free' ).length;
}


function cuantosMayores(usuarios){
    return usuarios.filter(n=> n.edad > 18).length;
}
console.log("Cuantos premium: ",(cuantosPremium(usuarios))); // [{ nombre: 'manuel', edad: 34, plan : 'premium' }, { nombre: 'juan', edad: 45, plan : 'premium' }, { nombre: 'pablo', edad: 56, plan : 'gold' }]
console.log("Cuantos mayores de edad: ", (cuantosMayores(usuarios))); // [{ nombre: 'manuel', edad: 34, plan : 'premium' }, { nombre: 'juan', edad: 45, plan : 'premium' }, { nombre: 'pablo', edad: 56, plan : 'gold' }]