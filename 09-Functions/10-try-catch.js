function sumaTodo(arr){
    if(!Array.isArray(arr)){
        throw new Error('El argumento no es un array');
    }
     return arr.reduce((acc, el) => {
        if(typeof el !== 'number'){
            throw new Error('El elemento no es un número');
        }
        return acc + el;
    });
}

try{
    console.log(sumaTodo([1,2,3,5])); // [1,2,3,4,5]
}catch(e){
    console.log('Tienes un Error: ', e.message); // Tienes un Error:  El argumento no es un array
}

console.log('Fin del programa'); // Fin del programa 