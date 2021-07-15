// http://www.omdbapi.com/?apikey=1da41525&

// 1. Reusable search bar widget logic
const autoCompleteConfig = {
	async fetchData(searchTerm) {
		const response = await axios.get('http://www.omdbapi.com/', {
			params: {
				apikey: '1da41525',
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
		const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
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
	root: document.querySelector('#left-autocomplete'),
	onOptionSelect(movie) {
		document.querySelector('.tutorial').classList.add('is-hidden');
		onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
	}
});
// 3. Custom search bar widget logic for the right side
createAutoComplete({
	// Right side
	...autoCompleteConfig,
	root: document.querySelector('#right-autocomplete'),
	onOptionSelect(movie) {
		document.querySelector('.tutorial').classList.add('is-hidden');

		onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
	}
});

let leftMovie;
let rightMovie;

// 4. Get id from selected movie
const onMovieSelect = async (movie, summaryElement, side) => {
	// fetch specific movie data from user selection
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: '1da41525',
			i: movie.imdbID
		}
	});

	// get specific movie data from user selection
	const data = await response.data;

	// set summaryElement's innerHTML to movieTemplate HTML content
	summaryElement.innerHTML = movieTemplate(data);

	if (side === 'left') {
		// lets update the left movie variable
		leftMovie = response.data;
	} else {
		// else, it must be the right side
		rightMovie = response.data;
	}

	if (leftMovie && rightMovie) {
		runComparison();
	}
};

const runComparison = () => {
	const leftSideStats = document.querySelectorAll('#left-summary .notification');
	const rightSideStats = document.querySelectorAll('#right-summary .notification');

	// loop over either column
	leftSideStats.forEach((leftStat, idx) => {
		// leftStat is left side article elements
		// rightStat is right side article elements
		const rightStat = rightSideStats[idx];

		// get value property from each side
		const leftSideValue = parseInt(leftStat.dataset.value);
		const rightSideValue = parseInt(rightStat.dataset.value);

		// check which side is greater
		if (rightSideValue > leftSideValue) {
			// add left side classes to elements
			leftStat.classList.remove('is-primary');
			leftStat.classList.add('is-danger');
		} else {
			// add right side classes to elements
			rightStat.classList.remove('is-primary');
			rightStat.classList.add('is-danger');
		}
	});
};
runComparison();

// 5. set HTML rendering when user selects movie
const movieTemplate = (movieData) => {
	const dollars = parseInt(movieData.BoxOffice.replace(/\,/g, '').replace(/\$/g, ''));
	const metaScore = parseInt(movieData.Metascore);
	const imdbRating = parseFloat(movieData.imdbRating);
	const imdbVotes = parseInt(movieData.imdbVotes.replace(/,/g, ''));

	const awards = movieData.Awards.split(' ').reduce((prevValue, word) => {
		const value = parseInt(word);

		if (isNaN(value)) {
			// return the next value for the next iteration of the loop
			return prevValue;
		} else {
			// else, we're going to return the previous value we got plus the new value
			return prevValue + value;
		}
	}, 0);

	return `
	<article class="media">
		<figure class="media-left">
			<p class="image">
				<img src="${movieData.Poster}" alt="movie poster" />
			</p>
		</figure>

		<div class="media-content">
			<div class="content">
				<h1>${movieData.Title}</h1>
				<h4>${movieData.Genre}</h4>
				<p>${movieData.Plot}</p>
			</div>
		</div>
	</article>

	<!-- Awards -->
	<article data-value=${awards} class="notification is-primary">
		<p class="subtitle">Awards</p>
		<p class="title">${movieData.Awards}</p>
	</article>

	<!-- Box Office -->
	<article data-value=${dollars} class="notification is-primary">
		<p class="subtitle">Box Office</p>
		<p class="title">${movieData.BoxOffice}</p>
	</article>

	<!-- Metascore -->
	<article data-value=${metaScore} class="notification is-primary">
		<p class="subtitle">Metascore</p>
		<p class="title">${movieData.Metascore}</p>
	</article>

	<!-- IMDB Rating -->
	<article data-value=${imdbRating} class="notification is-primary">
		<p class="subtitle">IMDB Rating</p>
		<p class="title">${movieData.imdbRating}</p>
	</article>

	<!-- IMDB Votes -->
	<article data-value=${imdbVotes} class="notification is-primary">
		<p class="subtitle">IMDB Votes</p>
		<p class="title">${movieData.imdbVotes}</p>
	</article>
	`;
};
