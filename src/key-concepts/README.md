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
3. [Closures](#3-Closures)
4. [Immediately Invoked Function Expressions (IIFE)](#4-Immediately-Invoked-Function-Expressions-IIFE)
5. [Hoisting](#5-Hoisting)
6. [Callbacks](#6-Callbacks)
7. [Promises](#7-Promises)
8. [Async & Await](#8-Async-&-Await)

---

## 1. The Call Stack

### Resources:
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

### Resources:
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

In summary, in modern day JavaScript we should try and use `let`/`const` as much as possible since these keywords are _block_ scoped, which basically means they are isolated to the brackets (`{}`) they are called in. The `var` keyword causes more inconsistency in our code and can muddy up the _global_ scope of our application.

### Lexical Scope:

Let's very briefly mention _lexical_ scope. The definition, from [this](https://stackoverflow.com/questions/1047454/what-is-lexical-scope) StackOverflow answer, is how variable names are resolved in nested functions: __inner functions contain the scope of parent functions even if the parent function has returned__. 

The last part of this answer: "even if the parent function has returned" is called _Closure_. We will discuss Closure in the next section.

**[⬆ Top](#Table-of-Contents)**

## 3. Closures

### Resources:
  * [Learn Closures in 7 Minutes - Web Dev Simplified](https://www.youtube.com/watch?v=3a0I8ICR1Vg)
  * [Javascript Closures Explained - Dave Gray](https://www.youtube.com/watch?v=1S8SBDhA7HA)

**[⬆ Top](#Table-of-Contents)**

## 4. Immediately Invoked Function Expressions (IIFE)

### Resources:
  * [Javascript IIFE Function Expressions Explained - Dave Gray](https://www.youtube.com/watch?v=8GDk8sj0YgQ)
  * [Essential JavaScript: Mastering Immediately-invoked Function Expressions - Medium](https://vvkchandra.medium.com/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6)
  * [Immediately-Invoked Function Expression (IIFE) - "Cowboy" Ben Alman](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)

Let's have a look at a couple different variations of the IIFE:
```js
// 1. with an anonymous arrow function inside:
(() => {
  // do something...
})();

// 2. with the function keyword:
(function() {
  // do something...
})();

// 3. with a function name (allows for recursion):
(function myIIFE() {
  num++;
  console.log(num);
  return num !== 5 ? myIIFE(num) : console.log('Finished!');
})((num = 0)); // -> 1, 2, 3, 4, 5 Finished!
```

### So why use Immediately Invoked Function Expressions?

> Note: As of ES6, block scoping has just about completely replaced IIFE's but there still seems to be one application of IIFE's and that's _The Module Pattern_. Blocks don't have return values, and mutating higher-scoped variables is ugly, so we will still see function expressions in the creation of objects that need private states.

#### Reason #1: Not polluting the global object namespace (scope)
The first most important reason we would choose to use an IIFE is it _allows us to not pollute the global object namespace (scope)_. This is important because when we're working on a large application or within a team, we can run into some conflicts with names.

Let's look an an example of isolating a declaration within a function:
```js
// global declarations
const x = "Something"
const helloWorld = () => "Hello World!"

// isolated declarations inside the function
(() => {
  const x = "IIFE Something"
  const helloWorld = () => "Hello IIFE!"

  console.log(x);
  console.log(helloWorld());
})();
```

Now if we run the above code, inside our console we would see:
```js
"IIFE Something"
"Hello IIFE!"
```

Our global declarations do not run and instead we just see the output of our variables inside our IIFE. This has to do with scope, which we covered in the [Scope](#2-Scope) section above.

#### Reason #2: Creating private variables and methods from a closure
The second most important reason for using an IIFE is in _creating private variables and methods from a closure_. This methods uses closures which we explain in the [Closures](#3-Closures) section above. 

Let's check out an example of this (we'll break down the function and what it's doing as we're writing it out):
```js
const increment = (() => {
  // define the 'counter' variable
  let counter = 0;
  // log 'counter' to confirm the IIFE is called into action
  console.log(counter);

  // define a function that tells us how many credits we have, we are passing in a number to this function
  const credits = (num) => console.log(`I have ${num} credit(s).`);
  // return an anonymous function
  return () => {
    // increment 'counter'
    counter++;
    // pass the value of 'counter' to our 'credits' function
    credits(counter);
  };
})();
```

Now, if we were to run the function immediately we would see `0` inside our console. We're just getting the value of the `counter`. We do not get the `credits` function called into action as well as our returned anonymous function even though it is returned.

So `increment` now holds the anonymous function. Let's now call our `increment` function a few times and see what happens:
```js
const increment = (() => {
  let counter = 0;
  console.log(counter);

  const credits = (num) => console.log(`I have ${num} credit(s).`);
  return () => {
    counter++;
    credits(counter);
  };
})();

increment(); // -> I have 1 credit(s).
```

As we can see from the output, it is now calling our anonymous function into action and it still has [lexical](https://stackoverflow.com/questions/1047454/what-is-lexical-scope) scope to refer to the counter variable.

Now, let's call `increment` twice and see what happens:
```js
const increment = (() => {
  // logic
})();

increment(); // -> I have 1 credit(s).
increment(); // -> I have 2 credit(s).
```

As we can see from above, `counter` is still able to increment. So our anonymous function, through the scope chain still has access to the __private__ `counter` variable. 

Now, let's try and access the `counter` variable and the `credits` function directly:
```js
const increment = (() => {
  let counter = 0;
  console.log(counter);

  const credits = (num) => console.log(`I have ${num} credit(s).`);
  return () => {
    counter++;
    credits(counter);
  };
})();
increment(); // -> I have 1 credit(s).

console.log(counter); // -> ReferenceError: counter is not defined
credits(3); // -> ReferenceError: credits is not defined
```

As you can see we get reference error's because they are not available in the global scope.

#### Reason #3a: The Module Pattern
The third most important reason for using IIFE's is __The Module Pattern__. Modules were introduced in ES6 (ES2015) and so we don't see this being used as often but in legacy code this could come up so we should be able to recognize it. Let's have a look at an example:
```js
const Score = (() => {
  // create a private 'count' variable
  let count = 0;

  // return an object (this will still have access to the private 'count' variable)
  return {
    current: () => { return count },
    increment: () => { count++ },
    reset: () => { count = 0 }
  };
})();
```
By doing it this way `Score` will now have access to these methods returned in the object. Let's have a look at an example of this:
```js
const Score = (() => {
  let count = 0;

  return {
    current: () => { return count },
    increment: () => { count++ },
    reset: () => { count = 0 }
  };
})();

Score.increment();
console.log(Score.current()); // -> 1
Score.increment();
console.log(Score.current()); // -> 2
Score.reset();
console.log(Score.current()); // -> 0
```

With this method we're creating an object in a different way but this is a _Module Pattern_ that actually creates a namespace because these methods are being referenced inside of the object which is the `Score` namespace. So in other words, we've created a module called `Score`.

#### Reason #3b: The Revealing Pattern
With that behind us, looks have a look at a variation of the _Module Pattern_ called __The Revealing Pattern__. Let's look at this now:
```js
const Game = (() => {
  let count = 0;
  const current = () => { return `Game score is ${count}.` };
  const increment = () => { count++ };
  const reset = () => { count = 0 };

  return {
    current: current,
    increment: increment,
    reset: reset
  };
})();
```

The _The Revealing Pattern_ variation is very similar to our previous _Module Pattern_ example. However, our methods are now defined in the private namespace and as we return the object we are just using pointers. So in other words we're using pointers instead of defining the methods inside of the return object.

Let's run it and have a look at the output:
```js
const Game = (() => {
  let count = 0;
  const current = () => { return `Game score is ${count}.` };
  const increment = () => { count++ };
  const reset = () => { count = 0 };

  return {
    current: current,
    increment: increment,
    reset: reset
  };
})();

Game.increment();
console.log(Game.current()); // -> Game score is 1.
Game.increment();
console.log(Game.current()); // -> Game score is 2.
Game.reset();
console.log(Game.current()); // -> Game score is 0.
```

**[⬆ Top](#Table-of-Contents)**

## 5. Hoisting

### Resources:

**[⬆ Top](#Table-of-Contents)**

## 6. Callbacks

### Resources:

**[⬆ Top](#Table-of-Contents)**

## 7. Promises

### Resources:

**[⬆ Top](#Table-of-Contents)**

## 8. Async & Await

### Resources:

**[⬆ Top](#Table-of-Contents)**