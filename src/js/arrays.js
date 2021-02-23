/*
JavaScript Notes and Documentation
Arrays:
*/

/*
========================================
Arrays
========================================
- Arrays are ordered collections of values.
- For example: A list of comments on an IG post, a collection of levels in a game, songs in a playlist, etc.
*/

// To make an empty array
let students = [];

// An array of strings
let colors = [ 'red', 'orange', 'yellow' ];

// An array of numbers
let numbers = [ 19, 22, 56, 12, 51 ];

// A mixed array of numbers and strings
let stuff = [ true, 68, 'cat', null ];

/*
========================================
Array Indices
========================================
*/

let colors = [ 'red', 'orange', 'yellow', 'green' ];

colors.length; // 4

colors[0]; // 'red'
colors[1]; // 'orange'
colors[2]; // 'yellow'
colors[3]; // 'green'
colors[4]; // 'undefined'

// To get the last index in the array:
colors[colors.length - 1]; // 'green'

/*
========================================
Modifying Arrays
========================================
- Array (unlike strings) are mutable, we can change them to whatever we want.
*/

// Example 1: Shopping list
let shoppingList = [ 'bread', 'milk', 'eggs' ];

// to update our list with almond milk instead of milk:
shoppingList[1] = 'almond milk'; // ['bread', 'almond milk', 'eggs']

// Adding an item to the end of our shopping list when the data is coming from a database or dynamically:
shoppingList[shoppingList.length] = 'tomatoes';

/*
========================================
Array Methods (Push, Pop, Shift, Upshift)
========================================
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
-  These methods all have to do with adding content or removing content to or from arrays.
-  Push and Pop have to do with the END of the array.
-  Shift and Unshift have to do with the START of the array.
*/

// ** Push **
// Adding an item to the end of an array.
// Example 1:
let topSongs = [
	'First Time Ever I Saw Your Face',
	'God Only Knows',
	'A Day In The Life',
	'Life On Mars'
];

topSongs.push('Fortunate Son'); // ['First Time Ever I Saw Your Face', 'God Only Knows', 'A Day In The Life', 'Life On Mars', 'Fortunate Son']

// ** When we use .push in the array we are changing the value of the array. We do not need to call the new value. **

// ** Pop **
// Removing an item from the end of an array. It will ALWAYS remove the last item.
// Example 1:
let topSongs = [
	'First Time Ever I Saw Your Face',
	'God Only Knows',
	'A Day In The Life',
	'Life On Mars',
	'Fortunate Son'
];

topSongs.pop(); // ['Fortunate Son']
topSongs.pop(); // ['Life On Mars']
console.log(topSongs); // ['First Time Ever I Saw Your Face', 'God Only Knows', 'A Day In The Life',]

// ** Unshift **
// Adding an item to the start of an array.
// Example 1:
let dishesToDo = [ 'plate' ];

dishesToDo.unshift('bowl'); // 2 ['bowl', 'plate']
dishesToDo.unshift('cup'); // 3 ['cup', 'bowl', 'plate']
// We can add multiple items at once too:
dishesToDo.unshift('spoon', 'fork'); // 5 ['spoon', 'fork', 'cup', 'bowl', 'plate']

console.log(dishesToDo); // [ 'spoon', 'fork', 'cup', 'bowl', 'plate']

// ** Shift **
// Removing an item from the start of an array.
// Example 1:
let dishesToDo = [ 'plate', 'bowl', 'cup' ];

dishesToDo.shift(); // plate ['bowl', 'cup']
dishesToDo.shift(); // bowl ['cup']

console.log(dishesToDo); // ['cup']

/*
=================================
Additional Array Methods
=================================
-  concat -> merge arrays
-  includes -> look for a value
-  indexOf -> just like str.indexOf
-  join -> creates a string from an array
-  reverse -> reverses an array
-  slice -> copy a portion of an array
-  splice -> remove/replace elements
-  sort -> sorts an array
*/

// ** concat **
// This method is used to merge two or more arrays.
// Example 1:
let array1 = [ 'a', 'b' ];
let array2 = [ 'c', 'd' ];
let array3 = [ 'e', 'f' ];

// concat array1 and array2:
array1.concat(array2); // ['a', 'b', 'c', 'd']

// concat all 3 arrays and assign a new variable:
let allLetters = array1.concat(array2, array3);

console.log(allLetters); // ['a', 'b', 'c', 'd', 'e', 'f']

// ** includes **
// This method determines whether an array includes a certain value among its entries, returning true or false as appropriate (boolean).
// Example 1:
let ingredients = [ 'water', 'corn starch', 'flour' ];

ingredients.includes('fish'); // false
ingredients.includes('water'); // true

// Example 2: includes in a simple conditional
let ingredients = [ 'water', 'corn starch', 'flour' ];

if (ingredients.includes('flour')) {
	console.log('Oh no! I am gluten free!'); // This code block runs
} else {
	console.log('Does not contain gluten!');
}

// ** indexOf **
// This method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// Example 1:
let ingredients = [
	'water',
	'corn starch',
	'flour',
	'cheese',
	'butter'
];

ingredients.indexOf('butter'); // [4]
ingredients.indexOf('maple syrup'); // [-1] (undefined)

// ** reverse **
// This method reverses an array IN PLACE. The fist array element becomes the last, and the last array element becomes the first.
// Example 1:
let letters = [ 'T', 'C', 'E', 'P', 'S', 'E', 'R' ];

letters.reverse(); // ["R", "E", "S", "P", "E", "C", "T"]

// ** When we use .reverse in the array we are changing the value of the array. We do not need to call the new value. **

// ** join **
// This method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
// Example 1:
let letters = [ 'T', 'C', 'E', 'P', 'S', 'E', 'R' ];

letters.join(); // ["T,C,E,P,S,E,R"]
letters.join('.'); // ["T.C.E.P.S.E.R"]
letters.reverse().join('-'); // ["R-E-S-P-E-C-T"]

// ** slice **
// This method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// Example 1:
let animals = [
	'shark',
	'salmon',
	'whale',
	'bear',
	'lizard',
	'tortoise'
];

let swimmers = animals.slice(0, 3); // ['shark', 'salmon', 'whale']
let mammals = mammals.slice(2, 4); // ['whale', 'bear']
let reptiles = reptiles.slice(4, 6); // ['lizard', 'tortoise']
// or for reptiles just "4" works as well
let reptiles = reptiles.slice(4); // ['lizard', 'tortoise']
let quadruped = animals.slice(-3); // ['bear', 'lizard','tortoise']

// ** We can copy an array by calling an empty .slice method. **
let arrayCopy = animals.slice(); // ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

// ** splice **
// This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Syntax: splice(startIdx, deleteCount, itemsToInsert)

// Example 1: Insert an item after 'shark'.
let animals = [
	'shark',
	'salmon',
	'whale',
	'bear',
	'lizard',
	'tortoise'
];

// " at index 1, delete 0 items and insert 'octopus' "
animals.splice(1, 0, 'octopus'); // ['shark', 'octopus', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

// Example 2: Delete items 'whale' and 'bear'.
// " at index 2, delete 2 items and insert none "
animals.splice(2, 2); // ['whale', 'bear']

// Example 3: Replace items 'shark' and 'salmon' with uppercase versions
// " at index 0, replace 2 items and insert 'SHARK!' and 'SALMON! "
animals.splice(0, 2, 'SHARK!', 'SALMON!'); // ['SHARK!', 'SALMON!', 'whale', 'bear', 'lizard', 'tortoise']

// ** sort **
// This method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// Syntax: arr.sort([compareFunction])

// Example 1: People
let people = [
	'Julie',
	'Katie',
	'Angie',
	'Jolene',
	'Maggie',
	'Roxanne'
];

// people gets sorted alphabetically
people.sort(); // ["Angie", "Jolene", "Julie", "Katie", "Maggie", "Roxanne"]

// Example 2: Numbers
let numbers = [ 34, 10, 10000, 67, 99 ];

numbers.sort(); // [10, 10000, 34, 67, 99]

/*
=================================
Reference Types
=================================

- "Primitive "Types": Strings, Numbers, Booleans, Null, etc. work differently than arrays and objects. When we work with primitive types and we create a variable to store a value, we're creating a "Value Type Variable".
- Every variable we create, javascript is storing the actual value in memory.
*/

let fruit = 'orange';
let color = fruit;

console.log(color); // "orange"
console.log(fruit); // "orange"

let fruit = 'watermelon';

console.log(fruit); // "watermelon"
console.log(color); // "orange"

// "Reference Types": Array's are different than "Value Type Variables" in that since arrays can have large amounts of stuff in them javascript stores a reference to that array. The key distinction is that when we put arrays in variables the variable itself does not hold the array, instead it holds a reference pointer to where that array is in memory.

const numbers = [ 1, 2, 3 ];
const otherNumbers = numbers;

numbers.push(4);
console.log(otherNumbers); // [1, 2, 3, 4];
console.log(numbers); // [1, 2, 3, 4];

/*
=================================
const and Arrays
=================================
- 99.9% of the time we use const for arrays. This is because as long as the reference to the array doesn't change the insides of the array can change.
*/

const myEggs = [ 'brown', 'brown' ];

// This IS allowed
myEggs.push('purple');
console.log(myEggs); // ['brown', 'brown', 'purple];

// This is NOT allowed
myEggs = [ 'blue', 'pink' ]; // TypeError
// ** We can not change the reference of the array **

// =================================
// Nested Arrays
// =================================
const colors = [
	[ 'red', 'crimson' ],
	[ 'orange', 'dark orange' ],
	[ 'yellow', 'gold' ]
];
// accessing data out of the nested array "colors".
colors[2]; // (2) ['yellow', 'gold']
colors[1][0]; // 'orange'
colors[2][1]; // 'gold'

// Example 1: Tic-Tac-Toe Board (Multi-dimensional Arrays)
const board = [
	[ 'O', null, 'X' ],
	[ null, 'X', 'O' ],
	[ 'X', 'O', null ]
];
