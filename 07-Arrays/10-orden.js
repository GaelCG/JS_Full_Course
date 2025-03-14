let numeros = ['Z','a', 'c']
conMatusculas.sort((a, b) => {
    let alower = a.tolowerCase();
    let blower = b.tolowerCase();
    if (alower < blower) {
        return -1;
    }
    if (alower > blower) {
        return 1;
    }
    return 0;
})

