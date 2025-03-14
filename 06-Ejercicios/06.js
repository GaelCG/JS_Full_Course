let obj1 = {
    id:1, name:'gael'
}

function crearCopy(obj){
    let obj2 = {}
    for(let key in obj){
        obj2[key] = obj[key]
    }
    return obj2
}
let obj2 = crearCopy(obj1)

console.log("HOLA",obj1, obj2) // {obj1: {id:1, name:'gael'}, obj2: {id:1, name:'gael'}}