const usuario = {
    nombre: 'chanchito',
    apellido: 'feliz',

    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    },
    set nombreCompleto(valor) {
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
};
usuario.nombreCompleto = 'chanchito triste'; // set
console.log(usuario.nombreCompleto); // chanchito feliz


