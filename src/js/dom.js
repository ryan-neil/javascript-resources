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
The "Document" Object:

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
 * previousSibling
*/

// * parentElement
// HTML
<body>
	<section>
		<h2>Section Title</h2>
		<p>First paragraph</p>
		<p>Second paragraph</p>
		<p>Third paragraph</p>
	</section>
</body>;

// JavaScript
const firstP = document.querySelector('p');

console.log(firstP.parentElement); // -> <section>
// we can chain the .parentElement
console.log(firstP.parentElement.parentElement); // -> <body>

// * children
// HTML
<body>
	<section>
		<h2>Section Title</h2>
		<p>First paragraph</p>
		<p>Second paragraph</p>
		<p>Third paragraph</p>
	</section>
</body>;

// JavaScript
const sectionChild = document.querySelector('section');

console.log(sectionChild.children); // -> HTMLCollection { 0: h2, 1: p, 2: p, 3: p }
console.log(sectionChild.children[0]); // -> <h2>

// * nextElementSibling
// HTML
<body>
	<section>
		<h2>Section Title</h2>
		<p>First paragraph</p>
		<p>Second paragraph</p>
		<p>Third paragraph</p>
	</section>
</body>;

// JavaScript
const nextSib = document.querySelector('h2');
console.log(nextSib.nextElementSibling); // -> <p>First paragraph</p>

// * previousElementSibling
// HTML
<body>
	<section>
		<h2>Section Title</h2>
		<p>First paragraph</p>
		<p>Second paragraph</p>
		<p>Third paragraph</p>
	</section>
</body>;

// JavaScript
const previousSib = document.querySelector('p');
console.log(previousSib.previousElementSibling); // -> <h2>Section Title</h2>

/**
====================================
Changing Multiple Elements:

- We use querySelectorAll(), getElementsByClassName(), getElementsByTagName() to select all of the element and get an array-like object.
- We then iterate over that object and call a method or property we want.
*/

// Example 1: Change the text inside all "p" elements
// HTML
<body>
	<section>
		<h2>Section Title</h2>
		<p>First paragraph</p>
		<p>Second paragraph</p>
		<p>Third paragraph</p>
	</section>
</body>;

// JavaScript
// we select all the p tags
const allPTags = document.querySelectorAll('p');

// next we loop over all p tags
for (let p of allPTags) {
	//  last, we change the text
	p.innerText = 'This is new text';
}

/**
====================================
Changing Styles Using JavaScript:
*/

// Example 2: Change the text color inside all "p" elements
// HTML
<body>
	<section>
		<h2>Section Title</h2>
		<p>cd paragraph</p>
		<p>Second paragraph</p>
		<p>Third paragraph</p>
	</section>
</body>;

// JavaScript
// we select all the p tags
const allPTags = document.querySelectorAll('p');
// we create a colors array
const colors = [ 'coral', 'violet', 'lightblue' ];

// next we loop over all p tags and print the text and index
allPTags.forEach((p, idx) => {
	// assign a variable to all the colors in the array
	const newColors = colors[idx];
	// change the text color of the iterated p tags
	p.style.color = newColors;
});

/** getComputedStyle
	* a different way of accessing style values.
	* Retrieving what the current value is for a color, backgroundColor, display, width, etc.
*/

document.querySelector('p').style.color;
// "" (returns empty)

/**
	* This returns empty because the styleproperty only contains the inline styles.
	* It does not contain any "calculated" styles,styles from a style sheet (CSS) or styles from a given class.
*/

// if we want to get the computed value for an element we have to call the method "getComputedStyle":
const p = document.querySelector('p');

const styles = getComputedStyle(p);

// we can now access the style properties of all the "p" elements
console.log(styles.backgroundColor);
// -> "rgba(0, 0, 0, 0)"
console.log(styles.fontFamily);
// -> "serif"

/** classList
 * It is an object representation (DOM token list) that contains the classes on an element.
 * It also provides Methods (toggle, forEach, add, etc.) so we can do things with them.
 * If we're styling multiple styles at once or we plan on reusing this and styling multiple elements the same way, create a "class" and add or remove the "class" using the "classList" property and it's methods.
 */

// Instead of doing this:
const todo = document.querySelector('#todos .todo');

todo.style.color = 'grey';
todo.style.textDecoration = 'line-through';
todo.style.opacity = '50%';

/**
 * The downside of this method is our styles end up all in our JavaScript file rather than neatly in our CSS stylesheet.
 */

// We must add a "done" class to our CSS sheet with the above styles and then do this:
const todo = document.querySelector('#todos .todo');

// we have the ability to toggle classes: which basically says, "if it's there already, remove it" or "if it's not there, add it".
const toggleClass = todo.classList.toggle('done');
console.log(toggleClass); // -> true
console.log(toggleClass); // -> false

// to achieve this without toggle:
const todo = document.querySelector('#todos .todo');

todo.getAttribute('class'); // -> "todo"
todo.getAttribute('class').includes('done'); // -> false
// it does not have the class "done" so here we're changing the "class" [todo] to "class done" or [todo done]
todo.setAttribute('class', todo.getAttribute('class') + ' done');
// to toggle it again
todo.getAttribute('class').includes('done');

/** Creating Elements
 * Insert or add elements into the DOM.
 */

// Syntax:
let element = document.createElement(tagName);

// Step 1: Create our element
const newH2 = document.createElement('h2');
console.log(newH2); // -> <h2> </h2>

// Step 2: Add text to our new "h2" element
newH2.innerText = "I like superhero's!";

// Step 3: Add the class "special" to our "h2" element
newH2.classList.add('special');

// Step 4: Add our element to the DOM
// we select where we want to add the new element
const addedBodyElement = document.querySelector('body');
// we append the element to the end of the body section
addedBodyElement.appendChild(newH2);

// * Creating an image:
const newImg = document.createElement('img');
// link the image
newImg.src =
	'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';
newImg.style.width = '500px';
// now we need to append it to the DOM
document.body.appendChild(newImg);

// * Creating a link:
const newLink = document.createElement('a');
newLink.innerText = 'Click here for more info';
newLink.href = 'https://www.josephskycrest.com/';

const ulEnd = document.querySelector('ul');
ulEnd.appendChild(newLink);

/** 
 * 
 */
