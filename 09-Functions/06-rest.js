const suma = (a, b, ...rest) => {
  return Array.from(rest).reduce((acc, el) =>  acc + el);
}

const logMsg = (desc, ...msgs) =>{
    for (const msg of msgs) {
        console.log(`${desc}: ${msg}`);
    }
}
let mensajes = ['Error 1', 'peticion aceptada', 'socket activo', ]
logMsg('cliente', ...mensajes);
console.log(suma(1, 2,4, 5)); // 3 