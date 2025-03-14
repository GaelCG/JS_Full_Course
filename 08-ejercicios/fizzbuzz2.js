/**
 * FizzBuzz: Imprimir los números del 1 al 100, pero si es múltiplo de 3 imprimir "Fizz", si es múltiplo de 5 imprimir "Buzz" y si es múltiplo de ambos, imprimir "FizzBuzz".
 */



const fizzbuzz = ()=>{
    const resultados = [];
    for(let i = 1; i<=100; i++){
     let resultado = '';
     if(i % 3 === 0) resultado += 'Fizz';
     if(i %5 ===0) resultado += 'Buzz';
     resultados.push(resultado || i);
    }
    return resultados;

};

fizzbuzz().forEach(resultado => console.log(resultado));