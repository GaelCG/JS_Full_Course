function Select (){
}

Select.prototype.render = function(){
    console.log('Renderizando select');
}
function checkbox (){
}
checkbox.prototype.render = function(){
    console.log('Renderizando checkbox');
}

let componente =  [
    new Select(),
    new checkbox()
]
componente.forEach(function(c){
    c.render();
}
);