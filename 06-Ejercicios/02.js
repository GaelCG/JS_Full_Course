function Usuario( nombre ){
   return {
    nombre : nombre,
    id: Math.random()
   }
};
var usuario = Usuario('Juan');
var usuario2 = Usuario('Pepe');
console.log(usuario);
console.log(usuario2);
