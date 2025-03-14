// devolver el menor y mayor de un array de números

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function minMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (numero of arr) {
       min = min < numero ? min : numero;
       max = max > numero ? max : numero;
    }

    return [min, max];
}
console.log(minMax(array)); // [1, 10]