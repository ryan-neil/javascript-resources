// http://www.omdbapi.com/?apikey=1da41525&

// 1. Reusable search bar widget logic
const autoCompleteConfig = {
	async fetchData(searchTerm) {
		const response = await axios.get("http://www.omdbapi.com/", {
			params: {
				apikey: "1da41525",
				s: searchTerm
			}
		});
		const data = response.data;
		if (data.Error) {
			return [];
		}

		return data.Search;
	},
	renderOption(movie) {
		const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
		return `
		<img src="${imgSrc}" />
		<p>${movie.Title} (${movie.Year})</p>
		`;
	},
	inputValue(movie) {
		return movie.Title;
	}
};

// 2. Custom search bar widget logic for the left side
createAutoComplete({
	// Left side
	...autoCompleteConfig,
	root: document.querySelector("#left-autocomplete"),
	onOptionSelect(movie) {
		document.querySelector(".tutorial").classList.add("is-hidden");
		// add second parameter to left side
		onMovieSelect(movie, document.querySelector("#left-summary"));
	}
});
// 3. Custom search bar widget logic for the right side
createAutoComplete({
	// Right side
	...autoCompleteConfig,
	root: document.querySelector("#right-autocomplete"),
	onOptionSelect(movie) {
		document.querySelector(".tutorial").classList.add("is-hidden");
		// add second parameter to right side
		onMovieSelect(movie, document.querySelector("#right-summary"));
	}
});

// 4. Get id of selected movie
// a. pass in "summaryElement" parameter
const onMovieSelect = async (movie, summaryElement) => {
	const response = await axios.get("http://www.omdbapi.com/", {
		params: {
			apikey: "1da41525",
			i: movie.imdbID
		}
	});

	// b. update to set "summaryElement"'s innerHTML
	summaryElement.innerHTML = movieTemplate(response.data);
};

// 5. HTML rendering when user selects movie
const movieTemplate = (movieDetail) => {
	return `
	<article class="media">
		<figure class="media-left">
			<p class="image">
				<img src="${movieDetail.Poster}" alt="movie poster" />
			</p>
		</figure>

		<div class="media-content">
			<div class="content">
				<h1>${movieDetail.Title}</h1>
				<h4>${movieDetail.Genre}</h4>
				<p>${movieDetail.Plot}</p>
			</div>
		</div>
	</article>

	<!-- Awards -->
	<article class="notification is-primary">
		<p class="subtitle">Awards</p>
		<p class="title">${movieDetail.Awards}</p>
	</article>

	<!-- Box Office -->
	<article class="notification is-primary">
		<p class="subtitle">Box Office</p>
		<p class="title">${movieDetail.BoxOffice}</p>
	</article>

	<!-- Metascore -->
	<article class="notification is-primary">
		<p class="subtitle">Metascore</p>
		<p class="title">${movieDetail.Metascore}</p>
	</article>

	<!-- IMDB Rating -->
	<article class="notification is-primary">
		<p class="subtitle">IMDB Rating</p>
		<p class="title">${movieDetail.imdbRating}</p>
	</article>

	<!-- IMDB Votes -->
	<article class="notification is-primary">
		<p class="subtitle">IMDB Votes</p>
		<p class="title">${movieDetail.imdbVotes}</p>
	</article>
	`;
};
