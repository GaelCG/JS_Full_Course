function User(){
    this.name = 'hOLA MUndo';
}

function Product (){
    this.name = 'Producto';
}
function Entidad (){}
Entidad.prototype.save = function(){
    console.log('Guardando', this.name);
}
Entidad.prototype.validate = function(){
    console.log('valiadando', this.name);
}
//User.prototype = Entidad.prototype;
//User.prototype.constructor = User;
//User.prototype = Object.create(Entidad.prototype);
Object.setPrototypeOf(User.prototype, Entidad.prototype);
const user = new User();
console.log(user);
console.log(user.save());