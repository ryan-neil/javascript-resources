# JavaScript Resources
![js-gif](https://user-images.githubusercontent.com/59746024/108250339-3946ac80-70fa-11eb-9441-607fce5c3843.gif)

## Introduction
The goal of this document is to provide a quick reference guide for the main features of JavaScript along with simple to understand sample code.

This guide is not intended to teach you the fundamentals of the JavaScript programming language but merely a reference guide to come back to for a quick refresher.

If you found this guide helpful let me know! \
[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/josephskycrest.svg?style=social&label=Follow%20%40josephskycrest)](https://twitter.com/josephskycrest)

## 📂 Repo Folder Structure
`/src/` - contains the source files for the Github repo. \
`/src/js/` - contains all JavaScript component files. \
`/src/js/analysis/` - contains the breakdown of JavaScript coding projects. \
`/src/js/challenges/` - contains some example JavaScript challenges for practice.

## 📌 Repo File Components
1. Arrays
1. Arrow Functions
1. The Basics
1. Callbacks
1. Destructuring
1. The Dom
1. Functions
1. JSON Files
1. Loops
1. Objects
1. Rest
1. Spread
1. "This" Keyword

## 🔗 Resources
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Dev Docs](https://devdocs.io/javascript/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Tutorial Republic - JavaScript](https://www.tutorialrepublic.com/javascript-tutorial/)
- [30 Seconds of Code](https://www.30secondsofcode.org/)
- [Fake API for testing and prototyping (JSON Placeholder)](https://jsonplaceholder.typicode.com/)
- [CSS -> JavaScript](https://css2js.dotenv.dev/)
- [Guide to CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [GitHub Markdown Styling](https://guides.github.com/features/mastering-markdown/)

## 📓 Notes

### Table of Contents

  1. [Commenting](#commenting)
  1. [Naming Conventions](#naming-conventions)
  1. [Properties](#properties)
  1. [Variables](#variables)
  1. [For Loops](#for-loops)
  1. [Math](#math)
  1. [Conditionals](#conditionals)
  1. [Ternary Operator](#ternary-operator)
  1. [Array Methods](#array-methods)
     * [Add/Remove](#addingremoving-elements)
     * [Iterate](#iterating-over-elements)
     * [Search](#searching-among-elements)
     * [Transform](#transforming-the-array)
  1. [Objects](#objects)
  1. [Functions](#functions)
  1. [Destructuring](#destructuring)
  1. [Spread](#spread)
  1. [Rest](#rest)
  1. [This](#this)
  1. [The DOM](#the-document-object-model-dom)

----

### Commenting

We want to use `/** ... */` for multiline comments.

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

Use want to use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it’s on the first line of a block. Start all comments with a space to make it easier to read.

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

> When it come to commenting, don't explain what the code does, explain what the intentions of the code are. Generally, anyone can tell what the code is doing by looking at it, but it can often be impossible to understand why it's being done just by looking at the code alone. \  - Some internet guy

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
We want to use dot notation when accessing properties.

```javascript
const thor = {
  superhero: true,
  age: 1500
};

// bad
const isSuperhero = thor['superhero'];

// good
const isSuperhero = thor.superhero;
```

We want to use bracket notation `[]` when accessing properties with a variable.

```javascript
const thor = {
  superhero: true,
  age: 1500
};

function getProp(prop) {
  return thor[prop];
}

const isSuperhero = getProp('superhero');
```

**[⬆ Top](#table-of-contents)**

----

### Variables

We always want to use `const` or `let` to declare variables. Not doing so will result in global variables. We need to be carful not to muddy up the global namespace.

The `const` keyword works exactly the same as `let`, except that variables declared using `const` cannot be reassigned later in the code.

```javascript
const daysInWeek = 7;

let counter = 1;
let counter = counter + 1; // -> 2
```

**[⬆ Top](#table-of-contents)**

----

### For Loops

#### for:
The __for statement__ creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

Syntax:
```javascript
for ([initialization]; [condition]; [final-expression])
  [statement];
```

Example:
```javascript
const examScores = [ 98, 77, 84, 91 ];

for (let i = 0; i < examScores.length; i++) {
  console.log(examScores[i]);
}
// -> 98, 77, 84, 91
```

#### for..in:
A `for...in` loop only iterates over enumerable, non-Symbol properties. We're returned the indeces rather than the values.

Syntax:
```javascript
for ( [variable] in [iterable] ) {
  [statement];
}
```

Example:
```javascript
let sports = [ 'soccer', 'football', 'basketball', 'baseball' ];

for (let sport in sports) {
  console.log(sport);
}
// -> 0, 1, 2, 3 (these are the string indeces)
```

#### for..of:
`for...of` is an easier way to iterate over arrays (or other iterable objects)

Syntax:
```javascript
for ( [variable] of [iterable] ) {
  [statement];
}
```

Example:
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

Example:
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

> We can remember this by: for "in" for `index` and for "of" would be the `values` of each index/key/item.

**[⬆ Top](#table-of-contents)**

----

### Math
`Math` is a built-in object that has *properties* and *methods* for mathematical constants and functions. It’s not a function object.

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
`Math.random()` times 10 gives us a random decimal number up to 9.999...
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

### Conditionals
Conditional Statements are used for making decisions with code. They can have 3 different pieces, an __if__, an __else if__, and __else__.

`if` = Run the code `if` a given condition is true \
`else if` = if not the first thing, maybe this other thing?? \
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

Example: Password checker

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

Example: Community theater program

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

Example: Online snow cone stand with only 2 flavors (grape and cherry)

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
A shortcut syntax that we can use for certain conditionals. It basically takes an __if__ and an __else__ and turns them into a single line of code. This will only work if there are no __else if__ statements.

Syntax:
```javascript 
condition ? expIfTrue : expIfFalse
```

Example:
```javascript
// New syntax
let status = 'offline';

let color = status === 'offline' ? 'red' : 'green'; // -> 'red'

// Old syntax
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

### Array Methods
This is a collection of the most commonly used ES5 and ES6+ array methods.

#### Adding/Removing Elements:

#### arr.push Method:
The `push()` method __adds__ one or more elements to the __end__ of an array and returns the new length of the array.

Syntax:
```javascript 
arr.push([element1[, ...[, elementN]]])
```

Example:
```javascript
let sports = [ 'soccer', 'baseball' ]

let total = sports.push('football', 'tennis')

console.log(sports) // -> [ 'soccer', 'baseball', 'football', 'tennis' ]
console.log(total) // -> 4
```

#### arr.pop Method:
The `pop()` method __removes__ the __last__ element from an array and returns that element. This method changes the length of the array.

Syntax:
```javascript 
arr.pop()
```

Example:
```javascript
let sports = [ 'soccer', 'baseball', 'football', 'tennis' ];

let result = sports.pop();

console.log(sports); // -> [ "soccer", "baseball", "football" ]
console.log(result); // -> tennis
```

#### arr.unshift Method:
The `unshift()` method __adds__ one or more elements to the __beginning__ of an array and returns the new length of the array.

Syntax:
```javascript 
arr.unshift(element1[, ...[, elementN]])
```

Example:
```javascript
let sports = [ 'soccer', 'baseball', 'football', 'tennis' ];

let result = sports.unshift('rugby', 'basketball');

console.log(sports); // -> [ "rugby", "basketball", "soccer", "baseball", "football", "tennis" ]
console.log(result); // -> 6
```

#### arr.shift Method:
The `shift()` method __removes__ the __first__ element from an array and returns that removed element. This method changes the length of the array.

Syntax:
```javascript 
arr.shift()
```

Example:
```javascript
let sports = [ 'soccer', 'baseball', 'football', 'tennis' ];

let result = sports.shift();

console.log(sports); // -> [ "baseball", "football", "tennis" ]
console.log(result); // -> soccer
```

#### arr.splice Method:
The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

Syntax:
```javascript 
let arrDeletedItems = arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

Example:
```javascript
const months = [ 'Jan', 'March', 'April', 'June' ];
// insert at index 1, replace 0 elements
months.splice(1, 0, 'Feb');

console.log(months); // -> [ "Jan", "Feb", "March", "April", "June" ]

// insert at index 4, replace 1 element (June)
months.splice(4, 1, 'May');

console.log(months); // -> [ "Jan", "Feb", "March", "April", "May" ]
```

#### arr.slice Method:
The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included) where `start` and `end` represent the index of items in that array. The original array will not be modified.

Syntax:
```javascript 
arr.slice()
arr.slice(start)
arr.slice(start, end)
```

Example:
```javascript
let fruits = [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ];
// we cut starting at index 1 and stop at index 3
let citrus = fruits.slice(1, 3);

console.log(fruits); // -> [ "Banana", "Orange", "Lemon", "Apple", "Mango" ]
console.log(citrus); // -> [ "Orange", "Lemon" ]
```

> The difference between `splice` and `slice` is that the `splice()` method returns the removed item(s) in an array and `slice()` method returns the selected element(s) in an array, as a new array object. Also, the `splice()` method changes the original array and `slice()` method doesn’t change the original array. In addition, the `splice()` method can take n number of arguments and `slice()` method takes 2 arguments.

#### Iterating Over Elements:

#### arr.forEach Method:
The `forEach` method executes a provided function once for every element in the array.

Syntax:
```javascript 
arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
```

Example:
```javascript
const testScores = [ 89, 92, 76, 99 ];

testScores.forEach(function(score) {
  console.log(score);
});
// -> 89, 92, 76, 99
```

The equivalent `for loop` for the above example looks like this:

```javascript
const testScores = [ 89, 92, 76, 99 ];

for (let i = 0; i < testScores.length; i++) {
  console.log(testScores[i]);
}
```

The thing you need to keep in mind is that the forEach method does not return any value.

Example:
```javascript
const testScores = [ 89, 92, 76, 99 ];

const returnedValue = testScores.forEach(function(score) {
  return score;
});

console.log('returnedValue: ', returnedValue);
// -> returnedValue: undefined
```

> Note that `forEach` is only used to loop through the array and perform some processing or logging. It does not return any value, even if you explicitly return a value from the callback function (this means that the returned value comes as `undefined` in the above example).

In all the above examples, we have used only the first parameter of the callback function. But the callback function also receives two additional parameters, which are:

* index - the index of the element which is currently being iterated
* array - original array which we're looping over

```javascript
const testScores = [ 89, 92, 76, 99 ];

testScores.forEach(function(scores, index, array) {
  console.log(scores, index, array);
});
// -> 89 0 [89, 92, 76, 99]
// -> 92 1 [89, 92, 76, 99] ... etc.
```

Advantages of using forEach instead of a for loop:
* Using a `forEach` loop makes your code shorter and easier to understand.
* When using a `forEach` loop, we don't need to keep track of how many elements are available in the array. So it avoids the creation of an extra counter variable.
* Using a `forEach` loop makes code easy to debug because there are no extra variables for looping through the array.
* The `forEach` loop automatically stops when all the elements of the array are finished iterating.

#### Searching Among Elements:

#### arr.filter Method:
The `filter` method returns `a new array` with all the elements that satisfy the provided test condition.

The `filter` method takes a callback function as the first argument and executes the callback function for every element of the array. Each array element value is passed as the first parameter to the callback function.

Syntax:
```javascript 
arr.filter(callback(element[, index[, array]])[, thisArg])
```

Example:
```javascript
const students = [
  { name: 'Mike Ewing', age: 21 },
  { name: 'Sally Brady', age: 18 },
  { name: 'Mike Sheridan', age: 19 },
  { name: 'Katie Jane', age: 27 }
];

const student = students.filter(function(student) {
  return student.name.indexOf('Mike') > -1;
});

console.log(student);
// -> { name: "Mike Ewing", age: 21 }
// -> { name: "Mike Sheridan", age: 19 }
```

As can be seen in the above code, using `filter` helps to find all the elements from the array that match the specified test condition.

So using `filter` does not stop when it finds a particular match but keeps checking for other elements in the array that match the condition. Then it returns all the matching elements from the array.

> The main difference between `find` and `filter` is that `find` only returns the first matching element of the array, but using `filter` returns all the matching elements from the array.

Note that the `filter` method always returns an array. If no element passes the test condition, an empty array will be returned.

The equivalent `for loop` for the above example looks like this:

```javascript
const students = [
  { name: 'Mike Ewing', age: 21 },
  { name: 'Sally Brady', age: 18 },
  { name: 'Mike Sheridan', age: 19 },
  { name: 'Katie Jane', age: 27 }
];

let filtered = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].name.indexOf('Mike') > -1) {
    filtered.push(students[i]);
  }
}

console.log(filtered);
// -> { name: "Mike Ewing", age: 21 }
// -> { name: "Mike Sheridan", age: 19 }
```

Advantages of using the filter method:
* It allows us to quickly find all the matching elements from the array.
* It always returns an array even if there is no match, so it avoids writing extra `if` conditions.
* It avoids the need of creating an extra variable to store the filtered elements.

#### arr.find Method:
The `find` method returns the `value` of the `first element` in the array that satisfies the provided test condition.

Syntax:
```javascript 
arr.find(callback(element[, index[, array]])[, thisArg])
```

The `find` method takes a callback function as the first argument and executes the callback function for every element of the array. Each array element value is passed as the first parameter to the callback function.

Example:
```javascript
const students = [
  { name: 'Mike Ewing', age: 21 },
  { name: 'Sally Brady', age: 18 },
  { name: 'Mike Sheridan', age: 19 },
  { name: 'Katie Jane', age: 27 }
];

const student = students.find(function(student) {
  return student.name.indexOf('Mike') > -1;
});

console.log(student); // -> { name: "Mike Ewing", age: 21 }
```

> It's important to note that the find method will stop when it finds the first match.

Advantages of using the find method:
* It allows us to quickly find any element without writing a lot of code.
* It stops looping as soon as it finds a match so there is no need for an extra break statement.

#### arr.findIndex Method:
The `findIndex` method returns the __index__ of the first element in the array __that satisfies the provided test condition__. Otherwise, it returns `-1`, indicating that no element passed the test.

Syntax:
```javascript 
arr.findIndex(callback(element[, index[, array]])[, thisArg])
```

Example:
```javascript
const students = [
  { name: 'Mike Ewing', age: 21 },
  { name: 'Sally Brady', age: 18 },
  { name: 'Mike Sheridan', age: 19 },
  { name: 'Katie Jane', age: 27 }
];

const index = students.findIndex(function(student) {
  return student.name.indexOf('Sally') > -1;
});

console.log(index); // -> 1
```

Here we get the output as __1__ which is the index of the first object with the name `John`. Note that the index starts with zero.

Advantages of using the findIndex method:
* It allows us to quickly find the index of an element without writing a lot of code.
* It stops looping as soon as it finds a match so there is no need for an extra break statement.
* We can find the index using the array `find` method also, but using `findIndex` makes it easy and avoids creating extra variables to store the index.

#### arr.every Method:
The `every` method tests whether all elements in the array pass the provided test conditions and returns a boolean `true` or `false` value.

Syntax:
```javascript 
arr.every(callback(element[, index[, array]])[, thisArg])
```

Suppose we have an array of numbers and we want to check if every element of the array is a positive number. We can use the `every` method to achieve it.

```javascript
let numbers = [ 10, -30, 20, 50 ];

let allPositive = numbers.every(function(number) {
  return number > 0;
});
console.log(allPositive); // -> false

numbers = [ 10, 30, 20, 50 ];

allPositive = numbers.every(function(number) {
  return number > 0;
});
console.log(allPositive); // -> true
```

Now, imagine we have a registration form, and you want to check if all of the required fields are entered or not before submitting the form. You can use the `every` method to check for each field value easily.

```javascript
window.onload = function() {
  const form = document.getElementById('registration_form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const fields = [ 'first_name', 'last_name', 'email', 'city' ];
    const allFieldsEntered = fields.every(function(fieldId) {
      return document.getElementById(fieldId).value.trim() !== '';
    });

    if (allFieldsEntered) {
      console.log('All the fields are entered');
      // All the field values are entered, submit the form
    } else {
      alert('Please, fill out all the field values.');
    }
  });
};
```

Here, inside the callback function of the `every` method, we’re checking if each field value is not empty and returning a boolean value.

In the above code, the `every` method returns `true` if, for all the elements in the `fields` array, the callback function returns a `true` value.

If the callback function returns a `false` value for any of the elements in the `fields` array, then the `every` method will return `false` as the result.

Advantage of using the every method:
* It allows us to quickly check if all the elements match certain criteria without writing a lot of code.

#### arr.some Method:
The `some` method tests whether at least one element in the array passes the test condition given by the provided function and returns a boolean `true` or `false` value.

Syntax:
```javascript
 arr.some(callback(element[, index[, array]])[, thisArg]
```

It returns `true` once it finds the first match and returns `false` if there is no match.

Suppose we have an array of numbers and we want to check if the array contains at least one positive element. We can use the `some` method to achieve it.

```javascript
let numbers = [ -30, 40, 20, 50 ];

// here we're using an arrow functions
let containsPositive = numbers.some((number) => {
  return number > 0;
});
console.log(containsPositive); // -> true

numbers = [ -10, -30, -20, -50 ];

// here we're using an arrow functions
containsPositive = numbers.every((number) => {
  return number > 0;
});
console.log(containsPositive); // -> false
```

Here are some useful scenarios for using the some method:

__Example 1:__ \
Let's say we have a list of students and we want to check if a particular student is present in that array or not. We also want to get the index position of that student if the student is found.

So instead of using the `find` and `findIndex` methods separately, we can use the `some` method to do both of these.

```javascript
const students = [
  { name: 'Mike Ewing', age: 21 },
  { name: 'Sally Brady', age: 18 },
  { name: 'Mike Sheridan', age: 19 },
  { name: 'Katie Jane', age: 27 }
];

let indexValue = -1;
const student = students.some(function(student, index) {
  const isFound = student.name.indexOf('Katie') > -1;
  if (isFound) {
    indexValue = index;
  }
  return isFound;
});

console.log(student, indexValue); // -> true 3
```

The array `forEach`, `map`, and `filter` methods run from start to finish until all of the elements of the array are processed. There is no way of stopping or breaking out of the loop, once a particular element is found.

In such cases, we can use the `some` array method. The `map`, `forEach` and `some` methods take the same parameters in the callback function:
* The first parameter is the actual value
* The second parameter is the index
* The third parameter is the original array

The `some` method stops looping through the array once it finds a particular match as can be seen in the above example.

Advantages of using the some method
* It allows us to quickly check if some of the elements match certain criteria without writing a lot of code.
* It allows us to quickly break out of the loop, which was not possible with other looping methods seen above.

#### Transforming the Array:

#### arr.map Method:
The Array map method is the most useful and widely used array method among all other methods.

The `map` method executes a provided function once for every element in the array and it returns a new transformed array.

Syntax:
```javascript
arr.map(function callback(currentValue[, index[, array]]) {
  // Return element for new_array
}[, thisArg])
```

Example:
```javascript
const students = [ 'John', 'Jane', 'Katie' ];
const transformedArray = students.map(function(student) {
  return student.toUpperCase();
});

console.log(transformedArray); 
// -> [ "JOHN", "JANE", "KATIE" ]
```

In the above code, inside the callback function, we’re converting each element to uppercase and returning it.

The equivalent for loop code for the above example looks like this:

```javascript
const students = [ 'John', 'Jane', 'Katie' ];
const converted = [];

for (let i = 0; i < students.length; i++) {
  converted.push(students[i].toUpperCase());
}

console.log(converted);
```

Using `map` helps to avoid creating a separate `converted` array beforehand for storing the converted elements. So it saves memory space and also the code looks much cleaner using array `map`.

Note that the `map` method returns a new array that is of the exact same length as the original array.

> The difference between the `forEach` and `map` methods is that `forEach` is only used for looping and does not return anything back. On the other hand, the `map` method returns a new array that is of the exact same length as the original array.

Also, note that `map` does not change the original array but returns a new array.

```javascript
const users = [
  {
    firstName : 'John',
    lastName  : 'Doe'
  },
  {
    firstName : 'Jane',
    lastName  : 'Doe'
  },
  {
    firstName : 'Katie',
    lastName  : 'Jane'
  }
];
const userList = users.map(function(user) {
  return `${user.firstName} ${user.lastName}`;
});

console.log(userList);
// -> [ "John Doe", "Jane Doe", "Katie Jane" ]
```

The array map method is also useful, if you want to extract only specific data from the array like this:

```javascript
const users = [
  {
    firstName : 'John',
    lastName  : 'Doe',
    age       : 36
  },
  {
    firstName : 'Jane',
    lastName  : 'Doe',
    age       : 42
  },
  {
    firstName : 'Katie',
    lastName  : 'Jane',
    age       : 27
  }
];
const surnames = users.map(function(user) {
  return user.lastName;
});

console.log(surnames);
// -> [ "Doe", "Doe", "Jane" ]
```

In the above code, we're extracting only the last names of each user and storing them in an array.

Advantages of using the map method:
* It helps quickly generate a new array without changing the original array.
* It helps generate an array with dynamic content based on each element.
* It allows us to quickly extract any element of the array.
* It generates an array with the exact same length as the original array.

#### arr.reduce Method:
The `reduce` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

Syntax:
```javascript
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

> Note that the output of the reduce method is always a single value. It can be an object, a number, a string, an array, and so on. It depends on what you want the output of reduce method to generate but it's always a single value.

Now, suppose we want to find the sum of all the numbers in the array. You can use the reduce method for that.

```javascript
const numbers = [ 1, 2, 3, 4, 5 ];

const sum = numbers.reduce(function(accumulator, number) {
  return accumulator + number;
}, 0);

console.log(sum); // -> 15
```

The `accumulator` will contain the `initialValue` to be used for the array. The `initialValue` decides the return type of the data returned by the `reduce` method.

The `number` is the second parameter to the callback function that will contain the array element during each iteration of the loop.

In the above code, we have provided `0` as the `initialValue` for the `accumulator`. So the first time the callback function executes, the `accumulator + number` will be `0 + 1 = 1` and we're returning back the value `1`.

The next time the callback function runs, `accumulator + number` will be `1 + 2 = 3` (`1` here is the previous value returned in the last iteration and `2` is the next element from the array).

> It’s always good to specify the `initialValue` of `accumulator` as it makes it easy to understand the return type of the `reduce` method and get the correct type of data back.

```javascript
const numbers = [ 1, 2, 3, 4, 5 ];

const doublesSum = numbers.reduce(function(accumulator, number) {
  return accumulator + number * 2;
}, 10);

console.log(doublesSum); // -> 40
```

Here, we’re multiplying each element of the array by 2. We have provided an `initialValue` of 10 to the `accumulator` so 10 will be added to the final result of the sum like this:

```javascript
[1 * 2, 2 * 2, 3 * 2, 4 * 2, 5 * 2] = [2, 4, 6, 8, 10] = 30 + 10 = 40
```

Suppose, you have an array of objects with x and y coordinates and you want to get the sum of x coordinates. You can use the `reduce` method for that.

```javascript
const coordinates = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 4 }
];

const sum = coordinates.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue.x;
}, 0);

console.log(sum); // -> 6
```

Advantages of using the reduce method:
* Using reduce allows us to generate any type of simple or complex data based on the array.
* It remembers the previously returns data from the loop so helps us avoid creating a global variable to store the previous value.

#### Summary of array methods:

To add/remove elements:
* `push(...items)` – adds items to the end.
* `pop()` – extracts an item from the end.
* `shift()` – extracts an item from the beginning.
* `unshift(...items)` – adds items to the beginning.
* `splice(pos, deleteCount, ...items)` – at index `pos` deletes `deleteCount` elements and inserts items.
* `slice(start, end)` – creates a new array, copies elements from index `start` till `end` (not inclusive) into it.
* `concat(...items)` – returns a new array: copies all members of the current one and adds `items` to it. If any of `items` is an array, then its elements are taken.

To search among elements:
* `indexOf/lastIndexOf(item, pos)` – look for item starting from position pos, return the index or -1 if not found.
* `includes(value)` – returns `true` if the array has `value`, otherwise `false`.
* `find/filter(func)` – filter elements through the function, return first/all values that make it return true.
* `findIndex` is like `find`, but returns the index instead of a value.

To iterate over elements:
* `forEach(func)` – calls `func` for every element, does not return anything.

To transform the array:
* `map(func)` – creates a new array from results of calling func for * every element.
* `sort(func)` – sorts the array in-place, then returns it.
* `reverse()` – reverses the array in-place, then returns it.
* `split/join` – convert a string to array and back.
* `reduce/reduceRight(func, initial)` – calculate a single value over the array by calling `func` for each element and passing an intermediate result between the calls.

Additionally:
* `Array.isArray(arr)` - checks `arr` for being an array.

> Please note that methods sort, reverse and splice modify the array itself.

#### Helpful Resources:
[Array Methods v1](https://www.freecodecamp.org/news/complete-introduction-to-the-most-useful-javascript-array-methods/)
[Array Methods v2](https://javascript.info/array-methods)

**[⬆ Top](#table-of-contents)**

----

### Objects
Objects are collections of *properties* which are a key value pair. Rather than accessing the data using an *index*, we use custom *keys*.

An object, compared to an array, is more like a container that holds different pieces of data called *key* and *value* pairs where there's not necessarily any order to them. It's more about storing pairs of information.

We do not use a number [`0`] to access our data out like with an array, we would directly call for the data we need (city, age, zip, etc.)

Example of key-value pairs: \
`key: value` \
In the example below: \
`totalSteps: 308727` - *totalSteps* would be a __key__ and *308727* would be a __value__

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

It's important to remember that all __keys__ are converted to *strings*.

```javascript
const numbers = {
  100 : 'one hundred',
  16  : 'sixteen'
};

// bad
numbers.100; // -> SyntaxError!!!
// good
numbers[100]; // -> "one hundred"
```

#### Nested Objects and Arrays:
Our *objects* and *arrays* can have other nested *objects* and *arrays*.

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

### Functions
A __function__ is simply a reusable procedure. Functions allow us to write reusable, modular code. We define a *chunk* of code that we can then execute at a later time.

Syntax:
```javascript
function name([param[, param[, ... param]]]) {
  [statements];
}
```

Example:
```javascript
function add(x, y) {
  return x + y;
}
add(5, 4); // -> 9
```

#### Function Scope:
In JavaScript there are two types of scope:
* Local scope
* Global scope

With function scope, each function creates a new scope and scope determines the accessibility (visibility) of these variables. Variables defined inside a function are not accessible (visible) from outside the function.

##### Local Variables:
Variables declared within a JavaScript function, become __local__ to the function.

Local variables have __Function scope__: They can only be accessed from within the function.

Example:
```javascript
// code here can NOT use carName

function myFunc() {
  let carName = 'Toyota';

  // code here CAN use carName
}
```

Since __local__ variables are only recognized inside their functions, variables with the same name can be used in different functions.

__Local__ variables are created when a function starts, and deleted when the function is completed.

##### Global Variables:
A variable declared outside a function, becomes __global__.

A global variable has __global scope__: All scripts and functions on a web page can access it.

Example:
```javascript
let carName = 'Toyota';

// code here CAN use carName

function myFunc() {

  // code here CAN also use carName

}
```

#### Function Expressions:
In JavaScript functions are objects which means we can store them in variables, arrays, and we can pass them around as arguments.

Example 1: Storing a function in a `variable`
```javascript
// Old syntax
function square(num) {
  return num + num;
}
square(7); // -> 49

// New syntax
const square = function(num) {
  return num + num;
};
square(7); // -> 49
```

We can store our functions in an `array` like this:
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

We can then loop over our `array` of functions like this:
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

To store functions in an `object` we do this:
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

#### Parameters vs. Arguments:
A __parameter__ is the variable name, defined in the function signature, of the value which will be given as an __argument__. 

It's important to distinguish them, as a __parameter__ can represent many different values or even types of values, while an __argument__ will only be that specific value at the time of evaluation.

In this *square* function, *number* is the __parameter__ and *6* is the __argument__ being passed into the function:

```javascript
function square(number) {
  return number * number;
}
square(6); // -> 36
```

#### Higher-Order Functions:
A Higher-Order Function can take functions as arguments and/or return a function.

```javascript
function randomNumGen() {
  return Math.floor(Math.random() * 1000);
}

function id(name, randFunc) {
  return name + '-' + randFunc();
}
const userID = id('Ryan', randomNumGen);

console.log(userID); // -> Ryan-766
```

#### Arrow Functions:
Arrow functions allow us to write shorter function syntax:

Example:
```javascript
// Old syntax
square = function(x) {
  return x + x;
};

// New syntax
const square = (x) => {
  return x + x;
};
```

We can shorten this even more if the function has *only* one statement, and the statement returns a value, we can remove the brackets *and* the `return` keyword:

```javascript
square = (x) => x + x; 
```

> When dealing with arrow functions it's important to remember that the keyword `this` behaves differently than it does in traditional functions. *See the "this" section for more details*.

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
console.log(c); // -> [4, 5, 6], b !== c

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

Syntax:
```javascript
this
```

Example:
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

Example 1:
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

    // destructuring "this"
    const { first, last, nickName } = this;
    // we can then remove the "this" and simply call the keys
    console.log(`${first} ${last} aka ${nickName}`);
  }
};
user.fullName(); // -> Katie Jane aka 2 Sweet
```

Example 2: Adding multiple methods to an object
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
    // we need to use "this" to reference the whole object,    only using fullName() throws a reference error
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

With arrow functions the `this` keyword *always* represents the object that defined the arrow function.

This is generally why we do not use arrow functions as methods because a lot of the methods we write, we want to have access to the parent object of the containing object to do things like:
  * referencing properties
  * calling a different method like we did in `printBio()` (`this.fullName()`).

Example:
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
HTML DOM __methods__ are *actions* you can perform on HTML Elements (like add or deleting an HTML element).

HTML DOM __properties__ are *values* of HTML Elements that you can set or change (like changing the content of an HTML element).

In the following example, the `<script>` changes the content (the `innerHTML`) of the `<p>` element with `id = "demo"`.

Example:
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

#### Selecting Methods:
#### document.getElementById()
`getElementById()` returns an *Element* object representing the element whose `id` property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

Syntax:
```javascript
let element = document.getElementById(id);
```

Example:
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

#### document.getElementsTagName()
`getElementTagName()` method of *Document* interface returns an *HTMLCollection* of elements with the given tag name (`< >`). The complete document is searched, including the root node.

Syntax:
```javascript
let elements = document.getElementsByTagName(name);
```

Example:
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

For Example:
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
// -> <p>
// -> <p>
// -> <p>
```

Since it is an iterable we can also use __spread__ (`...`)
To turn it into an array and spread it:
```javascript
const arr = [...pTags];

console.log(arr);
// -> 0: <p>
// -> 1: <p>
// -> 2: <p>
```
We have now turned it into an array!

#### document.getElementsClassName()
`getElementClassName()` 

Syntax:
```javascript
let elements = document.getElementsByClassName(name);
```

#### Helpful Resources:
[Traversing the DOM](https://zellwk.com/blog/dom-traversals/)

**[⬆ Top](#table-of-contents)**

----

### Contributing
Contributions are always welcome! All I ask is that you open an issue and we discuss your proposed changes before you create a pull request.