/*
JavaScript Notes and Documentation
Prototypes
*/

/**
====================================
Object Prototypes:
Prototypes are the mechanism by which JavaScript objects inherit features from one another.

Having a single object that contains common properties and methods that other objects of arrays or strings look to to find their common properties.

JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.
*/

/**
Example: The Array Prototype

An array has tons of different methods.
  - Array.prototype.filter()
  - Array.prototype.pop()
  - Array.prototype.push()
  - etc.

These array methods are not defined on every single array that we make, it is only defined on the "prototype object" (Array in the above example).

So rather than having a separate method on every single array called ".push()", there is only one "prototype" and each array has a reference to that prototype with "__proto__".
*/

/**
__proto__ vs. prototype:
  * __proto__ = a reference to the prototype object.
  * prototype (String.prototype, Array.prototype) = the actual object where we add the methods or the properties to (the template object).
*/
