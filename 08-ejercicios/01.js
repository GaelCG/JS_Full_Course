function paraAbsoluto(arr){
    return arr.map(n =>Math.abs(n));
}

const ns = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
console.log(paraAbsoluto(ns)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]