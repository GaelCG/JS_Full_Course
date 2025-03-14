/**
 * Crear algoritmo que devolvera el precio del producto
 * mas el impuesto
 */

function precioProducto(precio, impuesto){
    return precio + (precio * impuesto);
}

console.log(precioProducto(19.90, 0.15)); 