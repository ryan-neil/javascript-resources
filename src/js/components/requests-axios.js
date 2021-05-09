/*
JavaScript Notes and Documentation
Requests - Axios
*/

/**
====================================
Axios:
	* Axios is a library for simplifying http requests
  * https://axios-http.com/docs/intro
  * In order to run Axios we must add the external script to our html file 
    * <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
*/

// Making a Request
axios.get("/user?ID=12345");

/* Axios simplifies things in 2 ways:
  1. We don't have to parse JSON data.
  2. We don't have to weed out the bad status code responses. With a none 200 (OK), or at least just the bad ones, status code it will be rejected.
*/

// Example: SWAPI
axios
	.get("https://swapi.dev/api/people/")
	// without Axios we have to parse the JSON manually, instead with axios we can just chain on the .then()'s:
	.then((response) => {
		console.log(response.data); // -> returns the parsed data
	})
	// when we used fetch we had to manually check the status code. Axios makes it so if the status code is anything other than 200, or "OK" it runs the .catch():
	.catch((err) => {
		console.log("Inside catch callback!", err);
	});

/**
====================================
Chaining Axios Requests:
*/
axios
	.get("https://swapi.dev/api/people/")
	// we don't need to parse
	// we can also destructure "data" from the results
	.then((response) => {
		const charData = response.data;
		console.log(charData);

		// print the characters
		for (let character of charData.results) {
			const charName = character.name;
			console.log(charName);
		}

		// we then make a request to the next page of characters. it's returned so we can chain the next .then() outside this .then() (cleaner and simpler)
		return axios.get(charData.next);
	})
	.then((response) => {
		const charData = response.data;
		console.log(charData);

		// print the characters
		for (let character of charData.results) {
			const charName = character.name;
			console.log(charName);
		}
	})
	.catch((err) => {
		console.log("Error:", err);
	});

// ** Refactoring the above code with functions

// ** function to fetch the next characters **
// it accepts a URL and that url will default to the SWAPI API url we give it
const fetchNextChars = (url = "https://swapi.dev/api/people/") => {
	return axios.get(url);
};

// ** function to print characters **
const printChars = (response) => {
	const charData = response.data;
	console.log(charData);

	for (let character of charData.results) {
		const charName = character.name;
		console.log(charName);
	}

	// we still have to manually resolve our Promise
	return Promise.resolve(charData.next);
};

fetchNextChars()
	.then(printChars)
	.then(fetchNextChars)
	.then(printChars)
	.then(fetchNextChars)
	.then(printChars)
	.catch((err) => {
		console.log("Error:", err);
	});

// ** we could then move each pair of "printChars()" and "fetchNextChars()" into their own function called "fetchAndPrint()" and that would return a promise and we could chain multiple fetchAndPrint()'s together
