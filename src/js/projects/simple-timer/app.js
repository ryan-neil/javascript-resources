// create our Timer class
class Timer {
	constructor(durationInput, startButton, pauseButton) {
		// Here we store a reference to our arguments. This way we can easily work with them in the future.
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;

		// Here we bind some event listeners to those elements. This is how we will call the methods that are defined inside of our Timer class.
		this.startButton.addEventListener("click", this.start);
		this.pauseButton.addEventListener("click", this.pause);
	}

	// Here we make the start function an arrow functions. By doing this, the start function gets inserted into the constructor function which gives us access to the Timer object and all its properties.
	start = () => {
		this.tick(); // This makes the timer start right away without having to wait a full second before it starts the tick function.
		this.interval = setInterval(this.tick, 1000); // This run's this.tick once every 1 second.
	};

	// * In order to share information between different methods, we assign that information to an instance variable. To do this, in the start function we assign "this.interval" equal to the "setInterval" method.

	pause = () => {
		clearInterval(this.interval);
	};

	tick = () => {
		// We access the text input and get the current value, subtract 1 from it and then pass that updated value back into the input.
		this.timeRemaining = this.timeRemaining - 1; // Here we pass in our "setter" as the variable.
	};

	// * Behind the scenes, we are calling the "getter" (timeRemaining - 1) to retrieve that value. And we are calling the "setter" (this.timeRemaining) whenever we want to update the value.

	// getter function
	get timeRemaining() {
		return parseFloat(this.durationInput.value); // "this.durationInput.value" returns a string value. we need to turn this string value into a number by wrapping it in "parseFloat()".
	}

	// setter function
	set timeRemaining(time) {
		this.durationInput.value = time; // Here we're updating the value of timeRemaining and sending the new value back to the input element.
	}
	// * timeRemaining is technically a function but because we put the  "set" keyword in front of the function, whatever the value is that we assign it, is going to be automatically provided as the argument in the "set timeRemaining" function, which in our example is "time".
}

// Select our 3 elements from the index.html file
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// We create our instance of the Timer and pass in the 3 elements we just created
const timer = new Timer(durationInput, startButton, pauseButton);
