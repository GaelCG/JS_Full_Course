let objeto = {
    nombre: "Juan",}

function agregarID(obj){
    obj.id = Math.random()
}


console.log(agregarID(objeto)); // {nombre: "Juan", id: 1}