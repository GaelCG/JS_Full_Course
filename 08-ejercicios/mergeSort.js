function longestString (i) {if (!Array.isArray(i) || i.length === 0) {
    return null;}let masLargo = i[0];

for (let j = 1; j < i.length; j++) {
    if (i[j].length > masLargo.length) {
        masLargo = i[j];
    }
}

return masLargo;
}const strings = ["camion", "casa", "cascara", "pollo", "guanajuato"];
console.log("La cadena más larga es:", longestString(strings)); 