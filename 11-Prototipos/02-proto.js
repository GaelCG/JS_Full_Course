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
const user2 = new User();
console.log(user1.login());

