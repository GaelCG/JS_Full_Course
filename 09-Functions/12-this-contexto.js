const usuario = {
    nombre :  ' juan',
    ciudadanias : ['españa', 'francia', 'italia', 'portugal'],
    mostrarCiudadanias(){
        this.ciudadanias.forEach(ciudadania => {
            console.log(this.nombre + ' es ciudadano de ' + ciudadania);
        });
    }
};

usuario.mostrarCiudadanias(); // ['españa', 'francia']
