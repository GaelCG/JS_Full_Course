let objeto = {
    nombre: false,
    apellido: 'perez',
    edad: 25,
    login: function(){},
    logout: function(){}
}

let propiedades = 'nombre'

function tienePropiedad(obj, propiedad){
    let keys = Object.keys(obj);
    return keys.includes(propiedad);
}

console.log(tienePropiedad(objeto, propiedades)) // true