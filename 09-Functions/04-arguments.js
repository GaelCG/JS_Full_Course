function suma (a, b) {
   return Array.from(arguments).reduce((acc, el) =>  acc + el);
}
console.log(suma(1,2,4,4)); // 3