// App Utility Functions

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
