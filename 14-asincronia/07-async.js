let promsea1 = user=> new Promise((res, rej) => {
    res(user);
});

let promesa2 = user => new Promise((res, rej) => {
    res(user + ' es un usuario feliz');
});
promsea1('chanchito feliz ').then(user => promesa2(user)).then(dato => console.log(dato));

async function main(){
    try{
        const a = await Promise.resolve('chanchito feliz ');
    const b = await promesa2(a);
    const _ = await promesa2(b);
    promesa3(a,b);
    }catch(error){
        console.error('Error en la promesa:', error);
    }
}