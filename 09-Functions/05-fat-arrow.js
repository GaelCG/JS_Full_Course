//Fat arrow function
// 1. No binding of this
// 2. No binding of arguments
// 3. No binding of super
// 4. No binding of new.target
const  suma = (a, b) => {
   return Array.from(arguments).reduce((acc, el) =>  acc + el);
}
console.log(suma(1,2,4,4)); // 3