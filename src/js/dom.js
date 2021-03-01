/*
JavaScript Notes and Documentation
The Document Object Model
*/

/*
====================================
The Dom
====================================
- This is, fundamentally, connecting JavaScript to HTML and CSS.
- It's our JavaScript window into the contents of a webpage.
- It's just a bunch of objects that we can interact with via JavaScript.
*/

/*
====================================
The "Document" Object
====================================
- The document object is our entry point into the world of the DOM. It contains representations of all the content on the page, plus tons of useful methods and properties.
- The document is the root of the entire webpage (<!document html>).
- All of the other pieces (objects) of the DOM are located within the "document" object.
*/

/** 
 * Selecting Methods:
*/

/** 
 * document.getElementById()
*/

// Syntax:
let element = document.getElementById(id);

// Example:
// HTML
<body>
	<p id="para">Some text here</p>
	<button onclick="changeColor('blue');">Blue</button>
	<button onclick="changeColor('red');">Red</button>
</body>;

// JavaScript
function changeColor(newColor) {
	let elem = document.getElementById('para');
	elem.style.color = newColor;
}
// -> When the "Blue" button is clicked, "Some text here" text changes color to blue and vice-versa with the "Red" button.

/** 
 * document.getElementsByTagName()
*/

// Syntax:
let elements = document.getElementsByTagName(name);

// Example:
// HTML
<body>
	<p>Paragraph 1</p>
	<p>Paragraph 2</p>
	<p>Paragraph 3</p>
	<button onclick="countPTags()">Count paragraphs</button>
</body>;

// JavaScript
function countPTags() {
	let totalPTags = document.getElementsByTagName('p');
	console.log(`Total p tags are: ${totalPTags.length}`);
}
// -> Total p tags are: 3

/** 
 * HTMLCollection:
 * The HTMLCollection is an array-like object that is not an array. It is a collection of objects that we can access using indeces.
 * Regular array methods like pop() or includes() don't work with HTMLCollection.
*/

// Example 1:
// HTML
<body>
	<p>Paragraph 1</p>
	<p>Paragraph 2</p>
	<p>Paragraph 3</p>
	<button onclick="countPTags()">Count paragraphs</button>
</body>;

// JavaScript
const pTags = document.getElementsByTagName('p');

console.log(pTags); // -> HTMLCollection { 0: p, 1: p, 2: p }
console.log(pTags.length); // -> 3
console.log(pTags[0]); // -> <p> (Paragraph 1)
console.log(pTags[2]); // -> <p> (Paragraph 3)

// Example 1.1: Iterating over HTMLCollection's
for (let p of pTags) {
	console.log(p);
}
// -> <p>
// -> <p>
// -> <p>

// Example 1.2: Using "spread" to convert HTMLCollection to an array
const arr = [ ...pTags ];

console.log(arr);
// -> 0: <p>
// -> 1: <p>
// -> 2: <p>

/** 
 * document.getElementsByClassName()
*/

// Syntax:
let elements = document.getElementsByClassName(names);
// or
let elements = rootElement.getElementsByClassName(names);

// Example 1:
// HTML
<body>
	<div id="parent-id">
		<p>hello world 1</p>
		<p class="test">hello world 2</p>
		<p>hello world 3</p>
		<p>hello world 4</p>
	</div>
</body>;

// JavaScript
// a list of matching elements, *not* the element itself
const test = document.getElementsByClassName('test');
console.log(test);
// -> HTMLCollection { 0: p.test, length: 1 }

// the first element, as we wanted
const testTarget = document.getElementsByClassName('test')[0];
console.log(testTarget);
// -> <p class="test">

/** 
 * A commonly used method of operation is combining or chaining "document.getElementById()" and "document.getElementByClassName()".
*/

// From the example above:
// HTML
<body>
	<div id="parent-id">
		<p>hello world 1</p>
		<p class="test">hello world 2</p>
		<p>hello world 3</p>
		<p>hello world 4</p>
	</div>
</body>;

// JavaScript
const parentDOM = document.getElementById('parent-id');
console.log(parentDOM); // -> <div id="parent-id">

// a list of matching elements, *not* the element itself
const test = parentDOM.getElementsByClassName('test');
console.log(test); // -> HTMLCollection { 0: p.test, length: 1 }

// the first element, as we wanted
const testTarget = parentDOM.getElementsByClassName('test')[0];
console.log(testTarget); // -> <p class="test">

/**
 * document.querySelector()
 * This is a newer, all-in-one method to select a single element (at most).
 * It can select everything that we use to select elements (ID, class, tag, etc.)
 * We pass in a CSS selector as a string.
 * This will only pass us the very first match regardless of how many there are in the document.
 * It's important to note that "querySelector()" is less performant than the traditional "getElementById" or "getElementsByClassName/TagName". Depending on what we pass into it, it could have to do a lot of work.
*/

// finds first h1 element tag:
document.querySelector('h1');

// finds first element with ID of red:
document.querySelector('#red');

// finds first element with class of .big:
document.querySelector('.big');

/**
 * document.querySelectorAll()
 * This acts the same as document.querySelector(), but returns a collection of matching elements.
*/

// Example 1:
// HTML
<body>
	<div id="parent-id">
		<p>hello world 1</p>
		<p class="test">hello world 2</p>
		<p>hello world 3</p>
		<p>hello world 4</p>
	</div>
</body>;

// JavaScript
// targeting the ID, "parent-id":
const parentDOM = document.querySelector('#parent-id');
console.log(parentDOM); // -> <div id="parent-id">

// targeting the class, "test":
const test = parentDOM.querySelector('.test');
console.log(test); // -> <p class="test">

// targeting all the p tags:
const testTarget = parentDOM.querySelectorAll('p');
console.log(testTarget); // -> NodeList(4) [ p, p.test, p, p ]

// we can also get more specific with our selectors:
// HTML
<body>
	<div id="parent-id">
		<p>hello world 1</p>
		<p class="test">hello world 2</p>
		<p>hello world 3</p>
		<p class="style1">hello world 4</p>
	</div>
</body>;

// JavaScript
// targeting the first p tag with the class of "style1"
const pTarget = document.querySelector('p.style1');
console.log(pTarget); // -> <p class="style1">hello world 4</p>

// Example 2: Same class name in different locations of the document
// HTML
<body>
	<div id="parent-id">
		<p>hello world 1</p>
		<p class="test">hello world 2</p>
		<p>hello world 3</p>
		<p class="style1">hello world 4</p>
	</div>
	<section>
		<p class="style1">hello world 5</p>
	</section>
</body>;

// JavaScript
// targeting the first p tag with the class of "style1"
const moreSpecificTarget = document.querySelector('section p.style1');
console.log(moreSpecificTarget); // -> <p class="style1">hello world 5</p>

/** 
 * Manipulating or "Accessing" Properties and Methods:
*/

/** 
 * HTMLElement.innerText:
 * The innerText property of the HTMLElement interface represents the "rendered" text content of a node and its descendants.
 * Accessing text from an element (how we get the contents of an element)
 * innerText only shows “human-readable” elements.
 * We CANNOT create new elements with innerText.
*/

// Example:
// HTML
<body>
	<div id="parent-id">
		<p>hello world 1</p>
		<p class="test">hello world 2</p>
		<p>hello world 3</p>
		<p>hello world 4</p>
	</div>
</body>;

// JavaScript
const insideElement = document.querySelector('p.test');
console.log(insideElement.innerText); // -> hello world 2

/** 
 * Node.textContent:
 * The textContent property of the Node interface represents the text content of the node and its descendants.
 * textContent gets the content of all elements, including <script> and <style> elements.
 * textContent will print out all text formatting (indenting), hidden code, tags, etc.
*/

/** 
 * innerText vs. textContent:
 * "innerText" is defined only for HTMLElement objects, while "textContent" is defined for all Node objects.
*/

// HTML
<p>
	Hello <span style="display: none;">World</span>
</p>;

// JavaScript
const element = document.querySelector('p');
console.log(element.innerText);
// -> Hello
console.log(element.textContent);
// -> Hello World

/** 
 * innerHTML:
 * innerHTML will return all of the text inside of an element as well as all other tags inside a given element.
 * When trying to update HTML, like adding an element we HAVE to use innerHTML. We CANNOT use innerText here.
*/

// Example:
// HTML
<body>
	<ul>
		<li>First thing</li>
		<li>Second thing</li>
		<li>Third thing</li>
	</ul>
</body>;

// JavaScript
const elements = document.querySelector('ul');
console.log(elements.innerHTML);
// -> <li>First thing</li>
// -> <li>Second thing</li>
// -> <li>Third thing</li>
console.log(elements.innerText);
// -> "First thing
// -> Second thing
// -> Third thing"

/** 
 * Accessing properties on individual elements:
 * They are all referred to as "attributes" which in JS is a word followed by an = and quotes (src="").
 * value
 * src
 * href
 * getAttribute
 * setAttribute ... etc.
*/

// * Value Attribute (All attributes follow the same guidelines)
// HTML
<body>
	<form>
		<input type="text" placeholder="Name" value="Katie" />
		<input type="password" placeholder="Password" />
		<input type="checkbox" />
		<input type="range" min="0" max="100" step="10" />
		<input type="submit" value="Submit" />
	</form>
</body>;

// JavaScript
const inputs = document.querySelectorAll('input');

// for text boxes:
const nameValue = inputs[0].value;
// if user typed "Katie" in the first input box
console.log(nameValue); // -> "Katie"

// for checkboxes:
const inputChecked = inputs[2].checked;
// if user toggles the checkbox on
console.log(inputChecked); // -> true

// for range slider:
const rangeSlider = inputs[3].value;
// if user slides the knob halfway.
console.log(rangeSlider); // -> "50" [incrementing by 10 (step)]

// * getAttribute
// HTML
<body>
	<form>
		<input type="text" placeholder="Name" value="Katie" />
		<input type="password" placeholder="Password" />
		<input type="checkbox" />
		<input type="range" min="0" max="100" step="10" />
		<input type="submit" value="Submit" />
	</form>
</body>;

// JavaScript
const range = document.querySelector('input[type="range"]');

const maxRange = range.getAttribute('max');
console.log(maxRange); // -> "100"
const minRange = range.getAttribute('min');
console.log(minRange); // -> 0

// * setAttribute
// HTML
<body>
	<form>
		<input type="text" placeholder="Name" value="Katie" />
		<input type="password" placeholder="Password" />
		<input type="checkbox" />
		<input type="range" min="0" max="100" step="10" />
		<input type="submit" value="Submit" />
	</form>
</body>;

// JavaScript
const range = document.querySelector('input[type="range"]');

range.setAttribute('max', '120');
range.setAttribute('min', '-10');

console.log(range.max); // -> 120
console.log(range.min); // -> -10

/** 
 * Accessing the parent, children or nearest sibling of a given element:
 * parentElement
 * children
 * nextSibling
*/
