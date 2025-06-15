const obj = {
    nombre: "Juan",
}
function Extender() {
    this.login = () => {
        console.log("Login", this.nombre);
    }
    this.logout = () => {
        console.log("Logout", this.nombre);
    }
}
Extender.call(obj);
console.log(obj);
obj.login();
obj.logout();