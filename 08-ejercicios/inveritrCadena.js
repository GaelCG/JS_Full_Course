//invertir cadena sin ningun metodo de js


const inveritrCadena = (cadena)=> {
    let cadenainvertida = '';
    for(let i = cadena.length -1; i >= 0; i--){
        cadenainvertida += cadena[i];
    }
    return cadenainvertida === cadena ? 'La cadena es palíndroma' : cadenainvertida;
}
console.log(inveritrCadena('oso'));
