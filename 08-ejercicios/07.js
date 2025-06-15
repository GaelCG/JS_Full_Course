const usuarios = [
    { nombre: 'manuel', edad: 34, plan : 'premium' },
    { nombre: 'luisa', edad: 25, plan : 'free' },
    { nombre: 'juan', edad: 45, plan : 'premium' },
    { nombre: 'pedro', edad: 23, plan : 'free' },
    { nombre: 'pablo', edad: 56, plan : 'gold' },
    { nombre: 'maria', edad: 29, plan : 'free' }
];


function groupBy(array, key) {
   return array.reduce((acc, el) => {
         const tipo = el[key];
         
         return acc;
    }, {});
}

console.log(groupBy(usuarios, 'plan')); // { nombre: 'pablo', edad: 56, plan : 'gold' }