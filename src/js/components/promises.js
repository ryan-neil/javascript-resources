/*
JavaScript Notes and Documentation
Promises
*/

/**
====================================
Promises:
	* A Promise is an object representing the eventual completion or failure of an asynchronous operation.
	* Promises are Objects that we can attach callbacks to.
	* A Promise is in one of these states:
		- pending: initial state, neither fulfilled nor rejected.
		- fulfilled: meaning that the operation was completed successfully.
		- rejected: meaning that the operation failed.
*/

/**
 The 2 main things we need to understand about Promises are:
 	1. How we can create a Promise. How we can create a function that returns a promise.
	2. How we consume or interact with Promises.
*/

// Syntax:
new Promise((resolve, reject) => {
	// code
});

// Example 1: Create a Promise
// Create a Promise that is randomly resolved or rejected
const willGetADog = new Promise((resolve, reject) => {
	const rand = Math.random();

	if (rand < 0.5) {
		resolve();
	} else {
		reject();
	}
});

// Example 2: Interacting with a Promise. What to do if the Promise is resolved or rejected.
// .then() and .catch()

const willGetADog = new Promise((resolve, reject) => {
	const rand = Math.random();

	if (rand < 0.5) {
		resolve();
	} else {
		reject();
	}
});

// The ".then" method will run if our Promise is resolved
willGetADog.then(() => {
	console.log("Yay we got a dog!!!");
});

// The ".catch" method will run if our Promise is rejected
willGetADog.catch(() => {
	console.log("Aww we didn't get a dog.");
});

/**
====================================
Returning Promises with Functions:
*/

// Example:
const makeDogPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rand = Math.random();
			if (rand < 0.5) {
				resolve();
			} else {
				reject();
			}
		}, 5000);
	});
};
makeDogPromise()
	.then(() => {
		console.log("Yay we got a dog!!!");
	})
	// we can also just chain the .catch onto the .then
	.catch(() => {
		console.log("Aww we didn't get a dog.");
	});

/**
====================================
Resolving/Rejecting with Values:
	* We can reject or resolve a Promise with a value.
	* We can pass information in to the reject() or resolve() functions.
*/

// Example 1:
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rand = Math.random();
			if (rand < 0.3) {
				// pass in status information to reject()
				reject({ status: 404 });
			} else {
				resolve();
			}
		}, 3000);
	});
};
fakeRequest()
	.then(() => {
		console.log("Request worked!");
	})
	// we add a "response" parameter to .catch
	.catch((response) => {
		// log the "status" from the object we passed to reject() in fakeRequest above
		console.log(response.status);
		console.log("Request failed!");
	});

// Example 2: Passing in a URL to fakeRequest()
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// add a pages object with user information
			const pages = {
				users    : [
					{ id: 1, username: "Bilbo" },
					{ id: 5, username: "Katie" }
				],
				"/about" : "This is the about page!"
			};
			// assign the data variable to the pages url array
			const data = pages[url];
			// check to see if the url was in pages
			if (data) {
				// resolve with a status code of "200", also include the data
				resolve({ status: 200, data: data });
			} else {
				reject({ status: 404 });
			}
		}, 1000);
	});
};

fakeRequest("/about")
	.then((response) => {
		console.log("Status Code: ", response.status);
		console.log("Data: ", response.data);
		console.log("Request worked!");
	})
	.catch((response) => {
		console.log(response.status);
		console.log("Request failed!");
	});
// -> Status Code: 200
// -> Data:  This is the about page!
// -> Request worked!

fakeRequest("/contact")
	.then((response) => {
		console.log("Status Code: ", response.status);
		console.log("Data: ", response.data);
		console.log("Request worked!");
	})
	.catch((response) => {
		console.log(response.status);
		console.log("Request failed!");
	});
// -> 404
// -> Request failed!

/**
====================================
Chaining  Multiple Promises:
	* 
*/

// Example 1: Fake Http Request Function
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				"/users"        : [
					{ id: 1, username: "Bilbo" },
					{ id: 5, username: "Esmerelda" }
				],
				"/users/1"      : {
					id        : 1,
					username  : "Bilbo",
					upvotes   : 360,
					city      : "Lisbon",
					topPostId : 454321
				},
				"/users/5"      : {
					id       : 5,
					username : "Esmerelda",
					upvotes  : 571,
					city     : "Honolulu"
				},
				"/posts/454321" : {
					id    : 454321,
					title :
						"Ladies & Gentlemen, may I introduce my pet pig, Hamlet"
				},
				"/about"        : "This is the about page!"
			};

			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); // resolve with a value!
			} else {
				reject({ status: 404 }); // reject with a value!
			}
		}, 1000);
	});
};

// 1st request getting all users which gave us an ID we could use.
fakeRequest("/users")
	.then((resolve) => {
		console.log(resolve); // -> /users info
		const id = resolve.data[0].id;
		// 2nd request dependent on the data we got back from the 1st request using the ID we got from the 1st request.
		fakeRequest(`/users/${id}`).then((resolve) => {
			console.log(resolve); // -> /users/1 info
			const topPost = resolve.data.topPostId;
			// 3rd request with the new topPostId data we got back from the 2nd request.
			fakeRequest(`/posts/${topPost}`).then((resolve) => {
				console.log(resolve); // -> /posts/454321 info
			});
		});
	})
	// this catch error only works for fakeRequest("/users")
	.catch((error) => {
		console.log("Error!!!", error);
	});

// ** refactoring the above code:

// ** if we call a .then() and return a promise, we can call .then again immediately on the same level. We don't have to nest, we can just continue to chain them on. We also only need one .catch with this method.

// Promise 1
fakeRequest("/users")
	// this only runs if fakeRequest("/users") is resolved...
	.then((resolve) => {
		const id = resolve.data[0].id;
		// Promise 2
		return fakeRequest(`/users/${id}`);
	})
	// this only runs if fakeRequest(`/users/${id}`) is resolved...
	.then((resolve) => {
		const topPost = resolve.data.topPostId;
		// Promise 3
		return fakeRequest(`/posts/${topPost}`);
	})
	// this only runs if fakeRequest(`/posts/${topPost}`) is resolved...
	.then((resolve) => {
		console.log(resolve);
	})
	// with this method we only need one .catch()
	.catch((error) => {
		console.log("Error!!!", error);
	});
