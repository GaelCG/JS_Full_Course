let promesa = new Promise( (resolve, reject) => {
   setTimeout(() => {
      resolve("hola mundo");
   },1000);
});
promesa.then(valor=> console.log(valor),
   e => console.log("Error: " + e),)