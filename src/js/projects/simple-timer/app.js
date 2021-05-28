// Select our 3 elements from the index.html file
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// We create our instance of the Timer and pass in the 3 elements we just created
// We need to add an optional 4th argument to our Timer instance, meaning we will still be able to use our timer with or without the 4th argument.
// Inside the argument object, we're going to pass in a series of different callbacks that we're going to make sure get invoked at very specific times during our timers life cycle.
const timer = new Timer(durationInput, startButton, pauseButton, {
	// We need to make sure that these 3 callbacks are all optional.
	// This is how we are going to hook up our timer to the outside world and allow us to react to the timer starting, a second ticking down, or the timer completing.
	// This is going to also allow us to segment (isolate) the different parts of our code base.
	onStart() {
		console.log("Timer started!");
	},
	onTick() {
		console.log("Timer just ticked down!");
	},
	onComplete() {
		console.log("Timer is completed!");
	}
});
