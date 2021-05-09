/*
JavaScript Notes and Documentation
Requests
*/

/**
====================================
Requests:
	* XMLHttp - Old school method
	* Fetch - Modern new school method
	* Axios - Popular library for making requests
*/

/**
====================================
AJAX:
	* Asynchronous
	* JavaScript
	* And
	* XML (or JSON)
		- Two ways of formatting data. This way we can send the data from one server to another server or a server to a browser.
*/

/**
====================================
XML (Extensible Markup Language)
	* Looks very similar to html except the element names are very different. They're not actual elements.
	* It's a way of grouping content and adding meaning to the data.
*/

/* ** XML Syntax Example:
<name>
	<first>Katie</first>
	<last>Neil</last>
</name>
<email>katie@gmail.com</email>
<phone>9491234567</phone>
*/

/**
====================================
JSON (Javascript Object Notation)
	* A format for sending data.
	* Looks very similar to JavaScript but it is NOT JavaScript.
	* Can be used in many other programming languages.
*/

/* ** JSON Syntax Example:
{
	"squadName": "Super hero squad",
	"homeTown": "Metro City", 
	"formed": 2016,
	"secretBase": "Super Tower",
	"active": true,
	"members": [
		"Molecule Man",
		"Madame Uppercut",
		"Eternal Flame"
	]
}
*/

/**
====================================
XMLHttp Requests:
	* The "original" way of sending requests via JavaScript.
	* Does not support Promises, so...lots of callbacks.
	* Really weird capitalization.
	* Clunky syntax that is difficult to remember.
*/

// Example Syntax:
// we make a new object
const myReq = new XMLHttpRequest();

// then we provide two callbacks: one to run if the request loads and one to run if there's an error (branching path).

// success callback
myReq.onload = function() {
	const data = JSON.parse(this.responseText); // this is referencing "myReq" here (standard function, not arrow)
	console.log(data);
};
// error callback
myReq.onerror = function(err) {
	console.log("Error!", err);
};

// next we call the request object which we called myReq.open and we tell it what type of request ("get") and what url to send the request to ("http://icanhazdadjoke.com/")
myReq.open("get", "http://icanhazdadjoke.com/", true);
myReq.setRequestHeader("Accept", "application/json");
// finally we send the request
myReq.send();

// Example: SWAPI API
const firstReq = new XMLHttpRequest();

firstReq.addEventListener("load", function() {
	console.log("It worked!");
	// the way to reference the data we get back is by referencing "this.responseText"
	// referencing the responseText (we must use a standard function and not an arrow function so we can use "this" to reference "firstReq")
	// we must also turn the data we get back into JavaScript using "JSON.parse()". Inside the "parse()" we pass in a string of JSON [this.responseText]
	// we can save this into a variable [data]
	const data = JSON.parse(this.responseText);

	// to loop over the planets and log them
	for (let planet of data.results) {
		console.log(planet.name);
	}
});
firstReq.addEventListener("error", () => {
	console.log("Error!");
});

firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send();
console.log("Request sent!");

/**
====================================
Chaining XMLHttp Requests:
*/

// Example:
const firstReq = new XMLHttpRequest();

// firstReq success callback
firstReq.addEventListener("load", function() {
	console.log("It worked!");
	// getting all of our initial data from the API
	const data = JSON.parse(this.responseText);

	// start by singling out the url we want to request which is "results":
	data.results;
	// next we want the first object of "results" so "0" [Tatooine]
	data.results[0];
	// then we want the "films"
	data.results[0].films;
	// and then we want the first url we get from the "films" array
	console.log(data.results[0].films[0]); // -> http://swapi.dev/api/films/1/ (this is a url we can request to get more information from)

	// now that we have the url we can save it to a variable
	const filmURL = data.results[0].films[0];

	// ** next we have to make a new XMLHttpRequest all over again
	const secondFilmReq = new XMLHttpRequest();

	// secondFilmReq success callback
	secondFilmReq.addEventListener("load", function() {
		console.log("secondFilmReq load worked!");

		// we access the data of our new url
		const filmData = JSON.parse(this.responseText);
		console.log(filmData.title); // -> A New Hope
	});
	// secondFilmReq error callback
	secondFilmReq.addEventListener("error", function(err) {
		console.log("secondFilmReq load Error!", err);
	});

	// we pass in "filmURL" which we got from our "firstReq"
	secondFilmReq.open("GET", filmURL);
	secondFilmReq.send();
	console.log("secondFilmReq sent!");
});
// firstReq error callback
firstReq.addEventListener("error", () => {
	console.log("Error!");
});

firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send();
console.log("Request sent!");

/**
====================================
Fetch:
	* https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
	* Newer way of making requests via JavaScript
	* Supports promises!
	* Not supported by Internet Explorer.
*/

/**
The key to Fetch:

The fetch() method takes one mandatory argument, the path to the resource you want to fetch. 

It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. 

You can also optionally pass in an init options object as the second argument
*/

// Example Syntax:
fetch("https://swapi.dev/api/", {
	headers : { Accept: "applcation/json" }
})
	.then((res) => {
		if (res.status !== 200) {
			console.log("Problem!", res.status);
			return;
		}
		res.json().then((data) => {
			console.log(data);
		});
	})
	.catch(function(err) {
		console.log("Fetch Error!", err);
	});

// ** Refactoring previous code with Fetch

// .json() method - Takes a response stream and reads it to completion. The only downside to this method is it takes time (it's asynchronous).

fetch("https://swapi.dev/api/planets/")
	.then((response) => {
		// we can throw an error inside of the .then and it will trigger the callback in the .catch
		if (!response.ok)
			throw new Error(`Status Code Error: ${response.status}`);

		// to make the body: ReadableStream readable we add the .json() method.
		// and if we want the actual data we need to add another .then and it will be resolved with the data that is read and parsed
		response.json().then((data) => {
			// now we have the data let's print out each planet
			for (let planet of data.results) {
				console.log(planet.name);
			}
		});
	})
	// when we throw an Error we have access to it here in our .catch
	.catch((err) => {
		console.log("Error with Fetch!");
		console.log(err);
	});

/**
====================================
Chaining Fetch Requests:
*/
fetch("https://swapi.dev/api/planets/")
	.then((response) => {
		if (!response.ok)
			throw new Error(`Status Code Error: ${response.status}`);

		// if we return response.json() we can move the .then outside of the promise
		return response.json();
	})
	// .then is moved here
	.then((data) => {
		const filmURL = data.results[0].films[0];
		console.log(filmURL); // -> http://swapi.dev/api/films/1/
		// now we can access the new url we got back
		// and since it is a promise we can return the fetch
		return fetch(filmURL);
	})
	// we can then put another .then here since we returned the fetch from the previous promise
	.then((response) => {
		if (!response.ok)
			throw new Error(`Status Code Error: ${response.status}`);

		return response.json();
	})
	.then((data) => {
		const filmTitle = data.title;
		console.log(
			`Fetched first film, based off of the first planet: ${filmTitle}`
		); // -> Fetched first film , based off of the first planet: A New Hope

		// In a galaxy far, far away...
		console.log(`Film description: ${data.opening_crawl}`);
	})
	.catch((err) => {
		console.log("Error with Fetch!");
		console.log(err);
	});

/**
====================================
Refactoring Fetch Chains:
*/

// since we're repeating our logic with .then(response) and .then(data) logic we can create standalone functions for these actions:

// ** check status and parse json function
// we must pass in "response" as the parameter
const checkStatusAndParse = (response) => {
	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

	// we must return a promise in order to chain .then
	return response.json();
};

// ** print planets function
// we pass in data as the parameter
const printPlanets = (data) => {
	console.log("	Loaded 10 more planets...");

	// looping through the planets
	for (let planet of data.results) {
		console.log(planet.name);
	}

	// in order to chain on the .then function calls we must return a promise

	// * method 1: Promise.resolve() (preferred)
	// we resolve with data.next because the fetchNextPlanets function expects a url as a parameter
	return Promise.resolve(data.next);

	// * method 2: new Promise (clunky)
	const prom = new Promise((resolve, reject) => {
		// we must resolve with "data" that we passed into the printPlanets functions as a parameter
		resolve(data);
	});
	// here our return allows us to continue to chain the .then's down below inside the Fetch
	return prom;
};

// ** fetch more planets function
// fetch next planets is expecting a url as the parameter
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
		console.log("Error with Fetch!");
		console.log(err);
	});

/**
====================================
Axios:
	* A library for making http requests
*/
