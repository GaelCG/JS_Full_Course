function saludar(...rest){
    console.log(this,rest);
}

//saludar.call({ propiedad: 'Juan' },1,2); // { nombre: 'Juan' }
//saludar.apply({ propiedad: 'Juan' },[1,2]); // { nombre: 'Juan' }
//saludar.bind({ propiedad: 'Juan' },1,2)(3,5); // { nombre: 'Juan' }
const usuario = {
    nombre :  ' juan',
    ciudadanias : ['españa', 'francia', 'italia', 'portugal'],
    mostrarCiudadanias(){
        this.ciudadanias.forEach(function(ciudadania)  {
            console.log(this.nombre + ' es ciudadano de ' + ciudadania);
        },this);
    }
};

usuario.mostrarCiudadanias(); // ['españa', 'francia']
