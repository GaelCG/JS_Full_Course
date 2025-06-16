let form = document.createElement("form");
form.id = "mi-formulario";
let input = document.createElement("input");
input.setAttribute("type", "text");
let btn = document.createElement("button");
btn.innerText = "Enviar";
form.append(input, btn);
document.body.append(form);

form.onmouseenter = e => {
    console.log("El ratón ha entrado en el formulario",e);
}
form.onmouseleve = e => {
    console.log("El ratón ha salido del formulario",e);
}
input.onfocus = e => {
    console.log("El input ha recibido el foco", e);
}
input.onblur = e => {
    console.log("El input ha perdido el foco", e);
}

input.onchange = e => {
    console.log("El input ha cambiado su valor", e.target.value);
}

btn.onclick = e => {
    e.preventDefault(); // Evita que el formulario se envíe
    console.log("El botón ha sido pulsado", e);
}
btn.addEventListener("click", e => {
    e.preventDefault(); // Evita que el formulario se envíe
    console.log("El botón ha sido pulsado con addEventListener", e);
});