let validate = (data) => {
    let errors = [];
    if (!data.nombre || data.nombre.length < 3) {
        errors.push('El nombre debe tener al menos 3 caracteres');
    }
    if (!data.apellido || data.apellido.length < 3) {
        errors.push('El apellido debe tener al menos 3 caracteres');
    }
    if (errors.length > 0) {
        console.error('Errores de validación:', errors);
        return errors;
    }
    console.log('Datos válidos:', data);
    return null;
}



let render = ({data,errors}) => {    
    return `
    <form name="formulario">
       <div>
        <label> Nombre:</label>
        <input name="nombre"values =" ${data.name}" />
         ${errors.name ||''}
        </div>
         <div>
        <label> Apellido:</label>
        <input name="apellido"values=" ${data.apellido}"/>
         ${errors.apellido ||''}
         </div>
         <div>
         <div><button ">Enviar</button></div>
         </div>
         </form>
         `
}
let initinialValues = {
    nombre: '', 
    apellido: ''
};
let form = document.createElement('form');
form.innerHTML = render({data: initinialValues,errors:[]});
document.body.append(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Array.from(e.target.elements).reduce((acc, el) => {
        if(!el.name) return acc; // Ignorar elementos sin nombre
        acc[el.name] = el.value;
        return acc;
    }, {});
    console.log(data);
    const errors = validate(data);
    if(Object.keys(errors).length > 0) {
      let html = render({errors,data});
        form.innerHTML = html;
        return ;
    }
});
        