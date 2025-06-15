console.log(suma);
// Decalracion de funciones

//Funcuion nombrada -> Named function
function suma(){
    console.log('Hola soy una funcion declarada');
}

// funcion anonima -> Anonymous function
//function() {
 //   console.log('Hola soy una funcion anonima');
//}

// Expresion de funciun -> Function expression
let resta = function(){ // anonymous function
    console.log('restando');
}

const multiplica = function multiplicar(a, b){ // named function
    return a * b;
}

const divide = ()=>{
    console.log('dividiendo');
}