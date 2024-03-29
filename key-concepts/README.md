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
6. [Async JavaScript](#6-Async-JavaScript) \
  6.1 [Callbacks](#61-Callbacks) \
  6.2 [Promises](#62-Promises) \
  6.3 [Async & Await](#63-Async-&-Await)
7. [Higher Order Functions and Arrays](#7-Higher-Order-Functions-and-Arrays)
8. [Bonus Questions](#8-Bonus-Questions)

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

3 function: add
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
  * [JavaScript Closures and How to Use Closures - JavaScript Tutorial Article](https://www.javascripttutorial.net/javascript-closure/)

_"A closure is a function that has access to the parent scope (this is the lexical context), even after the parent function has closed (this is the closure context)."_ - w3schools

_"JavaScript variables do not hold the values, they rather hold the references to the physical memory slots in which values are contained. When variables are returned from a function, it forms a closure because the function is not returning the variables/values, the function is rather returning the references to memory slots."_ - YouTube comment

In order to understand Closures, it's important to have a good understanding of [Scope](#2-Scope). Let's briefly discuss _Lexical_ scope:

#### Lexical Scope:
_"Lexical scope defines how variable names are resolved in nested functions."_ - Dave Gray

Therefore, if we have a child function within a parent function the child function has access to the scope of the parent function and also has access to the _Global_ scope as well. This can often be confused with _Closure_ but _Lexical_ scope is only an important part of _Closure_, it's not the entire thing.

```js
// global scope
let x = 1;

const parentFunction = () => {
  // local scope
  let myValue = 2;

  console.log(x); // -> 1
  console.log(myValue); // -> 2
};
parentFunction();

console.log(myValue); // -> RefErr: myValue is not defined
```

Let's add some more logic to attempt to understand what's going on a bit more:

```js
// global scope
let x = 1;

const parentFunction = () => {
  // local scope
  let myValue = 2;
  console.log(x); // -> 1
  console.log(myValue); // -> 2

  // this nested function will have access to the
  // variables of the global scope and its parent function
  const childFunction = () => {
    console.log((x += 5)); // -> 6
    console.log((myValue += 1)); // -> 3
  };

  childFunction();
};

parentFunction();
```

This example does not necessarily display _Closure_. Although, we can say the child function has _Closure_ over the scope of the parent function because it has access to its environment. We can even go as far as saying the child function has _Closure_ over the _Global_ scope because it also has access to it and it's variables. A Closure is created when we _define_ a function, not when a function is _executed_.

Again, this does not exactly give an example of Closure, _Lexical_ scope is just an important part of Closure, it's not actually showing what Closure is.

Let's try to think about this through an analogy, think of the sports game soccer (real football `;)`). The painted perimeter lines, or boundaries, of where the players can play are set before we play the game. 

We can think of Closures in the same way, it is created when we define the function or from the analogy, when the boundaries are set. From our example above, we're telling `childFunction()` what it has Closure over at the time it is defined. It is defined within `parentFunction()` which is giving `childFunction()` access to it's own _local_ scope but also the scope of `parentFunction()` and globally.

### Let's look at a couple examples of what it means to have access to a parent scope even after the parent function has closed.

This is the key part to Closures. Let's further reactor our example from above to give our child function access to these scopes even after the parent function has closed:

### Closure Example 1:

```js
let x = 1;

const parentFunction = () => {
  let myValue = 2;
  console.log(x); // -> 1
  console.log(myValue); // -> 2

  const childFunction = () => {
    console.log((x += 5));
    console.log((myValue += 1));
  };
  // instead of calling the child function, we return the child function
  return childFunction;
};

// set 'result' equal to the parent function
const result = parentFunction();
console.log(result); // -> [Function: childFunction]

// [Console]
// -> 1
// -> 2
// -> [Function: childFunction]
```

As you can see when we run this, we don't get any output from the child function. Instead, we just get the output of our console logs from the parent function. We can further see that our console log of the `result` variable gives us `childFunction`. We can now use `result` to call the child function:
```js
let x = 1;

const parentFunction = () => {
  let myValue = 2;
  console.log(x); // -> 1
  console.log(myValue); // -> 2

  const childFunction = () => {
    console.log((x += 5)) // -> 6
    console.log((myValue += 1)) // -> 3
  };

	return childFunction;
};

const result = parentFunction();

// we can now call result as a function and it will give us all our outputs
result();

// [Console]
// -> 1
// -> 2
// -> 6
// -> 3
```

Because `myValue` was not defined inside the child function. Although the parent function has already returned it is already closed the child function still has access to the scope. This makes `myValue` a "private" variable that only `childFunction` has access to. To expand on this a little more, if we call `result` twice:
```js
let x = 1;

const parentFunction = () => {
  let myValue = 2;
  console.log(x); // -> 1
  console.log(myValue); // -> 2

  const childFunction = () => {
    console.log((x += 5)) // -> 6  -> 11
    console.log((myValue += 1)) // -> 3  -> 4
  };

  return childFunction;
};

const result = parentFunction();

// call result twice (the child function continues to increment)
result();
result();
console.log(x); // -> 11
console.log(myValue);

// [Console]
// -> 1
// -> 2
// -> 6
// -> 3
// -> 11
// -> 4
// -> 11
// -> ReferenceError: myValue is a 'private' variable...
```

This is a good way to create a private variable and only have access to it with a child function. So this is Closure because we have access to the scope of the parent function even after the parent function has returned.

### Closure Example 2: Immediately Invoked Function Expression (IIFE)

```js
const privateCounter = (() => {
  let count = 0;
  console.log(`Initial value: ${count}`); // this code only runs once

  // return an anonymous function that increments and logs 'count'
  return () => {
    count += 1;
    console.log(count);
  };
})();

privateCounter();
privateCounter();
privateCounter();

// [Console]
// -> Initial value: 0
// -> 1
// -> 2
// -> 3
```

Every time we call `privateCounter()` we're continuing to increment our counter but we're using a "private" variable (`count`) to do so. `count` is not available in the _global_ scope, the only way this variable can be accessed is through the _lexical_ scope of the child function (the anonymous function). 

So it has _closure_ over the private counter scope and the _global_ scope. It is important to highlight that the console log statement only runs one time. The original function that is called into action immediately only returns one time and it only returns the anonymous function to `privateCounter` one time.

After the initial invocation, when we call `privateCounter()` we're ONLY calling the returned anonymous function, which is incrementing and logging out our counter.

### Closure Example 3: IIFE with a Parameter

This example is very similar to the previous IIFE example except for this example we'll use an IIFE with a parameter.

```js
const credits = ((num) => {
  let credits = num;
  console.log(`Initial credits value: ${credits}`);

  return () => {
    credits -= 1;
    if (credits > 0)
      console.log(`Continue playing the game: ${credits} credit(s) remaining`);
    if (credits <= 0) console.log(`Game over! Not enough credits`);
  };
})(3);

credits();
credits();
credits();

// [Console]
// -> Initial credits value: 3
// -> Continue playing the game: 2 credit(s) remaining
// -> Continue playing the game: 1 credit(s) remaining
// -> Game over! Not enough credits
```

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
  * [Hoisting Javascript (Variables, Functions, and Javascript Arrow Functions) - Dave Gray](https://www.youtube.com/watch?v=_uTDzYyYz-U)
  * [WTF Is JavaScript Variable Hoisting - Colt Steele](https://www.youtube.com/watch?v=j-9_15QBW2s)

### What is Hoisting?
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

> Note: the hoisting mechanism only moves the declaration. The assignments are left in place. 

### Hoisting with `var`:
```js
console.log(x); // -> undefined
var x = 0;
```
In the above code, the `var` keyword is pushed above the code and initialized automatically by JavaScript (only `x` variable is pushed above, not the value 0). So at the time of execution, the code looks something like this:
```js
var x; // automatically inserted by JS Engine at run time
console.log(x);
var x = 0;
```
`x` has been pushed above and initialized by the JS engine, that's why we get undefined at the console line instead of a `ReferenceError`.

### Hoisting with `let` and `const`:
In the case of `var`, when JavaScript moves all the variables and functions to the top of the code, it __initializes__ it. This is not the case with `let` and `const`. 

```js
// let

console.log(y); // -> ReferenceError: Cannot access 'y' before initialization
let y = 0;
```

```js
// const

console.log(z); // -> ReferenceError: Cannot access 'z' before initialization
const z = 0;
```
In the case of `let` and `const`, the JavaScript engine hoists the variable declarations but __doesn't initialize__ them. The JS engine is aware of the variable, but it can not be used until it is declared or initialized.

### Hoisting a Function:
Functions __are__ hoisted in JavaScript. On the contrary, function expressions __are not__ hoisted in JavaScript.

```js
let x = 20;
let y = 30;

let total = add(x, y);
console.log(total); // -> 50, because the function is hoisted

function add(a, b) {
  return a + b;
}
```
In the above code, the output will be `50` as the regular function is also hoisted (moved to the top of the script) in JavaScript.

What about when we have a function expression?
```js
let x = 20;
let y = 30;

let total = sum(x, y);
console.log(total); // -> TypeError: sum is not a function

// function expression with var
var sum = function(a, b) {
  return a + b;
};
```
As the function is stored in the variable `sum` (declared by `var` keyword), it is hoisted and initialized above (not the function expression, as only the variable is pushed above, not the value), and the value of `sum` gets undefined. Therefore we get `sum` is not a function as it is undefined.

At the time of execution, the code looks something like this:
```js
let x = 20;
let y = 30;
var sum; // automatically inserted by JS engine

let total = sum(x, y);
console.log(total);

var sum = function(a, b) {
  return a + b;
};
```

### Why is Hoisting Important?

Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript. If a developer doesn't understand hoisting, programs may contain bugs (errors).

To avoid bugs, always declare all variables at the beginning of every scope.

**[⬆ Top](#Table-of-Contents)**

## 6. Async JavaScript

### Resources:
  * [Asynchronous JavaScript Course (Callbacks, Promises, Async/Await) - FCC](https://www.youtube.com/watch?v=ZYb_ZU8LNxs)
  * [Async JS Crash Course - Callbacks, Promises, Async Await - Traversy Media](https://www.youtube.com/watch?v=PoRJizFvM7s)

### 6.1 Callbacks
#### Resources:
  * [Callback Functions - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
  * [Callbacks in JavaScript Explained! - Code with Ania Kubów](https://www.youtube.com/watch?v=cNjIUSDnb9k)

#### What is a Callback?

_"A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action."_ - MDN Web Docs

MDN Example:
```js
function greeting(name) {
  alert(`Hello ${name}!`);
}

function processUserInput(callback) {
  const name = prompt('Please enter your name.');
  // 'greeting' is the callback function here
  callback(name); // -> Hello Ryan!
}

processUserInput(greeting);
```

Note, however, that callbacks are often used to continue code execution after an _asynchronous_ operation has completed — these are called asynchronous callbacks. A good example is the callback functions executed inside a `.then()` block chained onto the end of a promise after that promise fulfills or rejects. This structure is used in many modern web APIs, such as `fetch()`.

#### Simple Callback Function Example:
```js
// target button element from index.html
const button = document.querySelector('button');

const toggle = () => {
  // toggle the class of 'changeColor' to our button
  button.classList.toggle('changeColor');
};

// invoke 'toggle' right away
toggle()
```

In the above example our `button` element changes color instantaneously.

Now, what if we don't want our `toggle` function to be invoked right away? What if we only want it to change color when we click the button? To achieve this we will be using a _callback function_ to call our `toggle` function when certain requirements are met.

To achieve this lets look at the JavaScript method `addEventListener()` which takes a function as one of its parameters:
```js
const button = document.querySelector('.btn');

const toggle = () => {
  button.classList.toggle('changeColor');
};

// if we click on the 'button' we want our 'toggle' function to run
button.addEventListener('click', toggle);
```

One way to think of this is, our function `toggle` is just sitting, waiting to burst and once we call it (`toggle()`) it gets to release all of it's JavaScript logic and power.

However, without the parenthesis it is considered a _callback function_.
```js
const button = document.querySelector('.btn');
const toggle = () => {
  button.classList.toggle('changeColor');
};

// callback function (named)
button.addEventListener('click', toggle);

// callback function (anonymous)
button.addEventListener('click', function() {
  button.classList.toggle('changeColor');
});

// callback arrow function (anonymous)
button.addEventListener('click', () => {
  button.classList.toggle('changeColor');
});
```

In the examples above the function is only being called by the outer function/method `addEventListener` if a click has been made. All 3 of the second arguments being passed into `addEventListener` are callback functions and they all achieve the same exact result.

Just to be very clear, `toggle` with the parenthesis will be called immediately and cannot be used or considered a callback function:
```js
// bad
button.addEventListener('click', toggle())

// good
button.addEventListener('click', toggle)
```

#### Passing Parameters to a Callback Function

In order to understand how to achieve this, we first need to discuss _asynchronous programming_ in JavaScript. JavaScript runs code sequentially from top to bottom. However, sometimes we don't want this behavior to happen. Sometimes we want a function to be called after something else happens or a certain condition is met. This is called _asynchronous programming_.

Let's look at an example:
```js
function firstAction() {
  console.log('Im the first action!'); // runs first after 3 seconds
  setTimeout(secondAction, 1000); // runs second after 4 seconds
}

function secondAction() {
  console.log('Im the second action!');
}

setTimeout(firstAction, 3000);

// -> Im the first action!
// -> Im the second action!
```

As we can see above, even though the `secondAction` is called after 2 seconds, since it's in the `firstAction` function which happens to be inside the `setTimeout` and is a callback function that won't be called until 3 seconds has passed, the string `'Im the second action'` will only be called after all of our code runs and therefore after 4 seconds has passed.

Now that we understanding asynchronous programming in JavaScript a bit more, how would we pass a parameter into the first action? 

How about something like this?:
```js
function firstAction(callback) {
  console.log('Im the first action!');
  setTimeout(callback, 1000);
}

function secondAction() {
  console.log('Im the second action!');
}

// bad
setTimeout(firstAction(secondAction), 3000);
```

This does not work how we want because the `firstAction` function is being called immediately since we opened the parenthesis. Instead, we need to convert it to a callback function:
```js
function firstAction(callback) {
  console.log('Im the first action!');
  setTimeout(callback, 1000);
}

function secondAction() {
  console.log('Im the second action!');
}

// good
setTimeout( () => firstAction( secondAction ), 3000)
```

So again, to summarize:
```js
// first argument is a callback
setTimeout( firstAction, 3000 )

// we opened up parenthesis so it's no longer a callback
setTimeout( firstAction( secondAction ), 3000)

// converted to callback again with an anonymous function
setTimeout( () => firstAction( secondAction ), 3000)
```

Now to take it a step further, let's make the `firstAction` and `secondAction` functions reusable to print out our messages:
```js
function firstAction(callback, message) {
  console.log(message); // -> Im the first action!
  setTimeout(callback, 1000); // 'secondAction' is the callback function and will execute after 1 second of being invoked
}

function secondAction(message) {
  console.log(message); // -> Im the second action!
}

setTimeout( () => firstAction( () => secondAction('Im the second action!'), 'Im the first action!' ), 3000 );
```

Let's add one more layer for fun:
```js
// add our third parameter ('anotherCallback') and invoke it
function firstAction(callback, message, anotherCallback) {
  console.log(message);
  setTimeout(callback, 1000);
  anotherCallback();
}

function secondAction(message) {
  console.log(message);
}

// add our third action
function thirdAction() {
  console.log('Im the third action!');
}

// pass 'thirdAction' as the third argument to 'firstAction'
setTimeout( () => firstAction( () => secondAction('Im the second action!'), 'Im the first action!', thirdAction ), 3000 );

// -> Im the first action!
// -> Im the third action!
// -> Im the second action!
```

So again, we're invoking the third callback function inside the outer function (`firstAction`). This is essentially what is happening under the hood of `addEventListener` and `setTimeout`.

**[⬆ Top](#Table-of-Contents)**

### 6.2 Promises
#### Resources:
  * [JavaScript Promise in 100 Seconds - Fireship.io](https://www.youtube.com/watch?v=RvYYCGs45L4)

**[⬆ Top](#Table-of-Contents)**

### 6.3 Async & Await
#### Resources:
  * [The Async Await Episode - Fireship.io](https://www.youtube.com/watch?v=vn3tm0quoqE)
  * [Master Async JavaScript using Async/Await & Quokka JS - JavaScript Mastery](https://www.youtube.com/watch?v=HXQZfuSMTfM)

**[⬆ Top](#Table-of-Contents)**

## 7. Higher Order Functions and Arrays

### Resources:
  * [JavaScript Higher Order Functions & Arrays - Traversy Media](https://www.youtube.com/watch?v=rRgD1yVwIvE)

**[⬆ Top](#Table-of-Contents)**

## 8. Bonus Questions

### Resources:
  * [12 Common JavaScript Questions I Used to Ask in Interviews](https://javascript.plainenglish.io/12-common-javascript-questions-i-used-to-ask-in-interview-be39ce27b3c5)

1. What is prototypical inheritance and how useful is it?

2. How can JavaScript be used to improve accessibility on the web?

3. What is event bubbling and how is it different from event capturing?

4. How does event delegation improve code on sites with lots of interactive elements?

5. What are closures and how can they be useful in organizing code?

6. What does ‘use strict’ mean at the top of a block of code?

7. What does the term ‘hoisting’ mean in reference to JavaScript?

8. What is the difference between an arrow function and a regular function?

9. Where should you use the ‘let’ and ‘const’ keywords instead of ‘var’?

10. What is functional programming and how is it different?

11. How can you use JS to improve the performance of the website?

12. How can you future-proof your JavaScript code?

**[⬆ Top](#Table-of-Contents)**