/*
JavaScript Notes and Documentation
DOM Events
*/

/**
====================================
DOM Events:
	* https://developer.mozilla.org/en-US/docs/Web/Events
*/

/**
 * Event Structure:
the thing:		the event type:			the code to run:
button				click					 			change the color
input					hits "enter"				get search results
image					mouseover						display img caption
*/

/** 
addEventListener:
*/
const button = document.querySelector('h1');

button.addEventListener('click', () => {
	alert('You clicked me!');
});

/**
================================================
Attaching eventListeners to Multiple Elements:
	* For this we use a loop.
*/

// HTML:
<body>
	<section id="cards" />
</body>;

// JavaScript:
const colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'indigo',
	'violet'
];

// loop over all the colors and create a div element on the page with the corresponding color:
const container = document.querySelector('#cards');

for (let color of colors) {
	// create the "div" element:
	const card = document.createElement('div');
	// adding the background color to the created cards:
	card.style.backgroundColor = color;
	// add the .card class to the div elements:
	card.classList.add('card');
	// add the .card div to the DOM inside "container":
	container.append(card);

	// selecting the h1
	const h1 = document.querySelector('h1');
	// add event on click to change text color of h1 to match card color
	card.addEventListener('click', function() {
		h1.style.color = color;
	});
}

// refactoring the above example a bit more:
const container = document.querySelector('#cards');

const changeColor = function() {
	const h1 = document.querySelector('h1');
	h1.style.color = this.style.backgroundColor; // "this" will refer to the individual element that the eventListener has been added to [card]
};

for (let color of colors) {
	const card = document.createElement('div');
	card.style.backgroundColor = color;
	card.classList.add('card');
	container.append(card);

	// changing the h1 font color with an eventListener:
	card.addEventListener('click', changeColor); // reference the changeColor function here
}

/**
================================================
The Event Object:
	* Event Objects can be very useful to have access to in our callback or our event handler.
	* The Event Object is used if we need to access information about what was clicked on, what key was pressed, what time after the page loaded, etc.
*/

// from the example above we can access the event object by passing a parameter to the changeColor function
const changeColor = function(e) {
	console.log(e);
};
// -> click { ... }

// Example: Keyboard Event
document.body.addEventListener('keypress', function(event) {
	console.log(event);
});
// user pushes "a" anywhere on the body of the document
// -> keypress { target: body, key: "a", charCode: 107, keyCode: 0 }

/**
================================================
Key Events:
	* keyup
	* keydown
	* keypress
*/

/**
keyup:
*/
const input = document.querySelector('#username');

input.addEventListener('keyup', function(e) {
	console.log(e);
});

/**
keydown:
	* This prints when any key on the keyboard is pushed.
*/
const input = document.querySelector('#username');

input.addEventListener('keydown', function(e) {
	console.log(e);
});

/**
keypress:
*/
const input = document.querySelector('#username');

input.addEventListener('keypress', function(e) {
	console.log(e);
});

/**
================================================
keyup vs. keydown vs. keypress:

*** Look to use "beforeinput" or "keydown" instead of "keypress" since it has been deprecated.

* "keyup" and "keydown" are going to fire for any key that you touch at all (shift, arrow keys, caps-lock, etc). One will fire when pressed down and the other doesn't fire until it is released.

* "keypress" event is fired when a key that produces a character value is pressed down. Examples of keys that produce a character value are alphabetic, numeric, and punctuation keys.
*/
