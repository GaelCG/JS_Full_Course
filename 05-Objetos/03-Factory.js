// Objective: Crear un objeto con una función
// Declaration of the function  

function createUser(name, email){
    return{
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log('Recuperando clave...');
    },
};
}

let user1 = createUser('Gael', 'gael@gmail.com');
let user2 =createUser('Alan', 'alan@alan');
console.log(user1);
console.log(user2);