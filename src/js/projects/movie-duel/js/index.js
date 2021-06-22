// http://www.omdbapi.com/?apikey=1da41525&

createAutoComplete({
	root: document.querySelector(".autocomplete"),
	renderOption(movie) {
		const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
		return `
      <img src="${imgSrc}" />
      <p>${movie.Title} (${movie.Year})</p>
    `;
	},
	onOptionSelect(movie) {
		onMovieSelect(movie);
	},
	inputValue(movie) {
		return movie.Title;
	},
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
	}
});

const onMovieSelect = async (movie) => {
	const response = await axios.get("http://www.omdbapi.com/", {
		params: {
			apikey: "1da41525",
			i: movie.imdbID
		}
	});

	document.querySelector("#summary").innerHTML = movieTemplate(response.data);
};

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
