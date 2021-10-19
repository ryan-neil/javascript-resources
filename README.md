# JavaScript Resources
<img src="/assets/js-resources.gif" width="800" alt="js-resources-gif">

## Introduction
The goal of this document is to provide a quick reference guide for the main features of JavaScript along with simple to understand sample code.

I wanted to remove the bloat that comes with learning a programming language and provide the "juicy" parts as plainly as possible.

> _“Any intelligent fool can make things bigger, more complex, and more violent. It takes a touch of genius—and a lot of courage—to move in the opposite direction.” —E.F. Schumacher_

###### If you found this guide helpful give me a follow and let me know! 🤙🏻
[![Twitter Badge](https://img.shields.io/badge/-Twitter-00acee?style=flat-square&logo=Twitter&logoColor=white)](https://twitter.com/home?lang=en)

### 🧐 What's inside?
A quick look at the files and directories you'll see in the repo.

```bash
├── assets
│   └── repo image files
├── src
│   ├── components
│   │   ├── arrays.js
│   │   ├── arrow-functions.js
│   │   ├── async-await.js
│   │   ├── asynchronous-callbacks.js
│   │   ├── basics.js
│   │   ├── callbacks.js
│   │   ├── destructuring.js
│   │   ├── dom-events.js
│   │   ├── dom.js
│   │   ├── functions.js
│   │   ├── json.js
│   │   ├── loops.js
│   │   ├── objects.js
│   │   ├── promises.js
│   │   ├── prototypes.js
│   │   ├── requests-axios.js
│   │   ├── requests.js
│   │   ├── rest.js
│   │   ├── spread.js
│   │   └── this.js
│   ├── frontend
│   │   └── react
│   ├── backend
│   │   ├── node-js
│   │   └── express-js
│   ├── projects
│   │   ├── color-flipper
│   │   ├── ecommerce-app
│   │   ├── movie-duel
│   │   ├── node-app
│   │   └── spa-app
├── README.md
```

## 🔗 JavaScript Resources
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Dev Docs](https://devdocs.io/javascript/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Code Academy JavaScript Cheatsheet](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet)
- [FCC Beginner's Handbook 2020](https://www.freecodecamp.org/news/the-complete-javascript-handbook-f26b2c71719c/#objectproperties)
- [30 Seconds of Code](https://www.30secondsofcode.org/)
- [Medium JavaScript](https://medium.com/topic/javascript)
- [JavaScript Visualized](https://dev.to/lydiahallie/series/3341)
- [1 Line - JavaScript Utilities](https://1loc.dev/)

----

### 📓 Notes
### Table of Contents

1. [Running JavaScript](#running-javascript)
1. [Debugging JavaScript (Firefox)](#debugging-javascript-firefox)
1. [Commenting](#commenting)
1. [Variables](#variables)
1. [Naming Conventions](#naming-conventions)
1. [Properties](#properties)
1. [For Loops](#for-loops)
1. [Math](#math)
1. [Date & Time](#date-and-time)
1. [Conditionals](#conditionals)
1. [Ternary Operator](#ternary-operator)
1. [Objects](#objects)
1. [Methods](#methods)
    * [Array Methods](#array-methods)
    * [Object Methods](#object-methods)
    * [String Methods](#string-methods)
1. [Functions](#functions)
    * [Callback Functions](#callback-functions)
    * [Higher-Order Functions](#higher-order-functions)
1. [Destructuring](#destructuring)
1. [Spread](#spread)
1. [Rest](#rest)
1. [This](#this)
1. [Getters and Setters](#getters-and-setters)
1. [The DOM](#the-document-object-model-dom)
    * [DOM Methods and Properties](#dom-methods-and-properties)
    * [DOM Events](#dom-events)
1. [The Call Stack](#the-call-stack)
1. [Asynchronous JavaScript](#asynchronous-javascript)
    * [Asynchronous Callbacks](#asynchronous-callbacks)
    * [Promises](#promises)
    * [Requests](#requests)
      * [Fetch](#fetch)
    * [Async Functions](#async-functions)
    * [Await](#await)
1. [Object Oriented Programming](#object-oriented-programming)
    * [Inheritance](#inheritance)
    * [Encapsulation](#encapsulation)
    * [Abstraction](#abstraction)
    * [Polymorphism](#polymorphism)
1. [OOP with JavaScript](#object-oriented-programming-with-javaScript)
    * [Classes](#classes-in-javascript)

----

### Running JavaScript

#### From the Command Line:
Running JavaScript from the command line is handled by NodeJS.

First, we need to [install Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if you haven't already.

Next, open the terminal in VS Code and move to the current directory where our `.js` file is located:

```bash
cd yourdirectoryname
```

Now that we're in the directory where our JavaScript file is located we can type the following command into the VS Code terminal to view the output of our code:

```bash
node yourJSfilename
```

This method allows us to view the output of our JavaScript code without the need of an HTML file! Pretty sweet.

#### Command-Line Keyboard Shortcuts:
Here's a curated list of some of the most used CLI shortcuts.
##### Moving the cursor
`CTRL-A`/`HOME`: Move to the beginning of a line. \
`CTRL-E`/`END`: Move to the end of a line. \
`OPT-LEFT`: Move left one word. \
`OPT-RIGHT`: Move right one word.
##### Editing Text
`CTRL-U`: Cut all the characters. \
`CTRL-_`: Undo the last edit.
##### Managing the screen
`CTRL-L`: Clear screen (just like `clear`). \
`CTRL-S`: Stop screen output. Useful for preventing processes from spamming the stdout. \
`CTRL-Q`: Resume screen output. \
`CTRL-D`: Exit shell (just like exit).
##### Accessing Command History
`CTRL-R`: Search the command history. Accept with `ENTER`/`RETURN`, abort with `CTRL-G`. \
`CTRL-P`/`UP`: The previous command in history. \
`CTRL-N`/`DOWN`: The next command in history.

----

### Commenting

We use `/** ... */` for multiline comments.

```javascript
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {
	
  // ...

  return element;
}
```

We use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it’s on the first line of a block. Start all comments with a space to make it easier to read.

```javascript
// bad
const active = true; // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// also good
function getType() {
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}
```

> When it comes to commenting, don't explain what the code does, explain what the intentions of the code are. Generally, anyone can tell what the code is doing by looking at it, but it can often be impossible to understand why it's being done just by looking at the code alone. - Some internet guy

**[⬆ Top](#table-of-contents)**

----

### Debugging JavaScript (Firefox)

  * [Run and Debug JavaScript with Firefox developer tools](https://www.youtube.com/watch?v=yjQVG6ubUTA)

**[⬆ Top](#table-of-contents)**

----

### Variables

We always want to use `const` or `let` to declare variables. Not doing so will result in global variables. We need to be carful not to muddy up the global namespace.

The `const` keyword works exactly the same as `let`, except that variables declared using `const` cannot be reassigned later in the code.

```javascript
// const
const daysInWeek = 7;
const daysInWeek = 5; // -> SyntaxError: redeclaration of const daysInWeek

// let
let counter = 1;
let counter = counter + 1; // -> 2
```

**[⬆ Top](#table-of-contents)**

----

### Naming Conventions
If possible, avoid single letter names. Be descriptive with your naming.

```javascript
// bad
function q() {
  // ...
}

// good
function query() {
  // ...
}
```

Always use camelCase when naming objects, functions, and instances.

```javascript
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

Use PascalCase only when naming constructors or classes.

```javascript
// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
```

Acronyms and initialisms should always be all uppercased, or all lowercased. This is because names are for readability, not to appease a computer algorithm.

```javascript
// bad
import SmsContainer from './containers/SmsContainer';

// bad
const HttpRequests = [
  // ...
];

// good
import SMSContainer from './containers/SMSContainer';

// good
const HTTPRequests = [
  // ...
];
```

**[⬆ Top](#table-of-contents)**

----

### Properties
We use dot notation `.` when accessing properties.

```javascript
const thor = {
  superhero: true,
  age: 1500
};

// bad
const isSuperhero = thor['superhero'];

// good
const isSuperhero = thor.superhero;
console.log(isSuperhero); // -> true
```

We use bracket notation `[]` when accessing properties with a variable.

```javascript
const thor = {
  superhero: true,
  age: 1500
};

function getProp(prop) {
  return thor[prop];
}

const isSuperhero = getProp('superhero');
console.log(isSuperhero); // -> true
```

**[⬆ Top](#table-of-contents)**

----

### For Loops

The 4 for loops of JavaScript:
```javascript
// traditional
let arr = [ 'thor', 'ironman', 'hulk', 'loki' ];
for (let i = 0; i < arr.length; i++) {
  console.log(i);
  console.log(arr[i]);
}
// -> 0, 1, 2, 3
// -> thor, ironman, hulk, loki
```

```javascript
// for ... of
let arr = [ 'thor', 'ironman', 'hulk', 'loki' ];
for (let item of arr) {
  console.log(item);
}
// -> thor, ironman, hulk, loki
```

```javascript
// for ... in
let arr = [ 'thor', 'ironman', 'hulk', 'loki' ];
for (let item in arr) {
  console.log(item);
}
// -> 0, 1, 2, 3
```

```javascript
// forEach
let arr = [ 'thor', 'ironman', 'hulk', 'loki' ];
arr.forEach((item, idx) => {
  console.log(item, idx);
});
// -> thor [0], ironman [1], hulk [2], loki [3]
```

#### for:
The __for statement__ creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

__Syntax__:
```javascript
for ([initialization]; [condition]; [final-expression])
  // Code to execute
```

__Example__:
```javascript
const examScores = [ 98, 77, 84, 91 ];

for (let i = 0; i < examScores.length; i++) {
  console.log(examScores[i]);
}
// -> 98, 77, 84, 91
```

#### for..in:
A `for...in` loop only iterates over enumerable, non-Symbol properties. We're returned the indeces rather than the values.

__Syntax__:
```javascript
for ( [variable] in [iterable] ) {
  // Code to execute
}
```

__Example__:
```javascript
let sports = [ 'soccer', 'football', 'basketball', 'baseball' ];

for (let sport in sports) {
  console.log(sport);
}
// -> 0, 1, 2, 3 (these are the string indeces)
```

#### for..of:
`for...of` is an easier way to iterate over arrays (or other iterable objects)

__Syntax__:
```javascript
for ( [variable] of [iterable] ) {
  // Code to execute
}
```

__Example__:
```javascript
let sports = [ 'soccer', 'football', 'basketball', 'baseball' ];

for (let sport of sports) {
  console.log(sport);
}
// -> soccer, football, basketball, baseball
```

Same example with a traditional `for` method:
```javascript
let sports = [ 'soccer', 'football', 'basketball', 'baseball' ];

for (let i = 0; i < sports.length; i++) {
  console.log(sports[i]);
}
```

#### for..of vs. for..in:
Both `for..of` and `for..in` statements iterate over lists; the values iterated on are different though: 
* `for..in` returns a list of keys on the object being iterated. 
* `for..of` returns a list of values of the numeric properties of the object being iterated.

__Example__:
```javascript
let sports = [ 'soccer', 'football', 'basketball' ];

for (let i in sports) {
  console.log(i);
}
// -> "0", "1", "2",

for (let i of sports) {
  console.log(i);
}
// -> soccer, football, basketball
```

> We can remember this by: `for ... in` for __index__ and `for ... of` would be the __values__ of each index/key/item.

**[⬆ Top](#table-of-contents)**

----

### Math
`Math` is a built-in object that has __properties__ and __methods__ for mathematical constants and functions. It’s not a function object.

Value of pi:
```javascript
Math.PI; // -> 3.141592653589793
```
Rounding a number:
```javascript
Math.round(4.9); // -> 5
```
Absolute value:
```javascript
Math.abs(-456); // -> 456
```
Power, raise 2 to the 5th power:
```javascript
Math.pow(2, 5); // -> 35
```
Remove decimal point:
```javascript
Math.floor(3.999); // -> 3
```

#### Random Numbers:
`Math.random()` gives us a random decimal between 0 and 1 (non-inclusive)
```javascript
Math.random(); // -> 0.3909038834734563
Math.random(); // -> 0.8165536795157997 etc.
```

#### Random Integers:
`Math.random() * 10` gives us a random decimal number up to 9.999...
```javascript
Math.random() * 10; // -> 1.373859877092636
Math.random() * 10; // -> 5.467900649576393
Math.random() * 10; // -> 9.245014588722578 etc.
```

`Math.floor()` removes the decimal point. And gives us a number from 0 to 9.
```javascript
Math.floor(Math.random() * 10); // -> 0
Math.floor(Math.random() * 10); // -> 5
Math.floor(Math.random() * 10); // -> 9 etc.
```

Adding `+1` to `Math.floor(Math.random() * 10)` gives us a number from 0 to 10.
```javascript
Math.floor(Math.random() * 10) + 1; // -> 7
Math.floor(Math.random() * 10) + 1; // -> 3
Math.floor(Math.random() * 10) + 1; // -> 10 etc.
```

**[⬆ Top](#table-of-contents)**

----

### Date and Time

Let's have a look at how we can get todays date and time:
```js
const today = new Date();

console.log(today);
// -> Sun Jun 13 2021 10:17:31 GMT-1000 (Hawaii-Aleutian Standard Time)
```
> Note: The only correct way to instantiate a new `Date` object is by using the `new` operator. If you call the `Date` object directly, such as `today = Date()`, the returned value is a string rather than a `Date` object.

Let's get tomorrow's date and time:
```js
const tomorrow = new Date(today.getTime() + 86400000);

console.log(tomorrow);
// -> Sun Jun 13 2021 10:17:31 GMT-1000 (Hawaii-Aleutian Standard Time)
```
In the example above, the `getTime()` method returns the number of milliseconds since the [Unix Epoch](https://en.wikipedia.org/wiki/Unix_time). Also, `86400000` represents one full day in milliseconds.

So we're getting today's date in milliseconds (`today.getTime()`) and then we're adding `86400000` milliseconds to it (1 full day) to get tomorrow's date.

__Formatting:__
The `toLocaleDateString()` method returns a string with a language sensitive representation of the date portion of this date. The new `locales` and `options` arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function.

```js
const today = new Date();
const tomorrow = new Date(today.getTime() + 86400000);

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

today.toLocaleDateString(); // -> 6/13/2021
today.toLocaleDateString("en-US", options); // -> Sunday, June 13, 2021

tomorrow.toLocaleDateString(); // -> 6/14/2021
tomorrow.toLocaleDateString("de-DE", options); // -> Montag, 14. Juni 2021
```

**[⬆ Top](#table-of-contents)**

----

### Conditionals
Conditional Statements are used for making decisions with code. They can have 3 different pieces, an __if__, an __else if__, and __else__.

`if` = Run the code `if` a given condition is true

`else if` = if not the first thing, maybe this other thing??

`else` = if nothing `else` was true, run this...

```javascript
let rating = 2;

if (rating === 3) {
  console.log('You are a superstar!');
} else if (rating === 2) {
  console.log('Meets expectations');
} else if (rating === 1) {
  console.log('Needs improvement');
} else {
  console.log('Invalid Rating');
}
// -> 'Meets expectations'
```

#### Nesting Conditional Statements:
```javascript
let password = 'catdog';
if (password.length >= 8) {
  if (password.indexOf(' ') !== -1) {
    console.log('Password cannot include spaces');
  } else {
    console.log('Valid password!');
  }
} else {
  console.log('Password too short!');
}
```

#### Conditionals and Logical Operators: And, Or and Not
If you want to test multiple conditions without writing nested `if...else` statements, logical operators can help you. When used in conditions, the first two do the following:

`&& -> And`
`|| -> Or`
`! -> Not`

##### And (`&&`):
With the `and` logical operator, both sides of the && needs to be true for the entire statement to be true.

```javascript
1 <= 4 && 'a'; // -> true
9 > 10 && 9 >= 9; // -> false
'abc'.length === 3 && 1 + 1 === 4; // -> false
```

__Example__: Password checker

```javascript
let password = 'taco tuesday';

// This is checking if the password is greater than or equal to 8 characters AND does not contain a space
if (password.length >= 8 && password.indexOf(' ') === -1) {
  console.log('Valid password!');
} else {
  console.log('Invalid password!');
}
// -> Invalid password! (password contains a space)
```

##### Or (`||`):
With the `or` logical operator, only one side of the "pipe" needs to be true for the entire statement to be true.

```javascript
1 !== 1 || 10 === 10; // -> true
10 / 2 === 5 || null; // -> true
0 || undefined; // -> false
```

__Example__: Community theater program

```javascript
let age = 76;

if (age < 6 || age >= 65) {
  console.log('You get in for free!');
} else {
  console.log('That will be $10 please.');
}
// -> You get in for free!
```

##### Not (`!`):
With the `not` logical operator, the expression returns true if the expression is false.

```javascript
!null; // -> true (this is saying, not null)
!(0 === 0); // -> false (0 = 0 is truthy so not truthy is falsy)
!(3 <= 4); // -> false (3 IS less than or equal to 4 so not true is false)
!45; // -> false (45 is truthy so not "true" [45] is falsy)
```

__Example__: Online snow cone stand with only 2 flavors (grape and cherry)

```javascript
let flavor = strawberry;

// first way to solve this:
if (flavor !== 'grape' && flavor !== 'cherry') {
  console.log("We don't have that flavor!");
}
// or an example using not (!):
if (!(flavor === 'grape' || flavor === 'cherry')) {
  console.log("We don't have that flavor!");
}
// -> We don't have that flavor!
```

#### Switch Statements:
Switch statements take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, executing the corresponding code that goes along with it.

```javascript
let day = 2;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;

  default: // this is equivalent to "else"
    console.log('Invalid day');
}
// -> Tuesday
```

Sometimes we can have multiple variables that we are checking against one value:

```javascript
let item = 'Mangoes';

switch (item) {
  case 'Oranges':
  case 'Apples':
    console.log('Oranges and Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and Papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${item}.`);
}
// -> Mangoes and papayas are $2.79 a pound.
```

**[⬆ Top](#table-of-contents)**

----

### Ternary Operator
A shortcut syntax that we can use for certain conditionals. It basically takes an `if` and an `else` and turns them into a single line of code. This will only work if there are no `else if` statements.

__Syntax__:
```javascript 
condition ? expIfTrue : expIfFalse
```

__Example__:
```javascript
// new
let status = 'offline';

let color = status === 'offline' ? 'red' : 'green'; // -> 'red'

// old
let status = 'offline';
let color = '';

if (status === 'offline') {
  color = 'red';
} else {
  color = 'green';
}
```

**[⬆ Top](#table-of-contents)**

----

### Objects
#### What are Objects?
In short, Objects allow us to keep properties and/or methods in the same data structure when convenient. We can then apply methods to the correct set of values inside of the Object.

We can think of an object as a collection of __properties__, where each property has a __key__ (name) and a __value__.

Alternatively, we can think of them as an unordered collection of named values. This is because the order at which we place things inside an object, from a practical standpoint, does not matter. This is where Objects differ from Arrays.

We do not use a number [`0`] to access our data out like with an array, we would directly call for the data we need (city, age, zip, etc.)

#### So why are Objects useful?
Objects allow us to store related values in a convenient structure, in the same way we would store our silverware in the kitchen and not in the bedroom.

They also allow us to easily apply methods to the values they should operate on. This way we can have a method which can only be applied to a specific set of values without getting the individual object mixed up.

__Syntax__:
```js
const myObj {
  key: value
}
```

__Example__:
```javascript
const fitBitData = {
  totalSteps       : 308727,
  totalFloors      : 1814,
  totalMiles       : 211,
  workoutsThisWeek : '5 of 7',
  avgGoodSleep     : '2:13'
};
// accessing the data using "dot" syntax
fitBitData.totalFloors; // -> 1814
fitBitData.totalMiles; // -> 211
```
In the example above:

`totalSteps` would be the __key__ and `308727` would be the __value__

> Note: It's important to remember that all keys are converted to strings.

```javascript
const numbers = {
  100 : 'one hundred',
  16  : 'sixteen'
};

// good
numbers[100]; // -> 'one hundred'

// bad
numbers.100; // -> SyntaxError!!!
```

#### Nested Objects and Arrays:
Our objects and arrays can have other nested objects and arrays.

```javascript
const student = {
  firstName : 'David',
  lastName  : 'Jones',
  strengths : [ 'Music', 'Art' ],
  exams     : {
    midterm : 92,
    final   : 88
	}
};

// Finding the average score of exams:
student.exams.average = ''; // here we're adding an "average" property to the end of the "exams" object
student.exams.average = (student.exams.midterm + student.exams.final) / 2;

console.log(student.exams.average); 
// -> 90
console.log(student.exams); 
// -> {midterm: 92, final: 88, average: 90}
```

**[⬆ Top](#table-of-contents)**

----

### Methods
This is a collection of the most commonly used ES5 and ES6+ methods for arrays, objects and strings.

JavaScript methods are actions that can be performed on objects. Methods are functions stored as object properties.

* [Common JavaScript Methods](https://dev.to/otamnitram/my-most-used-javascript-methods-1i64)

### Array Methods:

#### Resources:
* [Array Methods](https://www.w3schools.com/js/js_array_methods.asp)

### [Array].map()
This returns a new array with the result of a function for each element in another array. The array returned has the same length as the original array.

> Note: This is a built in Higher-Order Function in JavaScript

__Example__: Create an array that contains the square of each item of another array
```js
const numbers = [ 2, 4, 6 ];
const square = numbers.map(n => {
  return n * n;
});

console.log(square); // -> [ 4, 16, 36 ]
console.log(numbers); // -> [ 2, 4, 6 ]
```

[.map MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### [Array].forEach()
This executes a provided function once for every element in the array.

> Note: This is a built in Higher-Order Function in JavaScript

__Example__: Loop through the array and print the numbers
```js
const testScores = [ 89, 92, 76, 99 ];

testScores.forEach(scores => {
  console.log(scores);
});
// -> 89
// -> 92
// -> 76
// -> 99
```

forEach also allows us to receive two additional parameters:
* `index` - the index of the element which is currently being iterated
* `array` - original array which we're looping over

```js
const testScores = [ 89, 92, 76, 99 ];

testScores.forEach((scores, index, array) => {
  console.log(scores, index, array);
});
// -> 89 0 [ 89, 92, 76, 99 ]
// -> 92 1 [ 89, 92, 76, 99 ]
// -> 76 2 [ 89, 92, 76, 99 ]
// -> 99 3 [ 89, 92, 76, 99 ]
```

> Note: This is only used to loop through the array and perform some processing or logging. It does not return any value, even if you explicitly return a value from the callback function (this means that the returned value comes as `undefined` in the above example).

[.forEach MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

### [Array].reduce()
This executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

> Note: This is a built in Higher-Order Function in JavaScript

__Example__: Sum all numbers of the array
```js
const numbers = [ 1, 2, 3 ];

const sum = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);

console.log(sum); // -> 6
```

> Note: It’s always good to specify the `initialValue` of `accumulator` as it makes it easy to understand the return type of the `reduce` method and get the correct type of data back.

`.reduce()` under the hood:

__Example__: Multiply all the elements by two and sum all numbers of the array
```js
const numbers = [ 1, 2, 3 ];

const doubleSum = numbers.reduce((accumulator, number) => {
  return accumulator + number * 2;
}, 10);
console.log(doubleSum); // -> 22
```

Here, we’re multiplying each element of the array by 2. We have provided an `initialValue` of 10 to the `accumulator` so 10 will be added to the final result of the sum like this:

```javascript
[1 * 2, 2 * 2, 3 * 2] = [2, 4, 6] = 12 + 10 = 22
```

[.reduce MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

### [Array].filter()
This returns an array with all the elements of another array that meet a determined condition.

> Note: This is a built in Higher-Order Function in JavaScript

__Example__: Return numbers less than or equal to 100
```js
const numbers = [ 20, 200, 30, 45, 100, 102 ];

const result = numbers.filter(n => {
  return n <= 100;
});
console.log(result); // -> [ 20, 30, 45, 100 ]
```

[.filter MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### [Array].some()
This tests whether __at least one__ element in the array passes the test condition given by the provided function and returns a boolean `true` or `false` value.

__Example__: Return true if there is a positive number in the array
```js
const numbers = [ -20, 32, -18 ];

const containsPositive = numbers.some(number => {
  return number > 0;
});
console.log(containsPositive); // -> true
```

[.some MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

### [Array].every()
This tests whether __all__ elements in the array pass the provided test conditions and returns a boolean `true` or `false` value.

__Example__: Return true if all numbers in the array are positive
```js
const numbers = [ 40, 32, -24 ];

const allPositive = numbers.every(number => {
  return number > 0;
});
console.log(allPositive); // -> false
```

[.every MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

### [Array].slice()
This returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

__Example__: Return superheros who are Gods from the array
```js
const superheros = [ 'thor', 'loki', 'ironman', 'hulk' ];

const superheroGods = superheros.slice(0, 2);
console.log(superheroGods); // -> [ 'thor', 'loki' ]
```

[.slice MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

### [Array].indexOf()
This returns the first index at which a given element can be found in the array, or -1 if it is not present.

__Example__: Find the index of "tiger" from the array
```js
const animals = [ 'dolphin', 'giraffe', 'tiger' ];

console.log(animals.indexOf('tiger')); // -> 2
console.log(animals.indexOf('lion')); // -> -1
``` 

[.indexOf MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

### [Array].from()
This creates a new, shallow-copied Array instance from an array-like or iterable object.

__Example__: Return an array with each letter of my last name.
```js
const lastName = 'neil';
const lastNameLetters = Array.from(lastName);

console.log(lastNameLetters); // -> [ 'n', 'e', 'i', 'l' ]
console.log(lastName); // -> 'neil'
```

[.from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

### [Array].pop()
This __REMOVES__ an element from the __END__ of an array and returns that element. This method changes the length of the array.

__Example__: Remove a todo task from the end of the array
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

console.log(todo.pop()); // -> 'take out trash'
console.log(todo); // -> [ "do laundry", "wash dishes" ]
```

The `.pop()` method returns the value that was "popped" out. We can then save that value to a variable and use it:
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

let completedTask = todo.pop();
console.log(completedTask); // -> 'take out trash'
```

[.pop MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

### [Array].push()
This __ADDS__ an element to the __END__ of an array.

__Example__: Add a todo task to the end of the array
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

todo.push('vacuum');
console.log(todo); // -> [ 'do laundry', 'wash dishes', 'take out trash', 'vacuum' ]
```

The `push()` method returns the new array length:
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

let addedTask = todo.push('vacuum');
console.log(addedTask); // -> 4
```

[.push MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

### [Array].shift()
This __REMOVES__ an element from the __START__ of an array and "shifts" all other elements to a lower index.

__Example__: Remove a todo task from the start of the array
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

console.log(todo.shift()); // -> 'do laundry'
console.log(todo); // -> [ 'wash dishes', 'take out trash' ]
```

The `shift()` method returns the string that was "shifted out". We can then save that value to a variable and use it:
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

let completedTask = todo.shift();
console.log(completedTask); // -> 'do laundry'
```

[.shift MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

### [Array].unshift()
This __ADDS__ an element to the __START__ of an array and "unshifts" older elements.

__Example__: Add a todo task to the start of the array
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

todo.unshift('vacuum');
console.log(todo); // -> [ 'do laundry', 'wash dishes', 'take out trash', 'vacuum' ]
```

The `unshift()` method returns the new array length:
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

let addedTask = todo.unshift('vacuum');
console.log(addedTask); // -> 4
```

[.unshift MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

### Object Methods:

#### Resources:
* [Object Methods](https://www.w3schools.com/js/js_object_properties.asp)

### Object.values()
Returns an array of the object's values.

```js
const car = {
  name  : 'Audi',
  model : 'a4',
  year  : 2020
};
const values = Object.values(car);
console.log(values); // -> ['Audi', 'a4', 2020]
```

[Object.values MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values)

### Object.keys()
Returns an array of the object's keys(names).

```js
const car = {
  name  : 'Audi',
  model : 'a4',
  year  : 2020
};
const keys = Object.keys(car);
console.log(keys); // -> ['name', 'model', 'year']
```

[Object.keys MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

### Object.assign()
This is useful for merging or cloning objects.

```js
const car = {
  name  : 'Audi',
  model : 'a4',
  year  : 2020
};
const carDetails = {
  color : 'red',
  type  : 'Coupe',
  year  : 2021
};

const combined = Object.assign({}, car, carDetails);
console.log(combined); // -> { name: 'Audi', model: 'a4', color: 'red', type: 'Coupe', year: 2021 }
```

> Note: if both objects have the same property, it will take the value of the second object

[Object.assign MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

### Object.entries()
Returns an array for each of the key:value pairs in the object wrapped in array.

```js
const car = {
  name  : 'Audi',
  model : 'a4',
  year  : 2020
};
const items = Object.entries(car);
console.log(items); // -> [ [ name:'Audi' ], [ model:'a4' ], [ year:2020 ] ]
```

[Object.entries MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

### Object.freeze()
This "freezes" the object and makes it so we can no longer change it.

```js
const car = {
  name  : 'Audi',
  model : 'a4',
  year  : 2020
};
Object.freeze(car);

car.year = 2021;
console.log(car); // -> { name: 'Audi', model: 'a4', year: 2020 }
```

> Note: to check if the object is frozen or not use Object.isFrozen(car), if frozen it will return true, and false if not

[Object.entries MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

### Object.seal()
This is similar to Object.freeze() but the difference is this lets you change the property of the object as long they are writeable (Not methods) But we CANNOT delete or add new properties.

```js
const car = {
  name  : 'Audi',
  model : 'a4',
  year  : 2020
};
Object.seal(car);

// good
car.year = 2021;
console.log(car.year); // -> 2021

// bad
delete car.year;
console.log(car.year); // -> 2021
```

> Note: to check if the object is sealed or not use Object.isSealed(car), if sealed it will return true, and false if not. 

[Object.entries MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)

### String Methods:

#### Resources:
* [String Methods](https://www.w3schools.com/js/js_string_methods.asp)

### [String].split()
This divides a string with a `separator` into an ordered list of substrings, puts these substrings into an array, and returns the array. Use the second parameter (`limit`) to return a limited number of splits.

__Example__: Separate the string with commas
```js
const str = 'JavaScript String split()';

const substrings = str.split(' ');
console.log(substrings); // -> [ 'JavaScript', 'String', 'split()' ]
``` 

Access a single word from the string
```js
const str = 'JavaScript String split()';

const substrings = str.split(' ');
console.log(substrings[0]); // -> 'JavaScript'
console.log(substrings[2]); // -> 'split()'
```

Access a single character from the string
```js
const str = 'JavaScript String split()';

const substrings = str.split('');
console.log(substrings[0]); // -> 'J'
console.log(substrings[11]); // -> 'S'
```

We can also copy the string with .split()
```js
const str = 'JavaScript String split()';

const strCopy = str.split();
console.log(strCopy); // -> [ 'JavaScript String split()' ]
```

[.split MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

### [String].slice()
This extracts a section of a string and returns it as a new string, without modifying the original string.

__Example__: Extract the last two words from the string
```js
const str = 'JavaScript String split()';

const strSlice = str.slice(10);
console.log(strSlice); // ->  'String split()'
``` 

[.slice MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

### [String].indexOf()
This returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

__Example__: Find the index of "String" from the string
```js
const str = 'JavaScript String split()';

const searchTerm = 'String';
const indexOfFirst = str.indexOf(searchTerm);
console.log(indexOfFirst); // -> 11
``` 

[.indexOf MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

**[⬆ Top](#table-of-contents)**

----

### Functions
A function is simply a reusable procedure. They also allow us to write modular code which keeps our codebase clean and organized. We define a chunk of code that we can then execute at a later time.

We can think of a vending machine... imagine you approach a vending machine, put in some coins and make a selection. You start to hear sounds and things going on in the vending machine but you're not really sure whats happening. Then all of a sudden something pop's out.

So in a sense, the vending machine is like a black box at which we can control by inputs and receiving outputs.

__Syntax__:
```javascript
function name([param[, param[, ... param]]]) {
  // Code to execute
}
```

__Example__:
```javascript
function add(x, y) {
  return x + y;
}
add(5, 4); // -> 9
```

For the visual learners out there:
<p align="left">
  <img src="/assets/function-definition.jpg" width="80%" alt="function-definition">
</p>

With functions in JavaScript, you can:
  * Store them as variables (function expressions)
  * Use them in arrays
  * Assign them as object properties (methods)
  * Pass them as arguments
  * Return them from other functions

### Function Scope:
In JavaScript there are two types of scope:
* Local scope
* Global scope

With function scope, each function creates a new scope and scope determines the accessibility (visibility) of these variables. Variables defined inside a function are not accessible (visible) from outside the function.

### Local Variables:
Variables declared within a JavaScript function, become __local__ to the function.

Local variables have __Function scope__: They can only be accessed from within the function.

__Example__:
```javascript
// code here can NOT use carName

function myFunc() {
  let carName = 'Toyota';

  // code here CAN use carName
}
```

Since __local__ variables are only recognized inside their functions, variables with the same name can be used in different functions.

__Local__ variables are created when a function starts, and deleted when the function is completed.

### Global Variables:
A variable declared outside a function, becomes __global__.

A global variable has __global scope__: All scripts and functions on a web page can access it.

__Example__:
```javascript
let carName = 'Toyota';

// code here CAN use carName

function myFunc() {

  // code here CAN also use carName

}
```

### Function Expressions:
In JavaScript functions are objects which means we can store them in variables, arrays, and we can pass them around as arguments.

__Example 1__: Storing a function in a __variable__
```javascript
// old
function square(num) {
  return num + num;
}
square(7); // -> 49

// new
const square = function(num) {
  return num + num;
};
square(7); // -> 49
```

We can store our functions in an __array__ like this:
```javascript
const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const multiply = function(x, y) {
  return x * y;
};

const divide = function(x, y) {
  return x / y;
};

// next we add our functions to an array
const operations = [ add, subtract, multiply, divide ];

// we can call our functions from the variable "operations"
operations[1](100, 4); // -> 96 (subtract)
operations[2](100, 4); // -> 400 (multiply)
// or from the function itself
subtract(100 - 4); // -> 96
multiply(100 - 4); // -> 400
```

We can then loop over our __array__ of functions like this:
```javascript
for (let func of operations) {
  let result = func(30, 5);
  console.log(result);
}
// -> 35 (add)
// -> 25 (subtract)
// -> 150 (multiply)
// -> 6 (divide)
```

To store functions in an __object__ we do this:
```javascript
const operationsObject = {
  add      : add,
  subtract : subtract,
  multiply : multiply,
  divide   : divide
};
operationsObject.add(50, 2); // -> 52
operationsObject.subtract(50, 2); // -> 48
```

### Function Parameters vs. Arguments:
A __parameter__ is the variable name, defined in the function signature, of the value which will be given as an __argument__. 

It's important to distinguish them, as a __parameter__ can represent many different values or even types of values, while an __argument__ will only be that specific value at the time of evaluation.

__Example__:
```javascript
function square(number) {
  return number * number;
}
square(6); // -> 36
```
In the example above, `number` is the __parameter__ and `6` is the __argument__ being passed into the function.

### Callback Functions:
* [Callback Functions Tutorial](https://www.youtube.com/watch?v=pTbSfCT42_M)

A callback function is a function passed into another function as an argument or parameter, which is then invoked inside the outer function to complete some kind of routine or action.

__Example__:
```javascript
function doSomething(otherFunction, name) {
  otherFunction(name);
  return "Success!";
}

function logSomething(word) {
  console.log(word);
}

doSomething(logSomething, "Apple");
// -> "Apple"
```

Callback functions can be thought of as the flip side of higher order functions. We'll learn more about higher order functions in the section below, but real quickly, a higher order function is a function that takes another function as an __argument__ and uses it in it's __parameters__. So a __callback__ is THAT function.

In the example above, `otherFunction` is the callback because we're calling it inside our `doSomething` function (it's being used inside another function).

It's important to understand that when we use callback functions you do not want to use brackets. This is because when you do use the brackets you're actually calling the function.




### Higher-Order Functions:
Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them. 

In simple words, A Higher-Order function receives a function as an argument or returns the function as output.

JavaScript ships with built in Higher-Order Functions for us to use:
  * [Array.map()](#[Array].map())
  * [Array.filter()](#[Array].filter())
  * [Array.forEach()](#[Array].forEach())
  * [Array.reduce()](#[Array].reduce())

We can also write our own higher-order functions based on what we need!

__Example__:
```javascript
const add = (a, b) => a + b;
const isEven = num => num % 2 === 0;

const data = [ 2, 3, 1, 5, 4, 6 ];

const evenValues = data.filter(isEven); // [2, 4, 6]
const evenSum = data.filter(isEven).reduce(add); // 12
```
In the example above, the variable `evenValues` is taking the built-in higher-order function `.filter()` and passing it the `isEven` function we created as an argument.

Here's an example of how we can use `.filter()`, `.reduce()`, and `.map()` all together:
```javascript
const grades = [
  { name: 'John', grade: 86, sex: 'M' },
  { name: 'Sarah', grade: 92, sex: 'F' },
  { name: 'Bob', grade: 94, sex: 'M' },
  { name: 'Jane', grade: 78, sex: 'F' }
];

// function declarations
let isBoy = student => student.sex === 'M';

let isGirl = student => student.sex === 'F';

let getBoys = grades => grades.filter(isBoy);

let getGirls = grades => grades.filter(isGirl);

let average = grades => grades.reduce((accumulator, currentValue) => accumulator + currentValue.grade, 0) / grades.length;

let maxGrade = grades => Math.max(...grades.map(student => student.grade));

let minGrade = grades => Math.min(...grades.map(student => student.grade));

// results
let classroomAverage = average(grades); // -> 87.5
let boysAverage = average(getBoys(grades)); // -> 90
let girlsAverage = average(getGirls(grades)); // -> 85
let highestGrade = maxGrade(grades); // -> 94
let lowestGrade = minGrade(grades); // -> 78
let highestBoysGrade = maxGrade(getBoys(grades)); // -> 94
let lowestBoysGrade = minGrade(getBoys(grades)); // -> 86
let highestGirlsGrade = maxGrade(getGirls(grades)); // -> 92
let lowestGirlsGrade = minGrade(getGirls(grades)); // -> 78
```

#### Arrow Functions:
Arrow functions allow us to write shorter function syntax:

__Example__:
```javascript
// old
square = function(x) {
  return x + x;
};

// new
const square = (x) => {
  return x + x;
};
```

We can shorten this even more if the function has *only* one statement, and the statement returns a value, we can remove the brackets *and* the `return` keyword:

```javascript
square = (x) => x + x; 
```

> When dealing with arrow functions it's important to remember that the keyword `this` behaves differently than it does in traditional functions. *See the "[this](#this-and-arrow-functions)" section for more details*.

**[⬆ Top](#table-of-contents)**

----

### Destructuring

#### Object Destructuring:
Destructuring saves you from creating temporary references for those properties, and from repetitive access of the object. Repeating object access creates more repetitive code, requires more reading, and creates more opportunities for mistakes. 

Destructuring objects also provides a single site of definition of the object structure that is used in the block, rather than requiring reading the entire block to determine what is used.

```javascript
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
};

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
};

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
};
```

#### Array Destructuring:
```javascript
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

#### Destructuring multiple return values:
We use object destructuring for multiple return values, not array destructuring.

Why? You can add new properties over time or change the order of things without breaking call sites.

```javascript
// bad
function processInput(input) {
  
  return [left, right, top, bottom];
}
// the caller needs to think about the order of return data
const [left, __, top] = processInput(input);

// good
function processInput(input) {
  // then a miracle occurs
  return { left, right, top, bottom };
}
// the caller selects only the data they need
const { left, top } = processInput(input);
```

**[⬆ Top](#table-of-contents)**

----

### Spread
The spread operator (`...`) allows you to expand a single array into its values. Some common use-cases for the spread operator include:

* Expanding an array's values to pass them as arguments to a function that does not accept an array.
* Cloning an array by spreading its values into a new array (`[]`).
* Concatenating arrays by spreading them into a new array (`[]`).
* Flattening an array of arrays one level, by spreading nested arrays.
* Converting a non-array iterable (e.g. a string or a `Set`) to an array.

```javascript
// Array's values as arguments
const a = [1, 2, 3];
Math.max(...a); // -> 3

// Clone an array
const b = [4, 5, 6];
const c = [...b];
console.log(c); // -> [4, 5, 6] (Note: b !== c)

// Concatenate two arrays
const d = [...a, ...b]; 
console.log(d); // -> [1, 2, 3, 4, 5, 6]

// Flatten separate arrays
const e = [[1, 2], [3, 4]];
const f = [...e[0], ...e[1]]; 
console.log(f); // -> [1, 2, 3, 4]

// Convert iterable to array
const g = [...'hello']; 
console.log(g); // -> g = ['h', 'e', 'l', 'l', 'o']
```

**[⬆ Top](#table-of-contents)**

----

### Rest
The rest parameter syntax allows you to collapse any remaining arguments into an array. While it looks very similar to the spread operator, the rest parameter syntax is only used in function declarations (arrow or otherwise).

```javascript
// Rest parameter syntax, not to be confused with the spread operator
const foo = (str, ...nums) => `${str}_${nums.join('')}`;
foo('hi', 1, 2, 3); // -> 'hi_123', `nums` will be [1, 2, 3]

const data = [4, 5, 6];
// Spread operator, expanding the array
foo('hey', ...data); // -> 'hey_456', `nums` will be [4, 5, 6]
```

**[⬆ Top](#table-of-contents)**

----

### This
`this` is a fundamental part of JavaScript that helps us write much more useful `methods` in our `objects`.

We can think of `this` as a reference to the current *execution scope*. It is going to give you an `object` back.

So depending on the scope and depending on the rules of how `this` works that `object` changes. It could even be a reference to the *global scope*.

__Example__:
```javascript
// In web browsers, the window object is also the global object:
console.log(this === window); // -> true

a = 37;
console.log(window.a); // -> 37

this.b = 'katie';
console.log(window.b) // -> "katie"
console.log(b) // -> "katie"
```

#### This in Methods:
We have the ability to write an `object` or a `method` that is aware of the `object` it lives in.

This means we can use `objects` not only to store different `methods` because they're related (add, multiply, divide, etc.) we group them together as a nice way to create a container for our `methods` that are similar.

But now we have a way of also interacting with properties with other `values` or even other `methods`. This means our object can be a little self-contained world where we can have variables.

__Example 1__:
```javascript
const user = {
  first    : 'Katie',
  last     : 'Jane',
  nickName : '2 Sweet',
  fullName() {
    console.log(`${this.first} ${this.last} aka ${this.nickName}`);
  }
};
user.fullName(); // -> Katie Jane aka 2 Sweet
```

In the example above, since we're writing `this` a lot we can destructure it down to:
```javascript
const user = {
  first    : 'Katie',
  last     : 'Jane',
  nickName : '2 Sweet',
  fullName() {
    // destructuring
    const { first, last, nickName } = this;
    // we can then remove the "this" and simply call the keys
    console.log(`${first} ${last} aka ${nickName}`);
  }
};
user.fullName(); // -> Katie Jane aka 2 Sweet
```

__Example 2__: Adding multiple methods to an object
```javascript
const user = {
  first    : 'Katie',
  last     : 'Jane',
  nickName : '2 Sweet',
  fullName() {
    const { first, last, nickName } = this;
    console.log(`${first} ${last} aka ${nickName}`);
  },
  // here we add a second method
  printBio() {
    // we need to use "this" to reference the whole object, only using fullName() throws a reference error
    const fullName = this.fullName();
    console.log(`${fullName} is awesome!`);
  }
};

const printBio = user.printBio();
console.log(printBio); // -> Katie Jane aka 2 Sweet is awesome!
```
In the example above, we call a method `this.fullName()` that is located within the same object using `this`. In that method we access 3 different properties `[first, last, nickName]` using `this` using destructuring. 

The value of `this` in both methods is referring to the object they live in (user).


#### This and Arrow Functions:
In short, the value of `this` does not change in arrow functions.

In regular functions the `this` keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions the `this` keyword __always__ represents the object that defined the arrow function.

This is generally why we do not use arrow functions as methods because a lot of the methods we write, we want to have access to the parent object of the containing object to do things like:
  * referencing properties
  * calling a different method like we did in `printBio()` (`this.fullName()`).

__Example__:
```javascript
const person = {
  first    : 'Katie',
  last     : 'Jane',
  nickName : '2 Sweet',
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} aka ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
  sayHello    : () => {
    console.log(this);
    console.log(`${this.nickName} says hi there!`);
  }
};
console.log(person.sayHello());
// -> Window
// -> undefined says hi there!!
```

### Determining the Value of "this"

We have 3 different ways at which we can determine the value of `this` inside of a function:
  1. We ask ourselves, did I define the function with an arrow function?
      * If this is true, write "console.log(this)" on the first __valid__ line above the arrow function. Value of "this" in teh arrow function will be equal to that console log.
```js
console.log(this); // -> Window
const printThis = () => {
  console.log(this); // -> Window
};
printThis();
```
Another example:
```js
const colors = {
  printColor() {
    console.log(this); // -> Object { printColor: printColor() }
    const printThis = () => {
      console.log(this); // -> Object { printColor: printColor() }
    };
    printThis();
  }
};
colors.printColor();
```

  2. We ask ourselves, did I call "bind", "call" or "apply" on the function when you invoked it?
      * "this" is equal to the first argument of "bind", "call" or "apply".
```js
const printThis = function() {
  console.log(this); // -> Object { color: "red" }
};
printThis.call({ color: "red" });
```

  3. All other cases:
      * "this" is equal to whatever is to the left of the "." in the method call.
```js
const colors = {
  printColor() {
    console.log(this); // -> Object { printColor: printColor() }
  }
};
// Because the "colors" object is to the left of the period, the value of "this" inside "printColor" is going to be equal to whatever is inside the "colors" object.
colors.printColor();
```
Another example:
```js
const colors = {
  printColor() {
    console.log(this); // -> Object { a: 1, printColor: printColor() }
  }
};
const randomObject = {
	a : 1
};
randomObject.printColor = colors.printColor;
randomObject.printColor();
```

**[⬆ Top](#table-of-contents)**

----

### Getters and Setters
  * [Property Getters and Setters](https://javascript.info/property-accessors)

Getters and setters allow you to define Object Accessors (Computed Properties).

In JavaScript we have two kinds of object properties, _data properties_ and _accessor properties_. 

Accessor properties are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.

Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by `get` and `set`.

Now let's look at one method in which we can access `fullName()` from the `person` object:

__Method 1:__
```js
const person = {
  firstName : "Katie",
  lastName  : "Jane",
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  }
};

console.log(person.fullName()); // -> "Katie Jane"
```

The issue with this approach is we cannot set the full name from outside the object. Also, it would be much better if we didn't have to call fullName like a method (`fullName()`). Instead, we could treat it like a property and drop the parenthesis (`fullName`).

This is where getters and setters come in:
  * Getters: access properties
  * Setters: change (mutate) them

__Method 2:__
```js
const person = {
  firstName : "Katie",
  lastName  : "Jane",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  }
};

console.log(person.fullName); // -> "Katie Jane"
```

Now, to be able to access `fullName` from the outside, we need to add a "setter". It's important to note that our "setter" method must have a parameter passed in. This parameter is going to be what we have on the right side of the assignment operator (`=`).

In the example below, outside of the object we call `person.fullName = "Ryan Neil"` and since `"Ryan Neil"` is to the right side of the assignment operator that becomes the new value.

```js
const person = {
  firstName : "Katie",
  lastName  : "Jane",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const nameParts = value.split(" ");
    console.log(nameParts); // -> Array [ "Ryan", "Neil" ]
    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  }
};

person.fullName = "Ryan Neil"; // Here we're changing the value of the person object

console.log(person); // -> Object { firstName: "Ryan", lastName: "Neil", fullName: Getter & Setter }
console.log(person.fullName); // -> Ryan Neil
```

### Function or Getter?
Let's look at two examples and try and figure out what their differences are.

__Example 1:__
```js
const person = {
  firstName : "Katie",
  lastName  : "Jane",
  fullName  : function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.fullName()); // -> "Katie Jane"
```

In the Example 1 code above, we're accessing fullName as a __function__: `person.fullName()`.

__Example 2:__
```js
const person = {
  firstName : "Katie",
  lastName  : "Jane",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.fullName); // -> "Katie Jane"
```
In the Example 2 code above, we're accessing fullName as a __property__: `person.fullName`.

### Setters and Getter with Classes

__Example:__
```js
class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let user1 = new User("Katie");
console.log(user1.name); // -> "Katie"

user1 = new User("Ryan");
console.log(user1); // -> Object { _name: "Ryan" }
```

**[⬆ Top](#table-of-contents)**

----

### The Document Object Model (DOM)

The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML and XML documents.

The DOM is the JavaScript representation of the content on a page and it consists of a bunch of objects that we can interact with via JavaScript.

In this HTML code:
```html
<html>
  <body>
    <h1>Hello!</h1>
    <ul>
      <l1>Water Plants</li>
      <l1>Do Laundry</li>
    </ul>
  </body>
</html>
```

JavaScript reads it as, a `document` object, a `body` object, an `h1` object, a `ul` object, and two `li` objects.

These JavaScript objects have a variety of properties and methods associated with them. An example of this might be, what their content is or what text is inside the object (property). Or maybe we want to delete one of the objects or update it (method).

#### DOM Properties and Methods:
HTML DOM __methods__ are *actions* you can perform on HTML Elements (like adding or deleting an HTML element).

HTML DOM __properties__ are *values* of HTML Elements that you can set or change (like changing the content of an HTML element).

In the following example, the `<script>` changes the content (the `innerHTML`) of the `<p>` element with `id = "demo"`.

__Example__:
```html
<!-- HTML -->
<body>
  <p id="practice"></p>
</body>
```
```javascript
// JavaScript
document.getElementById("practice").innerHTML = "Hello World!";
```
In the example above, `getElementById` is a __method__, while `innerHTML` is a __property__.

#### DOM Manipulation:
When working with JS in the browser, instead of writing `document.querySelector()`/`document.querySelectorAll()` multiple times, you could do the following thing:

```javascript
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Usage
const demo = $('#demo');

// Select all the `a` tags
[...$$("a[href *='#']")].forEach(console.log);
```

### DOM Methods and Properties

#### DOM Selecting Methods:
#### document.getElementById()
`getElementById()` returns an *Element* object representing the element whose `id` property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

__Syntax__:
```javascript
let element = document.getElementById(id);
```

__Example__:
```html
<!-- HTML -->
<body>
  <p id="para">Some text here</p>
  <button onclick="changeColor('blue');">Blue</button>
  <button onclick="changeColor('red');">Red</button>
</body>
```
```javascript
// JavaScript
function changeColor(newColor) {
  let elem = document.getElementById('para');
  elem.style.color = newColor;
}
```
Result: \
When the `Blue` button is clicked, `Some text here` text changes color to blue and vice-versa with the `Red` button.

#### document.getElementsByTagName()
`getElementsByTagName()` method of *Document* interface returns an *HTMLCollection* of elements with the given tag name (`< >`). The complete document is searched, including the root node.

__Syntax__:
```javascript
let elements = document.getElementsByTagName(name);
```

__Example__:
```html
<!-- HTML -->
<body>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
  <button onclick="countPTags()">Count paragraphs</button>
</body>
```
```javascript
// JavaScript
function countPTags() {
  let totalPTags = document.getElementsByTagName('p');
  console.log(`Total p tags are: ${totalPTags.length}`);
}
// -> Total p tags are: 3
```
Result: \
When the `Count paragraphs` button is clicked, the console logs the amount of `<p>` tags it finds in the document (3).

The `HTMLCollection` is an array-like object that is not an array. It is a collection of objects that we can access using indeces.

> Regular array methods like `pop()` or `includes()` don't work with `HTMLCollection`.

__Example__:
```html
<!-- HTML -->
<body>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</body>
```
```javascript
const pTags = document.getElementsByTagName('p');

console.log(pTags); // -> HTMLCollection { 0: p, 1: p, 2: p }
console.log(pTags.length); // -> 3
console.log(pTags[0]); // -> <p> (Paragraph 1)
console.log(pTags[2]); // -> <p> (Paragraph 3)
```

From the example above, we can iterate over `HTMLCollection`'s:
```javascript
for (let p of pTags) {
  console.log(p);
}
// -> <p> (Paragraph 1)
// -> <p> (Paragraph 2)
// -> <p> (Paragraph 3)
```

Since it is an iterable we can also use __spread__ (`...`) to turn it into an array and spread it:
```javascript
const arr = [...pTags];

console.log(arr);
// -> 0: <p>
// -> 1: <p>
// -> 2: <p>
```
We have now turned it into an array!

#### document.getElementsByClassName()
`getElementsByClassName()` method of `Document` interface returns an array-like object of all child elements which have all of the given class name(s). When called on the `document` object, the complete document is searched, including the root node.

__Syntax__:
```javascript
let elements = document.getElementsByClassName(names); 
// or
let elements = rootElement.getElementsByClassName(names);
```

__Example__:
```html
<!-- HTML -->
<body>
  <div id="parent-id">
    <p>hello world 1</p>
    <p class="test">hello world 2</p>
    <p>hello world 3</p>
    <p>hello world 4</p>
  </div>
</body>
```
```javascript
// JavaScript
// a list of matching elements, *not* the element itself
const test = document.getElementsByClassName('.test');
console.log(test);
// -> HTMLCollection { 0: p.test, length: 1 }

// the first element, as we wanted
const testTarget = document.getElementsByClassName('.test')[0];
console.log(testTarget);
// -> <p class="test">
```

A commonly used method of operation is combining or chaining `document.getElementById()` and `document.getElementByClassName()`.

From the example above:
```html
<!-- HTML -->
<body>
  <div id="parent-id">
    <p>hello world 1</p>
    <p class="test">hello world 2</p>
    <p>hello world 3</p>
    <p>hello world 4</p>
  </div>
</body>
```
```javascript
// JavaScript
const parentDOM = document.getElementById("#parent-id");
console.log(parentDOM); // -> <div id="parent-id">

// a list of matching elements, *not* the element itself
const test = parentDOM.getElementsByClassName('.test');
console.log(test); // -> HTMLCollection { 0: p.test, length: 1 }

// the first element, as we wanted
const testTarget = parentDOM.getElementsByClassName('.test')[0];
console.log(testTarget); // -> <p class="test">
```

#### document.querySelector()
This returns the first `Element` within the document that matches the specified selector, or group of selectors. If no matches are found, `null` is returned.

It is an all-in-one method to select a single element from the DOM. It can select everything that we use to select elements (ID, class, tag, etc.). This will only pass us the very first match regardless of how many there are in the document.

__Syntax__:
```javascript
element = document.querySelector(selectors);
```
__Example__:

This will find the first `<h1>` element tag:
```javascript
document.querySelector('h1');
```
This will find the first element with `ID` of `red`:
```javascript
document.querySelector('#red');
```
This will find the first element with `class` of `.big`:
```javascript
document.querySelector('.big');
```

> Note: `querySelector()` is less performant than the traditional `getElementById` or `getElementsByClassName/TagName`. Depending on what we pass into it, it could have to do a lot of work.

#### document.querySelectorAll()
This returns a static (not live) `NodeList` representing a list of the document's elements that match the specified group of selectors.

This acts the same as `document.querySelector()`, but returns a collection of matching elements.

__Syntax__:
```javascript
elementList = parentNode.querySelectorAll(selectors);
```

__Example__:
```html
<!-- HTML -->
<body>
  <div id="parent-id">
    <p>hello world 1</p>
    <p class="test">hello world 2</p>
    <p>hello world 3</p>
    <p>hello world 4</p>
  </div>
</body>
```
```javascript
// JavaScript
// targeting the ID, "parent-id":
const parentDOM = document.querySelector('#parent-id');
console.log(parentDOM); // -> <div id="parent-id">

// targeting the class, "test":
const test = parentDOM.querySelector('.test');
console.log(test); // -> <p class="test">

// targeting all the p tags:
const pTags = parentDOM.querySelectorAll('p');
console.log(pTags); // -> NodeList(4) [ p, p.test, p, p ]

// targeting more specifically:
const pTarget = document.querySelector('p.test');
console.log(pTarget); // -> <p class="test">hello world 2</p>
```

#### DOM Manipulating or "Accessing" Properties and Methods:

#### HTMLElement.innerText
The innerText property of the HTMLElement interface represents the "rendered" text content, or the "visible" text of a node and its descendants. 
 * used for Accessing text from an element (how we get the contents of an element)
 * innerText only shows “human-readable” elements.
 * We CANNOT create new elements with innerText.

__Syntax__:
```javascript
const renderedText = htmlElement.innerText
htmlElement.innerText = string
```

__Example__:
```html
<!-- HTML -->
<body>
  <div id="parent-id">
    <p>hello world 1</p>
    <p class="test">hello world 2</p>
    <p>hello world 3</p>
    <p>hello world 4</p>
  </div>
</body>
```
```javascript
// JavaScript
const insideElement = document.querySelector('p.test');
console.log(insideElement.innerText); // -> 'hello world 2'
```

#### Node.textContent
This property sets or returns the text content of the specified node, and __all__ its descendants.
 * textContent gets the content of all elements, including `<script> `and `<style>` elements.
 * textContent will return the text of elements that are hidden with CSS.
 * textContent will print out all text formatting (indenting), hidden code, tags, etc.

__Syntax__:
```javascript
let text = someNode.textContent
someOtherNode.textContent = string
```

#### innerText vs. textContent:
`innerText` is defined only for HTMLElement objects, while `textContent` is defined for all Node objects.

__Example__:
```html
<!-- HTML -->
<p>
  Hello <span style="display: none;">World</span>
</p>
```
```javascript
// JavaScript
const element = document.querySelector('p');

console.log(element.innerText); // -> Hello
console.log(element.textContent); // -> Hello World
```

#### Element.innerHTML:
This property sets or returns the HTML content (inner HTML) of an element.

`innerHTML` will return all of the text inside of an element as well as all other tags inside a given element. When updating the HTML, like adding an element we __HAVE__ to use innerHTML. We __CANNOT__ use innerText for this.

__Syntax__:
```javascript
const content = element.innerHTML;
element.innerHTML = htmlString;
```

__Example__:
```html
<!-- HTML -->
<body>
  <ul>
    <li>First thing</li>
    <li>Second thing</li>
    <li>Third thing</li>
  </ul>
</body>
```
```javascript
// JavaScript
const elements = document.querySelector('ul');

// using "innerHTML"
console.log(elements.innerHTML);
// -> <li>First thing</li>
// -> <li>Second thing</li>
// -> <li>Third thing</li>

// using "innerText"
console.log(elements.innerText);
// -> "First thing
// -> Second thing
// -> Third thing"
```

#### DOM Accessing Properties on Individual Elements:
These are all referred to as "attributes" which in JavaScript is a word followed by an equal sign (`=`) and quotes (`src=" "`).

#### .value
All the elements which allow a user to type something in or select something, have a `value` property with JavaScript.

> If the elements have just plain text, you can use `textContent` and `innerHTML` to get the plain text value

__Example__:
```html
<!-- HTML -->
<body>
  <form>
    <input type="text" placeholder="Name" value="Katie" />
    <input type="password" placeholder="Password" />
    <input type="checkbox" />
    <input type="range" min="0" max="100" step="10" />
    <input type="submit" value="Submit" />
  </form>
</body>
```
```javascript
// JavaScript
const inputs = document.querySelectorAll('input');

// for text boxes:
const nameValue = inputs[0].value;
// if user typed "Katie" in the first input box ("Name)
console.log(nameValue); // -> "Katie"

// for checkboxes:
const inputChecked = inputs[2].checked;
// if user toggles the checkbox "on"
console.log(inputChecked); // -> true

// for range slider:
const rangeSlider = inputs[3].value;
// if user slides the knob halfway.
console.log(rangeSlider); // -> "50" [incrementing by 10 (step)]
```

#### Element.getAttribute()
This method of the `Element` interface returns the value of a specified attribute on the element. If the given attribute does not exist, the value returned will either be `null` or `" "` (the empty string).

__Syntax__:
```javascript
let attribute = element.getAttribute(attributeName);
```

__Example__:
```html
<!-- HTML -->
<body>
  <form>
    <input type="text" placeholder="Name" />
    <input type="range" min="0" max="100" step="10" />
    <input type="submit" value="Submit" />
  </form>
</body>
```
```javascript
// JavaScript
const range = document.querySelector('input[type="range"]');

const maxRange = range.getAttribute('max');
console.log(maxRange); // -> "100"

const minRange = range.getAttribute('min');
console.log(minRange); // -> 0
```

#### Element.setAttribute()
Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

To get the current value of an attribute, use `getAttribute()`; to remove an attribute, call `removeAttribute()`.

__Syntax__:
```javascript
Element.setAttribute(name, value);
```

__Example__:
```html
<!-- HTML -->
<body>
  <form>
    <input type="text" placeholder="Name" />
    <input type="range" min="0" max="100" step="10" />
    <input type="submit" value="Submit" />
  </form>
</body>
```
```javascript
// JavaScript
const range = document.querySelector('input[type="range"]');

range.setAttribute('max', '120');
range.setAttribute('min', '-10');
```

#### DOM Accessing the Parent, Children or Nearest Sibling:

#### Node.parentElement
This returns the parent element of the specified element.

__Syntax__:
```javascript
parentElement = node.parentElement
```

__Example__:
```html
<!-- HTML -->
<body>
  <section>
    <h2>Section Title</h2>
    <p>First paragraph</p>
    <p>Second paragraph</p>
  </section>
</body>
```
```javascript
// JavaScript
const firstP = document.querySelector('p');

console.log(firstP.parentElement); // -> <section>

// we can also chain the .parentElement
console.log(firstP.parentElement.parentElement); // -> <body>
```

#### ParentNode.children
This returns a live `HTMLCollection` which contains all of the child elements of the node upon which it was called.

__Syntax__:
```javascript
let children = node.children;
```

__Example__:
```html
<!-- HTML -->
<body>
  <section>
    <h2>Section Title</h2>
    <p>First paragraph</p>
    <p>Second paragraph</p>
  </section>
</body>
```
```javascript
// JavaScript
const sectionChild = document.querySelector('section');

console.log(sectionChild.children); // -> HTMLCollection { 0: h2, 1: p, 2: p }
console.log(sectionChild.children[0]); // -> <h2>
```

#### Element.nextElementSibling
This returns the element immediately following the specified one in its parent's children list, or `null` if the specified element is the last one in the list.

__Syntax__:
```javascript
// Getter
element = el.nextElementSibling;

// No setter; read-only property
```

__Example__:
```html
<!-- HTML -->
<body>
  <section>
    <h2>Section Title</h2>
    <p>First paragraph</p>
    <p>Second paragraph</p>
  </section>
</body>
```
```javascript
// JavaScript
const nextSib = document.querySelector('h2');

console.log(nextSib.nextElementSibling); // -> <p>First paragraph</p>
```

#### Element.previousElementSibling
This returns the `Element` immediately prior to the specified one in its parent's children list, or `null` if the specified element is the first one in the list.

__Syntax__:
```javascript
// Getter
element = el.previousElementSibling;

// No setter; read-only property
```

__Example__:
```html
<!-- HTML -->
<body>
  <section>
    <h2>Section Title</h2>
    <p>First paragraph</p>
    <p>Second paragraph</p>
  </section>
</body>
```
```javascript
// JavaScript
const previousSib = document.querySelector('p');

console.log(previousSib.previousElementSibling); // -> <h2>Section Title</h2>
```

### DOM Manipulating or "Changing" Multiple Elements:
We use `querySelectorAll()`, `getElementsByClassName()`, `getElementsByTagName()` to select all of the element and get an array-like object. We then iterate over that object and call a method or property that we want.

__Example__: Change the text inside all of the "p" elements
```html
<!-- HTML -->
<body>
  <section>
    <h2>Section Title</h2>
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <p>Third paragraph</p>
  </section>
</body>
```
```javascript
// JavaScript
// we select all the p tags
const allPTags = document.querySelectorAll('p');

// next we loop over all p tags
for (let p of allPTags) {
  //  last, we change the text of the p tags
  p.innerText = 'This is new text';
}
console.log(allPTags[0].innerText); // -> 'This is new text'
console.log(allPTags[1].innerText); // -> 'This is new text'
```

### DOM Changing Styles:

__Example__: Change the text color inside all "p" elements
```html
<!-- HTML -->
<body>
  <section>
    <h2>Section Title</h2>
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <p>Third paragraph</p>
  </section>
</body>
```
```javascript
// JavaScript
// we select all the p tags
const allPTags = document.querySelectorAll('p');

// we create a colors array
const colors = [ 'red', 'green', 'blue' ];

// next we loop over all p tags and print the text and index
allPTags.forEach((p, idx) => {
  // assign a variable to all the colors in the array
  const newColors = colors[idx];
  // change the text color of the iterated p tags
  p.style.color = newColors;
});
```

#### Window.getComputedStyle()
This method returns an object containing the values of all CSS properties of an element (color, backgroundColor, display, width, etc.), after applying active stylesheets and resolving any basic computation those values may contain. 

Individual CSS property values are accessed through APIs provided by the object, or by indexing with CSS property names.

__Syntax__:
```javascript
window.getComputedStyle(element);
window.getComputedStyle(element, pseudoElt);
```
__Example__:
```javascript
document.querySelector('p').style.color;
// -> "" (returns empty)
```
This returns empty because the style property only contains the inline styles. It does not contain any "calculated" styles, styles from a style sheet (CSS) or styles from a given class.

If we want to get the computed value for an element we have to call the method "getComputedStyle":
```javascript
const p = document.querySelector('p');

const styles = getComputedStyle(p);

// we can now access the style properties of all the "p" elements
console.log(styles.backgroundColor); // -> "rgba(0, 0, 0, 0)"
console.log(styles.fontFamily); // -> "serif"
```

#### Element.classList
This property returns a live `DOMTokenList` collection of the class attributes of the element. This can then be used to manipulate the class list.

This property is useful to add, remove and toggle CSS classes on an element. The classList property is read-only, however, you can modify it by using the add() and remove() methods.

__Syntax__:
```javascript
const elementClasses = elementNodeReference.classList;
```

__Example__:

Add an element to the DOM:
```html
<body>
  <div id="el"></div>
</body>
```
We then get a reference to the DOM element:
```javascript
const el = document.querySelector("#el");
```
We can now manipulate the classes on that element with the `classList` method:
```javascript
// Add a class
el.classList.add('open');

// Add many classes
el.classList.add('this', 'little', 'piggy');
let classes = [ 'is-message', 'is-warning' ];
el.classList.add(...classes);

// Remove a class
el.classList.remove('open');

// Remove multiple classes
el.classList.remove('this', 'little', 'piggy');

// Loop over each class
el.classList; // DOMTokenList (pretty much an array)
el.classList.forEach(className => {
  // don't use "class" as that's a reserved word
  console.log(className);
});

el.classList.length; // integer of how many classes there are

// Replace a class (replaces first with second)
el.classList.replace('is-big', 'is-small');

// Toggle a class (if it's there, remove it, if it's not there, add it)
el.classList.toggle('open');
// Remove the class
el.classList.toggle('open', false);
// Add the class
el.classList.toggle('open', true);
// Add the class with logic
el.classList.toggle('raining', weather === 'raining');

// Check if element has class (returns true or false)
el.classList.contains('open');

// Look at individual classes <div class="hot dog">
el.classList.item(0); // -> hot
el.classList.item(1); // -> dog
el.classList.item(2); // -> null
el.classList[1]; // -> dog
```

### DOM Creating Elements
How we insert or add elements into the DOM.

#### Document.createElement()
This method creates the HTML element specified by `tagName`, or an `HTMLUnknownElement` if `tagName` isn't recognized.

__Syntax__:
```javascript
let element = document.createElement(tagName[, options]);
```

__Example__: Creating an Element
```javascript
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
```

__Example__: Creating an Image
```javascript
// create the image:
const newImg = document.createElement('img');

// link the image:
newImg.src ='https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';

// resize the image:
newImg.style.width = '500px';

// append the image to the DOM:
document.body.appendChild(newImg);
```

__Example__: Creating a Link
```javascript
// create the link:
const newLink = document.createElement('a');

// add the link text:
newLink.innerText = 'Click here for more info';
// add the link source:
newLink.href = 'https://www.josephskycrest.com/';

// append the link to the DOM:
const ulEnd = document.querySelector('ul');
ulEnd.appendChild(newLink);
```

### DOM Inserting Elements with an Order

#### Element.insertAdjacentElement()
This method of the `Element` interface inserts a given element node at a given position relative to the element it is invoked upon.

__Syntax__:
```javascript
targetElement.insertAdjacentElement(position, element);
```

__Position__:

A `DOMString` representing the position relative to the `targetElement`; must match (case-insensitively) one of the following strings:
  * `beforebegin`: Before the targetElement itself.
  * `afterbegin`: Just inside the targetElement, before its first child.
  * `beforeend`: Just inside the targetElement, after its last child.
  * `afterend`: After the targetElement itself.


__Visualization__:
```html
  beforebegin
  <p>
    afterbegin
    foo (existing element)
    beforeend
  </p>
  afterend
```

__Example__:
```javascript
// JavaScript
// create the new "i" tag:
const iTag = document.createElement('i');
iTag.innerText = 'I am italics!';

// select the element where we want to insert our new "i" tag:
const firstP = document.querySelector('p');

// insert where and what we want to insert into the DOM:
firstP.insertAdjacentElement('beforebegin', iTag);
```

### DOM Removing Elements

#### Node.removeChild()
This method removes a child node from the DOM and returns the removed node.

__Syntax__:
```javascript
let oldChild = node.removeChild(child);
// or just
node.removeChild(child);
```
The removed child node still exists in memory, but is no longer part of the DOM. With the first syntax form shown, you may reuse the removed node later in your code, via the `oldChild` object reference.

__Example__:
```javascript
// select the parent:
const ul = document.querySelector('ul');

// select the child to be removed:
const removeEle = ul.querySelector('.special');

// the pattern goes: the parent, then remove child, then the child
ul.removeChild(removeEle);

// when we remove a child it returns the removed child which allows us to save it to a variable incase we want to do something with it:
const deleted = ul.removeChild(removeEle);
```

#### ChildNode.remove()
This method removes the object from the tree it belongs to. The `remove` method does not need the parent node.

__Syntax__:
```javascript
node.remove();
```

All we have to do is select the target (what we want to remove) and then call remove on that node (the actual item we want to remove):
```javascript
const h2 = document.querySelector('h2');
h2.remove();
```

### DOM Events
#### Resources:
[MDN - DOM Events](https://developer.mozilla.org/en-US/docs/Web/Events)

Event Structure:
```
the thing:      the event type:     the code to run:

button          click               change the color
input           hits "enter"        get search results
img             mouseover           display image caption
```

#### EventTarget.addEventListener()
The __EventTarget__ method `addEventListener()` sets up a function that will be called whenever the specified event is delivered to the target. Common targets are __Element__, __Document__, and __Window__, but the target may be any object that supports events (such as __XMLHttpRequest__).

__Syntax__:
```javascript
target.addEventListener(type, listener);
```
`type`: A case-sensitive string representing the event type to listen for (`click`, `mouseover`, `focus`, `submit`, etc.)

`listener`: The object that receives a notification when an event of the specified type occurs. This must be an object implementing the __EventListener__ interface, or a JavaScript __function__.

__Example__:
```javascript
const button = document.querySelector('h1');

button.addEventListener('click', () => {
  alert('You clicked me!');
});
```

### The Event Object
Event Objects can be very useful to have access to in our callback or our event handler.

The Event Object is used if we need to access information about what was clicked on, what key was pressed, what time after the page loaded, etc.

__Example__: Keyboard Event
```js
document.body.addEventListener('keypress', function(event) {
  console.log(event);
});
// if the user pushes "a" anywhere on the body of the document
// -> keypress { target: body, key: "a", charCode: 107, keyCode: 0 }
```

### Key Events
When you interact with the keyboard, the keyboard events are fired. There are three main keyboard events:

* `keydown` – fires when you press a key on the keyboard and it fires repeatedly while you holding down the key.
* `keyup` – fires when you release a key on the keyboard.
* `keypress` – fires when you press a character keyboard like a,b, or c, not the left arrow key, home, or end keyboard, … The keypress also fires repeatedly while you hold down the key on the keyboard.
* `beforeinput` – fires when the value of an `<input>`, `<select>`, or `<textarea>` element is about to be modified.

> Note: Look to use "beforeinput" or "keydown" instead of "keypress" since it has been deprecated.

### Form Events

* preventDefault()

This is used when we want to do something when a user submits and entire form. We have a special method called `preventDefault` which prevents the page from reloading when the user clicks the submit button.

__Example__:
```js
const form = document.querySelector("#signup-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```
Instead of capturing each input as it changes each time, we could have a `keydown` or `keypress` event on the inputs and anytime it changes we can create a variable in our JS that is in sync with the change. This leaves us free to extract the data and do something with it, like sending it to an API.

Also, anytime you select a different option we could immediately update the variable or create a new variable.

By adding one event listener on the `submit` button we do not need to add event listeners on each of the inputs. The only event that runs is the event listener on `submit`.

Doing something with the data:
```js
// to extract data we need to select the individual elements of the form
const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const foodSelect = document.querySelector("#food");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // We can then save the values to variables
  const creditCardValue = creditCardInput.value;
  const termsCheckboxValue = termsCheckbox.checked;
  const foodSelectValue = foodSelect.value;
});
```

### Input Event

__Example__:
```js
const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const foodSelect = document.querySelector("#food");

const formData = {};

creditCardInput.addEventListener("input", (e) => {
  formData["creditCardInput"] = e.target.value;
});

foodSelect.addEventListener("input", (e) => {
  formData["foodSelect"] = e.target.value;
});

termsCheckbox.addEventListener("input", (e) => {
  formData["agreeToTerms"] = e.target.checked;
});
```
Let's refactor the above code:

> Note: We need to add a "name" to each input in the html document [name=""]

```js
const formData = {};
const inputs = [ creditCardInput, termsCheckbox, foodSelect ];

// loop over the html "names"
for (let input of inputs) {
  input.addEventListener("input", (e) => {
    formData[e.target.name] = e.target.value; // this is taking the "name" from the html document and the value of what the user inputs in
	});
}
```
We can destructure the above code like this:
```js
const formData = {};
const inputs = [ creditCardInput, termsCheckbox, foodSelect ];

for (let input of inputs) {
  input.addEventListener("input", ({ target }) => {
    const { name, type, value, checked } = target;
    // here we're checking if the input type is equal to checkbox. If it is, we store the "checked" value, if it isn't we store the "value" value.
    formData[name] = type === "checkbox" ? checked : value;
	});
}
```

### Change Event
The `change` event is very similar to the `input` event but the difference is text fields will not be updated until the field has lost `focus` (blurring) or `enter` is pressed

__Example__:
```js
for (let input of inputs) {
  // instead of "input" we use "change"
  input.addEventListener("change", ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === "checkbox" ? checked : value;
	});
}
```


#### Helpful Resources:
[Traversing the DOM](https://zellwk.com/blog/dom-traversals/)

**[⬆ Top](#table-of-contents)**

----

### The Call Stack
The Call Stack is the mechanism the JavaScript interpreter uses to keep track of its place in a script that calls multiple functions.

How JavaScript "knows" what function is currently being run and what functions are called from within that function, etc.

__How it Works__:
  1. When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.

  2. Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
  
  3. When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

__Example__:
```js
const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

isRightTriangle(3, 4, 5); // -> true (9 + 16 = 25)
```
In the above code, when the interpreter encounters the very first function call (`isRightTriangle(3, 4, 5)`) it gets added to the bottom of the call stack. But inside of `isRightTriangle` there are multiple function calls that need to happen first.

The first is `square(a)`, which is 3 in our case. So `square(3)` is the next thing to be added to the call stack. But `square(3)` does not return anything either. It calls another function, `multiply(3, 3)`.

The last thing to be added to the call stack is `multiply(3, 3)`.

So what is happening is, `isRightTriangle` has not finished running...`square(3)` has not finished running and then `multiply(3, 3)` does not call any other functions so it returns 3 * 3 (`9`). When it returns a value it is removed from the stack. The last thing in is the first thing out.

Next, `square(3)` now has a value back from `multiply(3, 3)` which is `9`. So it can return that value and be removed from the stack.

Last, `isRightTriangle` returns with its new value of `9`.
```js
const isRightTriangle = (a, b, c) => {
  return 9 + square(4) === square(5);
};

isRightTriangle(3, 4, 5);
```
Once all of this is complete it moves on to `square(b)` and repeats the same exact process as with `square(a)`. So then we get:
```js
const isRightTriangle = (a, b, c) => {
  return 9 + 16 === square(5);
};

isRightTriangle(3, 4, 5);
```
The process is repeated one last time for `square(c)` and we get:
```js
const isRightTriangle = (a, b, c) => {
  return 9 + 16 === 25;
};

isRightTriangle(3, 4, 5);
```
`isRightTriangle(3, 4, 5)` finally finishes running and returns `true` because 9 + 16 = 25 and `25 === 25`. `isRightTriangle(3, 4, 5)` is then removed from the call stack and we are finished.

**[⬆ Top](#table-of-contents)**

----

### Asynchronous JavaScript
JavaScript, fundamentally, is a [single-threaded](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts) language. At any given point in time, that single JavaScript thread is running at most one line of JavaScript code.

__How Asynchronous Callbacks Actually Work__:

What happens when something takes a long time? Like, for example, a database call or API call:
```js
// get user input
const newTodo = input.value;
// this could take a while...
saveToDatabase(newTodo);
// reset form
input.value = '';
```

For processes that take a long time (relatively) we pass a __callback__ function. Those functions will be executed at the appropriate time after the interval (set time) has passed.

```js
console.log("I happen first.");

setTimeout( () => {
  console.log("I happen third.");
}, 3000);

console.log("I happen second.");
```

In the code above, `setTimeout` will wait 3 seconds before running.

But how does this actually happen if JavaScript is single-threaded and can only execute one thing at a time?

The work-around for this is that the browser does the work. In the example above, JavaScript passes off the `setTimeout` function to the browser to run. The main takeaway here is that JavaScript is not setting a timer or keeping track of how many seconds have gone by, JavaScript is not sending a request to an API, the browser is handling these actions.

__Okay, but how?__:
* Browsers come with [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) that are able to handle certain tasks in the background (like making requests or `setTimeout`).

* The JavaScript call stack recognizes these Web API functions and passes them off to the browser to take care of.

* Once the browser finishes those tasks, they return and are pushed onto the stack as a __callback__.

### Asynchronous Callbacks
Async callbacks are functions that are specified as arguments when calling a function which will start executing code in the background. When the background code finishes running, it calls the callback function to let you know the work is done, or to let you know that something of interest has happened.

__Example__:
```js
const btn = document.querySelector("button");

setTimeout(() => {
  btn.style.transform = `translateX(100px)`;
  // if we want to make the button move another 200px after 2 seconds we nest another "setTimeout" function
  setTimeout(() => {
    btn.style.transform = `translateX(200px)`;
    // if we want to keep making the button move we just have to keep on nesting "setTimeout" functions
    setTimeout(() => {
      btn.style.transform = `translateX(300px)`;
		}, 1000);
  }, 1000);
}, 1000);
```

Let's make the above code a function:
```js
const moveX = (element, amount, delay) => {
  setTimeout(() => {
    element.style.transform = `translateX(${amount}px)`;
  }, delay);
};
moveX(btn, 600, 1000);
```

if we want to then replicate this before and have something happen after the delay we add another `setTimeout` function.

In order to do this we need our `moveX` function to accept a `callback`:
```js
const moveX = (element, amount, delay, callback) => {
  setTimeout(() => {
    element.style.transform = `translateX(${amount}px)`;
    // second, we need to execute the "callback" function inside the setTimeout
    if (callback) callback();
  }, delay);
};
// last, we need to pass in a callback [the arrow function in this case]
moveX(btn, 100, 1000, () => {
  // we could chain another callback...
  moveX(btn, 200, 1000, () => {
    // and another...
    moveX(btn, 300, 1000);
  });
});
```

Now, let's re-write our `moveX` function to check if the element is going to go off screen:
```js
const btn = document.querySelector("button");

const moveX = (element, amount, delay, callback) => {
  // we want to get the width of the screen
  const bodyBoundary = document.body.clientWidth;
  const elRight = element.getBoundingClientRect().right;
  const currLeft = element.getBoundingClientRect().left;

  // now to check if the element is going to go off the screen
  if (elRight + amount > bodyBoundary) {
		console.log("Done!");
  } else {
    setTimeout(() => {
      // this makes it so we don't have to hard code in the pixel amount to move each time. This is done by calculating the current position on the screen [currLeft] and adding 100px to it
      element.style.transform = `translateX(${currLeft + amount}px)`;
      if (callback) callback();
    }, delay);
  }
};

moveX(btn, 100, 1000, () => {
  moveX(btn, 100, 1000, () => {
    moveX(btn, 100, 1000);
  });
});
```

### Success and Failure Callbacks
How we would structure this (and how a lot of older javascript libraries are written) we would have 2 callbacks we pass in:
```js
request(successCallback, failCallback);
```
Now, we wouldn't write it like this above...they would be structured like functions:
```js
request(() => { doSomething },() => { doSomethingElse });
```

__Example__:

In the example below:
* [Success] Here's what I want you to do IF we CAN keep moving.
* [Failure] Here's what I want you to do IF we CAN'T move anymore.

```js
const btn = document.querySelector("button");

// add "onSuccess" and "onFailure" callbacks to moveX
const moveX = (element, amount, delay, onSuccess, onFailure) => {
  // we re-write to put the conditional in the "setTimeout" function
  setTimeout(() => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;

    if (elRight + amount > bodyBoundary) {
      // add "onFailure" function here
      onFailure();
        else {
      element.style.transform = `translateX(${currLeft + amount}px)`;
      // add "onSuccess" function here
      onSuccess();
    }
  }, delay);
};

moveX(btn, 100, 1000, () => {
  moveX(btn, 100, 1000, () => {
    moveX(btn, 100, 1000);
  });
});
```
Now, we need to re-write this chunk from above:
```js
moveX(btn, 100, 1000, () => {
  moveX(btn, 100, 1000, () => {
    moveX(btn, 100, 1000);
  });
});
```
to have 2 callbacks every time:

```js
moveX(btn, 100, 1000, () => {
  // 1st success callback. we add another "moveX"
  moveX(btn, 400, 1000, () => {
    // 2nd success callback. we add another "moveX"
    moveX(btn, 700, 1000, () => {
      // 3rd success message
      console.log("Whoa, we still have more screen?");
    }, () => {
      // 3rd fail callback
      alert("Cannot move anymore!");
    });
  }, () => {
    // 2nd fail callback
    alert("Cannot move anymore!");
  });
}, () => {
  // 1st fail callback
  alert("Cannot move anymore!");
});
```

Refactoring the above example using __Promises__:
```js
const btn = document.querySelector("button");

// moveX no longer accepts an onSuccess and onFailure as callbacks
const moveX = (element, amount, delay) => {
  // we must return a new promise here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;

      if (elRight + amount > bodyBoundary) {
        // instead of calling onFailure() here, we just reject the promise (if we can continue to move)
        reject();
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

// 1st Promise call
moveX(btn, 200, 1000)
  .then(() => {
    // instead of typing .then again we can chain a 2nd Promise by just returning it
    return moveX(btn, 200, 1000);
  })
  .then(() => {
    // 3rd Promise call
    return moveX(btn, 200, 1000);
  })
  .then(() => {
    // 4th Promise call
    return moveX(btn, 200, 1000);
  })
  .then(() => {
    // 5th Promise call
    console.log("All finished moving!");
  })
  // we only need one .catch with this method
  .catch(() => {
    console.log("Oops you've gone too far!");
  });
```

We can shorten the above code even more:

> Note: with arrow functions if we are returning something and it's the only expression we can use an implicit return

```js
moveX(btn, 200, 1000)
  // if there's only one expression we can remove the return keyword
  .then(() => moveX(btn, 200, 1000))
  .then(() => moveX(btn, 200, 1000))
  .then(() => moveX(btn, 200, 1000))
  .then(() => console.log("All finished moving!"))
  // here we can destructure what we passed into our reject() call above
  .catch(({ bodyBoundary, elRight, amount }) => {
    console.log(`Body is ${bodyBoundary}px wide`);
    console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
  });
```

**[⬆ Top](#table-of-contents)**

----

### Promises
  * [How to Write JavaScript Promises](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
  * [How to Resolve or Reject Promises in JS](https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/)

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

A Promise is always in one of these states:
  * __pending__: initial state, neither fulfilled nor rejected.
  * __fulfilled__: meaning that the operation was completed successfully.
  * __rejected__: meaning that the operation failed.

__Syntax__:
```js
let promise = new Promise(function(resolve, reject) {
  // Code to execute
});
```
The 2 main ideas we need to understand about Promises are:
  1. How we can create a Promise and how we can create a function that returns a promise.
  2. How we consume or interact with Promises.

__Example 1__: Create a Promise 

The example below creates a Promise that is randomly resolved or rejected.

```js
const willGetADog = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});
```

__Example 2__: Interacting with a Promise 

In the example below we see how we handle the Promise if it is resolved or rejected. We use `.then()` if our Promise is resolved and `.catch()` if our Promise is rejected.

```js
const willGetADog = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});

// The ".then" method will run if our Promise is resolved
willGetADog.then(() => {
  console.log("Yay we got a dog!!!");
});

// The ".catch" method will run if our Promise is rejected
willGetADog.catch(() => {
  console.log("Aww we didn't get a dog.");
});
```

### Returning Promises with Functions

__Example__:
```js
// create the function and add the Promise inside
const makeDogPromise = () => {
  // we must return the Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
};
makeDogPromise()
  .then(() => {
    console.log("Yay we got a dog!!!");
  })
  // we can also just chain the .catch onto the .then
  .catch(() => {
    console.log("Aww we didn't get a dog.");
  });
```

### Resolving/Rejecting with Values
We're able to resolve and reject a Promise with a value. We can pass information in to the `reject()` or `resolve()` functions.

__Example 1__:
```js
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.3) {
        // pass in status information to reject()
        reject({ status: 404 });
      } else {
        resolve();
      }
    }, 3000);
  });
};
fakeRequest()
  .then(() => {
    console.log("Request worked!");
  })
  // we add a "response" parameter to .catch
  .catch((response) => {
    // log the "status" from the object we passed to reject() in fakeRequest above
    console.log(response.status); // -> 404
    console.log("Request failed!"); // -> Request failed!
  });
```

__Example 2__: Passing in a URL to `fakeRequest()` function
```js
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // add a pages object with user information
      const pages = {
        users    : [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Katie" }
        ],
        "/about" : "This is the about page!"
      };
      // assign the data variable to the pages url array
      const data = pages[url];
      // check to see if the url was in pages
      if (data) {
        // resolve with a status code of "200", also include the data
        resolve({ status: 200, data: data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

fakeRequest("/about")
  .then((response) => {
    console.log("Status Code: ", response.status);
    console.log("Data: ", response.data);
    console.log("Request worked!");
  })
  .catch((response) => {
    console.log(response.status);
    console.log("Request failed!");
  });
// -> Status Code: 200
// -> Data:  This is the about page!
// -> Request worked!

fakeRequest("/contact")
  .then((response) => {
    console.log("Status Code: ", response.status);
    console.log("Data: ", response.data);
    console.log("Request worked!");
  })
  .catch((response) => {
    console.log(response.status);
    console.log("Request failed!");
  });
// -> 404
// -> Request failed!
```

### Chaining Multiple Promises
  * [Javascript Info - Promises chaining](https://javascript.info/promise-chaining)

Promise Chaining is a simple concept by which we may initialize another promise inside our `.then()` method and accordingly we may execute our results.

__Syntax__:
```js
new Promise((resolve, reject) => {
  // initial Promise
  setTimeout(() => {
    resolve(1);
  }, 1000);
})
  // 1st .then handler
  .then((result) => {
    console.log(result); // -> 1 (1*1)
    return result * 2;
  })
  // 2nd .then handler
  .then((result) => {
    console.log(result); // -> 2 (1*2)
    return result * 2;
  })
  // 3rd .then handler
  .then((result) => {
    console.log(result); // -> 4 (2*2)
    return result * 2;
  })
  .catch(() => {
    console.log("Failure");
  });
```
The idea here is that the result is passed through the chain of `.then` handlers.

The flow looks something like this:
  1. The __initial__ Promise resolves in 1 second,
  2. Then the __1st__ `.then` handler is called.
  3. The value that it returns is passed to the __2nd__ `.then` handler
  4. ...and so on and so forth.

This whole thing works because a call to `promise.then` returns a promise, so that we can call the next `.then` on it.

When a handler returns a value, it becomes the result of that promise, so the next `.then` is called with it.

This method also allows use to only need one `.catch`.

__Example__: Fake Http Request Function
```js
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users" : [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Esmerelda" }
        ],
        "/users/1" : {
          id        : 1,
          username  : "Bilbo",
          upvotes   : 360,
          city      : "Lisbon",
          topPostId : 454321
        },
        "/users/5" : {
          id       : 5,
          username : "Esmerelda",
          upvotes  : 571,
          city     : "Honolulu"
        },
        "/posts/454321" : {
          id       : 454321,
          title    : "Ladies & Gentlemen, may I introduce my pet pig, Hamlet"
        },
        "/about"   : "This is the about page!"
      };

      const data = pages[url];
      if (data) {
        resolve({ status: 200, data }); // resolve with a value!
      } else {
        reject({ status: 404 }); // reject with a value!
      }
    }, 1000);
  });
};

// 1st request getting all users which gave us an ID we could use.
fakeRequest("/users")
  .then((resolve) => {
    console.log(resolve); // -> /users info
    const id = resolve.data[0].id;
    // 2nd request dependent on the data we got back from the 1st request using the ID we got from the 1st request.
    fakeRequest(`/users/${id}`).then((resolve) => {
      console.log(resolve); // -> /users/1 info
      const topPost = resolve.data.topPostId;
      // 3rd request with the new topPostId data we got back from the 2nd request.
      fakeRequest(`/posts/${topPost}`).then((resolve) => {
        console.log(resolve); // -> /posts/454321 info
      });
    });
  })
  // ** this catch error only works for fakeRequest("/users")
  .catch((error) => {
	  console.log("Error!!!", error);
  });
```
We can refactor the above code:

> Note: if we call a `.then()` and return a promise, we can call `.then` again immediately on the same level. We don't have to nest, we can just continue to chain them on.

```js
// Promise 1
fakeRequest("/users")
  // this only runs if fakeRequest("/users") is resolved...
  .then((resolve) => {
    const id = resolve.data[0].id;
    // Promise 2
    return fakeRequest(`/users/${id}`);
  })
  // this only runs if fakeRequest(`/users/${id}`) is resolved...
  .then((resolve) => {
    const topPost = resolve.data.topPostId;
    // Promise 3
    return fakeRequest(`/posts/${topPost}`);
  })
  // this only runs if fakeRequest(`/posts/${topPost}`) is resolved...
  .then((resolve) => {
    console.log(resolve);
  })
  // with this method we only need one .catch()
  .catch((error) => {
    console.log("Error!!!", error);
  });
```

**[⬆ Top](#table-of-contents)**

----

### Requests
Requests are used to send or receive data from a server side resource. Some ways we can achieve this are:
  * [XMLHttp](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) - Old school method
  * [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - Modern new school method
  * [Axios](https://github.com/axios/axios) - Popular library for making requests

#### AJAX or AJAJ
  * Asynchronous
  * JavaScript
  * And
  * XML / JSON
    * XML and JSON are both ways of formatting data. This way we can send the data from one server to another server or a server to a browser.

### XML (Extensible Markup Language)
XML Looks very similar to html except the element names are very different. They're not actual elements. It's a way of grouping content and adding meaning to the data.

XML documents must contain one `root` element that is the `parent` of all other elements:

__Syntax__:
```xml
<root>
  <child>
    <subchild>...</subchild>
  </child>
</root> 
```
In this example `<note>` is the root element:

__Example__:
```xml
<!-- This is a comment -->
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Katie</to>
  <from>Ryan</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note> 
```

### JSON (Javascript Object Notation)
JSON is a lightweight format for storing and transporting (exchanging) data. It is often used when data is sent from a server to a web page. 

The JSON format is syntactically identical to the code for creating JavaScript objects. Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects.

> The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

__JSON Syntax Rules__:
  * Data is in name/value pairs
  * Data is separated by commas
  * Curly braces hold objects
  * Square brackets hold arrays

__JSON Object Example__:
```json
{ 
  "color" : "Purple", 
  "id" : "210", 
  "composition" : {
    "R" : 70,
    "G" : 39,
    "B" : 89
  }
}
```

__JSON Array Example__:
```json
{
  "colors" : 
  [
    { 
      "color" : "Purple", 
      "id" : "210"
    },
    { 
      "color" : "Blue", 
      "id" : "211"
    },
    { 
      "color" : "Black", 
      "id" : "212"
    }
  ]
}
```

__Example:__ Fetching a local JSON file
```js
// function: fetch our json file
const fetchJSON = (file) => {
  fetch(file)
    .then((response) => {
      // error checking
      if (response.status !== 200) {
        console.log("Problem:", response.status);
        return;
      }

      // Examine the text in the response
      response.json().then((data) => console.log(data));
    })
    .catch((err) => console.log("Error:", err));
};
fetchJSON("/some.json");
```

**[⬆ Top](#table-of-contents)**

----

### Fetch
* [Fetch: Chrome Dev](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)

`fetch()` allows you to make network requests similar to XMLHttpRequest (XHR). The main difference is that the Fetch API uses `Promises`, which enables a simpler and cleaner API, avoiding callback hell and having to remember the complex API of XMLHttpRequest.

Let's start by comparing a simple example implemented with an `XMLHttpRequest` and then with `fetch`. All we're doing is requesting a URL, getting a response and parsing it as JSON.

__XMLHttpRequest Example__:

An `XMLHttpRequest` would need two listeners to be set to handle the success and error cases and a call to `open()` and `send()`.

```js
const myReq = new XMLHttpRequest();

function reqListener() {
  const data = JSON.parse(this.responseText);
  console.log(data);
}

function reqError(err) {
  console.log('Error!:', err);
}

myReq.onload = reqListener;
myReq.onerror = reqError;
myReq.open('get', './api/some.json', true);
myReq.send();
```

__Fetch Example__:

Our fetch request looks like this:

```js
fetch('./api/some.json')
  .then((response) => {
    if (response.status !== 200) {
      console.log('Problem:', response.status);
      return;
    }

    // Examine the text in the response
    response.json().then((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log('Error:', err);
  });
```

> Note: the .json() method takes a response stream and reads it to completion. The only downside to this method is it takes time (it's asynchronous).

We start by checking that the response status is 200 before parsing the response as JSON.

The response of a `fetch()` request is a [Stream](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) object, which means that when we call the `json()` method, a Promise is returned since the reading of the stream will happen asynchronously.

### Chaining Fetch Promises
One of the great features of promises is the ability to chain them together. For fetch, this allows you to share logic across fetch requests.

If you are working with a JSON API, you'll need to check the status and parse the JSON for each response. 

For this example we will be using the [SWAPI](https://swapi.dev/) API:
```js
fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    if (response.status !== 200)
      throw new Error(`Status Code Error: ${response.status}`);

    // we return response.json() in order to chain the next .then()
    return response.json();
  })
  .then((data) => {
    // we save the new url we got back to a variable to re-use
    const filmURL = data.results[0].films[0];
    console.log(filmURL); // -> http://swapi.dev/api/films/1/

    // since it is a promise we can return the fetch
    return fetch(filmURL);
  })
  // we can then chain another .then() since we returned the fetch from the previous promise
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`Status Code: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    const filmTitle = data.title;
    console.log(`Fetched first film, based off of the first planet: ${filmTitle}`); // -> Fetched first film , based off of the first planet: A New Hope
  })
  .catch((err) => {
    console.log('Request failed', err);
  });
```

Since we don't want to repeat ourselves (DRY) and we seem to be repeating our logic with .then(response) and .then(data) we can create standalone functions for these actions:

```js
// function that check's the status and parses the json
const checkStatusAndParse = (response) => {
  if (response.status !== 200) {
    throw new Error(`Status Code: ${response.status}`);
  }

  return response.json();
};

// function that prints planet names
const printPlanets = (data) => {
  console.log("Loaded 10 more planets...");

  for (let planet of data.results) {
    console.log(planet.name);
  }

  // we resolve with "data.next" because the "fetchNextPlanets" function expects a url as a parameter
  return Promise.resolve(data.next);
};

// function that fetches more planets 
// fetch next planets is expecting a url as the parameter ("printPlanets" returns "data.next" which is a URL)
const fetchNextPlanets = (url) => {
  return fetch(url);
};

fetch("https://swapi.dev/api/planets/")
  // 1st page of planets (10)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  // 2nd page of planets (10)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  // 3rd page of planets (10)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((err) => {
    console.log('Request failed', err);
  });
```

### Async Functions
Async functions are a nice, clean and easy syntax for working with promises. If the function returns a value, the promise will be resolved with that value. If the function throws an exception, the promise will be rejected.

__Syntax__:
```js
async function name([param[, param[, ...param]]]) {
  // Code to execute
}
```

When we put an `async` in front of a function it's now going to behave differently. It will now return a `Promise`. So even though we don't call `new Promise()` or explicitly say to return a `Promise`, it will:

```js
async function hello() {
  return "Hey guys!";
}
hello();
// -> Promise { <state>: "fulfilled", <value>: "Hey guys!" }

async function uhOh() {
  throw new Error("Oh no!");
}
uhOh();
// -> Promise { <state>: "rejected", <reason>: Error }
```

Here we can see this in action by examining the difference between a standard function and an async function:
```js
// standard function
function greet() {
  return "Hello!";
}
greet(); // -> Hello!

// async function
async function greet() {
  return "Hello!";
}
greet(); // -> Promise { <state>: "fulfilled", <value>: "Hello!" }
```

Now, let's take a look at a more realistic example. Let's create a function called `add()` that, you guessed it, adds two numbers together. To see the power of `async`, inside the function let's add some logic that check's to see if the parameters given to the `add()` function are numbers. 
```js
async function add(x, y) {
	
  if (typeof x !== "number" || typeof y !== "number") {
    throw "X and Y must both be numbers!";
  }

  return x + y;
}

add(5, "r")
  .then((val) => {
    console.log("Promise resolved with: ", val);
  })
  .catch((err) => {
    console.log("Promise rejected with: ", err);
  });
// -> Promise rejected with: X and Y must both be numbers!
```

For comparison reasons let's re-write the above example as a standard `Promise`:
```js
function add(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number" || typeof y !== "number") {
      reject("X and Y must both be numbers!");
    }
    resolve(x + y);
  });
}

add(5, 10)
  .then((val) => {
    console.log("Promise resolved with: ", val);
  })
  .catch((err) => {
    console.log("Promise rejected with: ", err);
  });
// -> Promise resolved with: 15
```
As you can see using `async` functions is a much cleaner and simpler method when creating a function that returns a `Promise`.

### Await
We can only use the `await` operator inside of functions declared with `async`. Await will pause the execution of the function, waiting for a Promise to be resolved.

__Syntax__:
```js
async function funcName() {
  // our created promise
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!"), 1000;
    });
  });

  let result = await promise; // (*)
  console.log(result); // -> "Promise resolved!"
}
funcName();
```

The function execution “pauses” at the line with (*) and resumes when the promise settles, with `result` becoming its result. So the code above outputs `Promise resolved!` in one second.

Let’s emphasize: `await` literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

> Note: `await` cannot be used in regular functions. They must be `async` functions.

__Syntax Example__: Async Github API Call
```js
async function getGithubUser() {
  let response = await fetch("https://api.github/users/ryan-neil");

  let userData = await response.json();

  console.log(userData); // -> Object { user data }
  console.log(userData.name); // -> "Ryan Neil"
}

getGithubUser().catch((err) => {
  console.log("Request error!", err);
});
```
We can just chain on a `.catch()` to the `getGithubUser()` function call to catch the errors.

The `.catch()` method is useful when we have multiple Promises being run.

Now, let's compare that to an example using a standard (non-asynchronous) function call:

__Syntax Example__: Standard Github API Call
```js
function getGithubUser() {
  fetch("https://api.github.com/users/ryan-neil")
    .then((response) => {
      if (response.status !== 200)
        throw new Error(`Status Code Error: ${response.status}`);

      return response.json();
    })
    .then((data) => {
      let userData = data;

      console.log(userData); // -> Object { user data }
      console.log(userData.name); // -> "Ryan Neil"
    })
    .catch((err) => {
      console.log("Request failed", err);
    });
}

getGithubUser();
```
As we can see with `async` and `await` functions we no longer need to chain on the `.then()`'s. This allows our code to remain clean and concise.

### Chaining Multiple Awaits
We can chain multiple `await`'s quite easily. With the `async`/`await` method we don't need all the `.then()`'s and unnecessary callbacks.

Let's look at a previous example back from our `Promises` section and refactor it using the `async`/`await` method:

```js
const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;

      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};
```

The above `moveX()` function accepts an `element`, a pixel `amount` for each movement to the right, and a timed `delay` between each movement. Inside we have a `Promise` that checks if the `element` has gone beyond the screen width.

Below we will see how we can call our `moveX()` function the standard way and then asynchronously.

__Method 1__: Standard `Promise` chaining

```js
const btn = document.querySelector("button");

moveX(btn, 200, 1000)
  .then(() => moveX(btn, 200, 1000))
  .then(() => moveX(btn, 200, 1000))
  .then(() => moveX(btn, 200, 1000))
  .catch((err) => {
    console.log("You've reached the end!", err);
  });
```

__Method 2__: `async`/`await` `Promise` chaining

```js
const btn = document.querySelector("button");

// we must create the async function in order to use "await"
async function animateRight(element, amount, delay) {
  await moveX(element, amount, delay); // this returns a Promise so we can "await" it
  await moveX(element, amount, delay);
  await moveX(element, amount, delay);
}

animateRight(btn, 200, 1000)
  .catch((err) => {
    console.log("You've reached the end!", err);
  });
```

### Parallel and Sequential Await Requests
Generally, if we don't need the requests to happen in sequence, use Parallel requests. __Parallel__ requests are much more performant (faster) than __Sequential__ requests.

__Method 1__: Sequential Requests
```js
async function startingPokemon() {
  const starterPoke1 = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const starterPoke2 = await fetch("https://pokeapi.co/api/v2/pokemon/4");
  const starterPoke3 = await fetch("https://pokeapi.co/api/v2/pokemon/7");

  const pokeData1 = await starterPoke1.json();
  const pokeData2 = await starterPoke2.json();
  const pokeData3 = await starterPoke3.json();

  console.log(pokeData1.name); // -> bulbasaur
  console.log(pokeData2.name); // -> charmander
  console.log(pokeData3.name); // -> squirtle
}

startingPokemon();
```

__Method 2__: Parallel Requests
```js
async function startingPokemon() {
  const starterPoke1 = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const starterPoke2 = await fetch("https://pokeapi.co/api/v2/pokemon/4");
  const starterPoke3 = await fetch("https://pokeapi.co/api/v2/pokemon/7");

  const pokeData1 = await starterPoke1.json();
  const pokeData2 = await starterPoke2.json();
  const pokeData3 = await starterPoke3.json();

  const prom1 = await pokeData1;
  const prom2 = await pokeData2;
  const prom3 = await pokeData3;

  console.log(prom1.name); // -> bulbasaur
  console.log(prom2.name); // -> charmander
  console.log(prom3.name); // -> squirtle
}

startingPokemon();
```

### Promise.all
The `Promise.all()` method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. 

This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. 

It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.

__Syntax__:
```js
Promise.all(iterable);
```

This method can be useful for aggregating the results of multiple promises. It is typically used when there are multiple related asynchronous tasks that the overall code relies on to work successfully — all of whom we want to fulfill before the code execution continues.

__Example__:
```js
async function startingPokemon() {
  const starterPoke1 = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const starterPoke2 = await fetch("https://pokeapi.co/api/v2/pokemon/4");
  const starterPoke3 = await fetch("https://pokeapi.co/api/v2/pokemon/7");

  const pokeData1 = await starterPoke1.json();
  const pokeData2 = await starterPoke2.json();
  const pokeData3 = await starterPoke3.json();

  const prom1 = await pokeData1;
  const prom2 = await pokeData2;
  const prom3 = await pokeData3;

  const allPromises = await Promise.all([
    prom1,
    prom2,
    prom3
  ]);

  printPokemonNames(allPromises);
}

const printPokemonNames = (allPromises) => {
  for (let pokemon of allPromises) {
    console.log(pokemon.name);
  }
};

startingPokemon();
// -> bulbasaur
// -> charmander
// -> squirtle
```

**[⬆ Top](#table-of-contents)**

----

### Object Oriented Programming

* [OOP Explained](https://www.educative.io/blog/object-oriented-programming)

### What is Object Oriented Programming?

Alright, we got a big one here...maybe grab a cup of coffee.

Object Oriented programming (OOP) is a programming paradigm that relies on the concept of __classes__ and __objects__. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.

A __class__ is an abstract blueprint used to create more specific, concrete objects. Classes often represent broad categories, like `Car` or `Dog` that share __attributes__. These classes define what attributes an instance of this type will have, like `color`, `brand` or `model`, but not the value of those attributes for a specific object.

Classes can also contain functions, called `methods` available only to objects of that type. These functions are defined within the class and perform some action helpful to that specific type of object, like `start()` or `stop()`.

Class templates are used as a blueprint to create individual objects. These represent specific examples of the abstract class, like `ryansCar` or `katiesCar`. Each object can have unique values to the properties defined in the class.

For example, say we created a class, `Car`, to contain all the properties a car must have, `color`, `brand`, and `model`. We then create an instance of a `Car` type object, `ryansCar` to represent Ryan's specific car.

We could then set the value of the properties defined in the class to describe Ryan's specific car, without affecting other objects or the class template. We could then reuse this class to represent any number of cars.

Let's visualize this below:

<img src="/assets/oop-diagram-01.png" width="800" alt="Object Oriented Programming Diagram 1">

__So what's so great about OOP? What are it's benefits?__

  * OOP models complex things as reproducible, simple structures
  * Reusable, OOP objects can be used across programs
  * Allows for class-specific behavior through polymorphism
  * Easier to debug, classes often contain all applicable information to them
  * Secure, protects information through encapsulation

### Structuring OOP Programs

Let's look at a real world problem, and conceptually design an OOP software program.

Imagine running a car rental company, with hundreds of different cars, and you have to to keep track of the color, brand, model, type, days rented, etc. for each car. How could we design simple, reusable software to model the cars?

With hundreds of cars, it would be inefficient to write unique code for each car. Below we see what that might look like with objects `ryansCar` and `katiesCar`.

```js
// Object of one car
let ryansCar = {
  color      : "red",
  brand      : "toyota",
  model      : "4runner",
  type       : "suv",
  daysRented : 10,
  start = function() {
    return console.log("Start the car!");
  },
  stop = function() {
    return console.log("Stop the car!");
  }
};

// Object of second car
let katiesCar = {
  color      : "blue",
  brand      : "volkswagon",
  model      : "tiguan",
  type       : "suv",
  daysRented : 7,
  start = function() {
    return console.log("Start the car!");
  },
  stop = function() {
    return console.log("Stop the car!");
  }
};
```
As we can see above, there is a lot of duplicated code between both objects. The `start()` and `stop()` function appears in each object. Since we're capturing the same information for each car, we can use objects and classes instead.

In the car rental example, here's how a programmer could think about organizing an OOP:

  1. __Create a parent class for all cars__ as a blueprint of information and behaviors (methods) that all cars will have, regardless of color, model, etc.
  2. __Create child classes__ to represent different subcategories of car under the generic parent blueprint.
  3. __Add unique attributes and behaviors__ to the child classes to represent differences.
  4. __Create objects from the child class__ that represent cars within that subgroup.

The diagram below represents how to design an OOP program: grouping the related data and behaviors together to form a simple template then creating subgroups for specialized data and behavior.

The `Car` class is a generic template, containing only the structure about data and behaviors common to all cars.

We then create two child classes of `Car`, `LargeCar` and `SmallCar`. These have the inherited behaviors of `Car` (`start()`, `stop()`) but also have unique characteristics to cars of that subtype.

Finally, we create objects of the `LargeCar` and `SmallCar` type to represent the individual cars `ryansCar` and `katiesCar`.

<img src="/assets/oop-diagram-02.png" width="800" alt="Object Oriented Programming Diagram 2">

### The Building Blocks of OOP

Next, let's take a deeper dive into the fundamental building blocks of the OOP program used above.

  * Class
  * Objects
  * Methods
  * Attributes

__Classes:__

In a nutshell, classes are essentially __user defined data types__. Classes are where we create a blueprint for the structure of methods and attributes. Individual objects are instantiated, or created from this blueprint.

Classes contain fields for attributes, and methods for behaviors. In our `Car` class example, attributes include `model` & `brand`, while methods include `start()` and `stop()`.

Let's look at an example demonstrating how to program a `Car` class with JavaScript:

```js
class Car {
  constructor(color, brand, type) {
    this.color = color;
    this.brand = brand;
    this.type = type;
  }

  start() {
    return console.log("Start the car!");
  }

  stop() {
    return console.log("Stop the car!");
  }
}
```

Remember the class is a template for modeling a car, and an object is instantiated from the class representing an individual real world thing.

__Objects:__

Objects are __instances of classes__ created with specific data, for example in the code snippet below `katiesCar` is an instance of the `Car` class.

```js
class Car {
  constructor(color, brand, type) {
    this.color = color;
    this.brand = brand;
    this.type = type;
  }

  start() {
    return console.log("Start the car!");
  }

  stop() {
    return console.log("Stop the car!");
  }
}

// our new object
const katiesCar = new Car("blue", "tiguan", "suv")
```

When we call the new class `Car`:
  * A new object is created named `katiesCar`.
  * The constructor runs `color`, `brand`, and `type` arguments, and assigns values.

__Attributes:__

Attributes are the information that is stored. Attributes are defined in the `Class` template. When objects are instantiated individual objects contain data stored in the Attributes field.

The state of an object is defined by the data in the object’s attributes fields. For example, maybe this is a bit of a stretch, but an electric car and a standard car might be treated differently at the rental car company. The miles per gallon attribute could define the state of an object, and allow the software to handle cars of different miles per gallon differently.

__Methods:__

Methods represent behaviors. Methods perform actions; methods might return information about an object, or update an object’s data. The method’s code is defined in the class definition.

When individual objects are instantiated, these objects can call the methods defined in the class. In the code snippet below, the `start()` method is defined in `Car` class, and the `start()` method is called on the `katiesCar` object.

```js
class Car {
  constructor(color, brand, type) {
    this.color = color;
    this.brand = brand;
    this.type = type;
  }

  start() {
    return console.log("Start the car!");
  }

  stop() {
    return console.log("Stop the car!");
  }
  
  _milesPerDay = 0;

  updateMilesPerDay() {
    this._milesPerDay++;
  }
}

const katiesCar = new Car("blue", "tiguan", "suv")
katiesCar.start(); // -> "Start the car!"
```

Methods often modify, update or delete data. Methods don’t have to update data though. For example the `start()` method doesn’t update any data because starting the car doesn’t modify any of the attributes of the `Car` class: `color`, `brand`, `type`.

Let's say our car rental company charges our customers per mile. The `updateMilesPerDay()` method updates the `Car`'s total miles driven by the customer. The miles per day attribute is important to keep track of for billing customers at the end of their trips.

Methods are how programmers promote reusability, and keep functionality encapsulated inside an object. This reusability is a great benefit when debugging. If there’s an error, there’s only one place to find it and fix it instead of many.

The underscore in `_milesPerDay` denotes that the variable is protected, and shouldn’t be modified directly. The `updateMilesPerDay()` method is used to change `_milesPerDay`.

### The Four Pillars (Principles) of OOP

  * __Inheritance:__ child classes inherit data and behaviors from parent class.
  * __Encapsulation:__ containing information in an object, exposing only selected information.
  * __Abstraction:__ only exposing high level public methods for accessing an object.
  * __Polymorphism:__ _poly_, meaning "many" and _morph_, meaning "forms". Polymorphism is when many methods can do the same task.

### Inheritance

Inheritance allows classes to inherit features of other classes. Put another way, parent classes extend attributes and behaviors to child classes. __Inheritance supports reusability__.

If basic attributes and behaviors are defined in a parent class, child classes can be created extending the functionality of the parent class, and adding additional attributes and behaviors.

For example, large cars have the unique ability to hold 8 passengers. In other words, all large cars are cars, but not all cars are large cars. We represent this difference by creating a child class `LargeCar` from the parent class `Car`, and then add the unique `seatEight()` behavior.

The benefits of inheritance are programs can create a generic parent class, and then create more specific child classes as needed. This simplifies overall programming, because instead of recreating the structure of the `Car` class multiple times, __child classes automatically gain access to functionalities within their parent class__.

In the example below, the child class `LargeCar` inherits the methods `start()` and `stop()` from the parent class `Car`, and the child class adds an additional method, `seatEight()`.

```js
class Car {
  constructor(color, brand, type) {
    this.color = color;
    this.brand = brand;
    this.type = type;
  }

  start() {
    return console.log("Start the car!");
  }

  stop() {
    return console.log("Stop the car!");
  }

  _milesPerDay = 0;

  updateMilesPerDay() {
    this._milesPerDay++;
  }
}

class LargeCar extends Car {
  constructor(color, brand, type, seats) {
    super(color, brand, type);
    this.seats = seats;
  }

  seatEight() {
    return console.log("Eight people can get in!");
  }
}

const katiesLargeCar = new LargeCar("blue", "tiguan", "suv", 8);
katiesLargeCar.start(); // -> "Start the car!"
katiesLargeCar.seatEight(); // -> "Eight people can get in!"
```

Notice that the `LargeCar` class does not have a copy of the `start()` method, it inherits the `start()` method defined in the parent `Car` class.

When the code calls `katiesLargeCar.start()` method, the `start()` method walks up the chain of child to parent classes, to find where the `start()` method is defined.

> Note: Parent class is also known as super class, or base class. Child class can also be called derived class, or extended class.

In JavaScript, inheritance is also known as __prototyping__. A prototype object acts as a template for another object to inherit properties and behaviors from. There can be multiple prototype object templates, creating a prototype chain.

### Encapsulation

The notion of __encapsulation__ refers to the bundling of data, along with the methods that operate on that data, into a single unit. Many programming languages use __encapsulation__ frequently in the form of __classes__.

Encapsulation means containing all important information __inside an object__, and only exposing selected information to the outside world. Attributes and behaviors are defined by code inside the class template.

Then, when an object is instantiated from the class, the data and methods are encapsulated in that object. Encapsulation hides the internal software code implementation inside a class, and hides internal data of inside objects.

Encapsulation requires defining some fields as private and some as public.
  * __Private/ Internal interface__: methods and properties, accessible from other methods of the same class.
  * __Public / External Interface__: methods and properties, accessible also from outside the class.

Let's continue our theme and use a car as a metaphor for encapsulation. The information the car shares with the outside world, using blinkers to indicate turns, are __public interfaces__. When you’re driving a car down the road, other drivers require information to make decisions, like whether you’re turning left or right.

In contrast, private data like the engine temperature and current gas level are __private interfaces__ and would just confuse other drivers.

<img src="/assets/oop-encapsulation-diagram.png" width="800" alt="Object Oriented Programming Encapsulation Diagram">

Encapsulation adds __security__. Attributes and methods can be set to private, so they can’t be accessed outside the class. To get information about data in an object, public methods & properties are used to access or update that data.

Within classes, most programming languages have public, protected, and private sections. __Public__ is the limited selection of methods available to the outside world, or other classes within the program. __Protected__ is only accessible to child classes. __Private__ code can only be accessed from within that class.

Let's go back to our rental car company example, encapsulation is ideal so customers can't access private information about other customer's cars.

> Note: JavaScript has private and protected properties and methods. Protected Fields are prefixed with a `_` ; private fields are prefixed with a `#`. Protected fields are inherited, private ones aren’t.

In the example below, the `calcPrice()` calculation details are hidden inside the `Car` class. The `katiesCar` object uses the `getPrice()` method to calculate `katiesCar`'s price.

```js
class Car {
  constructor(color, brand, type, days) {
    this.color = color;
    this.brand = brand;
    this.type = type;
    this.days = days;
  }

  // Declare protected (private) fields
  _milesPerDay = 0;

  updateMilesPerDay() {
    this._milesPerDay++;
  }

  calcPrice() {
    // calculate price by using number of days customer is renting the car and projected miles per day to be driven
    return this.days * this._milesPerDay;
  }

  getPrice() {
    // getter method
    return this.calcPrice();
  }
}

// instantiate a new instance of Car class, an individual car named katiesCar
const katiesCar = new Car("blue", "tiguan", "suv", 7);

// use getter method to calculate katiesCars' price
katiesCar.getPrice();
```

__Encapsulating and updating data:__ Since methods can also update an object's data, the developer controls what value can be changed through public methods. This allows us to __hide important information__ that should not be changed from both phishing and the more likely scenario of other developers mistakenly changing important data.

Encapsulation adds security to code and makes it easier to collaborate with external developers. When you're programming to share information with an external company, you wouldn't want to expose the classes' templates or private data because your company owns that intellectual property.

Instead, developers create public methods that allow other developers to call methods on an object. Ideally, these public methods come with documentation for the external developers.

Encapsulation summary:
  * __Adds security:__ Only public methods and attributes are accessible from the outside.
  * __Protects against common mistakes:__ Only public fields and methods accessible, so developers don't accidentally change something dangerous.
  * __Protects IP:__ Code is hidden in a class, only public methods are accessible by the outside developers.
  * __Supportable:__ Most code undergoes updates and improvements.
  * __Hides complexity:__ No one can see what's behind the objects curtain.

### Abstraction

> ___Abstraction__ — creating a simple model of a more complex thing, which represents its most important aspects in a way that is easy to work with for our program's purposes._

Abstraction means that the user interacts with only selected attributes and methods of an object. Abstraction uses simplified, high level tools, to access a complex object.

The main take away's for abstraction are:
  * Using simple things to represent complexity.
  * Hide complex details from the user.

Abstraction is an extension of encapsulation. For example, you don't have to know all the details of how the motor works to drive the car. A driver only uses a small selection of tools: like gas pedal, brake, steering wheel, blinker, etc. The engineering is hidden from the driver.

To make a car work, a lot of pieces have to work under the hood (literally), but exposing that information to the driver would be extremely confusing and just dangerous.

<img src="/assets/oop-abstraction-diagram.png" width="800" alt="Object Oriented Programming Abstraction Diagram">

Abstraction also serves an important security role. By only displaying selected pieces of data, and only allowing data to be __accessed through classes__ and __modified through methods__, we protect the data from exposure. To continue with our car example again, you wouldn't want an open gas tank while driving a car.

Abstraction summary:
  * Simple, high level user interfaces.
  * Complex code is hidden.
  * Security.
  * Easier software maintenance.
  * Code updates rarely change abstraction.

### Polymorphism

Polymorphism means to design objects so that they can __share behaviors__. Using inheritance, objects can override shared parent behaviors, with specific child behaviors. Polymorphism allows the same method to execute different behaviors in two ways: __method overriding__ and __method overloading__.

__Method Overriding__

Runtime polymorphism uses method overriding. In method overriding, a child class can provide a different implementation than its parent class. In our car example, we may want to give `LargeCar` a specific type of `start()` different than the generic `Car` class.

```js
class Car {
  constructor(color, brand, type) {
    this.color = color;
    this.brand = brand;
    this.type = type;
  }

  start() {
    return console.log("Start the car!");
  }

  stop() {
    return console.log("Stop the car!");
  }

  _milesPerDay = 0;

  updateMilesPerDay() {
    this._milesPerDay++;
  }
}

class LargeCar extends Car {
  constructor(color, brand, type, seats) {
    super(color, brand, type);
    this.seats = seats;
  }

  seatEight() {
    return console.log("Eight people can get in!");
  }

  // this method will override the parent start() method
  start() {
    return console.log("This car has a push to start!");
  }
}

const katiesLargeCar = new LargeCar("blue", "tiguan", "suv", 8);
katiesLargeCar.start(); // -> "This car has a push to start!"
```

Method overriding could create a `start()` method in the child `LargeCar` class that overrides the `start()` method in the parent `Car` class.

__Method Overriding__

__Compile Time polymorphism__ uses method overloading. Methods or functions may have the same name, but a different number of parameters passed into the method call. Different results may occur depending on the number of parameters passed in.

In the code example below, if no parameters are passed into the `updateMilesPerDay()` method. One miles is added to the count. If a parameter is passed in `updateMilesPerDay(25)`, then 25 is passed into the `miles` parameter in `updateMilesPerDay(miles)`, and 25 miles are added to the count.

```js
class Car {
  constructor(color, brand, type) {
    this.color = color;
    this.brand = brand;
    this.type = type;
  }

  start() {
    return console.log("Start the car!");
  }

  stop() {
    return console.log("Stop the car!");
  }

  _milesPerDay = 0;

  updateMilesPerDay() {
    this._milesPerDay++;
  }

  updateMilesPerDay(miles) {
    this._milesPerDay = this._milesPerDay + miles;
    return miles;
  }
}

const katiesCar = new Car("blue", "tiguan", "suv");
katiesCar.updateMilesPerDay(); // -> milesPerDay = 0
katiesCar.updateMilesPerDay(25); // -> milesPerDay = 25
```

The benefits of Polymorphism are:
  * Objects of different types can be passed through the same interface
  * Method overriding
  * Method overloading

### OOP Conclusion

Object Oriented programming requires thinking about the structure of the program and planning at the beginning of coding. Looking at how to break up the requirements into simple, reusable classes that can be used to blueprint instances of objects. Overall, implementing OOP allows for better data structures and reusability, saving time in the long run.

**[⬆ Top](#table-of-contents)**

----

### Object Oriented Programming with JavaScript

* [OOP for JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)

### Constructor Functions
Constructor functions technically are regular functions. There are two conventions though:
  1. They are named with capital letter first.
  2. They should be executed only with "`new`" operator.

__Example__:
```js
class User(name) {
  this.name = name;
  this.isAdmin = false;
}

const user1 = new User("Katie");
console.log(user1.name); // -> Katie
console.log(user1.isAdmin); // -> false
```

### The "new" Operator
The `new` operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

When a function is executed with `new`, it does the following steps:
  1. A new empty object is created and assigned to `this`.
  2. The function body executes. Usually it modifies `this`, adds new properties to it.
  3. The value of `this` is returned.

In other words, at run time `new User(...)` looks something like this:
```js
function User(name) {
  // this = {}; (* 1) (implicitly creates an object)

  // (* 2) (add properties to "this")
  this.name = name;
  this.isAdmin = false;

  // return this; (* 3) (implicitly returns "this")
}
```
So `const user1 = new User("Katie")` gives the same result as:
```js
const user1 = {
  name: "Katie",
  isAdmin: false
};
```
This method allows us to create other "users" very easily. All we need to do is call:
```js
const user2 = new User("Ryan");
const user3 = new User("Kevin");
```
Much easier to read and shorter than using literals every time. That’s the main purpose of constructors – to implement reusable object creation code.

> Note: technically, any function can be used as a constructor. That is: any function can be run with new, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.

### Classes in Javascript
Classes in JavaScript are syntactic "sugar" for the `new` operator. It is a cleaner and more concise way of creating `new` objects.

The main benefits for this are:
  * We don't have to add methods to the prototype object manually (Color.prototype.rgb).
  * We don't have to have to break up the constructor function and then separately add methods.

__Demo Syntax:__
```js
class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
}
```

> Note: An important difference between function declarations and class declarations is that __class declarations are not hoisted__ and function declarations are. You first need to declare your class and then access it.

__Class Expression Syntax:__
```js
// unnamed
const Car = class {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
};
console.log(Car.name); // -> "Car"

// named
const Car = class Car2 {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
};
console.log(Car.name); // -> "Car2"
```

Once we have a class object, we can use the class to create objects:
```js
const car1 = new Car("Toyota", 2006);
const car2 = new Car("Audi", 2015);
```

### Classes Methods
Class methods are created with the same syntax as object methods. We use the keyword `class` to create a class.

Always add a `constructor()` method. Then add any number of methods.

__Example:__
```js
class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  calcAge() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }

  getAge() {
    return this.calcAge();
  }
}

const car1 = new Car("Toyota", 2006);
console.log(`My car is ${car1.getAge()} years old!`); // -> "My car is 15 years old!"
```

### Classes Extends

The `extends` keyword is used in class declarations or class expressions to create a class that is a child of another class.

__Syntax:__
```js
class ChildClass extends ParentClass { ... }
```

Let's look at a very simple cat and dog example of this. In the example below, both cats and dogs eat so we can add the `eat()` method inside the parent class `Pet` and then have the child classes `Cat` and `Dog` access that method from the same parent (`Pet`).
```js
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
	}

  eat() {
    console.log(`${this.name} is eating!`);
  }
}

class Cat extends Pet {
  meow() {
    console.log("Meowww!");
  }
}

const tigerLily = new Cat("Tiger Lily", 1);
tigerLily.eat(); // -> "Tiger Lily is eating!"
tigerLily.meow(); // -> "Meowww!"

class Dog extends Pet {
  bark() {
    console.log("Woof! Woof!");
  }
}

const harley = new Dog("Harley", 8);
harley.eat(); // -> "Harley is eating!"
harley.bark(); // -> "Woof! Woof!"
```
In the example above, we must include `extends Pet` after the class names. By doing this we don't have to include the `constructor` function to `Cat` or `Dog`. The `Cat` and `Dog` classes now both have access to the `eat()` method even though we don't define it on the `Cat` or `Dog` objects. Pretty sweet!

### Classes Super
The `super` keyword is used to access and call functions on an object's parent.

The `super` keyword is always going to reference the class that we are "extending" from. Sometimes we want to rely on the exact same `constructor` from our "super" class (the parent class). From our previous example the "super" was the `Pet` class.

Let's build upon our previous cat and dog example and add some additional information for our `Cat` class, like how many lives the cat has left (we will default to 9):
```js
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
	}

  eat() {
    console.log(`${this.name} is eating!`);
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age); // this is going to reference "name" and "age" from the parent class "Pet"
    this.livesLeft = livesLeft;
  }

  meow() {
    console.log("Meowww!");
  }

  calcLivesLeft() {
    console.log(`${this.name} has died!`);
    return this.livesLeft - 1;
  }

  getLivesLeft() {
    return this.calcLivesLeft();
  }
}

const cat1 = new Cat("Tiger Lily", 1);
console.log(cat1.getLivesLeft()); // -> 8
```

We can take this concept as deep as we want and maybe have `Pet` extend from `Animal` and `Animal` extend from `LivingThing`, etc. An example of this from the web API is `HTMLElement` which extends from 5 or 6 different classes.

**[⬆ Top](#table-of-contents)**

----

### Contributing
Contributions are always welcome! All I ask is that you open an issue and we discuss your proposed changes before you create a pull request.

**[⬆ Top](#table-of-contents)**