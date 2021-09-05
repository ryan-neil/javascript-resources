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

// let's re-write our function to check if the element is going to go off screen
const btn = document.querySelector("button");

const moveX = (element, amount, delay, callback) => {
	// we want to get the width of the screen
	const bodyBoundary = document.body.clientWidth;
	const elRight = element.getBoundingClientRect().right;
	const currLeft = element.getBoundingClientRect().left;

	// now to check if the element is going to go off the screen
	if (elRight + amount > bodyBoundary) {
		console.log("Done!");
	} else {
		setTimeout(() => {
			// this makes it so we don't have to hard code in the pixel amount to move each time. This is done by calculating the current position on the screen [currLeft] and adding 100px to it
			element.style.transform = `translateX(${currLeft + amount}px)`;
			if (callback) callback();
		}, delay);
	}
};

moveX(btn, 100, 1000, () => {
	moveX(btn, 100, 1000, () => {
		moveX(btn, 100, 1000);
	});
});

/**
====================================
Success and Failure Callbacks:
*/

// How we would structure this (and how a lot of older javascript libraries are written) we would have 2 callbacks we pass in:
request(successCallback, failCallback);

// now we wouldn't write it like this above...they would be structured like functions:
request(
	() => {
		doSomething;
	},
	() => {
		doSomethingElse;
	}
);

/** In the example below:
	* [Success] Here's what I want you to do IF we CAN keep moving.
	* [Failure] Here's what I want you to do IF we CAN'T move anymore.
*/

const btn = document.querySelector("button");

// add "onSuccess" and "onFailure" callbacks to moveX
const moveX = (element, amount, delay, onSuccess, onFailure) => {
	// we re-write to put the conditional in the "setTimeout" function
	setTimeout(() => {
		const bodyBoundary = document.body.clientWidth;
		const elRight = element.getBoundingClientRect().right;
		const currLeft = element.getBoundingClientRect().left;

		if (elRight + amount > bodyBoundary) {
			// add "onFailure" function here
			onFailure();
		} else {
			element.style.transform = `translateX(${currLeft + amount}px)`;
			// add "onSuccess" function here
			onSuccess();
		}
	}, delay);
};

/*
// now we need to re-write this chunk to have 2 callbacks every time:

moveX(btn, 100, 1000, () => {
	moveX(btn, 100, 1000, () => {
		moveX(btn, 100, 1000);
	});
});
*/

moveX(
	btn,
	100,
	1000,
	() => {
		// 1st success callback. we add another "moveX"
		moveX(
			btn,
			400,
			1000,
			() => {
				// 2nd success callback. we add another "moveX"
				moveX(
					btn,
					700,
					1000,
					() => {
						// success message
						console.log("Whoa, we still have more screen?");
					},
					() => {
						// 3rd fail callback
						alert("Cannot move anymore!");
					}
				);
			},
			() => {
				// 2nd fail callback
				alert("Cannot move anymore!");
			}
		);
	},
	() => {
		// 1st fail callback
		alert("Cannot move anymore!");
	}
);

// ** Re-factoring with Promises

const btn = document.querySelector("button");

// moveX no longer accepts an onSuccess and onFailure as callbacks
const moveX = (element, amount, delay) => {
	// we must return a new promise here
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;

			if (elRight + amount > bodyBoundary) {
				// instead of calling onFailure() here, we just reject the promise (if we cant move)
				reject();
			} else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

// 1st Promise call
moveX(btn, 200, 1000)
	.then(() => {
		// instead of typing .then again we can chain a 2nd Promise by just returning it
		return moveX(btn, 200, 1000);
	})
	.then(() => {
		// 3rd Promise call
		return moveX(btn, 200, 1000);
	})
	.then(() => {
		// 4rd Promise call
		console.log("All finished moving!");
	})
	// we only need one .catch with this method
	.catch(() => {
		console.log("Oops you've gone too far!");
	});

// ** we can shorten the above code even more:
// 	* with arrow functions if we are returning something and it's the only expression we can use an implicit return

moveX(btn, 200, 1000)
	// if there's only one expression we can remove the return keyword
	.then(() => moveX(btn, 200, 1000))
	.then(() => moveX(btn, 200, 1000))
	.then(() => moveX(btn, 200, 1000))
	.then(() => console.log("All finished moving!"))
	// here we can destructure what we passed into our reject() call
	.catch(({ bodyBoundary, elRight, amount }) => {
		console.log(`Body is ${bodyBoundary}px wide`);
		console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
	});
