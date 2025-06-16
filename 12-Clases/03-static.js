class Restaurants{
    static cantidad = 13;
    constructor(name){
        this.name = name;
        
    }
    getTimetable(){
        console.log('Horario de atención');
    }
    static getRestaurante(id){
        return new Restaurants('BBQ ');
    }
}
const r = Restaurants.getRestaurante(12);
