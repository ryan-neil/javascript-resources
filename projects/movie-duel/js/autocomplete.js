// 1. Logic for the autoComplete Search Widget
const createAutoComplete = ({ root, fetchData, renderOption, onOptionSelect, inputValue }) => {
	// root is targeting the search bar widget parent container element
	root.innerHTML = `
    <label><b>Search Movie:</b></label>
    <input class="input" placeholder="i.e. avengers" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  `;
	// 2. Variables to target our index.html elements for manipulation
	const input = root.querySelector('input');
	const dropdown = root.querySelector('.dropdown');
	const resultsWrapper = root.querySelector('.results');

	// 2.1 Logic for when the user types into the search bar
	const onInput = async (event) => {
		// items returns our item results in an array
		const items = await fetchData(event.target.value);
		console.log(items);

		// check if the returned items array is empty and if true, close the dropdown window
		if (!items.length) {
			dropdown.classList.remove('is-active');
			return;
		}

		// reset the results list on new search
		resultsWrapper.innerHTML = '';
		dropdown.classList.add('is-active');

		// iterate over our returned options from the search
		for (let item of items) {
			const optionLink = document.createElement('a');

			optionLink.classList.add('dropdown-item');
			// call "renderOption" with "item" as the parameter
			optionLink.innerHTML = renderOption(item);

			// set click event listener on "optionLink"
			optionLink.addEventListener('click', () => {
				dropdown.classList.remove('is-active');
				// set input.value equal to our new config helper function
				input.value = inputValue(item);
				// call "onOptionSelect" from index.js file
				onOptionSelect(item);
			});

			// append our "option" selection to our results wrapper element in the DOM
			resultsWrapper.appendChild(optionLink);
		}
	};

	// 2.2 Call our debounce function from utils.js
	input.addEventListener('input', debounce(onInput, 500));

	// 2.3 If user clicks anywhere outside of the root dropdown element, close the dropdown
	document.addEventListener('click', (event) => {
		if (!root.contains(event.target)) {
			dropdown.classList.remove('is-active');
		}
	});
};
