const miArray =[
    "Hola",
    12,
    "Adios",
    {},
    {id:15},
    ['lala']
]

function filtrarPorTipo(array){
    var arrStrings = [];
    var arrNumbers = [];
    var arrObjects = [];
    miArray.forEach(n => {
        if(typeof n === 'string'){
            arrStrings.push(n);
        }else if(typeof n === 'number'){
            arrNumbers.push(n);
        }else if(typeof n === 'object'){
            arrObjects.push(n);
        }
    })
    return {
        arrStrings,
        arrNumbers,
        arrObjects
    }
}
console.log(filtrarPorTipo(miArray)); // { arrStrings: [ 'Hola', 'Adios' ], arrNumbers: [ 12 ], arrObjects: [ {}, { id: 15 }, [ 'lala' ] ] }