const uri = 'https://localhost:5001/MasPets';
let todos = [];

function getItems() {
  fetch(uri)
    .then(response => response.json())
    .catch(error => console.error('Unable to get items.', error));
}

function addItem() {
 
  fetch(uri, {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(response => response.json())
    .then(() => {
      getItems(); 
    })
    .catch(error => console.error('Unable to add item.', error));
}