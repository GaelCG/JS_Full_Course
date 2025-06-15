function getProto(obj) {
    return Object.getPrototypeOf(obj);
}
function Entidad(){}

Entidad.prototype.save = function(){
    console.log('Guardando desde entidad' );
}

function User(){}
User.prototype.save = function(){
    console.log('Guardando desde user' );
}

Object.setPrototypeOf(User.prototype, Entidad.prototype);
const u = new User();
console.log( getProto(u).save ); // Entidad {}
//console.log(u.save()); // Guardando desde user