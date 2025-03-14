// dada una lista de numeros eliminar duplicados

const eliminarDuplicados = (numeros) => {
    return [new Set(numeros)];
}
console.log(eliminarDuplicados([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])); // [1, 2,mi 3, 4, 5]