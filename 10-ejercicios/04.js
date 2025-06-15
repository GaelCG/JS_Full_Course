function suma(fn, ...rest){
    const resultado = rest.reduce((acumulador, numero) => acumulador + numero, 0);
    fn(resultado);

}
suma(resultado => {
    console.log(resultado);
},1,2,3,4);