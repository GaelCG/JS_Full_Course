const p1 = Promise.reject(3);
const p2 = Promise.reject(42);
const p3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'foo');
});
// Promise.all([p1, p2, p3])
//     .then(valores =>
//     console.log('all', valores))
//     .catch(err => console.error('Error:', err));

// Promise.race([p1, p2, p3]).then
// (valor => console.log('race', valor))
// .catch(err => console.error('Error:', err));

// Promise.any([p1, p2, p3])
//   .then(valor => console.log('any', valor))
//   .catch(err => console.error('Error:', err));

Promise.allSettled([p1, p2, p3])
  .then(valores => console.log('allSettled', valores))
  .catch(err => console.error('Error:', err));