# JavaScript Key Features

## Introduction

This guide will attempt to explain some of the most important concepts any JavaScript developer needs to understand.

### Resources
- [33 JS Concepts](https://github.com/leonardomso/33-js-concepts)
- [7 JavaScript Concepts That Every Web Developer Should Know](https://www.geeksforgeeks.org/7-javascript-concepts-that-every-developer-must-know/)

----

### Table of Contents

1. [The Call Stack](#1-The-Call-Stack)
2. [Scope](#2-Scope)
3. [Immediately Invoked Function Expressions (IIFE)](#3-Immediately-Invoked-Function-Expressions-IIFE)
4. [Hoisting](#4-Hoisting)
5. [Closures](#5-Closures)
6. [Callbacks](#6-Callbacks)
7. [Promises](#7-Promises)
8. [Async & Await](#8-Async-&-Await)

---

## 1. The Call Stack

#### Resources:
  * [Call Stack - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
  * [The JavaScript Call Stack Explained - Colt Steele](https://www.youtube.com/watch?v=W8AeMrVtFLY)

#### What is the Call Stack?

In the most simplest form, it's a "todo list" of function invocations. JavaScript needs to keep track of the history of things, a structured list of what is waiting to be returned, which functions have been invoked but aren't done yet.

The reason we call it a stack is that a stack is a common data structure and the way that it works is, it's a __last in first out__ structure.

_"A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc."_ - MDN

  1. When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
  2. Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
  3. When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
  4. If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.

In summary, we start with an empty Call Stack. Whenever we invoke a function, it is automatically added to the Call Stack. Once the function has executed all of its code, it is automatically removed from the Call Stack. Ultimately, the Stack is empty again.

#### Why do we care?

  * It's fundamental to how JavaScript works
  * It's very helpful for debugging
  * Comes up in interviews

Let's look at an example:
```js
// function declaration
function add(x, y) {
  return x + y;
}

// function invocation
let result = add(3, 5)
```

Call Stack:
```
Visual representation of the Stack Frame:

3 function: multiply
7 function: main 
```

Stack frame contents:
  * The function that was invoked
  * The parameters that were passed in to the function
  * The current line number

Let's look at a different example:
```js
function firstThing() {
  return "This is the first thing!"
}

function secondThing() {
  return firstThing() + " This is the second thing!"
}

secondThing(); // let's add a breakpoint here
```

Now, when we run the code this is what our Call Stack looks like:
```
Call Stack:

main       Line: 9
```

If we step through to the next step:
```
Call Stack:

secondThing     Line: 6   (return firstThing() + " This is the second thing!")
main            Line: 9   (secondThing())
```

Step through again:
```
Call Stack:

firstThing      Line: 6   [return "This is the first thing!"]
secondThing     Line: 6   [return firstThing() + " This is the second thing!"]
main            Line: 9   [secondThing()]
```

Step through again, `firstThing` runs and is "popped" off:
```
Call Stack:

secondThing     Line: 6   (return firstThing() + " This is the second thing!")
main            Line: 9   (secondThing())
```

Step through again, `secondThing` runs and is "popped" off:
```
Call Stack:

main            Line: 9   (secondThing())
```

Finally, our code has finished executing and our console returns:
```js
'This is the first thing! This is the second thing!'
```

**[⬆ Top](#Table-of-Contents)**

## 2. Scope

#### Resources:
  * [Scope Explained in JavaScript - dcode](https://www.youtube.com/watch?v=bD-62OMzni0)

Scope refers to where a variable can be accessed within a program. Some variables can be accessed from anywhere within a program (global scope), while others have a more limited context (function and block scopes).

### Global Scope:
  * Global variables can be accessed from anywhere
  * In the context of a browser, they are found on the `window` object (aside from `let` and `const`)

```js
var a = 20;
let b = 40; // this will work the same way as using `const`

function foo() {
  return b;
}
```

> It's important to note that using the 'var' keyword is not recommended in 2021

Now if we head into the browser and log out the `window` scope we can see that we have `a` as part of the `window` scope. This shows that if we use the `var` keyword it will be placed on the `window` object. In a way, we can think of the `window` object to be the _global_ scope.

Even though the `window` object is the _global_ scope we do not have access to `b`, it is not available on the `window` object. This is because it was declared using `let` (or `const`).

We do, however have access to the function we created, `foo()`. However, just because our `let b` variable is not on the `window` object doesn't mean we can't access it _globally_. Let's test this out with our example above.

```js
var a = 20;
let b = 40;

function foo() {
  return b;
}

console.log(b); // -> 40
console.log(window.b); // -> undefined (since declared with `let` or `const`)
console.log(window.a); // -> 20
console.log(foo()); // -> 40
```

What this example shows is, with the _global_ scope we are able to access variables that are declared inside the _global_ scope from anywhere in our application, which our function `foo()` is demonstrating.

### Function Scope:
  * Variables declared within a function can only be accessed within that function
  * The ES5 `var` keyword used function scope

```js
function foo() {
  var a = 20;
}

console.log(a); // -> ReferenceError: a is not defined
```

> These days the function scope is not too relevant because it only applies to the 'var' keyword 

This will make more sense when we talk about the _block_ scope.

### Block Scope:
  * The newest form of scope, variables declared within a `{}` cannot be accessed outside of it, `{}` represents the block
  * This is made possible with `let` and `const`

```js
if (100 > 20) {
  let a = 20;
  var b = 40;
}

console.log(a); // -> ReferenceError: a is not defined
console.log(b); // -> 40
```

This example shows the important difference between the `var` keyword and `let`/`const`. As we saw earlier the `var` keyword works on _function_ scope but not on _block_ scope.

Now, to get back to why the function scope is more irrelevant today. Going back to our `foo()` function, functions also have a block (`{}`):
```js
function foo() {
  let a = 20;
  var b = 40;

  console.log(a); // -> 20
  console.log(b); // -> 40
}
foo();

console.log(a); // -> ReferenceError: a is not defined
console.log(b); // -> ReferenceError: b is not defined
```

In summary, in modern day JavaScript we should try and use let/const as much as possible since these keywords are block scoped, which basically means they are scoped to just inside the brackets (`{}`) they are called in.

**[⬆ Top](#Table-of-Contents)**

## 3. Immediately Invoked Function Expressions (IIFE)

#### Resources:

**[⬆ Top](#Table-of-Contents)**

## 4. Hoisting

#### Resources:

**[⬆ Top](#Table-of-Contents)**

## 5. Closures

#### Resources:
  * [Learn Closures in 7 Minutes - Web Dev Simplified](https://www.youtube.com/watch?v=3a0I8ICR1Vg)

**[⬆ Top](#Table-of-Contents)**

## 6. Callbacks

#### Resources:

**[⬆ Top](#Table-of-Contents)**

## 7. Promises

#### Resources:

**[⬆ Top](#Table-of-Contents)**

## 8. Async & Await

#### Resources:

**[⬆ Top](#Table-of-Contents)**