class Restaurants{
    #timetable;
    constructor(name){
        this.name = name;
        
    }
    get timetable(){
        return this.timetable;
    }
    set timetable(value){
        let date = new Date(value);
        let time = date.getTime();
        if(Number.isNaN(time)){
            throw new Error('Invalid date');
        }
        this.#timetable = value;
    }
    
}
const r = Restaurants('BBQ');
