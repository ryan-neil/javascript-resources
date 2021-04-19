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
const button = document.querySelector("h1");

button.addEventListener("click", () => {
	alert("You clicked me!");
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
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"purple",
	"indigo",
	"violet"
];

// loop over all the colors and create a div element on the page with the corresponding color:
const container = document.querySelector("#cards");

for (let color of colors) {
	// create the "div" element:
	const card = document.createElement("div");
	// adding the background color to the created cards:
	card.style.backgroundColor = color;
	// add the .card class to the div elements:
	card.classList.add("card");
	// add the .card div to the DOM inside "container":
	container.append(card);

	// selecting the h1
	const h1 = document.querySelector("h1");
	// add event on click to change text color of h1 to match card color
	card.addEventListener("click", function() {
		h1.style.color = color;
	});
}

// refactoring the above example a bit more:
const container = document.querySelector("#cards");

const changeColor = function() {
	const h1 = document.querySelector("h1");
	h1.style.color = this.style.backgroundColor; // "this" will refer to the individual element that the eventListener has been added to [card]
};

for (let color of colors) {
	const card = document.createElement("div");
	card.style.backgroundColor = color;
	card.classList.add("card");
	container.append(card);

	// changing the h1 font color with an eventListener:
	card.addEventListener("click", changeColor); // reference the changeColor function here
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
document.body.addEventListener("keypress", function(event) {
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
const input = document.querySelector("#username");

input.addEventListener("keyup", function(e) {
	console.log(e);
});

/**
keydown:
	* This prints when any key on the keyboard is pushed.
*/
const input = document.querySelector("#username");

input.addEventListener("keydown", function(e) {
	console.log(e);
});

/**
keypress:
*/
const input = document.querySelector("#username");

input.addEventListener("keypress", function(e) {
	console.log(e);
});

/**
================================================
keyup vs. keydown vs. keypress:

*** Look to use "beforeinput" or "keydown" instead of "keypress" since it has been deprecated.

* "keyup" and "keydown" are going to fire for any key that you touch at all (shift, arrow keys, caps-lock, etc). "keydown" will fire when pressed down and the "keyup" doesn't fire until it is released.

* "keypress" event is fired when a key that produces a character value is pressed down. Examples of keys that produce a character value are alphabetic, numeric, and punctuation keys.
*/

/**
================================================
Form Events & PreventDefault:
	* When we want to do something when a user submits and entire form.
*/

const form = document.querySelector("#signup-form");

form.addEventListener("submit", (e) => {
	// this prevents the page from reloading after submit has been clicked.
	e.preventDefault();
});

/** 
 * This leaves us free to extract the data and do something with it, like, sending it to an API.
 * Instead of capturing each input as it changes each time, we could have a keydown or keypress event on the inputs and anytime it changes we can create a variable in our JS that is in sync with the change.
 * Also, anytime you select a different option we could immediately update the variable or create a new variable.
 * By adding one event listener on the "submit" button we do not need to add event listeners on each of the inputs. 
 * preventDefault makes it so nothing happens when "submit" is clicked. The only event that runs in the event listener on "submit"
*/

// ** doing something with the data
// to extract data we need to select the individual elements of the form.
const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const foodSelect = document.querySelector("#food");

form.addEventListener("submit", (e) => {
	// this prevents the page from reloading after submit has been clicked.
	e.preventDefault();
	// log values of inputs to console. We can also save the values to variables.
	console.log("CC:", creditCardInput.value);
	console.log("Terms:", termsCheckbox.checked);
	console.log("Food Select:", foodSelect.value);
	// or
	const creditCardValue = creditCardInput.value;
	const termsCheckboxValue = termsCheckbox.checked;
	const foodSelectValue = foodSelect.value;
});

/**
================================================
Input Events & Change Events:
	* onInput | onChange
*/

// ** Input Event
const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const foodSelect = document.querySelector("#food");

const formData = {};
creditCardInput.addEventListener("input", (e) => {
	formData["creditCardInput"] = e.target.value;
});

foodSelect.addEventListener("input", (e) => {
	formData["foodSelect"] = e.target.value;
});

termsCheckbox.addEventListener("input", (e) => {
	formData["agreeToTerms"] = e.target.checked;
});

// refactoring the above code:
// ** we need to add a "name" to each input in the html [name=""]

const formData = {};
// ** we need to add a "name" to each input in the html [name=""]
// loop over the html names
const inputs = [ creditCardInput, termsCheckbox, foodSelect ];
for (let input of inputs) {
	input.addEventListener("input", (e) => {
		formData[e.target.name] = e.target.value; // this is taking the "name" from the html document and the value of what the user inputs in
	});
}
// we can destructure the above code like this:
const formData = {};
const inputs = [ creditCardInput, termsCheckbox, foodSelect ];

for (let input of inputs) {
	input.addEventListener("input", ({ target }) => {
		const { name, type, value, checked } = target;
		// here we're checking if the input type is equal to checkbox. If it is, we store the "checked" value, if it isn't we store the "value" value.
		formData[name] = type === "checkbox" ? checked : value;
		console.log(formData);
	});
}

// ** Change Event
// Very similar to Input Events but the difference is, text fields will not be updated until the field has lost "focus" (blurring) or "enter" is pressed

for (let input of inputs) {
	// instead of 'input' we use 'change'
	input.addEventListener("change", ({ target }) => {
		const { name, type, value, checked } = target;
		formData[name] = type === "checkbox" ? checked : value;
		console.log(formData);
	});
}
