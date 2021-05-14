/*
JavaScript Notes and Documentation
Object Oriented Programming
*/

/**
====================================
Object Oriented Programming:

The basic idea of OOP is that we use objects to model real world things that we want to represent inside our programs, and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of.

Objects can contain related data and code, which represent information about the thing you are trying to model, and functionality or behavior that you want it to have. 

Object data (and often, functions too) can be stored neatly (the official word is encapsulated) inside an object package (which can be given a specific name to refer to, which is sometimes called a namespace), making it easy to structure and access; objects are also commonly used as data stores that can be easily sent across the network.

** Abstraction — creating a simple model of a more complex thing, which represents its most important aspects in a way that is easy to work with for our program's purposes.

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
*/

/**
====================================
Example: Factory Functions

  - This function makes and returns an object every time it is called.
  - The resulting objects all follow the same "recipe".
*/

function makeColor(r, g, b) {
	const color = {};
	// our 3 unique properties added to the "color" object
	color.r = r;
	color.g = g;
	color.b = b;

	color.rgb = function() {
		// destructure "r, g, b" to "this" which is referring to the makeColor() object
		const { r, g, b } = this;

		return `rbg(${r}, ${g}, ${b})`;
	};

	color.hex = function() {
		// "this" is referring to the makeColor() object again
		const { r, g, b } = this;

		return (
			"#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	};

	return color;
}

const firstColor = makeColor(35, 255, 150);

firstColor.rgb(); // -> "rbg(35, 255, 150)"
firstColor.hex(); // -> "#23ff96"

/**
 Factory functions are not commonly used because of their shortcomings:

 Every time we make a new color object we start with an empty object. We have our 3 unique properties (color.r, color.g, color.b) that are added to the color object.

 But then our 2 functions (color.rgb, color.hex) are recreated and a unique copy is added to each color object. So in other words, each color object has it's own rgb/hex function. But there's no reason to have a unique copy of the function itself.
 */

// Let's look at an example of this taken from the previous example code:
const whiteColor = makeColor(255, 255, 255);
whiteColor.hex(); // -> "#ffffff"
whiteColor.rgb(); // -> "rbg(255, 255, 255)"

const blackColor = makeColor(0, 0, 0);
blackColor.hex(); // -> "#000000"
blackColor.rgb(); // -> "rbg(0, 0, 0)"

// the example below is checking to see if both whiteColor and blackColor are referring to the same "hex" function. We see that they are not, "whiteColor" and "blackColor" have their own separate copy of the "hex" function.
whiteColor.hex === blackColor.hex; // -> false

// if we try this on the built-in methods for strings and arrays they are both referencing the same function. They don't each have their own copy of "slice" and "pop".
"hi".slice === "bye".slice; // -> true
[ 1, 2, 3 ].pop === [ 4, 5, 6 ].pop; // -> true

// This is where constructor function's come in.

/**
====================================
Example: Constructor Functions 

The "new" operator:

The "new" operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
*/

function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}
Color(255, 255, 255); // -> undefined

function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
	console.log(this);
}
Color(255, 255, 255); // -> Window

/**
The "new" keyword does the following things:

  1. Creates a blank, plain JavaScript object.
 
  2. Adds a property to the new object (__proto__) that links to the constructor function's prototype object. 
    - Note: Properties/objects added to the construction function prototype are therefore accessible to all instances created from the constructor function (using new).

  3. Binds the newly created object instance as the this context (i.e. all references to this in the constructor function now refer to the object created in the first step).
 
  4. Returns this if the function doesn't return an object.
*/

// Syntax:
new constructor[[ arguments ]]();

// Example 1:
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}

Color.prototype.rgb = function() {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
	const { r, g, b } = this;
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(255, 255, 255);
const color2 = new Color(0, 0, 0);

color1.rgb === color2.rgb; // -> true
color1.hex === color2.hex; // -> true

// ** we don't want to use arrow functions for these since they behave differently with "this"

document.body.style.backgroundColor = color1.rgba();
