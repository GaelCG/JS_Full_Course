let objt = {};
let objt2 = new Object();

/**
 *  new Array();
 * new Function();
 * new Date();
 * new Number();
 * new String();
 * new Boolean();
 */

function Usuario(){
    this.name = 'Juan';
}

let user = new Usuario();
console.log(user.constructor);
let a = 4;
a.toString();
console.log(a.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s1, s2);
console.log(eval(s1), eval(s2));
console.log(s2.valueOf());