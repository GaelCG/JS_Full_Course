function Usuario ( nombre ){
    this.name = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U('Gael');
console.log(user);

function of(Fn,arg){
    return new Fn(arg);
}

let user1 = of(Usuario,'Miguelin');
console.log(user1);

function returned(){
    return function(){
        console.log('Hola');
    }
}

let saludo = returned();
saludo();