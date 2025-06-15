function Entidad(entidad){
    this.id = Math.random().toString('20');
    this.entidad = entidad;
    
}

function User(){
    Entidad.call(this,'user'); // Llama al constructor de Entidad
   this.attributes = {
        name: 'hOLA MUndo',
        email: 'test@test.com'
    };
}
const u = new User();
console.log(u);