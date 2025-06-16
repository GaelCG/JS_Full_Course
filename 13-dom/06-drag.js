let id;
function createDropArea() {
    let dropArea = document.createElement("div");
dropArea.className = "drop";

dropArea.ondragenter = e => {
    e.target.style.background = "yellow";
}

dropArea.ondragleave = e => {
    e.target.style.background = "";
}
dropArea.ondragover = e => {
    e.preventDefault(); // Necesario para permitir el drop
}
dropArea.ondrop = e => {
    e.target.appendChild(document.getElementById(id));
}
    return dropArea;
}
function createDraggable() {
    let span = document.createElement("span");
    span.id = 'hola-mundo';
    span.innerText = "Arrastable";
    span.draggable = true; // Hacemos el span arrastrable
    span.ondragstart = e => {
        id = e.target.id; // Guardamos el id del elemento arrastrado
    
    }
    return span;
}


let draggele = createDraggable();
let dropArea1 = createDropArea();
let dropArea2 = createDropArea();
document.body.append(dropArea1);
document.body.append(dropArea2);
document.body.append(draggele);

