const now = new Date();
console.log(now);
const fecha = new Date('DECEMBER 11 1998 14:15 GMT-0300');
console.log(fecha);
// MES DIA Y AÑO
console.log(fecha);

const fecha2 = new Date(1998, 11, 11, 14, 15);
const fecha3 = new Date(1998, 11, 11, 14+15, 15);
console.log(fecha3);
console.log('datestring', fecha3.toDateString());
console.log('timestring', fecha3.toTimeString());
console.log('isostring', fecha3.toISOString());

fecha3.setFullYear(2020);
console.log(fecha3);