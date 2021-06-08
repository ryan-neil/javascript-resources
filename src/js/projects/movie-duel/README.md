# Movie Duel
<!-- <img src="" width="800" alt=""> -->

## Introduction
For this practice application, the user is going to use a search box on the left-hand side of the screen to search for a movie and use another search box on the right-hand side for a different movie.

Once the user has searched for two different movies we will display data from both of those movies. Data such as, earnings, critic rating, etc. These two movies will then go head to head on each of those subjects and which ever movie has a higher or better "score" we will highlight in green and the lower "score" will be highlighted in yellow.

The last feature to our practice application will be a "smart search" feature that shows suggestions for what the user is searching.

## 📂 File Tree
```bash
└─ movie-duel
  ├─ index.html
  ├─ style.css
  ├─ app.js
```

----
 
## ⚒️ Main Application Features
1. Smart search bar
2. Display real world data from movie searches
    * Harnessing [OMDb API](https://www.omdbapi.com/)
3. Highlight comparison feature

----

## 🗒️ Application Architecture 

### UI
__Search box__
```bash
└─ search-box
  ├─ default-state
  ├─ user starts typing...
  ├─ user finishes typing and we find matching movies -> show menu, display results
    ├─ user finishes typing and we find no results -> hide menu
  ├─ user presses "Enter" -> do nothing
    ├─ user clicks an entry -> update text, close menu
    ├─ user clicks outside the dropdown -> close menu
```
Steps:
  1. Show user a plain text input
    * Anytime the user types inside the text input we're going to initiate a search of our API and try and find some corresponding list of movies

### Logic

__Fetching data:__

We start by defining our helper async function. For this project we will be using Axios to help us make these requests.

For our project we're using the OMDb API. We need to pass in that API URL to our `axios.get()` method. Along with the API URL we also need to pass in a second argument. This argument with be an object with a property called `params`.

It should look something like this:
```js
const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      key: value,
      key: value // etc.
    }
  });

	response.data; // the data property is going to be the information we get back from the API.
};
fetchData();
```
Inside that `params` property object, we list out all the different query string parameters that we want to pass along with the request. We can imagine this `params` object is going to be turned into a string and appended to the end of our URL, `http://www.omdbapi.com/[appended params]`.

Let's try this out by querying a response:
```js
const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "abc12345", // your personal API key
      s: "avengers"
    }
  });

  console.log(response.data); // -> Object { Search: (10) } [we receive 10 movies that match "avengers" in an array]
};
fetchData();
```
And voilà! We're returned an object with an array of objects with all the movies that have "avengers" in the title.

__Searching the API on input change:__

Now that we know how to receive data back from the API, we need to create an input box that the user can use to search for movies. 

First things first, we need to create the input element in our html document and then select it with JavaScript. We will then need to attach an event listener to the input element and watch for an `input` event.

The `input` event is triggered anytime the user changes the text inside the input element. As the second argument we need to add in our callback function that is going to be called with some `event` object.

```js
const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "abc12345",
      s: "avengers"
    }
  });

  const data = response.data;
};

// select the input element and assign to a variable.
const input = document.querySelector("input");

// add our event listener listening for the "input" event.
input.addEventListener("input", (event) => {
  event.target.value; // this reference allows us access to that change text. this will be whatever the user just typed into the input.
});
```
> Note: We delete our `fetchData()` call because we no longer want to run our `fetchData()` function and search the API automatically when our application first starts.

Now, if we want to try and search the API, we can take `event.target.value` and pass it as an argument to `fetchData`. We then need to work with `fetchData` to make sure that it receives an argument and uses that as the query string for a search of the API.

Let's update our code and implement this:
```js
const fetchData = async (searchTerm) => { // 2. receive "event.target.value" as an argument to this function, we'll call it "searchTerm"
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "abc12345",
      s: searchTerm // 3. pass our "searchTerm" argument as a value to "s" (search key). this will now search the API for whatever the user types into the input
    }
  });

  const data = response.data;
  console.log(data);
};

const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  fetchData(event.target.value); // 1. call fetchData with the value from the input inside our event listener
});
```
This is working well except we have one issue. Our issue is we're doing a search of the API for every single key press. This is not ideal because we're only allowed access to the API 1,000 times per day. Let's explore how we're going to solve this below.

__Delaying search input:__

An ideal solution would be to allow the user to press a key inside the input field as many times as they want without triggering an API call. Only after we have about one second or so of nothing happening do we want to call search and send a request to the API.

To accomplish this we will be harnessing the power of the `setTimeout` function. Let's break this down. 

The first thing we want to do is save our `setTimeout` function to a variable called `onInput` and pass `onInput` into our event listener as the second argument. Let's have a look below:

```js
const input = document.querySelector("input");

// assign our event function to a variable
const onInput = (event) => {
  fetchData(event.target.value);
};

// we then pass it in as our second argument to the event listener
input.addEventListener("input", onInput);
```

We now need to add some logic to make sure we don't call input too often. For this, we will declare a variable called `timeoutID` directly above our `onInput` function. Our `timeoutID` variable will eventually take one of the ID's we get from calling `setTimeout` and we're going to assign one of those ID's to `timeoutID`.

Next, inside our `onInput` function we need to wrap our `fetchData` function with a `setTimeout` and as the second argument to `setTimeout` we will add 1000ms (1sec).

The last thing we need to do for this step is to make sure that we don't run any code until the user stops typing for a set amount of time. To implement this, we're going to take the timer that is returned from calling `setTimeout`, assign it to `timeoutID` and then set `timeoutID` equal to our `setTimeout`. Let's see this below:

```js
const input = document.querySelector("input");

// declare our variable
let timeoutID;
const onInput = (event) => {
  // assign "timeoutID" to "setTimeout"
  timeoutID = setTimeout(() => {
    fetchData(event.target.value);
  }, 1000);
};

input.addEventListener("input", onInput);
```

Okay, now for the magic. So just above our `setTimeout` function we need to add in an `if` statement.

```js
const input = document.querySelector("input");

let timeoutID;
const onInput = (event) => {
  
	// "if" statement
	if (timeoutID) {
		clearTimeout(timeoutID);
	}

  timeoutID = setTimeout(() => {
    fetchData(event.target.value);
  }, 1000);
};

input.addEventListener("input", onInput);
```

So behind the scenes, we will be calling `onInput` many times in a row (a user typing into the input field something like, "avengers", however many characters that is we will be calling `onInput` that number of times).

So the very first time `onInput` is going to be called, we will enter our `onInput` function and look and see if `timeoutID` is defined (our `if` statement). The first time we call `onInput`, `timeoutID` will return `undefined` so we are going to skip over our `if` statement entirely.

After skipping over our `if` statement we go down to our `setTimeout` and set up a timer and say, in one second call `fetchData`. We then assign that timer to `timeoutID`.

The user will then press on the second key on their keyboard, the second time they press the key, we will once again enter the `onInput` function. This time when we hit our `if` statement, `timeoutID` will be defined. So we enter the `if` statement and stop the pending timer at which point the `setTimeout` is going to be set up with a brand new timer. The brand new `fetchData` timer is going to have a new `value` that it will fetch data from the API with ("`a`", "`av`", "`ave`", "`aven`", etc...). This process with repeat itself over and over again until we eventually go one full second without typing inside the input field. At that point the API will be called with out `searchTerm`.

__Understanding debounce:__

Debouncing an input is when we are waiting for some time to pass after the last event to actually do something. In the life span of an application there can be many different scenarios in which we might want to bounce some events. This doesn't have to only be for text inputs either.

There may be some other scenarios that we would want to limit how often we make calls to our API for performance reasons. Because of this, it could be very useful for us to think of a way to refactor the code we just wrote to make it more usable by nature. It may turn out that we need to debounce other things inside our application at a future time.

Let's refactor our above code into more reusable code. This way we can also make the code more readable and hide the complexity of the logic as well.

For this we need to create a debounce helper function. This will take an argument of a function called `callbackFunc`. We also need to add all of our old code into our new `debounce` function.

```js
const input = document.querySelector("input");

// debounce helper function
const debounce = (callbackFunc) => {
	let timeoutID;

	// our wrapper function (this is the function we will be calling many times (our old "onInput" function))
	return () => {
		if (timeoutID) {
			clearTimeout(timeoutID);
		}

		timeoutID = setTimeout(() => {
			// call our callback function from "debounce"
			callbackFunc();
		}, 1000);
	};
};

input.addEventListener("input", onInput);
```
Add multiple arguments logic here...(1:54 minute mark)