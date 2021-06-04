class Timer {
	constructor(durationInput, startButton, pauseButton, callbacks) {
		// Here we store a reference to our arguments. This way we can easily work with them in the future.
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;

		// We add a 4th argument to the constructor from our instanced timer's 4th argument with all the callbacks.
		// We also add a check to make this "callbacks" argument optional.
		if (callbacks) {
			// Here we're saving a reference to the callbacks that were passed in.
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}

		// Here we bind some event listeners to those elements. This is how we will call the methods that are defined inside of our Timer class.
		this.startButton.addEventListener("click", this.start);
		this.pauseButton.addEventListener("click", this.pause);
	}

	// Here we make the start function an arrow functions. By doing this, the start function gets inserted into the constructor function which gives us access to the Timer object and all its properties.
	start = () => {
		// We need to call the callback and signal that the timer is starting now.
		// We check if "this.onStart" is defined because it's possible that it won't be defined if we don't pass in any callbacks.
		if (this.onStart) {
			// if we do have a callback, then we're going to invoke it inside here.
			this.onStart(this.timeRemaining);
		}

		this.tick(); // This makes the timer start right away without having to wait a full second before it starts the tick function.
		this.interval = setInterval(this.tick, 50);
	};

	// * In order to share information between different methods, we assign that information to an instance variable. To do this, in the start function we assign "this.interval" equal to the "setInterval" method.

	pause = () => {
		clearInterval(this.interval);
	};

	// This function is going to reach into the text input, get the current value out of it, subtract 1 from it and then pass that updated value back into the input.
	// The "this.timeRemaining - 1" is pulling the timeRemaining logic from our "timeRemaining()" getter function ("parseFloat(this.durationInput.value)").
	tick = () => {
		// We need to add a checker for when the timer hits 0, pause the timer.
		if (this.timeRemaining <= 0) {
			this.pause();
			// Here we invoke our onComplete callback
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			this.timeRemaining = this.timeRemaining - 0.05; // this.timeRemaining => (setter) = this.timeRemaining - 1 => (getter)
			// Here we invoke the onTick callback
			if (this.onTick) {
				// pass in this.timeRemaining so our onTick function has access to it
				this.onTick(this.timeRemaining);
			}
		}
	};

	// getter function
	get timeRemaining() {
		return parseFloat(this.durationInput.value); // "this.durationInput.value" returns a string so we must use "parseFloat" built in JS function to turn the value into a number.
	}

	// setter function
	// This setter function changes the value inside the input.
	set timeRemaining(time) {
		// we add "toFixed(2)" to our time which will round the decimal to just 2 decimal places
		this.durationInput.value = time.toFixed(2);
	}

	// * we have hidden away all the complexity inside the getter and setter functions.
}
