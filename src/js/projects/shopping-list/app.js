const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		// check if input is falsey. enter should not return a newItem
		if (!this.value) return;
		// add a new item to list and grab the value from the input. save that value to a variable to use later
		// "this" is referring to addItemInput here
		const newItemText = this.value;
		// create a new <li> that we will fill with our new item
		const newItem = document.createElement('li');
		// set our new item's inner text to be the new item text from the input value
		newItem.innerText = newItemText;
		// append the new item to the document
		itemsUL.append(newItem);
		// reset the input box after enter
		this.value = '';
	}
});
