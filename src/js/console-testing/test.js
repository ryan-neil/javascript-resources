// Practice
// Cmd + Option + K (Console Shortcut)

const el = document.querySelector('#el');

// Loop over each class
el.classList; // DOMTokenList (pretty much an array)
el.classList.forEach(className => {
	// don't use "class" as that's a reserved word
	console.log(className);
});
