/*
JavaScript Notes and Documentation
Asynchronous Callbacks
*/

/**
====================================
Asynchronous Callbacks:
*/

// Example:
const btn = document.querySelector("button");

setTimeout(() => {
	btn.style.transform = `translateX(100px)`;
	// if we want to make the button move another 200px after 2 seconds we nest another setTimeout function
	setTimeout(() => {
		btn.style.transform = `translateX(200px)`;
		// if we want to keep making the button move we just have to keep on nesting setTimeout functions
		setTimeout(() => {
			btn.style.transform = `translateX(300px)`;
		}, 1000);
	}, 1000);
}, 1000);

// Making the above code a function:
const moveX = (element, amount, delay) => {
	setTimeout(() => {
		element.style.transform = `translateX(${amount}px)`;
	}, delay);
};
moveX(btn, 600, 1000);

// ** if we want to then replicate this before and have something happen after the delay we add another setTimeout.
// In order to do this we need our "moveX" function to accept a "callback":
const moveX = (element, amount, delay, callback) => {
	setTimeout(() => {
		element.style.transform = `translateX(${amount}px)`;
		// second, we need to execute the "callback" function inside the setTimeout
		if (callback) callback();
	}, delay);
};
// last, we need to pass in a callback [the arrow function in this case]
moveX(btn, 100, 1000, () => {
	// we could chain another callback...
	moveX(btn, 200, 1000, () => {
		// and another...
		moveX(btn, 300, 1000);
	});
});
