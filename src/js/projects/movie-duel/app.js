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

	// 1. reset the results list on new search
	resultsWrapper.innerHTML = "";

	dropdown.classList.add("is-active");
	for (let movie of movies) {
		const option = document.createElement("a");
		// 2. check to see if the API poster has a link or not
		const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;

		option.classList.add("dropdown-item");
		// 2.1 update the img src to take "imgSrc"
		option.innerHTML = `
      <img src="${imgSrc}" />
      <p>${movie.Title}</p>
    `;

		resultsWrapper.appendChild(option);
	}
};
input.addEventListener("input", debounce(onInput, 500));

// 3. hide the dropdown if user clicks out of dropdown list
document.addEventListener("click", (event) => {
	if (!root.contains(event.target)) {
		dropdown.classList.remove("is-active");
	}
});
