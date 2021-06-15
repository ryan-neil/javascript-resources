// http://www.omdbapi.com/?apikey=1da41525&

const fetchData = async (searchTerm) => {
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
};

const root = document.querySelector(".autocomplete");
root.innerHTML = `
  <label><b>Search For a Movie</b></label>
  <input class="input" placeholder="Search movie" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = async (event) => {
	const movies = await fetchData(event.target.value);

	if (!movies.length) {
		dropdown.classList.remove("is-active");
		return;
	}

	resultsWrapper.innerHTML = "";

	dropdown.classList.add("is-active");
	for (let movie of movies) {
		const option = document.createElement("a");

		const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;

		option.classList.add("dropdown-item");
		option.innerHTML = `
      <img src="${imgSrc}" />
      <p>${movie.Title}</p>
    `;

		option.addEventListener("click", () => {
			input.value = movie.Title;
			dropdown.classList.remove("is-active");

			onMovieSelect(movie);
		});

		resultsWrapper.appendChild(option);
	}
};
input.addEventListener("input", debounce(onInput, 500));

document.addEventListener("click", (event) => {
	if (!root.contains(event.target)) {
		dropdown.classList.remove("is-active");
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
