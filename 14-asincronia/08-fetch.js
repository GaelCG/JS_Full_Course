fetch('https://jsonplaceholder.typicode.com/todos/a')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
      }).then(data => console.log(data)).then(data => console.log(data));