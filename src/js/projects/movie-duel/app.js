// http://www.omdbapi.com/?apikey=1da41525&

const fetchData = async (searchTerm) => {
	const response = await axios.get("http://www.omdbapi.com/", {
		params: {
			apikey: "1da41525",
			s: searchTerm
		}
	});

	const data = response.data;
	console.log(data);
};

const input = document.querySelector("input");

// debounce helper function
// this will take an argument of a function called "callbackFunc"
// we also need to add all of our old code into our new "debounce" function
const debounce = (callbackFunc) => {
	// declare our "timeoutID" variable
	let timeoutID;
	// this is the wrapper function (we will be calling this function many times in a row)
	// we pass in "...args" (incase there are multiple arguments being passed to "callbackFunc()")
	return (...args) => {
		if (timeoutID) {
			clearTimeout(timeoutID);
		}

		timeoutID = setTimeout(() => {
			// call our callback function from "debounce"
			// we add ".apply()", which basically says, call the function as we normally would and take all the arguments inside of "...args" and pass them in as separate arguments to the original function ("callbackFunc").
			callbackFunc.apply(null, args);
		}, 1000);
	};
};

input.addEventListener("input", onInput);
