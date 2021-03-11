/*
JavaScript Notes and Documentation
Destructuring:
*/

/*
==========================================
Destructuring
==========================================
- A short, clean syntax to "unpack",
  * Values from arrays
  * Properties from objects
into distinct variables.
*/

/*
Destructuring Arrays

- Order does matter for arrays
*/
const raceResults = [
	'Ryan Neil',
	'Katie Neil',
	'Galen Rupp',
	'Alphonce Simbu',
	'Jared Ward'
];
// saving names to a variable pre-destructuring:
const gold = raceResults[0]; // -> Ryan Neil
const silver = raceResults[1]; // -> Katie Neil
const bronze = raceResults[2]; // -> Galen Rupp

// saving names to a variable using destructuring:
const [ gold, silver, bronze ] = raceResults;
console.log(gold); // -> Ryan Neil
console.log(silver); // -> Katie Neil
console.log(bronze); // -> Galen Rupp

const [ first, , , fourth ] = raceResults;
console.log(fourth); // -> Alphonce Simbu

// using "rest" inside our destructuring array:
const [ winner, ...runnerUps ] = raceResults;
console.log(winner); // -> Ryan Neil
console.log(runnerUps); // -> [ "Katie Neil", "Galen Rupp", "Alphonce Simbu", "Jared Ward" ]

/*
Destructuring Objects

- Order does not matter for objects
- The variable names must be ket names from the object
*/
const runner = {
	first   : 'Katie',
	last    : 'Neil',
	country : 'United States',
	title   : 'Lord of All Runners'
};
const { first, last, country } = runner;
console.log(first); // -> "Katie"
console.log(last); // -> "Neil"
console.log(country); // -> "United States"

// giving the keys new names:
const { country: nation } = runner;
console.log(nation); // -> "United States"
console.log(country); // -> undefined

// using "rest" inside our destructuring object:
const { first, last, ...others } = runner;
console.log(first); // -> "Katie"
console.log(last); // -> "Neil"
console.log(others); // -> { country: "United States", title: "Lord of All Runners" }

/*
Nested Destructuring
*/
const results = [
	{
		first   : 'Katie',
		last    : 'Neil',
		country : 'United States'
	},
	{
		first   : 'Ryan',
		last    : 'Neil',
		country : 'Canada'
	},
	{
		first   : 'Galen',
		last    : 'Rupp',
		country : 'Belgium'
	}
];

// Example 1: Extract the country of second place
const [ , { country } ] = results;
console.log(country); // -> "Canada"
// Example 1.1: Extract the first name and country of third place
const [ , , { first, country } ] = results;
console.log(first, country); // -> Galen Belgium

/*
Destructuring Parameters

- We often find destructuring inside a function definition where the parameters are listed.
- If we use the same syntax inside the parentheses of a function definition we can extract or "unpack" values from the arguments passed in.
*/

// Example 1: Destructuring Parameters with Objects
// here we're expecting "fullName" to be passed an object hence the curly braces
const fullName = ({ first, last }) => {
	return `${first} ${last}`;
};

const fullProfile = ({ first, last, country }) => {
	return `${first} ${last}, ${country}`;
};
const runner = {
	first   : 'Katie',
	last    : 'Neil',
	country : 'United States'
};
fullName(runner); // -> Katie Neil
fullProfile(runner); // -> Katie Neil, United States

// Example 2: Destructuring Parameters with Arrays (HTTP)
const response = [ 'HTTP/1.1', '200 OK', 'application/json' ];
function parseResponse([ protocol, statusCode, contentType ]) {
	console.log(`Status: ${statusCode}`);
}
parseResponse(response); // -> Status: 200 OK
