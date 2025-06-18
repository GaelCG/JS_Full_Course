let promesa1 = new Promise((res, rej) => {
   res(12);
});

let promesa2 = new Promise((res, rej) => {
   res(15);
});

promesa1.then(valor1 => {
   if ( valor1 > 10 ) {
      return promesa2;
   }
}).then(valor2 =>{
    return valor2;
})