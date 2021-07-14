// 1. Logic for the autoComplete Search Widget
const createAutoComplete = ({
	root,
	renderOption,
	onOptionSelect,
	inputValue,
	fetchData
}) => {
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
	const input = root.querySelector("input");
	const dropdown = root.querySelector(".dropdown");
	const resultsWrapper = root.querySelector(".results");

	// 2.1 Logic for when the user types into the search bar
	const onInput = async (event) => {
		const items = await fetchData(event.target.value);

		if (!items.length) {
			dropdown.classList.remove("is-active");
			return;
		}

		resultsWrapper.innerHTML = "";
		dropdown.classList.add("is-active");

		for (let item of items) {
			const option = document.createElement("a");
			option.classList.add("dropdown-item");

			option.innerHTML = renderOption(item);

			option.addEventListener("click", () => {
				dropdown.classList.remove("is-active");
				input.value = inputValue(item);
				onOptionSelect(item);
			});

			resultsWrapper.appendChild(option);
		}
	};

	// 2.2 Call our debounce function from utils.js
	input.addEventListener("input", debounce(onInput, 500));

	// 2.3 Close the dropdown if user clicks outside dropdown
	document.addEventListener("click", (event) => {
		if (!root.contains(event.target)) {
			dropdown.classList.remove("is-active");
		}
	});
};
