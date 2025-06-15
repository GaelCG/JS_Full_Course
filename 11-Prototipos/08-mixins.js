function mixin(ctr, ...args ){
    Object.assign(ctr.prototype, ...args);
}
let vuela =  {
    vuela(){
        console.log('Volando');
    }
}

let nada = {
    nada(){
        console.log('Nadando');
    }
}

let bano = {
    bano(){
        console.log('Voy al baño');
    }
}
let camina = {
    camina(){
        console.log('Caminando');
    }
}

// vuela, nada, camina , va al baño
function Pato (){}
mixin(Pato, vuela, nada, camina, bano);
// camina, nada, va al baño
function Perro (){}
mixin(Perro,nada, bano, camina);
//nada , va al baño
function Pez (){}
mixin(Pez, nada, bano);
// vuela pero no nada, camina ni va al baño
function Avion (){}
mixin(Avion, vuela);

let p = new Pato();
let d = new Perro();
let pe = new Pez();
let a = new Avion();
console.log(d);