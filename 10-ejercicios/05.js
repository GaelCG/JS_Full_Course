function ordenar(texto,fn){
    const resultado = texto.split("").sort().join("");
    fn(resultado);
}

ordenar("hola mundo", console.log);