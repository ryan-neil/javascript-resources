// deconstruct "hash" from window.location
const { hash } = window.location;
// remove the hash mark from "atob" url
const message = atob(hash.replace('#', ''));

if (message) {
	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#message-show').classList.remove('hide');

	document.querySelector('h1').innerHTML = message;
}

// 1. create submit event handler on the form element we created in html
// target the form we created in index.html and tag an event listener on to it
document.querySelector('form').addEventListener('submit', (event) => {
	// 1.1 prevent the default browser behavior (which is to submit the form)
	event.preventDefault();

	// target form message and hide element
	document.querySelector('#message-form').classList.add('hide');
	// target link form and show element
	document.querySelector('#link-form').classList.remove('hide');

	// 1.2 get text inside of text input
	const messageInput = document.querySelector('#message-input');
	// set the users' value into an encoded string
	const encrypted = btoa(messageInput.value);

	// target our second input
	const linkInput = document.querySelector('#link-input');
	// display the encoded string in the second input we created
	// window.location is the current exact url being displayed inside the address bar and we're adding a "#" and encrypted message
	linkInput.value = `${window.location}#${encrypted}`;
	// this selects the input and all the text inside of it
	linkInput.select();
});

// check if url has a "#"

/**
	 * message.com/index.html/?color=red#value
	 * message.com (domain)
	 * /index.html/ (path)
	 * ?color=red (query string)
	 * #value (hash/fragment)
	 */
