/*
JavaScript Notes and Documentation
This:
*/

/*
=================================
Keyword "this"
=================================
- "this" a fundamental part of JavaScript that helps us write much more useful methods in our objects.
- Used a lot with DOM manipulation.

- We can think of "this" as a reference to the current execution scope. It is going to give you an object back.
- So depending on the scope and depending on the rules of how "this" works that object changes.
  * It could be a reference to the global scope...
*/
function sayHi() {
	console.log('Hi!');
	console.log(this); // this refers to the current execution scope
}
sayHi();
// -> Hi!
// -> Window (the global scope in the browser)

/*
=================================
this in Methods
=================================
- We have the ability to write an object or a method that is aware of the object it lives in.
- This means we can use objects not only to store different methods because they're related (add, multiply, divide, etc.) we group them together as a nice way to create a container for our methods that are similar.
- But now we have a way of also interacting with properties with other values or even other methods.
- This means our object can be a little self-contained world where we can have variables 
*/
// Example 1:
const person = {
	first    : 'Cherilyn',
	last     : 'Sarkisian',
	nickName : 'Cher',
	fullName() {
		console.log(this); // here the value of 'this' is the "person" object
	}
};
// -> returns the entire "person" object

// Example 1.2:
const person = {
	first    : 'Cherilyn',
	last     : 'Sarkisian',
	nickName : 'Cher',
	fullName() {
		console.log(`${this.first} ${this.last} aka ${this.nickName}`);
	}
};
person.fullName(); // -> Cherilyn Sarkisian aka Cher

// Example 1.3:
const person = {
	first    : 'Cherilyn',
	last     : 'Sarkisian',
	nickName : 'Cher',
	fullName() {
		// since we're writing 'this' a lot we can destructure it down to:
		const { first, last, nickName } = this;
		// we can then remove the "this."
		console.log(`${first} ${last} aka ${nickName}`);
	}
};
person.fullName(); // -> Cherilyn Sarkisian aka Cher

// Example 1.4: Adding multiple methods to an object
/* 
Breakdown: 
- We call a method [printBio()] that is located within the same object using "this" [this.fullName()]. 
- In that method we access 3 different properties [first, last, nickName] using "this" [fullName()] using destructuring.
- The value of "this" in both methods is referring to the object they live in
*/
const person = {
	first    : 'Cherilyn',
	last     : 'Sarkisian',
	nickName : 'Cher',
	fullName() {
		// since we're writing 'this' a lot we can destructure it down to:
		const { first, last, nickName } = this;
		// we can then remove the "this."
		return `${first} ${last} aka ${nickName}`;
	},
	// here we add a second method
	printBio() {
		// we need to use "this." to reference the whole object, only using fullName() throws a reference error
		const fullName = this.fullName();
		console.log(`${fullName} is a person!`);
	}
};
person.printBio(); // -> Cherilyn Sarkisian aka Cher is a person!

/*
=================================
this: Invocation Context
=================================
- The value of "this" depends on the 'invocation context' of the function it is used in. This means that the value will change depending on how the function is executed and not just where you write it.
*/
// Example 1: Changing the value of "this"
const person = {
	first    : 'Cherilyn',
	last     : 'Sarkisian',
	nickName : 'Cher',
	fullName() {
		const { first, last, nickName } = this;
		return `${first} ${last} aka ${nickName}`;
	},
	printBio() {
		const fullName = this.fullName();
		console.log(`${fullName} is a person!`);
	}
};

const printBio = person.printBio;
/* 
- We can think of it as if there is something to the left and then a dot [person.] and then we're executing the function, "this" will be set to that thing to the left.
- For example, person.printBio(): this is set to "person". 
- If there is nothing to the left or we're just calling printBio() "this" would be set to the global execution scope, the window.
*/

/*
=================================
this and Arrow Functions
=================================
- Arrow functions do not get their own version of "this".
- The value of "this" does not change in arrow functions.
- This is generally why we do not use arrow functions as methods because a lot of the methods we write, we want to have access to the parent object of the containing object to do things like:
  * referencing properties
  * calling a different method like we did in printBio() [this.fullName()].
*/
// Example 1:
const person = {
	first    : 'Cherilyn',
	last     : 'Sarkisian',
	nickName : 'Cher',
	fullName() {
		const { first, last, nickName } = this;
		return `${first} ${last} aka ${nickName}`;
	},
	printBio() {
		const fullName = this.fullName();
		console.log(`${fullName} is a person!`);
	},
	laugh    : () => {
		console.log(this);
		console.log(`${this.nickName} says HAHAHA!`);
	}
};
console.log(person.laugh());
// -> Window
// -> undefined says HAHAHA!
