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

	// now that we have the url we can save it to a variable [filmURL]
	const filmURL = data.results[0].films[0];

	// ** next we have to make a new XMLHttpRequest all over again...
	const secondFilmReq = new XMLHttpRequest();

	// secondFilmReq success callback
	secondFilmReq.addEventListener("load", function() {
		console.log("secondFilmReq load worked!");

		// we access the data of our new url
		const filmData = JSON.parse(this.responseText);
		console.log(filmData.title); // -> A New Hope
	});
	// secondFilmReq error callback
	secondFilmReq.addEventListener("error", function(e) {
		console.log("secondFilmReq load Error!", e);
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
*/
