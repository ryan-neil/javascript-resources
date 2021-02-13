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
	console.log(this);
}
sayHi();
