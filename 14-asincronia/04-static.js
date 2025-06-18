let promesa1 = new Promise((res, rej) => {
   res(5);
});

let promesa2 = new Promise((res, rej) => {
   res(15);
});

promesa1.then(valor1 => {
   if ( valor1 > 10 ) {
      return promesa2;
   }
   return Promise.reject("Valor menor o igual a 10");
}).then(valor2 =>{
    console.log("Segunda promesa: " + valor2);
    return valor2;
}).catch(e => {
   console.log("Error: " + e);
}).finally(() => {
   console.log("Finalizado");
})