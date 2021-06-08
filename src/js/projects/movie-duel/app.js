// http://www.omdbapi.com/?apikey=1da41525&

// fetched data from our API
const fetchData = async (searchTerm) => {
	const response = await axios.get("http://www.omdbapi.com/", {
		params: {
			apikey: "1da41525",
			s: searchTerm
		}
	});

	// data (info) back from the API
	const data = response.data;
	console.log(data);
};

// selecting the input field
const input = document.querySelector("input");

// debounce function
const debounce = (callbackFunc, delay) => {
	let timeoutID;

	return (...args) => {
		if (timeoutID) {
			clearTimeout(timeoutID);
		}

		timeoutID = setTimeout(() => {
			callbackFunc.apply(null, args);
		}, delay);
	};
};

// user typed word to be searched by the API
const onInput = (event) => {
	fetchData(event.target.value);
};
// input field event listener
input.addEventListener("input", debounce(onInput, 1000));
