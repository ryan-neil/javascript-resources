// http://www.omdbapi.com/?apikey=1da41525&

// fetched data from our API
const fetchData = async (searchTerm) => {
	const response = await axios.get("http://www.omdbapi.com/", {
		params: {
			apikey: "1da41525",
			s: searchTerm
		}
	});

	return response.data.Search;
};

const input = document.querySelector("input");

const onInput = async (event) => {
	const movies = await fetchData(event.target.value);
	// 1. now we iterate over the movies and for every movie we're going to try and create a div element that summarizes the movie
	for (let movie of movies) {
		// 2. we create our div
		const div = document.createElement("div");

		// 3. set inner html on the div
		div.innerHTML = `
		<img src="${movie.Poster}" />
		<h2>${movie.Title}</h2>
		`;

		// 4. we need to append the "div" we created above to the "target" div we created in our "index.html" file
		document.querySelector("#target").appendChild(div);
	}
};

input.addEventListener("input", debounce(onInput, 1000));
