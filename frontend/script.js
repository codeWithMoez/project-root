const apiUrl = 'http://localhost:5000/items';

// Add a new item
document.getElementById('itemForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;

  const newItem = { name, description };

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newItem)
  });

  const item = await response.json();
  fetchItems(); // Refresh the item list
  document.getElementById('itemForm').reset();
});

// Fetch and display items
async function fetchItems() {
  const response = await fetch(apiUrl);
  const items = await response.json();

  const itemList = document.getElementById('itemList');
  itemList.innerHTML = ''; // Clear the list before repopulating

  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - ${item.description} 
                    <button onclick="deleteItem('${item._id}')">Delete</button>`;
    itemList.appendChild(li);
}

// Delete an item
async function deleteItem(id) {
  const response = await fetch(`http://localhost:5000/items/${id}`, { method: 'DELETE' });

  if (response.ok) {
    alert('Item deleted successfully');
    fetchItems(); // Refresh the item list
  } else {
    alert('Error deleting item');
  }
}

// Load items when the page loads
fetchItems();
