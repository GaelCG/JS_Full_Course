let punto = {
    x: 10,
    y: 25
}

let clonPunto = Object.assign({},punto,{z:20, x:1}); 
// { x: 10, y: 25 }
console.log(punto,clonPunto);

//copia de un objeto
let copiaPunto = Object.assign({},punto);
console.log(copiaPunto,punto);

let copia3 = {...punto};
console.log(copia3,punto);