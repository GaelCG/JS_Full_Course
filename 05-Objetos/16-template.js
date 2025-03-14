function arraySum(i) {
    const suma = i.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma; 
    
}
let numeros = [1,2,3,4,5];
let a = arraySum(numeros);
console.log(a);