// verifica si una secuencia de {[()]} está balanceada usando una pila
const balanceador = (cadena) => {
    const pila = [];
    const parentesis = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for ( let i = 0 ; i < cadena.length(); i++){
        if ( cadena[i] === '('|| cadena[i] === '[' || cadena[i] === '{'){
            pila.push(cadena[i]);
        }
        else {
            const ultimo = pila.pop();
            if ( cadena[i] !== parentesis[ultimo]){
                return false;
            }
        }
    }
}
console.log(balanceador('{[()]}')); // true
console.log(balanceador('{[(])}')); // false