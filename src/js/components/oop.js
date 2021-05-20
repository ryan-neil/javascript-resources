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

A constructor function is a function that helps us create objects. 
*/

// Demo 1:
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}
Color(255, 255, 255); // -> undefined

// Demo 2:
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
	// in this case "this" will refer to the global scope, the nearest object which is the "Window" object
	console.log(this); // -> Window
}
Color(255, 255, 255);

// ** with constructor functions we generally capitalize the name of the function to symbolize that it is a constructor function.

/** 
====================================
The "new" operator:

 * The "new" operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
*/

// Syntax:
new constructor[[ arguments ]]();

// ** The "new" operator under the hood:

// Demo Syntax:
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
	console.log(this); // -> Object { r: 255, g: 40, b: 100 }
}

new Color(255, 40, 100);

/*
When we call the "Color" function with "new" and pass in values it's going to do certain things behind the scenes.

First:
  1. It creates a blank, plain JavaScript object.

Next:
  2. Adds a property to the new object (__proto__) that links to the constructor function's prototype object. 
    - Note: Properties/objects added to the construction function prototype are therefore accessible to all instances created from the constructor function (using new).

Next:
  3. Binds the newly created object instance as the this context (i.e. all references to this in the constructor function now refer to the object created in the first step).

Lastly:
  4. Returns this if the function doesn't return an object.
*/

// so behind the scenes, it really looks something like this:
function Color(r, g, b) {
	const newObj = {}; // (*1*) the "new" operator creates an object

	// (*3*) "this" is bound to "newObj" so here we're adding r, g, b to the "newObj" object.
	this.r = r;
	this.g = g;
	this.b = b;

	return newObj; // (*4*) the "new" operator returns "this" which is referring to "newObj"
}

// ** if we don't use the "new" keyword, "this" will refer to the window object.

// Example 1:
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}

// instead of defining our functions inside the Color function, we add them to "Color.prototype" outside the initial "Color" function call

// ** we don't want to use arrow functions for these since they behave differently with "this"

// here we add an "rgb" function method to "Color.prototype"
Color.prototype.rgb = function() {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
};

// here we add an "hex" function method to "Color.prototype"
Color.prototype.hex = function() {
	const { r, g, b } = this;
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// here we add an "rgba" function method to "Color.prototype"
Color.prototype.rgba = function(a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

// now we have access to the Color.prototype functions globally.

const color1 = new Color(255, 255, 255);
const color2 = new Color(0, 0, 0);

color1.rgb === color2.rgb; // -> true
color1.hex === color2.hex; // -> true

color1.rgb() === color2.rgb(); // -> false
color1.hex() === color2.hex(); // -> false

/** 
====================================
Classes in JavaScript:

	* Syntactic sugar for the "new" operator. A cleaner more concise way of creating "new" objects.
	* The main benefits for this are: 
		- that we don't have to add methods to the prototype manually (Color.prototype.rgb).
		- We don't have to break up the constructor function and then separately add methods.
*/

// Class Syntax:
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}

// ** An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it.

// Class Expression Syntax:
// unnamed
let Rectangle = class {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
};
console.log(Rectangle.name); // -> "Rectangle"

// named
let Rectangle = class Rectangle2 {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
};
console.log(Rectangle.name); // -> "Rectangle2"

// Example 1: Previous section example
class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}
}

const colorTomato = new Color(255, 67, 89, "tomato");
console.log(colorTomato); // -> Object { r: 255, g: 67, b: 89, name: "tomato" }

// Example 2: adding methods to our new class with destructuring
class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}
	rgb() {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	}
	hex() {
		const { r, g, b } = this;
		return (
			"#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
}

const colorRed = new Color(255, 75, 50, "red");
const colorBlue = new Color(50, 75, 255, "blue");

console.log(colorRed.hex()); // -> "#ff4b32"
console.log(colorBlue.hex()); // -> "#324bff"

colorRed.hex === colorBlue.hex; // -> true
colorRed.hex() === colorBlue.hex(); // -> false

// Example 2: Without destructuring our methods
class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}
	rgb() {
		return `rgb(${this.r}, ${this.g}, ${this.b})`;
	}
	hex() {
		return (
			"#" +
			((1 << 24) + (this.r << 16) + (this.g << 8) + this.b)
				.toString(16)
				.slice(1)
		);
	}
}

const colorRed = new Color(255, 75, 50, "red");
const colorBlue = new Color(50, 75, 255, "blue");

console.log(colorRed.hex()); // -> "#ff4b32"
console.log(colorBlue.hex()); // -> "#324bff"

colorRed.hex === colorBlue.hex; // -> true
colorRed.hex() === colorBlue.hex(); // -> false

// Example 3: Calling methods from other instantiated methods
class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}
	// here we're calling method [innerRGB()] from another instanced method [rgb()]
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	// again, we call a method [innerRGB()] from another instanced method [rgba()]
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}
	hex() {
		const { r, g, b } = this;
		return (
			"#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
}

const colorRed = new Color(255, 75, 50, "red");
const colorBlue = new Color(50, 75, 255, "blue");

colorRed.rgba(); // -> "rgba(255, 75, 50, 1)"
colorBlue.rgba(0.5); // -> "rgba(50, 75, 255, 0.5)"

// Example 4: Adding more methods to our Color class
class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
		this.calcHSL();
	}
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}
	hex() {
		const { r, g, b } = this;
		return (
			"#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
	hsl() {
		const { h, s, l } = this;
		return `hsl(${h}, ${s}%, ${l}%)`;
	}
	oppositeColor() {
		const { h, s, l } = this;
		// this adds 180 to the color hue, up to 360 and if it goes over 360 then the remainder is the new hue color (% [modulo])
		const newHue = (h + 180) % 360;
		return `hsl(${newHue}, ${s}%, ${l}%)`;
	}
	fullySaturated() {
		const { h, l } = this;
		return `hsl(${h}, 100%, ${l}%)`;
	}

	// This function converts an RGB color into an HSL color
	calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}

const colorRed = new Color(255, 75, 50, "red");
const colorBlue = new Color(50, 75, 255, "blue");
const colorLightPink = new Color(247, 176, 186, "light pink");

colorBlue.rgba(); // -> "rgba(50, 75, 255, 1)"
colorBlue.rgba(0.5); // -> "rgba(50, 75, 255, 0.5)"

colorRed.hsl(); // -> "hsl(7, 100%, 59.8%)"
colorRed.oppositeColor(); // -> "hsl(187, 100%, 59.8%)"

colorLightPink.hsl(); // -> "hsl(352, 81.6%, 82.9%)"
colorLightPink.fullySaturated(); // -> "hsl(352, 100%, 82.9%)"

/** 
====================================
Classes Continued: Extends, Super, and Subclasses

	* The keywords extend and super both have to do with sub-classing (inheritance).
		- A way of sharing functionality between classes.
*/

// Example:
class Cat {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
	meow() {
		return "Meowww!";
	}
}

const tigerLily = new Cat("Tiger Lily", 1);
tigerLily.eat(); // -> "Tiger Lily is eating!"

class Dog {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
	bark() {
		return "Ruff! Ruff!";
	}
}

const harley = new Dog("Harley", 8);
harley.bark(); // -> "Ruff! Ruff!"

/**
 Both of these classes have duplicate logic. What we can do is create a standalone class with the duplicate logic that both Cat and Dog classes can use. 
 
 We can think of these as a parent -> child relationship. So we can have a parent class and a child class.
 */

/**
	* Extends
	
	Let's re-factor the classes above using the "extends" keyword.
 */

class Pet {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
}

// ** we need to tell "Cat" and "Dog" to include the functionality of "Pet" to extend "Pet"

// ** for this we add "extends Pet" after the class name. by adding the "extends Pet" we don't have to include the "constructor" function to "Cat" or "Dog".

class Cat extends Pet {
	meow() {
		return "Meowww!";
	}
}

const tigerLily = new Cat("Tiger Lily", 1);
tigerLily.eat(); // -> "Tiger Lily is eating!"
tigerLily.meow(); // -> "Meowww!"

class Dog extends Pet {
	bark() {
		return "Ruff! Ruff!";
	}
}

const harley = new Dog("Harley", 8);
harley.eat(); // -> "Harley is eating!"
harley.bark(); // -> "Ruff! Ruff!"

// ** using this method the Cat and Dog classes have access to the eat() method even though we don't define it on Cat or Dog.

/**
	* Super

	Super is going to reference the class that we are "extending" from.

	Sometimes we want to rely on the exact same "constructor" from our "superclass" (parent class) from "Pet"
 */

class Pet {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
}

// Say we wanted some additional information for "Cat", like how many lives the cat has left (with a default of 9):

class Cat extends Pet {
	constructor(name, age, livesLeft = 9) {
		super(name, age); // this is going to reference "name" and "age" from the (parent) "Pet" class
		this.livesLeft = livesLeft;
	}
	meow() {
		return "Meowww!";
	}
}

const tigerLily = new Cat("Tiger Lily", 1);

class Dog extends Pet {
	bark() {
		return "Ruff! Ruff!";
	}
}

const harley = new Dog("Harley", 8);

// ** At some point we can go really deep and have "Pet" extend from "Animal" and "Animal" extend from "LivingThing", etc. An example of this is the "HTMLElement" which extends from 5 or 6 different classes.
