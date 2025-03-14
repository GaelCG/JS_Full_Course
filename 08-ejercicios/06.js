function dividePorTipo(arr){
    return arr.reduce((acc, el) => {
        const tipo = typeof el;
        acc[tipo] = acc[tipo] + 1 || 1;
        return acc;
    });
}

const miArray = [
    "Hola",
    12,
    "Adios",
    {},
    {id:15},
    ['lala']

]

let arr = dividePorTipo(miArray);
console.log(arr); // { string: 2, number: 1, object: 3 }
