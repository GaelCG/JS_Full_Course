const Entidad ={ 
    save(){
        console.log('save en entidad');
    }
}
const Actualizar = {
    update(){
        console.log(' Actualizando entidad');
    }
}
class User{
    constructor(name){
        this.name = name;
    }
    save(){
        console.log('save en user');
    }
   
}
const nuevoProto = Object.assign({},Entidad, Actualizar);
Object.setPrototypeOf(User.prototype, nuevoProto);
const u = new User("Chanchito");
u.save();