fetch('https://jsonplaceholder.typicode.com/todos/a',{
    method: 'GET', // Método HTTP
    headers: {
        'Content-Type': 'application/json' // Tipo de contenido
    },
    cache: 'no-cache', // Control de caché , default , reload, no-cache, force-cache, only-if-cached 
    // body: JSON.stringify({ key: 'value' }) // Si fuera un POST, incluir el cuerpo
})
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
      }).then(data => console.log(data)).then(data => console.log(data));