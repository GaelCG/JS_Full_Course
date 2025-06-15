// this hace referencia a un objeto 
// this es un objeto global en el contexto de ejecución
// En una funcion this hace referencia al objeto window, global
// si se usa un new hace referencia al objeto creado

// const user = {
//     name: 'Nicolas',
//     login(){
//         console.log(this.name + ' ha iniciado sesión');
//     }
// };

// user.logout = function logout(){
//     console.log(this.name + ' ha cerrado sesión');
// }
// user.login(); // Nicolas ha iniciado sesión

function Log(mensaje){
this.mensaje = mensaje;
    console.log(this);
}
/**
 *  se crea un objeto literal
 * se vincula este objeto a this
 * se vincula a el prototipo
 * si no retorna nada entonces retorna this
 */
const l = new Log('Hola mundo');