
let promsea1 = user=> new Promise((res, rej) => {
    res(user);
});

let promesa2 = user => new Promise((res, rej) => {
    res(user + ' es un usuario feliz');
});
promsea1('chanchito feliz ').then(user => promesa2(user)).then(dato => console.log(dato));