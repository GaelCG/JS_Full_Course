let objeto =  {
    id :1,
    nombre : "Gael",
    login: function () {},
    logout: function () {}
}

function cualesMetodos(objeto) {
    for ( let llave in objeto) {
        if (typeof objeto[llave] === "function") {
            console.log(llave)
        }
    }
}
cualesMetodos(objeto) // ["login", "logout"]