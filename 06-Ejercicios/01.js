function Usuario( nombre ){
   
    this.nombre = nombre,
    this.id = Math.random()
    
};
var usuario = new Usuario('Juan');
var usuario2 = new Usuario('Pepe');
console.log(usuario);
console.log(usuario2);


