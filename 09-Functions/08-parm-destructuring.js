const config = {
   url: 'https://api.example.com',
   direccion: {
         ciudad: 'Madrid',
         numero: 123,
   } 
};

function webServer(config){
   const {url, ...rest} = config;
    console.log(rest); // https://api.example.com
    return url;
}
console.log(webServer(config)); // { direccion: { ciudad: 'Madrid', numero: 123 } }