const user = {id: 1};
user.name = 'John';
user.guardar = function() {
    console.log('Guardando usuario',user.guardadr );
}
user.guardar();
console.log(user);

delete user.guardar;
delete user.name;

console.log(user);

// EVITAR QUE UN OBJETO SEA MODIFICADO
// Object.freeze(user);
Object.freeze(user);
user.name = 'Jane';
user.id = 2;
console.log(user);
// Para modificar una propiedad de un objeto con Object.freeze
// se debe hacer de la siguiente manera
const user2 = Object.seal({id: 1, name: 'John'});
user2.name = 'Jane';
console.log(user2);
// Object.seal evita que se agreguen o eliminen propiedades
// pero si permite modificarlas
user2.age = 30;
console.log(user2);