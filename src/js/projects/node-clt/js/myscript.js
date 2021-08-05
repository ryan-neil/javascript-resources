let counter = 0;

// export an object
module.exports = {
	// functions for viewing the value of "counter" as well as setting it's value
	incrementCounter() {
		counter = counter + 1;
	},
	getCounter() {
		return counter;
	}
};
