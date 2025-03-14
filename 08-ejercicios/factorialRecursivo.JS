//  dado un numero calcular factorial de forma recursiva

const factorialrecursivo = (numero)=> {
    if( numero < 0 || !Number.isInteger(numero)) return 'El número debe ser entero positivo';
    if ( numero == 0 ) return 1;
    return numero * factorialrecursivo(numero - 1);
}
console.log(factorialrecursivo(12)); // 120