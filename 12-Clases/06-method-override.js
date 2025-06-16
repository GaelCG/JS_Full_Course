class Entidad{
    constructor(id){
        this.id = id;
        this.createdAt = new Date();
    }
    save(){
        console.log('save en entidad');

    }
}
class User extends Entidad{
    constructor(name){
        super(1);
        this.name = name;
    }
    save(){
        super.save();
        console.log('save en user');
    }
}

const u = new User("Chanchito Feliz");