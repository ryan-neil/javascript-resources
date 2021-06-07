// http://www.omdbapi.com/?apikey=1da41525&

// define our helper async function
const fetchData = async (searchTerm) => {
	// here we're going to use automated functionality inside of axios
	// we add in a second argument object to our get() method
	const response = await axios.get("http://www.omdbapi.com/", {
		// inside the argument we add a property called "params"
		params: {
			// inside the "params" object we list out all the different query string parameters that we want to pass along with the request
			// we can image this "params" object is going to be turned into a string and appended to the end of our URL, http://www.omdbapi.com/[appended params]
			apikey: "1da41525", // my personal API key
			// pass in "s" for a search call fro the key
			s: searchTerm
		}
	});

	const data = response.data; // the data property is going to be the information we get back from the API.
	console.log(data);
};

const input = document.querySelector("input");
// watch for the "input" event. the "input" event is triggered anytime the user changes the text inside the input.
// the second argument is the callback function that will be called with some "event" object.
input.addEventListener("input", (event) => {
	// here we call our fetchData async function with the value from the input
	fetchData(event.target.value); // this is how we gain access to the changed text. this will be what the user just typed into the input.
	// we then need to make sure that we receive this as an argument to the fetchData async function up top, we'll call it "searchTerm".
});

// ** If we want to try and search the API, we can take the variable "event.target.value" and pass it as an argument to "fetchData". We then need to do some work with "fetchData" to make sure it receives an argument and uses that as the query for a search of the API.
