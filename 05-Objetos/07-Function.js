function Punto(x,y){
    this.x = x;
    this.y = y; 
    this.dibujar = function(){
        console.log('Dibujando...');}
}
let punto = {z: 3};
//Punto.call(punto,1,2);
Punto.call(punto,1,2);

/*const point = new Fun('x','y',`this.x = x;
    this.y = y; 
    this.dibujar = function(){
        console.log('Dibujando...');}`
    );
*/
//const p = new point(1,2);
console.log(p);