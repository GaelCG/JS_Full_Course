// short-circuit
// && -> false && true -> false
// || -> true || false -> true
//
//FALSY
//false
//0
//null
//undefined
//NaN
let nombre = "juanito perediaz";
let username = nombre || "usuario por defecto";
console.log(username); // usuario por defecto

function fn1(){
    console.log('soy funcion 1');
    return true;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2(); // short-circuit