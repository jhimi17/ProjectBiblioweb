const userList = document.getElementById('userList');

// Realizar una solicitud GET a la API
fetch('https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json')
  .then(response => response.json())  // Parsear la respuesta como JSON
  .then(data => {
    // Recorrer los datos y mostrarlos en la lista
    data.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `Nombre: ${user.}, Email: ${user.email}`;
      userList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });