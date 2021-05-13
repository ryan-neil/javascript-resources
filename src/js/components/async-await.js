/*
JavaScript Notes and Documentation
Async & Await
*/

/**
====================================
Async & Await:
*/

/*
Async:
	* async functions are a nice, clean and easy syntax for working with promises.
  * Async functions always return a promise.
	* If the function returns a value, the promise will be resolved with that value.
	* If the function throws an exception, the promise will be rejected.
*/

// Syntax:
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

// ** When we put an async in front of a function it's now going to behave differently. It will now return a Promise. So even though we don't write "new Promise" or explicitly say to return a Promise, it does.

// Example 1: Difference between a standard function and an async function
function greet() {
	return "Hello!";
}
greet(); // -> Hello!

async function greet() {
	return "Hello!";
}
greet(); // -> Promise { <state>: "fulfilled", <value>: "Hello!" }

// Example 2: returning a Promise that is not resolved
async function add(x, y) {
	// check if "x" and "y" are numbers
	if (typeof x !== "number" || typeof y !== "number") {
		throw "X and Y must both be numbers!";
	}
	return x + y;
}

add("e", "r")
	.then((val) => {
		console.log("Promise resolved with: ", val);
	})
	.catch((err) => {
		console.log("Promise rejected with: ", err);
	});
// -> Promise rejected with: X and Y must both be numbers!

// ** Re-writing the above async function as a standard Promise
function add(x, y) {
	return new Promise((resolve, reject) => {
		if (typeof x !== "number" || typeof y !== "number") {
			reject("X and Y must both be numbers!");
		}
		resolve(x + y);
	});
}

add(5, "r")
	.then((val) => {
		console.log("Promise resolved with: ", val);
	})
	.catch((err) => {
		console.log("Promise rejected with: ", err);
	});
// -> Promise rejected with: X and Y must both be numbers!

// ** In short, an async function is just a short cut syntax to make a function that returns a Promise.

/*
Await:
	* We can only use the await operator inside of functions declared with async.
  * Await will pause the execution of the function, waiting for a Promise to be resolved.
*/

// Syntax:
async function funcName() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve("Promise resolved!"), 1000);
	});

	let result = await promise;
	console.log(result); // -> Promise resolved!
}
funcName();

// Syntax (Axios):
async function getPlanets() {
	const res = await axios.get("https://swapi.dev/api/planets/");
	console.log(res.data);
}
// no .then() needed with "await"
getPlanets();

// ** standard function (Axios)
function getPlanets() {
	return axios.get("https://swapi.dev/api/planets/");
}
getPlanets().then((res) => {
	console.log(res.data);
});

// Example: with await method (Axios)
async function getPlanets() {
	const res = await axios.get("https://swapi.dev/api/planets/");

	console.log(res.data); // this only runs once the previous line is complete (axios Promise is resolved)
}
getPlanets(); // -> [resolved] Object { data }

// ** because of the "await" keyword JS waits for the Promise to be resolved before running the "console.log(res.data)"

// Example: without await method (Axios)
async function getPlanets() {
	const res = axios.get("https://swapi.dev/api/planets/");

	console.log(res.data);
}
getPlanets(); // -> [unresolved] undefined

// ** without the "await" keyword JS runs the "console.log(res.data)" before the "axios.get()" Promise is resolved which leaves "data" undefined

/*
Error Handling in Async Functions:
*/

// Example:
async function getPlanets() {
	const res = await axios.get("https://swapi.dev/api/wrong-link/");

	console.log(res.data);
}

getPlanets().catch((err) => {
	console.log("Caught in catch!", err);
});
// -> Caught in catch! Error: Request failed with status code 404

// ** we can just chain on a .catch() to the getPlanets() function call to catch the errors

// ** the .catch() method is useful when we have multiple Promises being run.

// Example Code: Github API
async function showAvatar() {
	// read our JSON
	let response = await fetch("/article/promise-chaining/user.json");
	let user = await response.json();

	// read github user
	let githubResponse = await fetch(
		`https://api.github.com/users/${user.name}`
	);
	let githubUser = await githubResponse.json();

	// show the avatar
	let img = document.createElement("img");
	img.src = githubUser.avatar_url;
	img.className = "promise-avatar-example";
	document.body.append(img);

	// wait 3 seconds
	await new Promise((resolve, reject) => setTimeout(resolve, 3000));

	img.remove();

	return githubUser;
}
showAvatar();

/*
Chaining Multiple Awaits:
*/

// ** Example back from Promises section
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

// ** non async/await method
const btn = document.querySelector("button");

moveX(btn, 200, 1000)
	// if there's only one expression we can remove the return keyword
	.then(() => moveX(btn, 200, 1000))
	.then(() => moveX(btn, 200, 1000))
	.then(() => moveX(btn, 200, 1000))
	.then(() => console.log("All finished moving!"))
	// here we can destructure what we passed into our reject() call
	.catch(({ bodyBoundary, elRight, amount }) => {
		console.log(`Body is ${bodyBoundary}px wide`);
		console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
	});

// ** refactoring with async/await
const btn = document.querySelector("button");

async function animateRight(el) {
	await moveX(el, 100, 1000); // this returns a Promise so we can "await" it
	// we don't need .then()'s because we awaited it
	await moveX(el, 100, 1000);
	await moveX(el, 100, 1000);
}
// pass in the "el" to "animateRight()" that we want to animate ("btn")
animateRight(btn).catch((err) => {
	console.log("You've reached the end!", err);
});

// ** with the async/await method we don't need all the .then()'s and unnecessary callbacks [.then(() => moveX(btn, 100, 1000))].

/*
Parallel and Sequential Requests:
*/

// ** If we don't need the requests to happen in sequence, use Parallel requests. Parallel requests execute much faster than Sequential requests.

// PokeAPI
// https://pokeapi.co/api/v2/pokemon/

// Example 1: Sequential Requests
async function startingPokemon() {
	const staterPoke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
	const staterPoke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/4");
	const staterPoke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/7");

	console.log(staterPoke1.data.name); // -> bulbasaur
	console.log(staterPoke2.data.name); // -> charmander
	console.log(staterPoke3.data.name); // -> squirtle
}
startingPokemon();

// Example 2: Parallel Requests
async function startingPokemon() {
	// we remove the await's here
	const staterPoke1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
	const staterPoke2 = axios.get("https://pokeapi.co/api/v2/pokemon/4");
	const staterPoke3 = axios.get("https://pokeapi.co/api/v2/pokemon/7");

	const poke1 = await staterPoke1;
	const poke2 = await staterPoke2;
	const poke3 = await staterPoke3;

	console.log(poke1.data.name); // -> bulbasaur
	console.log(poke2.data.name); // -> charmander
	console.log(poke3.data.name); // -> squirtle
}
startingPokemon();

/*
Promise.all:
*/

// Example: Promise.all
async function startingPokemon() {
	// we remove the await's here
	const staterPoke1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
	const staterPoke2 = axios.get("https://pokeapi.co/api/v2/pokemon/4");
	const staterPoke3 = axios.get("https://pokeapi.co/api/v2/pokemon/7");

	const allPromises = await Promise.all([
		staterPoke1,
		staterPoke2,
		staterPoke3
	]);

	printPokemonNames(allPromises);
}

const printPokemonNames = (allPromises) => {
	for (let pokemon of allPromises) {
		console.log(pokemon.data.name);
	}
};

startingPokemon();
