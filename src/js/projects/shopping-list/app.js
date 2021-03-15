const addItemInput = document.querySelector('#add-item');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
	// if the event key is equal to "Enter"
	if (e.key === 'Enter') {
		// add new item to list
		const newItemText = this.value;

		const newItem = document.createElement('li');
		newItem.innerText = newItemText;
	}
});
