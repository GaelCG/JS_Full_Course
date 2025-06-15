const obj = {
    nombre: "Gael",
}
function extender(usuario) {
   const metodos =  {
        login: () => {
            console.log("Login", usuario.nombre);
        },
        logout: () => {
            console.log("Logout", usuario.nombre);
        }
     }
    return Object.assign(usuario, metodos);
}
const usuario = extender(obj);
console.log(usuario);
usuario.login();
usuario.logout();
