![js-gif](https://user-images.githubusercontent.com/59746024/108250339-3946ac80-70fa-11eb-9441-607fce5c3843.gif)

# JavaScript Resources
This is an ever-evolving collection of the most common JavaScript features and code samples.

## 📌 Repo Features
1. Arrays
2. Arrow Functions
3. The Basics
4. Callbacks
5. Destructuring
6. The Dom
7. Functions
8. JSON Files
9. Loops
10. Objects
11. Rest
12. Spread
13. "This" Keyword

## 📂 Repo Folder Structure
`/src/` - contains the source files for the Github repo. \
`/src/js/` - contains all JavaScript files. \
`/src/js/analysis/` - contains the breakdown of JavaScript coding projects. \
`/src/js/challenges/` - contains some example JavaScript challenges for practice.

## 🔗 Resources
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Array Methods v1](https://www.freecodecamp.org/news/complete-introduction-to-the-most-useful-javascript-array-methods/)
- [Array Methods v2](https://javascript.info/array-methods)
- [30 Seconds of Code](https://www.30secondsofcode.org/)
- [Fake API for testing and prototyping (JSON Placeholder)](https://jsonplaceholder.typicode.com/)
- [CSS -> JavaScript](https://css2js.dotenv.dev/)
- [Guide to CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [GitHub Markdown Styling](https://guides.github.com/features/mastering-markdown/)

## 📓 Notes

### Table of Contents

  1. [For Loops](#for-loops)
  1. [Conditionals](#conditionals)
  1. [Ternary Operator](#ternary-operator)
  1. [Array Methods](#array-methods)
     * [forEach Method](#array.foreach-method)
     * [map Method](#array.map-method)
     * [find Method](#array.find-method)
     * [findIndex Method](#array.findindex-method)
     * [filter Method](#array.filter-method)
     * [every Method](#array.every-method)
     * [some Method](#array.some-method)
     * [every Method](#array.every-method)
     * [reduce Method](#array.reduce-method)
  1. [Objects](#objects)
  1. [Functions](#functions)
  1. [Parameters vs. Arguments](#parameters-vs-arguments)
  1. [Higher-Order Functions](#higher-order-functions)
  1. [Destructuring](#destructuring)
  1. [Spread](#spread)
  1. [Rest](#rest)

### For Loops
#### for...in
`for...in` is used to iterate over all enumerable properties of an object, including inherited enumerable properties. This iteration statement can be used with arrays strings or plain objects, but not with `Map` or `Set` objects.

```javascript
for (let prop in ['a', 'b', 'c'])
  console.log(prop); // -> 0, 1, 2 (array indexes)

for (let prop in 'str')
  console.log(prop); // -> 0, 1, 2 (string indexes)

for (let prop in {a: 1, b: 2, c: 3})
  console.log(prop); // -> a, b, c (object property names)

for (let prop in new Set(['a', 'b', 'a', 'd']))
  console.log(prop); // -> undefined (no enumerable properties)
```

#### for...of
`for...of` is used to iterate over iterable objects, iterating over their values instead of their properties. This iteration statement can be used with arrays, strings, `Map` or `Set` objects, but not with plain objects.

```javascript
for (let val of ['a', 'b', 'c'])
  console.log(val); // -> a, b, c (array values)

for (let val of 'str')
  console.log(val); // -> s, t, r (string characters)

for (let val of {a: 1, b: 2, c: 3})
  console.log(prop); // -> TypeError (not iterable)

for (let val of new Set(['a', 'b', 'a', 'd']))
  console.log(val); // -> a, b, d (Set values)
```

**[⬆ Top](#table-of-contents)**

----

### Conditionals
Conditional Statements are used for making decisions with code. They can have 3 different pieces, an __if__, an __else if__, and __else__.

`if` = Run the code *if* a given condition is true
`else if` = if not the first thing, maybe this other thing??
`else` = if nothing *else* was true, run this...

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

**[⬆ Top](#table-of-contents)**

----

### Ternary Operator
A shortcut syntax that we can use for certain conditionals. It basically takes an __if__ and an __else__ and turns them into a single line of code. This will only work if there are no __else if__ statements.

Syntax:
`condition ? expIfTrue : expIfFalse`

```javascript
// Old
let status = 'offline';
let color = '';

if (status === 'offline') {
  color = 'red';
} else {
  color = 'green';
}

// New
let status = 'offline';

let color = status === 'offline' ? 'red' : 'green'; // -> 'red'
```

**[⬆ Top](#table-of-contents)**

----

### Array Methods
This is a collection of the most commonly used ES5 and ES6+ array methods.

#### Array.forEach Method
The `forEach` method executes a provided function once for every element in the array.

Syntax:
```javascript 
Array.forEach(callback(currentValue [, index [, array]])[, thisArg]);
```

```javascript
const testScores = [ 89, 92, 76, 99 ];

testScores.forEach(function(score) {
  console.log(score);
});
// -> 89, 92, 76, 99
```

The equivalent `for loop` code for the above example looks like this:

```javascript
const testScores = [ 89, 92, 76, 99 ];

for (let i = 0; i < testScores.length; i++) {
  console.log(testScores[i]);
}
```

The thing you need to keep in mind is that the forEach method does not return any value.

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

#### Array.map Method
The Array map method is the most useful and widely used array method among all other methods.

Syntax:
```javascript
Array.map(function callback(currentValue[, index[, array]]) {
  // Return element for new_array
}[, thisArg])
```

The `map` method executes a provided function once for every element in the array and it returns a new transformed array.

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

#### Array.find Method
The `find` method returns the `value` of the `first element` in the array that satisfies the provided test condition.

Syntax:
```javascript 
Array.find(callback(element[, index[, array]])[, thisArg])
```

The `find` method takes a callback function as the first argument and executes the callback function for every element of the array. Each array element value is passed as the first parameter to the callback function.

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

#### Array.findIndex Method
The `findIndex` method returns the __index__ of the first element in the array __that satisfies the provided test condition__. Otherwise, it returns `-1`, indicating that no element passed the test.

Syntax:
```javascript 
Array.findIndex(callback(element[, index[, array]])[, thisArg])
```

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

#### Array.filter Method
The `filter` method returns `a new array` with all the elements that satisfy the provided test condition.

The `filter` method takes a callback function as the first argument and executes the callback function for every element of the array. Each array element value is passed as the first parameter to the callback function.

Syntax:
```javascript 
Array.filter(callback(element[, index[, array]])[, thisArg])
```

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

The equivalent for loop code for the above example looks like this:

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

#### Array.every Method
The `every` method tests whether all elements in the array pass the provided test conditions and returns a boolean `true` or `false` value.

Syntax:
```javascript 
Array.every(callback(element[, index[, array]])[, thisArg])
```

Suppose we have an array of numbers and we want to check if every element of the array is a positive number. We can use the `every` method to achieve it.

```javascript
let numbers = [ 10, -30, 20, 50 ];

let allPositive = numbers.every(function(number) {
  return number > 0;
});
console.log(allPositive); // false

numbers = [ 10, 30, 20, 50 ];

allPositive = numbers.every(function(number) {
  return number > 0;
});
console.log(allPositive); // true
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

#### Array.some Method
The `some` method tests whether at least one element in the array passes the test condition given by the provided function and returns a boolean `true` or `false` value.

Syntax:
```javascript
 Array.some(callback(element[, index[, array]])[, thisArg]
```

It returns `true` once it finds the first match and returns `false` if there is no match.

Suppose we have an array of numbers and we want to check if the array contains at least one positive element. We can use the `some` method to achieve it.

```javascript
let numbers = [ -30, 40, 20, 50 ];

// here we're using an arrow functions
let containsPositive = numbers.some((number) => {
  return number > 0;
});
console.log(containsPositive); // true

numbers = [ -10, -30, -20, -50 ];

// here we're using an arrow functions
containsPositive = numbers.every((number) => {
  return number > 0;
});
console.log(containsPositive); // false
```

Here are some useful scenarios for using the some method:
##### Example 1:
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

##### Example 2:
The array `forEach`, `map`, and `filter` methods run from start to finish until all of the elements of the array are processed. There is no way of stopping or breaking out of the loop, once a particular element is found.

In such cases, we can use the array `some` method. The `map`, `forEach` and `some` methods take the same parameters in the callback function:
* The first parameter is the actual value
* The second parameter is the index
* The third parameter is the original array

The `some` method stops looping through the array once it finds a particular match as can be seen in the above example 1.

Advantages of using the some method
* It allows us to quickly check if some of the elements match certain criteria without writing a lot of code.
* It allows us to quickly break out of the loop, which was not possible with other looping methods seen above.

#### Array.reduce Method
The `reduce` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

Syntax:
```javascript
Array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
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

The next time the callback function runs, `accumulator` + number will be `1 + 2 = 3` (`1` here is the previous value returned in the last iteration and `2` is the next element from the array).

> In the above code, initialValue of 0 is not required because all the elements of the array are integers.

But it’s always good to specify the `initialValue` of `accumulator` as it makes it easy to understand the return type of the `reduce` method and get the correct type of data back.

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

##### Summary of array methods:

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
* map(func) – creates a new array from results of calling func for * every element.
* `sort(func)` – sorts the array in-place, then returns it.
* `reverse()` – reverses the array in-place, then returns it.
* `split/join` – convert a string to array and back.
* `reduce/reduceRight(func, initial)` – calculate a single value over the array by calling `func` for each element and passing an intermediate result between the calls.

Additionally:
* `Array.isArray(arr)` - checks `arr` for being an array.

> Please note that methods sort, reverse and splice modify the array itself.

**[⬆ Top](#table-of-contents)**

----

### Objects
Objects are collections of *properties* which are a key value pair. Rather than accessing the data using an *index*, we use custom *keys*.

An object, compared to an array, is more like a container that holds different pieces of data called *key* and *value* pairs where there's not necessarily any order to them. It's more about storing pairs of information.

We do not use a number [`0`] to access our data out like with an array, we would directly call for the data we need (city, age, zip, etc.)

Example of key-value pairs:
`key: value`
In the example below:
`totalSteps: --> 308727` - *totalSteps* would be a __key__ and *308727* would be a __value__

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


#### Nested Objects and Arrays
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



**[⬆ Top](#table-of-contents)**

----

### Parameters vs. Arguments
A __*parameter*__ is the variable name, defined in the function signature, of the value which will be given as an __*argument*__. 

It's important to distinguish them, as a parameter can represent many different values or even types of values, while an argument will only be that specific value at the time of evaluation.

In this *square* function, *number* is the __*parameter*__ and *6* is the __*argument*__ being passed into the function:

```javascript
function square(number) {
  return number * number;
}
square(6); // -> 36
```

**[⬆ Top](#table-of-contents)**

----

### Higher-Order Functions
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

**[⬆ Top](#table-of-contents)**

----

### Destructuring

#### Object Destructuring
Destructuring saves you from creating temporary references for those properties, and from repetitive access of the object. 

Repeating object access creates more repetitive code, requires more reading, and creates more opportunities for mistakes. 

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


#### Array Destructuring

```javascript
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```


#### Destructuring multiple return values
We use object destructuring for multiple return values, not array destructuring.

Why? You can add new properties over time or change the order of things without breaking call sites.

```javascript
// bad
function processInput(input) {
  // then a miracle occurs
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

// Flatten an array
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
