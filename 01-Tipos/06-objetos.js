
// personajes de los soprano
let nombre = "Tony Soprano";
let serie = "Los Soprano";
let edad = 47;
let estatura = 1.83;
let personaje = { 
    nombre: "Tony Soprano",
    serie: "Los Soprano",
    edad: 47,
    estatura: 1.83
};
console.log( personaje);
console.log( personaje.nombre);
console.log( personaje["nombre"]);
personaje.nombre = "Carmela Soprano";
console.log( personaje.nombre);
delete personaje.edad;
console.log( personaje);




