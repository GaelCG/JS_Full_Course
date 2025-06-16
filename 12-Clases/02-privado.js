class User {
    #name;
    constructor(name) {
        this.#name = name;
    }
    #logger(){

    }
    getName(){
        this.#logger();
        return this.#name;
    }
}
const u = new User('Chanchito feliz')
console.log(u.getName()); // undefined