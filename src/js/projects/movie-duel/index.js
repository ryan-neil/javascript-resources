// http://www.omdbapi.com/?apikey=1da41525&

const fetchData = async (searchTerm) => {
	const response = await axios.get("http://www.omdbapi.com/", {
		params: {
			apikey: "1da41525",
			s: searchTerm
		}
	});

	if (response.data.Error) {
		return [];
	}

	return response.data.Search;
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

		// 1. add exact movie title to selected movie option
		option.addEventListener("click", () => {
			input.value = movie.Title;
			dropdown.classList.remove("is-active");

			// 2. render selected movie to dom
			const renderedMovie = document.querySelector(".renderedMovie");
			const selectedMovie = document.createElement("div");

			selectedMovie.innerHTML = `
			<img src="${imgSrc}" />
			<h2>${movie.Title}</h2>
			`;

			renderedMovie.appendChild(selectedMovie);
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
