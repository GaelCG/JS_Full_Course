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
User.prototype = Entiadad.prototype;
const user1 = new User();