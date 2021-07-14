# Movie Duel
<!-- <img src="" width="800" alt=""> -->

## Introduction
For this practice application, the user is going to use a search box on the left-hand side of the screen to search for a movie and use another search box on the right-hand side for a different movie.

Once the user has searched for two different movies we will display data from both of those movies. Data such as, earnings, critic rating, etc. These two movies will then go head to head on each of those subjects and which ever movie has a higher or better "score" we will highlight in green and the lower "score" will be highlighted in yellow.

The last feature to our practice application will be a "smart search" feature that shows suggestions for what the user is searching.

### 📂 File Tree
```bash
├─ movie-duel
│ ├─ js
│ │ ├─ autocomplete.js
│ │ ├─ index.js
│ │ └─ utils.js
│ ├─ index.html
│ ├─ README.md
│ └─ style.css
```

----
 
### ⚒️ Application Features
1. Smart search bar
2. Display real world data from movie searches
    * Harnessing [OMDb API](https://www.omdbapi.com/)
3. Highlight comparison feature

----

### Table of Contents
1. [Application Architecture](#📝-application-architecture)
1. [Application Logic](#💭-application-logic)<br>
  2.1 [Fetching Data](#21-fetching-data)<br>
  2.2 [Searching the API on Input Change](#22-searching-the-api-on-input-change)<br>
  2.3 [Delaying Search Input](#23-delaying-the-search-input)<br>
  2.4 [Understanding Debounce](#24-understanding-debounce)<br>
  2.5 [Awaiting Async Functions](#25-awaiting-async-functions)<br>
  2.6 [Rendering Movies](#26-rendering-movies)<br>
  2.7 [Error Handling](#27-error-handling)<br>
  2.8 [Widget Styling](#28-widget-styling)<br>
  2.9 [Rendering HTML with JavaScript](#29-rendering-html-with-javascript)<br>
  2.10 [Cleaning up our Autocomplete Widget](#210-cleaning-up-our-autocomplete-widget)<br>
  2.11 [Handling Empty Responses](#211-handling-empty-responses)<br>
  2.12 [Handling Movie Selection](#212-handling-movie-selection)<br>
  2.13 [Making a Follow-up Request](#213-making-a-follow-up-request)<br>
  2.14 [Rendering an Expanded Summary](#214-rendering-an-expanded-summary)<br>
  2.15 [Rendering Additional Information](#215-rendering-additional-information)<br>
  2.16 [Code Base Before the Refactor](#216-code-base-before-the-refactor)<br>
  2.17 [Issues with the Code Base](#217-issues-with-the-code-base)<br>
  2.18 [Displaying Multiple Autocomplete's](#218-displaying-multiple-autocomplete's)<br>
  2.19 [Extracting Rendering Logic](#219-extracting-rendering-logic)<br>
  2.20 [Extracting Selection Logic](#220-extracting-selection-logic)<br>
  2.21 [Removing Movie References](#221-removing-movie-references)<br>
  2.22 [Consuming a Different Source of Data](#222-consuming-a-different-source-of-data)<br>
  2.23 [Refreshed HTML Structure](#223-refreshed-html-structure)<br>
  2.24 [Avoiding Duplication of Config](#224-avoiding-duplication-of-config)<br>
  2.25 [Hiding the Tutorial](#225-hiding-the-tutorial)<br>
  2.26 [Showing Two Summaries](#226-showing-two-summaries)<br>
  2.27 [When to Compare Our Stats](#227-when-to-compare-our-stats)<br>
  2.28 [How to Compare Our Stats](#228-how-to-compare-our-stats)<br>
  2.29 [Extracting Statistic Values](#229-extracting-statistic-values)<br>
  2.30 [Parsing Number of Awards](#230-parsing-number-of-awards)<br>
  2.31 [Applying Parsed Properties](#231-applying-parsed-properties)<br>

----

### 📝 Application Architecture 

__Search Box__
```bash
├─ search-box
│  ├─ default-state
│  ├─ user starts typing...
│  ├─ user finishes typing and we find matching movies -> show menu, display results
│  │  └─ user finishes typing and we find no results -> hide menu
│  └─ user presses "Enter" -> do nothing
│    ├─ user clicks an entry -> update text, close menu
│    └─ user clicks outside the dropdown -> close menu
```
----

### 💭 Application Logic

#### 2.1 Fetching Data

We start by defining our helper async function. For this project we will be using Axios to help us make these requests.

For our project we're using the [OMDb API](https://www.omdbapi.com/). We need to pass in that API URL to our `axios.get()` method. Along with the API URL, we also need to pass in a second argument. This argument with be an object with a property called `params`.

It should look something like this:
```js
const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      key: value
    }
  });

  response.data; // the data property is going to be the information we get back from the API.
};
fetchData();
```
Inside that `params` property object, we list out all the different query string parameters that we want to pass along with the request. We can imagine this `params` object is going to be turned into a string and appended to the end of our URL, like so: `http://www.omdbapi.com/[appended params]`.

Let's try this out by querying a response:
```js
const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "abc12345", // your personal API key
      s: "avengers"
    }
  });

  console.log(response.data); // -> Object { Search: (10) } (we receive 10 movies that match the search term "avengers" in an array)
};
fetchData();
```
And voilà! We're returned an object with an array of objects with all the movies that match the search term "avengers" in the title.

[⬆️ Top](#table-of-contents)

---

#### 2.2 Searching the API on Input Change

Now that we know how to receive data back from the API, we need to create an input box that the user can use to search for movies. 

First things first, we need to create the input element in our `index.html` file and then select it with JavaScript. We will then need to attach an event listener to that input element and watch for an `input` event.

The `input` event is triggered anytime the user changes the text inside the input element. As the second argument we need to add in our callback function that is going to be called with some `event` object.

Let's do that now:
```js
const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "abc12345",
      s: "avengers"
    }
  });

  console.log(response.data);
};

// 1. select the input element and assign to a variable
const input = document.querySelector("input");

// 2. add our event listener listening for the "input" event
input.addEventListener("input", (event) => {
  event.target.value; // 3. this reference allows us access to that change text (this will be whatever the user just typed into the input) 
});
```
> Note: We delete our `fetchData()` call because we no longer want to run our `fetchData()` function and search the API automatically when our application first starts.

Now, if we want to try and search the API, we can take `event.target.value` and pass it as an argument to `fetchData`. We then need to work with `fetchData` to make sure that it receives an argument and uses that as the query string for a search of the API.

Let's update our code and implement this:
```js
// 2. receive "event.target.value" as a parameter to this function, we'll call it "searchTerm"
const fetchData = async (searchTerm) => { 
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "abc12345",
      // 3. pass our "searchTerm" argument as a value to "s" (the API search key) (this will now search the API for whatever the user types into the input)
      s: searchTerm
    }
  });

  const data = response.data;
  console.log(data);
};

const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  // 1. call fetchData and pass in the value from the input (this will be what the user types into the input field)
  fetchData(event.target.value);
});
```
This is working well except we have one issue. Our issue is we're fetching a search of the API for every single key press. This is not ideal because we're only allowed access to the API 1,000 times per day. It's also not optimal for performance. Let's explore how we're going to solve this in the next section.

[⬆️ Top](#table-of-contents)

---

#### 2.3 Delaying Search Input

An ideal solution would be to allow the user to press a key inside the input field as many times as they want without triggering an API call. Only after we have about one second or so of nothing happening do we want to call search and send a request to the API.

To accomplish this we will be harnessing the power of the built in  `setTimeout` function. Let's break this down:

The first thing we want to do is save our `setTimeout` function to a variable called `onInput` and pass `onInput` into our event listener as the second argument. Let's have a look below:

```js
const fetchData = async (searchTerm) => {
  // fetchData logic
};

const input = document.querySelector("input");

// 1. assign our event function to a variable
const onInput = (event) => {
  fetchData(event.target.value);
};

// 2. we then pass it in as our second argument to the event listener
input.addEventListener("input", onInput);
```

We now need to add some logic to make sure we don't call input too often. For this, we will declare an empty variable called `timeoutID` directly above our `onInput` function. Our `timeoutID` variable will eventually take on one of the ID's we get from calling `setTimeout` and we'll assign one of those ID's to `timeoutID`.

Next, inside our `onInput` function we need to wrap our `fetchData` function with a `setTimeout` and as the second argument to `setTimeout` we will add 1000ms (1sec).

The last thing we need to do for this step is to make sure that we don't run any code until the user stops typing for a set amount of time. To implement this, we're going to take the timer that is returned from calling `setTimeout`, assign it to `timeoutID` and then set `timeoutID` equal to our `setTimeout`. This was a lot of logic so let's break it down below:

```js
const fetchData = async (searchTerm) => {
  // fetchData logic
};

const input = document.querySelector("input");

// 3. declare our variable
let timeoutID;
const onInput = (event) => {
  // 4. assign "timeoutID" to "setTimeout"
  timeoutID = setTimeout(() => {
    fetchData(event.target.value);
  }, 1000);
};

input.addEventListener("input", onInput);
```

Okay, now for the magic. So just above our `setTimeout` function we need to add in an `if` statement.

```js
const fetchData = async (searchTerm) => {
  // fetchData logic
};

const input = document.querySelector("input");

let timeoutID;
const onInput = (event) => {
  // 5. add in our "if" statement
  if (timeoutID) {
    clearTimeout(timeoutID);
  }

  timeoutID = setTimeout(() => {
    fetchData(event.target.value);
  }, 1000);
};

input.addEventListener("input", onInput);
```

So behind the scenes, we will be calling `onInput` many times in a row. It could be a user typing into the input field something like, "avengers", however many characters that is, we will be calling `onInput` that number of times.

So the very __first time__ `onInput` is going to be called, we will enter our `onInput` function and look and see if `timeoutID` is defined (this is being checked by our `if` statement). The __first time__ we call `onInput`, `timeoutID` will return `undefined` so we are going to skip over the `if` statement entirely.

After skipping over our `if` statement we go down to our `setTimeout` and set up a timer and say, in one second call `fetchData`. We then assign that timer to `timeoutID`.

The user will then press on the second key on their keyboard, so the __second time__ the user presses a key, let's say the user presses "`av`" for "avengers", we will once again enter the `onInput` function. This time when we hit our `if` statement, `timeoutID` will be defined. So we enter the `if` statement and stop the pending timer at which point the `setTimeout` is going to be set up with a brand new timer. The brand new `fetchData` timer is going to have a new `value` that it will fetch data from the API with, "`av`". This process with repeat itself over and over again, "`ave`", "`aven`", etc., until one full second passes without the user typing anything into the input field. At that point the API will be called with our `searchTerm`, "`avengers`".

Here's where we're at:
```js
const fetchData = async (searchTerm) => { 
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "abc12345",
      s: searchTerm
    }
  });

  const data = response.data;
  console.log(data);
};

const input = document.querySelector("input");

let timeoutID;
const onInput = (event) => {
  if (timeoutID) {
    clearTimeout(timeoutID);
  }

  timeoutID = setTimeout(() => {
    fetchData(event.target.value);
  }, 1000);
};

input.addEventListener("input", onInput);
```

[⬆️ Top](#table-of-contents)

---

#### 2.4 Understanding Debounce

__Debouncing__ an input is when we are waiting for some time to pass after the last event to actually do something. In the life span of an application there can be many different scenarios in which we might want to bounce some events. This doesn't just have to be for text inputs either.

There may be some other scenarios in our app that we would want to limit how often we make calls to our API for performance reasons. Because of this, it could be very useful for us to think of a way to refactor the code we just wrote to make it more usable by nature. It may turn out that we need to debounce other things inside our application at a future time.

Let's refactor our above code into more reusable code. This way we can add abstraction to some of the logic as well.

For this we need to create a debounce helper function. This will take an argument of a callback function called `func`. We also need to add all of our old code into our new `debounce` function.

```js
const fetchData = async (searchTerm) => {
  // fetchData logic
};

const input = document.querySelector("input");

// 1. create our debounce helper function
const debounce = (func) => {
  let timeoutID;

  // 2. our wrapper function (this is the function we will be calling many times)
  return () => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      // 3. call our callback function from "debounce"
      func();
    }, 1000);
  };
};

const onInput = (event) => {
  fetchData(event.target.value);
};

input.addEventListener("input", onInput);
```

There's one more thing we need to add to our code. In the future, the function callback (`func`) that we pass in to our `debounce` function may need to receive some kind of arguments. 

For this, we need to make sure that if we ever pass any arguments to our `return` wrapper function we have to essentially take the arguments that are being passed to the wrapper function and forward them on to our `func` callback function inside our `setTimeout`. Let's have a look at this below:

```js
const fetchData = async (searchTerm) => {
  // fetchData logic
};

const input = document.querySelector("input");

const debounce = (func) => {
  let timeoutID;

  // 4. here we're adding "...args" to be sure it works if multiple arguments are passed in
  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      // 5. here we add "apply()" to handle multiple arguments
      func.apply(null, args);
    }, 1000);
  };
};

// we're now left with a really clean and easy to read "onInput" function
const onInput = (event) => {
  fetchData(event.target.value);
};

input.addEventListener("input", onInput);
```
> Note: If we are only passing in one argument we would just pass `arg` to the wrapper function and also pass `arg` to our `func` inside the `setTimeout`.

In the above code, `.apply()` is basically saying call the function as we normally would and take all the arguments inside of `...args` and pass them in as separate arguments to the original function (`func`). Instead of hard coding in the number of arguments we're going to pass to our `func` function (`arg1 , arg2, arg3`, etc.), the `apply()` method is going to automatically keep track of however many arguments we pass through.

> Note: The `apply()` method takes arguments as an array. `call()` will take arguments separately.

So the last thing we need to do is apply the `debounce` function onto our `onInput` function. Let's do this now:

```js
const fetchData = async (searchTerm) => {
  // fetchData logic
};

const input = document.querySelector("input");

// 7. "onInput" gets passed into our "debounce" callback function ("func")
const debounce = (func) => {
  let timeoutID;

  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      func.apply(null, args);
    }, 1000);
  };
};

const onInput = (event) => {
  fetchData(event.target.value);
};

// 6. here we wrap "onInput" with our "debounce" function
input.addEventListener("input", debounce(onInput));
```

We can imagine that our `onInput` function is going to be received into `debounce` as `func`. And we are going to rate limit it on how often it can be invoked.

Lastly, we currently have a hard coded delay in our `setTimeout` for `1000`ms. We might want this delay to be easily changed by other developers working on our code. An easy way to accomplish this would be do pass in another argument to our `debounce` function. We'll call it `delay`.

```js
const input = document.querySelector("input");

// 8. add the second argument of "delay"
const debounce = (func, delay) => {
  let timeoutID;

  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      func.apply(null, args);
    }, delay); // 9. replace the hard coded 1000 with just "delay"
  };
};

const onInput = (event) => {
  fetchData(event.target.value);
};

// 10. now we add the second argument to "debounce" with how many milliseconds we want our "delay" to be for
input.addEventListener("input", debounce(onInput, 1000));
```

And thats it! We can now use our `debounce` function anywhere inside of our code whenever we need to introduce some type of rate limiting on how often a function can be invoked.

[⬆️ Top](#table-of-contents)

---

#### 2.5 Awaiting Async Functions

Let's return some usable data from `fetchData`. Once we get this "usable" data back, we will then make sure we can iterate over the data. For every movie we fetch, we will try and render out some content to the DOM.

Once we've done this, we will start to think about how we can select a movie by actually clicking on it.

Let's try and fetch only the data we want, movie data. 

> Note: We have moved our "debounce" function out to the `utils.js` file

First thing we want to do is replace our `console.log` with a `return` statement in `fetchData`. In our return statement we only want the `Search` results.

Next we're going to assign our `fetchData` function inside `onInput` to a variable we'll call `movies`. We must remember that `fetchData` is an async function. if we want to somehow wait on `fetchData` to actually get some data and get access to the `response` we need to treat it as if it were an async function. for this we add `await` keyword in-front of it.

Because we are using the `await` keyword inside `onInput`  we have to mark that `onInput` `event` as `async` as well.

Let's have a look:
```js
const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "abc12345",
      s: searchTerm
    }
  });

  // 1. replace the console.log with a return statement
  return response.data.Search;
};

const input = document.querySelector("input");

// 4. add "async" keyword to "event" inside "onInput"
const onInput = async (event) => {
  // 2. assign variable to "fetchData"
  // 3. add "await" keyword to "fetchData"
  const movies = await fetchData(event.target.value);
  console.log(movies);
};

input.addEventListener("input", debounce(onInput, 1000));
```

[⬆️ Top](#table-of-contents)

---

#### 2.6 Rendering Movies

Alright, now it's time to render some content onto the screen. For our project when a user searches for a movie we want to render content based on that search. When a user searches for a movie we will display:
  * The poster as an image for each movie
  * The title

The first thing we will do is loop over our movie objects we got back from `fetchData`. And inside our `for` loop we need to create a new element with `document.createElement()`. Then we'll set that element's inner content with `innerHTML` and of course append the element to the document (`.appendChild()`).

Let's check out the code:
```js
const fetchData = async (searchTerm) => {
  // fetchData logic
};

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  // 1. now we iterate over the movies
  for (let movie of movies) {
    // 2. create a "div" element
    const div = document.createElement("div");

    // 3. set inner content of "div" element
    div.innerHTML = `
    <img src="${movie.Poster}" />
    <h2>${movie.Title}</h2>
    `;

    // 4. append "div" to our existing div with id of "search-container"
    document.querySelector("#search-container").appendChild(div);
  }
};

input.addEventListener("input", debounce(onInput, 1000));
```
Pretty cool!

[⬆️ Top](#table-of-contents)

---

#### 2.7 Error Handling

Let's do some error handling. How we want our specific search bar to work is, if we don't get any data (information) back from the search, we won't display anything.

The best place to do this is in our `fetchData` function because that's where we're sending the requests from.

Let's add it in now:
```js
const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "abc12345",
      s: searchTerm
    }
  });

  // add in error handling
  if (response.data.Error) {
    return [];
  }

  return response.data.Search;
};
```
We are using `Error` because that is the way the API calls it's errors.

[⬆️ Top](#table-of-contents)

---

#### 2.8 Widget Styling

We want to try and reduce the coupling of our `index.html` file and our `app.js` file. In other words, we don't want these two files to rely on each other too much. This will make our lives a lot easier in the long run.

Generally, what we want to do is push off as much of the html generation to JavaScript as we can. Leaving our `index.html` as minimal as possible. For our project, what we're going to try and do is create one single `div` inside our `index.html` file and then in our `app.js` file we will append all our autocomplete widget html and JavaScript code inside of that single `div`.

With this approach we can easily create reusable widgets that we can interchange between different projects. Also, it makes it much easier to share our code with other developers.

[⬆️ Top](#table-of-contents)

---

#### 2.9 Rendering HTML with JavaScript

For our project, since we have two identical autocomplete search widgets, it would be a better strategy to implement the html code inside of our javascript file. This way we don't need a bunch of extra html code inside our `index.html` file and we can just create a function inside our `app.js` and reuse it throughout the project.

Let's breakdown how we're going to refactor our JavaScript code. The first thing we want to do is create a div called `autocomplete` inside our `index.html` file. This `autocomplete` div is going to house all the autocomplete widget content. 

Next, inside our `app.js` file, we're going to target that class and give it a name of `root`. I'm calling it `root` because it's going to act as the "root" container for all of our autocomplete widget html code.

Now that we have our root variable targeting the correct div container, we're going to add all the html code we need to make this widget function. 
 
Let's implement this below:
```js
const fetchData = async (searchTerm) => {
  // fetchData logic
};

// 1. target our div with the class of "autocomplete", name it "root"
const root = document.querySelector(".autocomplete");
// 2. add html content to the root div container
root.innerHTML = `
  <label class="label-heading">Search for a movie</label>
  <input class="input" placeholder="Search movie" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;
```

Now that we've created our new html elements right inside our JavaScript file, let's go ahead and target those elements. We already have our `input` element selected so we can leave that. The only other two elements we will need access to are the `dropdown` and `results` div classes.

Next, inside our `onInput` function, just above our `for` loop, we want to give our `dropdown` element with the class of `dropdown` another class of `is-active`. This is how the [Bulma docs](https://bulma.io/documentation/components/dropdown/#hoverable-or-toggable) knows to open the dropdown and we do this directly after we fetch all of our data successfully.

So the order of events should look something like this:
  * Fetch all of our data.
  * Open up the `dropdown`.
  * Then add all of our movies to the `dropdown`.

Next, we need to create a tag elements for all of our movie results. The [Bulma docs](https://bulma.io/documentation/components/dropdown/#dropdown-content) say it can be a `<a>` or a `<div>` tag. We will give our newly created `<a>` elements the class name of `dropdown-item` in order to style them nicely per the [Bulma docs](https://bulma.io/documentation/components/dropdown/#dropdown-content).

Lastly, all we need to do is append our created `<a>` tags, which we will call `option`, to `resultsWrapper`. I'm choosing to call our `<a>` tags `option` because that's essentially what they are when we search for a movie. The `<a>` tags will be displayed as search "options" we get to choose from.

Let's update our code below:
```js
const input = document.querySelector("input");
// 3. target our newly created elements from "root.innerHTML"
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  // 4. add the class of "is-active" to "dropdown"
  dropdown.classList.add("is-active");

  for (let movie of movies) {
    // 5. create anchor tags for each movie we get back from the search
    const option = document.createElement("a");

    // 6. add the class of "dropdown-item" to our anchor tags
    option.classList.add("dropdown-item");
    option.innerHTML = `
    <img src="${movie.Poster}" />
    <p>${movie.Title}</p>
    `;
    // 7. append "option" elements to the "resultsWrapper" container div
    resultsWrapper.appendChild(option);
  }
};

input.addEventListener("input", debounce(onInput, 1000));
```

[⬆️ Top](#table-of-contents)

---

#### 2.10 Cleaning up our Autocomplete Widget

The first thing we need to cleanup is when we search for a new movie, the results get listed under our old search results. We don't want this. What we're going to do is make sure that whenever we fetch a new list of movies, we clear out the existing movies inside our dropdown.

First step is to decide when should we clear out the existing list? I think a good place would be right after our `fetchData` inside `onInput`. To clear out the list is pretty straight forward. We're going to set our `resultsWrapper` inner HTML equal to an empty string and thats it.

Another feature we need to add to our `dropdown` is, if the user clicks anywhere outside of the `dropdown`, we want to close the `dropdown` window. Here's how we can accomplish this:

In the global document space we're going to add another `eventListener` to the `document`. We're going to watch for anytime the user clicks on any element in the document. We're then going to look at our `root` element because the `root` element encapsulates everything that has to do with our autocomplete widget. So we're going to check and see if the element that was clicked on is contained inside of `root`.

So essentially, if the user clicks on any of the elements inside of the `root` then we want the dropdown to stay open. But if the user clicks on any elements that are not contained in `root`, we want to close the dropdown.

Let's do that now:
```js
const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  // 1. reset the results list on new search
  resultsWrapper.innerHTML = "";

  dropdown.classList.add("is-active");
  for (let movie of movies) {
    const option = document.createElement("a");
    option.classList.add("dropdown-item");
    
    option.innerHTML = `
    <img src="${movie.Poster}" />
    <p>${movie.Title}</p>
    `;
    resultsWrapper.appendChild(option);
  }
};

input.addEventListener("input", debounce(onInput, 1000));

// 2. hide the dropdown if user clicks out of dropdown list
document.addEventListener("click", (event) => {
  if (!root.contains(event.target)) {
    dropdown.classList.remove("is-active");
  }
});
```

Real quickly, we seem to be getting an error message in our console about a broken image. This is the result of our API not having a particular "poster" for a certain movie. Let's clean this up now.

For this we will use a ternary operator, which if you recall, is basically a one line `if` statement. 

__Ternary Operator Syntax:__
```js
condition ? expIfTrue : expIfFalse
``` 
__So what we are trying to check for is__: if `movie.Poster` = `N/A` (the image source our API gives us if the movie does not have a poster), return an empty string (`""`) and if `movie.Poster` does not equal `N/A` return the `movie.Poster` image source. So basically if there is no movie poster then we wont show anything.

Let's have a look at this below:
```js
const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  resultsWrapper.innerHTML = "";

  dropdown.classList.add("is-active");
  for (let movie of movies) {
    const option = document.createElement("a");

    // 1. our check to see if the API poster has a link
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;

    option.classList.add("dropdown-item");
    // 2. update the "innerHTML" img src to receive "imgSrc"
    option.innerHTML = `
    <img src="${imgSrc}" />
    <p>${movie.Title}</p>
    `;
    resultsWrapper.appendChild(option);
  }
};

input.addEventListener("input", debounce(onInput, 1000));

document.addEventListener("click", (event) => {
  if (!root.contains(event.target)) {
    dropdown.classList.remove("is-active");
  }
});
```

[⬆️ Top](#table-of-contents)

---

#### 2.11 Handling Empty Responses

The next minor fix we are going to want to fix is, if a user searches for something but then deletes their input text, the dropdown stays open. We want the dropdown to close if this happens.

So to do this, we want to add our code right after we fetch the data in our `onInput` function. Let's take a look at `movies` and let's say that if there are no movies being returned, let's `return` early and don't run anything else inside of `onInput`.

Let's add this now:
```js
const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  // 1. check and see if there are any movies being returned
  if (!movies.length) {
    dropdown.classList.remove("is-active");
    return;
  }

  resultsWrapper.innerHTML = "";

  dropdown.classList.add("is-active");
  for (let movie of movies) {
    const option = document.createElement("a");

    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;

    option.classList.add("dropdown-item");
    option.innerHTML = `
    <img src="${imgSrc}" />
    <p>${movie.Title}</p>
    `;
    resultsWrapper.appendChild(option);
  }
};

input.addEventListener("input", debounce(onInput, 1000));

document.addEventListener("click", (event) => {
  if (!root.contains(event.target)) {
    dropdown.classList.remove("is-active");
  }
});
```

[⬆️ Top](#table-of-contents)

---

#### 2.12 Handling Movie Selection

We just have one last major user interaction we need to handle and that's if the user wants to actually click on a movie.

One thing that we would like to happen is, when the user selects a movie, we want the input field text to match exactly what the user clicked on. In addition to this, we want to also make sure that when a user clicks a movie, we want to close the dropdown.

Let's take care of this now:
```js
const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  if (!movies.length) {
    dropdown.classList.remove("is-active");
    return;
  }

  resultsWrapper.innerHTML = "";

  dropdown.classList.add("is-active");
  for (let movie of movies) {
    const option = document.createElement("a");

    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;

    option.classList.add("dropdown-item");
    option.innerHTML = `
    <img src="${imgSrc}" />
    <p>${movie.Title}</p>
    `;

    // 1. add selected movie title to text input field
    // 2. close the dropdown
    option.addEventListener("click", () => {
      input.value = movie.Title;
      dropdown.classList.remove("is-active");
    });

    resultsWrapper.appendChild(option);
  }
};

input.addEventListener("input", debounce(onInput, 1000));

document.addEventListener("click", (event) => {
  if (!root.contains(event.target)) {
    dropdown.classList.remove("is-active");
  }
});
```

[⬆️ Top](#table-of-contents)

---

#### 2.13 Making a Follow-up Request

The next thing we need to do is, take the movie the user has selected and render out some details to the DOM.

In order to do this, we need to remember that the API we're using has two different endpoints we're making use of. So far, we've been getting some results back from the "by search" method `s:` and that only gives us some very limited pieces of information about each movie.

So when a user selects an actual movie, we're going to need to make a follow-up request to the API. This time we need to fetch the selected movie's ID in order to get much more information back for that specific movie.

So what we're going to do is, once a user clicks on a movie:
  * We detect it with our `option.addEventListener`
  * We then need to make a follow-up request
  * Get more information about the movie
  * Use this information to update some content on the screen

Since our file is already becoming bloated with code, instead of adding the logic for this code inside our `option.addEventListener`, we're going to make a helper function to store it in. We'll call this new helper function `onMovieSelect()`. We can then pass in `onMovieSelect()` to the `option.addEventListener`.

Let's do this now:
```js
const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  if (!movies.length) {
    dropdown.classList.remove("is-active");
    return;
  }

  resultsWrapper.innerHTML = "";

  dropdown.classList.add("is-active");
  for (let movie of movies) {
    const option = document.createElement("a");

    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;

    option.classList.add("dropdown-item");
    option.innerHTML = `
    <img src="${imgSrc}" />
    <p>${movie.Title}</p>
    `;

    option.addEventListener("click", () => {
      input.value = movie.Title;
      dropdown.classList.remove("is-active");

      // 2. pass in "onMovieSelect()" with a "movie" object as the parameter
      onMovieSelect(movie);
    });

    resultsWrapper.appendChild(option);
  }
};

input.addEventListener("input", debounce(onInput, 1000));

document.addEventListener("click", (event) => {
  if (!root.contains(event.target)) {
    dropdown.classList.remove("is-active");
  }
});

// 1. add our movie select helper function to the bottom of the page
const onMovieSelect = async (movie) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "abc12345",
      i: movie.imdbID
    }
  });

  return response.data;
};
```

Let's break down our `onMovieSelect()` function logic. First things first, we isolate the function to the bottom of the page. Inside the function we're passing in a `movie` object as the parameter, this will be the movie the user selects. 

Next, we can essentially replicate the structure of our `fetchData()` asynchronous function at the top of our file. The only adjustment we need to make is to substitute the `s:` key and `searchTerm` value with, `i:` and `movie.imdbID`. 

Again, `movie` is going to be which ever movie our user selects from the search. This `movie` is then being passed in as an object as the parameter to `onMovieSelect()` and from that movie object we are targeting the movies `imdbID` so we can receive a lot more data on that particular movie.

[⬆️ Top](#table-of-contents)

---

#### 2.14 Rendering an Expanded Summary

What we now want to do is render out some content we are now getting back from our `onMovieSelect()` function. Since, this is going to end up being a lot of HTML, instead of cramming it all inside of the `onMovieSelect()` function, we're going to create another helper function for all this logic. We'll call this helper function `movieTemplate()`.

Let's build our `movieTemplate()` helper function below:
```js
const onMovieSelect = async (movie) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "abc12345",
      i: movie.imdbID
    }
  });

  // 3. target the div with id of "summary" from index.html and set the inner html
  document.querySelector("#summary").innerHTML = movieTemplate(response.data);
};

// 1. add "movieTemplate" helper function with "movieData" parameter.
const movieTemplate = (movieData) => {
  // 2. add the html
  return `
  <article class="media">
    <figure class="media-left">
      <p class="image">
        <img src="${movieData.Poster}" alt="movie poster" />
      </p>
    </figure>

    <div class="media-content">
      <div class="content">
        <h1>${movieData.Title}</h1>
        <h4>${movieData.Genre}</h4>
        <p>${movieData.Plot}</p>
      </div>
    </div>
  </article>
  `;
};
```

Let's break down the above code. The first thing we're doing is creating our `movieTemplate()` helper function. This function with house all of our html and rendered content. `movieTemplate()` is going to receive a parameter called `movieData`. We chose this name because that parameter is going to be the really big object of specific properties we get back from `onMovieSelect`'s `response.data`.

Next, we are going to add all the html we need in order to display and style the rendered content. 

Now that all the html has been added to `movieTemplate()`, inside of `onMovieSelect()` we target our div with id of `summary` from `index.html` and set the inner html equal to `movieTemplate()`. Then all we need to do is pass in `response.data` to the parameter of `movieTemplate()`.

[⬆️ Top](#table-of-contents)

---

#### 2.15 Rendering Additional Information

Now that we have a good grasp of how we can request information from our API and display it on the screen, let's render out some additional information about the selected movie.

For this, we will just be working with our `movieTemplate()` function. And all we're doing is adding more html to the function. 

Let's do that now:
```js
const movieTemplate = (movieData) => {
  return `
  <!-- Movie Poster -->
  <article class="media">
    <figure class="media-left">
      <p class="image">
        <img src="${movieData.Poster}" alt="movie poster" />
      </p>
    </figure>

    <!-- Movie Content -->
    <div class="media-content">
      <div class="content">
        <h1>${movieData.Title}</h1>
        <h4>${movieData.Genre}</h4>
        <p>${movieData.Plot}</p>
      </div>
    </div>
  </article>

  <!-- 1. add more html content to the function. -->
  <!-- Awards -->
  <article class="notification is-primary">
    <p class="subtitle">Awards</p>
    <p class="title">${movieData.Awards}</p>
  </article>

  <!-- Box Office -->
  <article class="notification is-primary">
    <p class="subtitle">Box Office</p>
    <p class="title">${movieData.BoxOffice}</p>
  </article>

  <!-- Metascore -->
  <article class="notification is-primary">
    <p class="subtitle">Metascore</p>
    <p class="title">${movieData.Metascore}</p>
  </article>

  <!-- IMDB Rating -->
  <article class="notification is-primary">
    <p class="subtitle">IMDB Rating</p>
    <p class="title">${movieData.imdbRating}</p>
  </article>

  <!-- IMDB Votes -->
  <article class="notification is-primary">
    <p class="subtitle">IMDB Votes</p>
    <p class="title">${movieData.imdbVotes}</p>
  </article>
  `;
};
```

[⬆️ Top](#table-of-contents)

---

#### 2.16 Code Base Before the Refactor

Now that we've wrapped up phase 1 of the project, let's see where our code base currently stands:

```js
// Fetch data from the API
const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "abc12345",
      s: searchTerm
    }
  });

  // If we don't receive any data back from the API, display nothing
  if (response.data.Error) {
    return [];
  }

  // Return [Search] data from the API
  return response.data.Search;
};

// Select our root element that all our autocomplete widget content will go in
const root = document.querySelector(".autocomplete");
root.innerHTML = `
  <label class="label-heading">Search for a movie</label>
  <input class="input" placeholder="Search movie" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

// All the logic for when the user types into the input search field
const onInput = async (event) => {
  // Fetch data from the API for the movie the user typed into the input
  const movies = await fetchData(event.target.value);

  // If no movies are returned from the search, close the dropdown
  if (!movies.length) {
    dropdown.classList.remove("is-active");
    return;
  }

  // Reset the results list on new search
  resultsWrapper.innerHTML = "";

  // Add the class of "is-active" to "dropdown"
  dropdown.classList.add("is-active");

  // Loop through our returned movies 
  for (let movie of movies) {

    // For each movie create an anchor element
    const option = document.createElement("a");
    // Check to see if the returned movie has a poster, if not display nothing
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;

    // add the class of "dropdown-item" to our new option elements being created and set the inner HTML
    option.classList.add("dropdown-item");
    option.innerHTML = `
    <img src="${imgSrc}" />
    <p>${movie.Title}</p>
    `;

    // If a movie is selected (clicked) set the input text to the exact movie title and close the dropdown
    option.addEventListener("click", () => {
      input.value = movie.Title;
      dropdown.classList.remove("is-active");

      // Pass in "onMovieSelect()" with a "movie" object as the parameter
      onMovieSelect(movie);
    });

    // Append our "option" selection to our results wrapper element in the DOM
    resultsWrapper.appendChild(option);
  }
};

// Our debounce function from utils.js file
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

input.addEventListener("input", debounce(onInput, 1000));

// If user clicks anywhere outside of the root dropdown element, close the dropdown
document.addEventListener("click", (event) => {
  if (!root.contains(event.target)) {
    dropdown.classList.remove("is-active");
  }
});

// Helper function for our follow up request to get the specific movie ID
const onMovieSelect = async (movie) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "abc12345",
      i: movie.imdbID
    }
  });

  // Set the inner HTML of our target element (summary) to the content we added to our helper function "movieTemplate". The parameter to "movieTemplate" is going to be the specific ID we got back from our second API request.
  document.querySelector("#summary").innerHTML = movieTemplate(response.data);
};

// Helper function that renders out all of our HTML to be displayed on the screen once a movie is selected
const movieTemplate = (movieData) => {
  return `
  <!-- Movie Poster -->
  <article class="media">
    <figure class="media-left">
      <p class="image">
        <img src="${movieData.Poster}" alt="movie poster" />
      </p>
    </figure>

    <!-- Movie Content -->
    <div class="media-content">
      <div class="content">
        <h1>${movieData.Title}</h1>
        <h4>${movieData.Genre}</h4>
        <p>${movieData.Plot}</p>
      </div>
    </div>
  </article>

  <!-- Awards -->
  <article class="notification is-primary">
    <p class="subtitle">Awards</p>
    <p class="title">${movieData.Awards}</p>
  </article>

  <!-- Box Office -->
  <article class="notification is-primary">
    <p class="subtitle">Box Office</p>
    <p class="title">${movieData.BoxOffice}</p>
  </article>

  <!-- Metascore -->
  <article class="notification is-primary">
    <p class="subtitle">Metascore</p>
    <p class="title">${movieData.Metascore}</p>
  </article>

  <!-- IMDB Rating -->
  <article class="notification is-primary">
    <p class="subtitle">IMDB Rating</p>
    <p class="title">${movieData.imdbRating}</p>
  </article>

  <!-- IMDB Votes -->
  <article class="notification is-primary">
    <p class="subtitle">IMDB Votes</p>
    <p class="title">${movieData.imdbVotes}</p>
  </article>
  `;
};
```

[⬆️ Top](#table-of-contents)

---

#### 2.17 Issues with the Code Base

The way we've written our code so far has some pretty big issues with the current implementation. The goal of this section is to figure out some ways we can fix the current implementation before we move on to phase 2 of our project.

So at this point we are going to do some really big refactors. The goal of these refactors is to help us get an idea of how to write more reusable code.

Let's take a look at some current overwhelming issues with our code base:

__Issues with Implementation:__

  * All our code touches everything
  * Autocomplete widget is suppose to be reusable
  * Autocomplete has knowledge of what a movie object is
  * Autocomplete has knowledge of what to show for each option
  * Autocomplete has knowledge of what to do when a movie is clicked
  * Many global variables refer to specific elements - it will be really hard to show a _second_ autocomplete on the screen

__Solution:__

Now that we have a better understanding of what's wrong with our current code implementation. Let's discuss how we can fix all of these issues.

At the moment we have a lot of un-reusable code inside our `index.js` file. What we want is for our `index.js` file to be strictly used for non-reusable code for our very specific project. We then want another separate file called `autocomplete.js` for our reusable code to get an autocomplete to work. 

This `autocomplete.js` file should work without any knowledge of "movies", "recipes", "blogs", etc. It must also be able to be called multiple times throughout the application.

Let's breakdown our two new files a bit more:

`index.js`: Specific non-reusable code
```bash
├─ Configuration for Autocomplete
│ ├─ fetchData() - function to find movies
│ ├─ renderOption() - function that knows how to render a movie
│ ├─ onOptionSelect() - function that gets invoked when a user clicks an option
│ └─ root - element that the autocomplete should be rendered into
```

`autocomplete.js`: Unspecific reusable code
```bash
└─ function that will take the autocomplete configuration and render an autocomplete on the screen
```

[⬆️ Top](#table-of-contents)

---

#### 2.18 Displaying Multiple Autocomplete's

Our goal for right now is the ability to show multiple, different autocomplete's on the screen at the same time. So we should be able to create multiple configuration objects and pass each of them into some autocomplete function. The autocomplete function should then create the autocomplete in those different root elements.

First thing we do is create a function called `createAutoComplete()` inside our `autocomplete.js` file. Next, we pass in all of the logic having to do with our autocomplete widget from the `index.js` file.

We will be calling `createAutoComplete()` multiple times throughout the application. When we call it, we will be passing in some "configuration" object as a parameter. This "configuration" object is going to have all the custom functionality that specify how the autocomplete should work.

In order to make our `createAutoComplete` function more usable we want to destructure the `root` object. Now, since `{ root }` is being provided as an option, the `createAutoComplete` function no longer has to figure out where to render the autocomplete on it's own.

Let's look at this below:
```js
// ** autocomplete.js **

// 1. create "createAutoComplete" function
// 1.1 extract "root" from configuration object
const createAutoComplete = ({ root }) => {
  root.innerHTML = `
    <label><b>Search For a Movie</b></label>
    <input class="input" placeholder="Search movie" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  `;

  const input = document.querySelector("input");
  const dropdown = document.querySelector(".dropdown");
  const resultsWrapper = document.querySelector(".results");

  const onInput = async (event) => {
    // onInput logic...
  };
  input.addEventListener("input", debounce(onInput, 500));

  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
```

Our next step to make this more reusable is to refactor our `input`, `dropdown`, and `resultsWrapper` variables.

Right now, the `input`, `dropdown` and `resultsWrapper` are trying to find just some `input`/`dropdown`/`resultsWrapper` in the whole document. We don't want this. Instead, we want to try and find these elements that are just inside the `root` element.

To do this, instead at looking at the entire `document`, we're going to look specifically inside the `root` element.

We'll handle this now:
```js
// ** autocomplete.js **

const createAutoComplete = ({ root }) => {
  root.innerHTML = `
    <label><b>Search For a Movie</b></label>
    <input class="input" placeholder="Search movie" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  `;

  // 2. change the "document.querySelector" to "root.querySelector"
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");

  const onInput = async (event) => {
    // onInput logic...
  };
  input.addEventListener("input", debounce(onInput, 500));

  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
```

Now that we've updated our `createAutoComplete` function a bit more, we can head back over to our `index.js` file and we can try and call `createAutoComplete()` multiple times. Each time we call it, we're going to form up a different "configuration" object that has a different `root` element to render the autocomplete into.

Before we can do this though we need to head over to our `index.html` file and make sure that there are different elements that we can render these separate autocomplete's into.

For this, we'll create three different `autocomplete` div classes like this:
```html
<!-- ** index.html file -->

<div class="container">
  <div class="autocomplete"></div>
  <div class="autocomplete-two"></div>
  <div class="autocomplete-three"></div>
  <div id="summary"></div>
</div>
```

> Note: This exercise is just for testing purposes. We will remove the two additional `autocomplete`'s when we're done here.

Then, in our `index.js` file we can call `createAutoComplete()` three separate times and pass in our target div element classes from `index.html`

```js
// ** index.js **

const fetchData = async (searchTerm) => {
  // fetchData logic
};

// 1. call "createAutoComplete" and pass in the configuration objects
createAutoComplete({
  root: document.querySelector(".autocomplete")
});
createAutoComplete({
  root: document.querySelector(".autocomplete-two")
});
createAutoComplete({
  root: document.querySelector(".autocomplete-three")
});

const onMovieSelect = async (movie) => {
  // onMovieSelect logic
};

const movieTemplate = (movieData) => {
  // movieTemplate logic
};
```

Okay! So this is working really well. We will continue to refactor our code in the sections below.

[⬆️ Top](#table-of-contents)

---

#### 2.19 Extracting Rendering Logic

We want to continue to add some additional functions to that "configuration" object that we're passing to the `createAutoComplete` function. We're then going to refactor the function to make sure it uses the functions we had provided instead of locating all the logic directly inside of the `createAutoComplete` function. 

The first function we're going to add is our `renderOption` function. So we pass in `renderOption` as the second configuration object. In this function we expect to receive some object that represents some possible movie or whatever else. For our example we will refer to it as `movie`.

Next, inside `renderOption` we're going to generate some html and `return` it. This will be the html that gets shown for each individual `movie` option.

Let's do this now:
```js
// ** index.js **

const fetchData = async (searchTerm) => {
  // fetchData logic
};

createAutoComplete({
  root: document.querySelector(".autocomplete"),
  // 1. pass in a second configuration object
  renderOption(movie) {
    // 2. generate and return the html for each "movie" option
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
      <img src="${imgSrc}" />
      <p>${movie.Title}</p>
    `;
  }
});

const onMovieSelect = async (movie) => {
  // onMovieSelect logic
};

const movieTemplate = (movieData) => {
  // movieTemplate logic
};
```

Now we have extracted all of our rendering logic into the `renderOption` function and it will now be called many times automatically with each movie that autocomplete fetches.

So now with that out of the way, we just need to make sure that the `createAutoComplete` function references the `renderOption` function to figure out what each movie option should look like.

To do this, we need to go back to our `autocomplete.js` file and at the top in our `createAutoComplete` function, we need to destructure out the `renderOption` function.

Next, inside the `for` loop, we set our `option.innerHTML` to equal `renderOption()` with `movie` as the parameter that we will be iterating over.

Let's add this now:
```js
// ** autocomplete.js **

// 1. extract "renderOption" from configuration object
const createAutoComplete = ({ root, renderOption }) => {
  root.innerHTML = `
    <label><b>Search For a Movie</b></label>
    <input class="input" placeholder="Search movie" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  `;

  const input = document.querySelector("input");
  const dropdown = document.querySelector(".dropdown");
  const resultsWrapper = document.querySelector(".results");

  const onInput = async (event) => {
    const movies = await fetchData(event.target.value);

    if (!movies.length) {
      dropdown.classList.remove("is-active");
      return;
    }

    resultsWrapper.innerHTML = "";

    dropdown.classList.add("is-active");
    for (let movie of movies) {
      const option = document.createElement("a");

      option.classList.add("dropdown-item");
      // 2. now in the "innerHTML" we're going to call "renderOption" with "movie" as the parameter
      option.innerHTML = renderOption(movie);
      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = movie.Title;

        onMovieSelect(movie);
      });

      resultsWrapper.appendChild(option);
    }
  };
  input.addEventListener("input", debounce(onInput, 500));

  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
```

And there we go! We've extracted some custom logic that is only appropriate for this movie related information. The benefit of this is that if we ever decide we want the autocomplete to look different, we only need to update the `renderOption` function back inside of our `index.js` file.

[⬆️ Top](#table-of-contents)

---

#### 2.20 Extracting Selection Logic

The next refactor we're going to implement if for `onOptionSelect()` (was `onMovieSelect()`). So for this function, we're going to pull out all the logic that decides what function to run whenever a user selects an option.

First, in our `index.js` file, we head over to where we call our `createAutoComplete` function and inside there we need to pass in another configuration function called `onOptionSelect`. `onOptionSelect` is going to take a parameter of `movie`, this will be whatever object the user clicks on from the dropdown. Inside `onOptionSelect`, we need to call `onMovieSelect` and also pass in `movie` for the parameter.

We'll do that now:
```js
// ** index.js **

const fetchData = async (searchTerm) => {
  // fetchData logic
};

createAutoComplete({
  root: document.querySelector(".autocomplete"),
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
      <img src="${imgSrc}" />
      <p>${movie.Title}</p>
    `;
  },
  // 1. pass in 3rd configuration function to createAutoComplete
  onOptionSelect(movie) {
    // 2. call "onMovieSelect" with parameter of "movie"
    onMovieSelect(movie);
  }
});

const onMovieSelect = async (movie) => {
  // onMovieSelect logic
};

const movieTemplate = (movieData) => {
  // movieTemplate logic
};
```

Next, we head over to `autocomplete.js` and inside of `onInput` and inside there we have our `for` loop, after we created our `option` we have the `option.eventListener` which has a function that is going to run after a user clicks on the individual option. Inside this function, instead of calling `onMovieSelect`, we are now going to call `onOptionSelect`.

Note, this may seem like a very insignificant change, just changing the name of the callback function? Big deal, right? The point of this is, if we had some scenario where we wanted to call a different function there, like if we were using our autocomplete on another application, we would have to open the source code for "`onMovieSelect`" and change that line of code. 

This is not ideal. We don't want to have to edit the source code of `autocomplete.js`. So, by making this change, we have extracted deciding what to do when a user clicks on an option into this "configuration" object over in our `index.js` file. Which is going to contain all of our application specific code.

Let's add this step now:
```js
// ** autocomplete.js **

// 3. extract "onOptionSelect" from configuration object
const createAutoComplete = ({ root, renderOption, onOptionSelect }) => {
  root.innerHTML = `
    <label><b>Search For a Movie</b></label>
    <input class="input" placeholder="Search movie" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  `;

  const input = document.querySelector("input");
  const dropdown = document.querySelector(".dropdown");
  const resultsWrapper = document.querySelector(".results");

  const onInput = async (event) => {
    const movies = await fetchData(event.target.value);

    if (!movies.length) {
      dropdown.classList.remove("is-active");
      return;
    }

    resultsWrapper.innerHTML = "";

    dropdown.classList.add("is-active");
    for (let movie of movies) {
      const option = document.createElement("a");

      option.classList.add("dropdown-item");
      option.innerHTML = renderOption(movie);
      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = movie.Title;
        // 4. change callback function name to "onOptionSelect" from index.js
        onOptionSelect(movie);
      });

      resultsWrapper.appendChild(option);
    }
  };
  input.addEventListener("input", debounce(onInput, 500));

  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
```

The next thing we need to be aware of is our line of code inside of our `for` loop in `onInput`, `input.value = movie.Title`. This can be tricky because the left hand side, `input.value` needs to happen for every instance in-which we use an autocomplete widget. But the source of information, `movie.Title` is very application specific.

To handle this, let's pass in another helper function to our "configuration" object. So back inside of `index.js` let's add our "configuration" helper function to `createAutoComplete()`. We'll call this `inputValue`.

The goal of `inputValue` is going to be to take a `movie` (the parameter we're giving it) and after a user clicks on an option of movie, we're going to call `inputValue` with the movie and we're going to return whatever value that should show up inside of the input, which for our application is `movie.Title`.

Let's update our code:
```js
// ** index.js **

createAutoComplete({
  root: document.querySelector(".autocomplete"),
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
      <img src="${imgSrc}" />
      <p>${movie.Title} (${movie.Year})</p>
    `;
  },
	onOptionSelect(movie) {
    onMovieSelect(movie);
  },
  // 1. add 3rd configuration helper function
  inputValue(movie) {
    return movie.Title;
  }
});
```

Now let's move over to our `autocomplete.js` file and revise our code there:
```js
// ** autocomplete.js **

// 2. extract "inputValue" from configuration object
const createAutoComplete = ({ root, renderOption, onOptionSelect, inputValue }) => {
  root.innerHTML = `
    <label><b>Search For a Movie</b></label>
    <input class="input" placeholder="Search movie" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  `;

  const input = document.querySelector("input");
  const dropdown = document.querySelector(".dropdown");
  const resultsWrapper = document.querySelector(".results");

  const onInput = async (event) => {
    const movies = await fetchData(event.target.value);

    if (!movies.length) {
      dropdown.classList.remove("is-active");
      return;
    }

    resultsWrapper.innerHTML = "";

    dropdown.classList.add("is-active");
    for (let movie of movies) {
      const option = document.createElement("a");

      option.classList.add("dropdown-item");
      option.innerHTML = renderOption(movie);
      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        // 3. set input.value equal to our new config helper function
        input.value = inputValue(movie);
        onOptionSelect(movie);
      });

      resultsWrapper.appendChild(option);
    }
  };
  input.addEventListener("input", debounce(onInput, 500));

  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
```

You may have noticed we're still referencing `movie` a lot throughout our `autocomplete.js` file which seem counterintuitive for making our autocomplete widget reusable but we will be coming back and refactoring that so it receives a more universal keyword in a bit.

[⬆️ Top](#table-of-contents)

---

#### 2.21 Removing Movie References

The last thing we need to extract is `fetchData()`. Currently, `fetchData()` is being used inside of our `autocomplete.js` file directly. Inside of out `onInput` callback function we're calling `fetchData()`. When we call `fetchData()` there in `onInput`, that is a reference back to the `fetchData` that we define inside our `index.js` file.

So this means we have a direct link between these two files, which is not what we want. We want both files to live on their own. So what we can do to fix this is take `fetchData` from the `index.js` file and throw it as another argument (option) to our `createAutoComplete` "configuration" object.

Next, we will update our `autocomplete.js` file and make sure that it references the `fetchData` that is being passed on that "configuration" object instead if the direct global scope between the two files.

Let's take care of this now:
```js
// ** autocomplete.js **

// 1. extract "fetchData" from configuration object
const createAutoComplete = ({ root, renderOption, onOptionSelect, inputValue, fetchData }) => {
  root.innerHTML = `
    <label><b>Search For a Movie</b></label>
    <input class="input" placeholder="Search movie" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  `;

  const input = document.querySelector("input");
  const dropdown = document.querySelector(".dropdown");
  const resultsWrapper = document.querySelector(".results");

  const onInput = async (event) => {
    // onInput logic
  };
  input.addEventListener("input", debounce(onInput, 500));

  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
```

Now over in `index.js`:
```js
// ** index.js **

// 2. cut the fetchData function and remove the variable name

createAutoComplete({
  root: document.querySelector(".autocomplete"),
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
      <img src="${imgSrc}" />
      <p>${movie.Title} (${movie.Year})</p>
    `;
  },
  onOptionSelect(movie) {
    onMovieSelect(movie);
  },
  inputValue(movie) {
    return movie.Title;
  },
  // 3. add a 4th configuration object, "fetchData" and pass in the function logic from our old fetchData global function
  // 3.1 cleanup the syntax from previous fetchData function
  async fetchData(searchTerm) {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "1da41525",
        s: searchTerm
      }
    });

    if (response.data.Error) {
      return [];
    }

    return response.data.Search;
  }
});
```

Okay so that's working nicely. There's one last thing for us to take care of before we move on from this section. We need to go through our `autocomplete.js` file and find any reference to `movie`. In order to really make this code reusable, we need to refrain from making any assumptions about the kind of data we are working with.

So, to do this we're just going to comb through our `createAutoComplete` function and change the words "movie" or "movies" to another appropriate term, in our application we'll change `movie` to `item` and `movies` to `items`.

Let's do this now:
```js
// ** autocomplete.js **

const createAutoComplete = ({ root, renderOption, onOptionSelect, inputValue }) => {
  root.innerHTML = `
    <label><b>Search</b></label>
    <input class="input" placeholder="i.e. avengers" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  `;

  const input = document.querySelector("input");
  const dropdown = document.querySelector(".dropdown");
  const resultsWrapper = document.querySelector(".results");

  const onInput = async (event) => {
    // 1. change all references of "movie(s)" to "item(s)"
    const items = await fetchData(event.target.value);

    if (!items.length) {
      dropdown.classList.remove("is-active");
      return;
    }

    resultsWrapper.innerHTML = "";

    dropdown.classList.add("is-active");
    // 2. change all references of "movie" to "item"
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
  input.addEventListener("input", debounce(onInput, 500));

  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
```

There we go! We now have a fully reusable function called `createAutoComplete`. We can take `createAutoComplete` and we can use it on any other project we can think of and we'll get the exact same behavior as the one we have in our current application.

For future use, all we need to do is:

  1. call the function (`createAutoComplete()`)
  2. pass in the appropriate properties:
      * `root` - specify where to render the autocomplete to.
      * `renderOption()` - how to show an individual item.
      * `onOptionSelect()` - what to do when a user clicks on an item.
      * `inputValue()` - what to backfill the input with when a user clicks on an item.
      * `fetchData()` - how to actually fetch the data from the api or JSON file.

[⬆️ Top](#table-of-contents)

---

### 2.22 Consuming a Different Source of Data

To understand how we made our autocomplete widget more reusable let's substitute the data we're fetching with new data and a new data source.

For this we will be using JSONPlaceholder which is a free fake API for testing and prototyping.
  * [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

What we will be doing for this quick example is sending a request to the `photos` endpoint of the API:
```js
fetch('https://jsonplaceholder.typicode.com/photos')
```

 We will request 50 photos from the API and for each of the photos we're going to try and render them into the autocomplete dropdown we just built.

 To only get 50 photos back from the API we can send a request to:
 ```js
fetch('https://jsonplaceholder.typicode.com/photos?albumid=1')
```

Let's start updating our search autocomplete dropdown now:
```js
// ** index.js file **

createSearchComponent({
  root: document.querySelector(".autocomplete"),
  // 1. update axios.get URL
  async fetchData() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos?albumId=1");

    if (response.data.error) {
      return [];
    }

    return response.data;
  },
  // 2. update content that is being rendered in the dropdown
  renderOption(item) {
    return `
      <img src="${item.thumbnailUrl}" />
      <p>${item.title}</p>
    `;
  },
  onOptionSelect(item) {
    onDropdownItemSelect(item);
  },
  // 3. update input value on click
  inputValue(item) {
    return item.title;
  }
});

// 4. update our second API fetch function
const onDropdownItemSelect = async (item) => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/photos?albumId=1", {
    params: {
      id: item.id
    }
  });

  const data = response.data[0];
  const targetElement = document.querySelector("#summary");

  targetElement.innerHTML = itemDisplay(data);
};

// 5. Update content to be displayed on the screen once a selection is made
const itemDisplay = (itemData) => {
  return `
  <article class="media">
    <figure class="media-left">
      <p class="image">
        <img src="${itemData.thumbnailUrl}" />
      </p>
    </figure>

    <div class="media-content">
      <div class="content">
        <h1>${itemData.title}</h1>
      </div>
    </div>
  </article>
  `;
};
```

> Note: Our `autocomplete.js` file can stay exactly the same. We're only updating the `index.js` file to make these changes.

[⬆️ Top](#table-of-contents)

---

### 2.23 Refreshed HTML Structure
We are now going to add two different autocomplete search widgets to the screen. We will also be adding a tutorial messages telling the user what to do.

We need to update the HTML code in our `index.html` file.
```html
<div class="container">
  <div class="columns">
    <!-- Left search widget -->
    <div class="column">
      <div id="left-autocomplete"></div>
    </div>
    <!-- Right search widget -->
    <div class="column">
      <div id="right-autocomplete"></div>
    </div>
  </div>
  <!-- Tutorial for user -->
  <div class="column is-half notification is-primary tutorial">
    <h1 class="title">Search For a Movie on Both Sides</h1>
    <p class="subtitle">We will tell you which is best!</p>
  </div>
</div>
```

Now, back in our `index.js` file, inside our `createAutoComplete` function we need to update the `root` key.
```js
createAutoComplete({
  root: document.querySelector("#left-autocomplete"),
  ...
```

[⬆️ Top](#table-of-contents)

---

### 2.24 Avoiding Duplication of Code

Now let's add another search widget to the right-hand side as well. To do this we're going to go to the top of our `index.js` file and add a variable called `autoCompleteConfig`. 

This variable is going to hold all of our logic from `createAutoComplete` that can be duplicated between our two search widgets.

When looking through `createAutoComplete`, every function is reusable except for the `root` element. Let's add all the duplicate logic to `createAutoComplete`.
```js
const autoCompleteConfig = {
  async fetchData(searchTerm) {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "1da41525",
        s: searchTerm
      }
    });
    const data = response.data;
    if (data.Error) {
      return [];
    }

    return data.Search;
  },
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
    <img src="${imgSrc}" />
    <p>${movie.Title} (${movie.Year})</p>
    `;
  },
  onOptionSelect(movie) {
    onMovieSelect(movie);
  },
  inputValue(movie) {
    return movie.Title;
  }
};
```

Next, inside `createAutoComplete` we're going to add `...autoCompleteConfig`. So the `...` is saying, make a copy of everything inside that object, or essentially take all the different functions inside the object and throw them into the `createAutoComplete` object.

Let's do this now:
```js
createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#left-autocomplete")
});
```

And also with the right search widget:
```js
createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#right-autocomplete")
});
```

[⬆️ Top](#table-of-contents)

---

### 2.25 Hiding the Tutorial

Now that we have that working, when a user selects a movie, let's hide the tutorial element and just show the summary of the movies on their appropriate sides.

To hide our user tutorial element we're going to go inside our `autoCompleteConfig` object and find `onOptionSelect`. Inside `onOptionSelect` we will add a selector for the `<div>` with the class of `tutorial` and then add a class to it that is going to hide the tutorial from the screen.

```js
// index.js file
onOptionSelect(movie) {
  document.querySelector(".tutorial").classList.add("is-hidden");
  onMovieSelect(movie);
}
```
> Note: The class `is-hidden` is coming from Bulma CSS.

[⬆️ Top](#table-of-contents)

---

### 2.26 Showing Two Summaries

The next thing we need to do is when a user selects a movie, we show a summary on the appropriate side of the screen.

Right now we're using the same `onOptionSelect` for our `createAutoComplete` function. We need to change this in order to get our two summaries showing up on their correct sides.

So let's add `onOptionSelect` to each of our calls to `createAutoComplete`. This will allow us to make a customized version of each one. Now, in-order to render the summary in the appropriate element on the page, we have to be sure that when we call `onMovieSelect(movie)` as a second element we're going to pass in a reference to an element where we want to render the summary to.
```js
// left search autocomplete
createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#left-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    // 1. add second argument to left side
    onMovieSelect(movie, document.querySelector("#left-summary"));
  }
});
// right search autocomplete
createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#right-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    // 2. add second argument to right side
    onMovieSelect(movie, document.querySelector("#right-summary"));
  }
});
```

Now inside of onMovieSelect we can receive that second argument (`summaryElement`):
```js
// 1. pass in "summaryElement" parameter
const onMovieSelect = async (movie, summaryElement) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "1da41525",
      i: movie.imdbID
    }
  });

  // 2. update to set "summaryElement"'s innerHTML
  summaryElement.innerHTML = movieTemplate(response.data);
};
```

[⬆️ Top](#table-of-contents)

---

### 2.27 When to Compare Our Stats
We now want to get a comparison of the two different user selected movies. Eventually we will make a request inside of `onMovieSelect` in-order to get some follow up details about a particular movie.

One of the first thing we should do is store a reference to the response that comes back. That way we can hold on to that reference to that movie and all the different statistics. This will allow us to do an easier comparison between the movies further down the road.

Once we receive data back from axios, let's be sure we store the movie we just fetched on to the appropriate variable. In order to do this we need to pass in an additional parameter to `onMovieSelect()`. This is to indicate whether we are receiving the movie on the left side or the right side.

```js
createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#left-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");

    // 1. pass in an additional argument to onMovieSelect call ("left")
    onMovieSelect(movie, document.querySelector("#left-summary"), "left");
  }
});
createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#right-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");

    // 2. pass in an additional argument to onMovieSelect call ("right")
    onMovieSelect(movie, document.querySelector("#right-summary"), "right");
  }
});

// 3. pass in the "side" parameter to onMovieSelect declaration
const onMovieSelect = async (movie, summaryElement, side) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "1da41525",
      i: movie.imdbID
    }
  });

  const data = await response.data;

  summaryElement.innerHTML = movieTemplate(data);
};
```

Next, let's add the logic to check which side the user selected on and if both movies are defined.

```js
// 1. define two global "let" variables
let leftMovie;
let rightMovie;

const onMovieSelect = async (movie, summaryElement, side) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "1da41525",
      i: movie.imdbID
    }
  });

  const data = await response.data;

  summaryElement.innerHTML = movieTemplate(data);

  // 2. check which side the user selected (must be after we render the selection content from "movieTemplate")
  if (side === "left") {
    leftMovie = response.data;
  } else {
    rightMovie = response.data;
  }
};
```

Now, let's check to see if leftMovie and rightMovie are both defined and if they are, let's run the comparison between them. For that we will have to create a `runComparison` helper function.

Our `runComparison` helper function will be able to:
  * iterate through the two different movies
  * run all the comparisons
  * update the appropriate statistics on both sides of the screen

```js
let leftMovie;
let rightMovie;

const onMovieSelect = async (movie, summaryElement, side) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "1da41525",
      i: movie.imdbID
    }
  });

  const data = await response.data;

  summaryElement.innerHTML = movieTemplate(data);

  if (side === "left") {
    leftMovie = response.data;
  } else {
    rightMovie = response.data;
  }

  // 1. check if both the left and the right movie are defined
  if (leftMovie && rightMovie) {
    // 3. run the comparison
    runComparison();
  }
};

// 2. add comparison helper function
const runComparison = () => {
  // future logic
};
```

[⬆️ Top](#table-of-contents)

---

### 2.28 How to Compare Our Stats

This poses a bit of a challenge because the metrics we're comparing aren't always plain numbers, some are strings too (like in our "Awards" card comparison).

Another reason this is challenging is because when we think about the logic of how we're rendering our comparison cards to the DOM, the first statistic we render out is the "Awards" card, then "Box Office", then "Metascore", etc.

So we need to "reach" into the DOM and select the element "Awards" on both sides of the screen (we're rendering two to the screen). To do this we are going to add a "number version" "data" property to all of the `<article>`'s in our `movieTemplate` rendering function.

> Note: The "number version" of the "data" property allows us to easily compare versions of each other.

So what we're trying to do is, whenever we run `movieTemplate` for each of the `<article>` elements we want to add a `data-value` property to it. 

Then, inside that `data-value` property we can assign it a unique value. That way, when calling our `runComparison` function, rather than comparing the order of articles in can just compare the `data-value` values of the first article on the other side.

In other words, we're throwing away the idea that the first article is the "Awards" card when running `runComparison()` and just looking at the `data-value` property on those articles and determine which one is greater. Last, we need to apply the appropriate styling to those results (green or red).

[⬆️ Top](#table-of-contents)

---

### 2.29 Extracting Statistic Values

In this section, we will be updating our `movieTemplate` function. We're going to checkout some of the different _properties_ inside our `movieData` parameter object.

Remember, `movieData` is an object with some expanded properties that describe a particular movie. For each of the statistic cards we're printing out we're going to turn each of them into an easy to represent number value. We will then add these values as a data property for each of the different article cards.

The first thing we're going to do is, at the top of the function we're going to take a look at some of the different _properties_ in `movieData` and then turn them into an easy to compute number format.

```js
const movieTemplate = (movieData) => {
	console.log(movieData);
	// a. number representation of the box office value
	const dollars = parseInt(
		movieData.BoxOffice.replace(/\,/g, "").replace(/\$/g, "")
	);
	// b. number value for meta score
	const metaScore = parseInt(movieData.Metascore);
	// c. number value for imdb rating
	const imdbRating = parseFloat(movieData.imdbRating);
	// d. number value for imdb rating
	const imdbVotes = parseInt(movieData.imdbVotes.replace(/,/g, ""));

...
```

In the above code, we need to remove the `$` and `,` and replace with an empty string. We can then wrap that code in `parseInt()` which will turn it into a number value. `parseFloat()` will remove the decimal.

[⬆️ Top](#table-of-contents)

---

### 2.30 Parsing Number of Awards

For this section we're just going to take all the awards and add them together to determine the winner of the section.

```js
const movieTemplate = (movieData) => {
  const dollars = parseInt(
    movieData.BoxOffice.replace(/\,/g, "").replace(/\$/g, "")
  );
  const metaScore = parseInt(movieData.Metascore);
  const imdbRating = parseFloat(movieData.imdbRating);
  const imdbVotes = parseInt(movieData.imdbVotes.replace(/,/g, ""));

  // 1. add count variable
  let count = 0;
  // 2. add "awards" variable
  const awards = movieData.Awards.split(" ").forEach((word) => {
    // 3. check if we're working with a number or not
    const value = parseInt(word); // parseInt on a string will return NaN

    // 4. check to see if value = NaN
    if (isNaN(value)) {
      return;
    } else {
      // 5. otherwise add the numbers
      count = count + value;
    }
  });

...
```

Let's now refactor `awards` with `reduce()`. 

The first argument to reduce is the actual function we want to run and the first parameter will be `prevValue`. The second parameter is going to be the `word` we're currently iterating over.

The second argument is going to be the starting value for our reduction, in our case that will be `0`.
```js
const movieTemplate = (movieData) => {
  const dollars = parseInt(
    movieData.BoxOffice.replace(/\,/g, "").replace(/\$/g, "")
  );
  const metaScore = parseInt(movieData.Metascore);
  const imdbRating = parseFloat(movieData.imdbRating);
  const imdbVotes = parseInt(movieData.imdbVotes.replace(/,/g, ""));

  // 1. refactor with .reduce()
	const awards = movieData.Awards.split(" ").reduce((prevValue, word) => {
		const value = parseInt(word);

		if (isNaN(value)) {
			// 2. we need to make sure we're returning the next value for the next iteration of the loop
			return prevValue;
		} else {
			// 3. otherwise, we're going to return the previous value we got plus the new value (this also allows us to delete our "let count" above "awards")
			return prevValue + value;
		}
	}, 0);

...
```

[⬆️ Top](#table-of-contents)

---

### 2.31 Applying Parsed Properties

Now that we have access to all our our statistics, we need to add them to each of the appropriate `<article>` elements inside our `movieTemplate` function.

[⬆️ Top](#table-of-contents)

---