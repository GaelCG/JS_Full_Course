// Ejemplos de uso de métodos y propiedades de cadenas en JavaScript

let str1 = "Hola, mundo"; // Comillas dobles
let str2 = 'JavaScript'; // Comillas simples
let str3 = `Interpolación: ${str1}`; // Template literals

console.log("JavaScript".length); // 10 (longitud de la cadena)
console.log("Hola".toUpperCase()); // "HOLA"
console.log("Hola".toLowerCase()); // "hola"
console.log("Hola".charAt(1)); // "o"
console.log("Hola".indexOf("o")); // 1
console.log("Hola, mundo".split(", ")); // ["Hola", "mundo"]
console.log("Hola".repeat(3)); // "HolaHolaHola"
console.log("    gael espacio   ".trim()); // "gael espacio"

// String interpolation (Template literals)
let nombre = "Gael Costilla";
let edad = 22;
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);

// Métodos adicionales de cadenas

// at()
console.log("Hola".at(1)); // "o"

// charCodeAt()
console.log("Hola".charCodeAt(1)); // 111

// codePointAt()
console.log("Hola".codePointAt(1)); // 111

// concat()
console.log("Hola".concat(", mundo")); // "Hola, mundo"

// constructor
console.log("Hola".constructor); // [Function: String]

// endsWith()
console.log("Hola, mundo".endsWith("mundo")); // true

// fromCharCode()
console.log(String.fromCharCode(72, 111, 108, 97)); // "Hola"

// includes()
console.log("Hola, mundo".includes("mundo")); // true

// lastIndexOf()
console.log("Hola, mundo".lastIndexOf("o")); // 10

let str = "Hola, mundo";
console.log(str.indexOf("o")); // 1
// localeCompare()
console.log("a".localeCompare("b")); // -1

// match()
console.log("Hola, mundo".match(/o/g)); // ["o", "o"]

// padEnd()
console.log("Hola".padEnd(10, "!")); // "Hola!!!!!!"

// padStart()
console.log("Hola".padStart(10, "!")); // "!!!!!!Hola"

// prototype
String.prototype.saludar = function() {
  return `Hola, ${this}`;
};
console.log("Mundo".saludar()); // "Hola, Mundo"

// replace()
console.log("Hola, mundo".replace("mundo", "JavaScript")); // "Hola, JavaScript"

// replaceAll()
console.log("Hola, mundo. Hola, JavaScript".replaceAll("Hola", "Adiós")); // "Adiós, mundo. Adiós, JavaScript"

// search()
console.log("Hola, mundo".search(/mundo/)); // 6

// slice()
console.log("Hola, mundo".slice(0, 4)); // "Hola"

// split()
console.log("Hola, mundo".split(", ")); // ["Hola", "mundo"]

// startsWith()
console.log("Hola, mundo".startsWith("Hola")); // true

// substr()
console.log("Hola, mundo".substr(0, 4)); // "Hola"

// substring()
console.log("Hola, mundo".substring(0, 4)); // "Hola"

// toLocaleLowerCase()
console.log("Hola, Mundo".toLocaleLowerCase()); // "hola, mundo"

// toLocaleUpperCase()
console.log("Hola, Mundo".toLocaleUpperCase()); // "HOLA, MUNDO"

// toLowerCase()
console.log("Hola, Mundo".toLowerCase()); // "hola, mundo"

// toString()
console.log("Hola".toString()); // "Hola"

// toUpperCase()
console.log("Hola, Mundo".toUpperCase()); // "HOLA, MUNDO"

// trimEnd()
console.log("   Hola, mundo   ".trimEnd()); // "   Hola, mundo"

// trimStart()
console.log("   Hola, mundo   ".trimStart()); // "Hola, mundo   "

// valueOf()
console.log(new String("Hola").valueOf()); // "Hola"