const { use } = require("react");

function User(){
    this.name = 'Hola Mundo';
    // metodo de instancia
    this.logger = function(){
        console.log('Usuario logueado', this.name);
    }
    
}
// metodo de prototipo
User.prototype.login = function(){
    console.log('Usuario logueado desde el prototipo', this.name);
    this.logger();

}
const user1 = new User();
for ( let propr in user1 ){
    if( !user1.hasOwnProperty(propr) ){
       console.log(propr); // si no es una propiedad propia, salta al siguiente ciclo
    }
}
console.log(Object.keys(user1)); // undefined