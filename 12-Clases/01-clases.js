/*function User(name){
    this.name = name;
    this.instance = function(){}
}
User.prototype.login = function(){
    console.log('HOLA MUNDO')
}*/
class User {
    constructor(name) {
        this.name = name;
        this.instance = function() {};
    }
    activo = true;
    logout = () => {
        console.log('Adios Mundo');
    }
    login() {
        console.log('Hola Mundo');
    }
}
const u = new User('Chanchito feliz');
