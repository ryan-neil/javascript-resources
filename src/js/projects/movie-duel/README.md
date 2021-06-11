# Movie Duel
<!-- <img src="" width="800" alt=""> -->

## Introduction
For this practice application, the user is going to use a search box on the left-hand side of the screen to search for a movie and use another search box on the right-hand side for a different movie.

Once the user has searched for two different movies we will display data from both of those movies. Data such as, earnings, critic rating, etc. These two movies will then go head to head on each of those subjects and which ever movie has a higher or better "score" we will highlight in green and the lower "score" will be highlighted in yellow.

The last feature to our practice application will be a "smart search" feature that shows suggestions for what the user is searching.

### 📂 File Tree
```bash
└─ movie-duel
  ├─ index.html
  ├─ style.css
  ├─ app.js
  ├─ utils.js
```

----
 
### ⚒️ Application Features
1. Smart search bar
2. Display real world data from movie searches
    * Harnessing [OMDb API](https://www.omdbapi.com/)
3. Highlight comparison feature

----

### 🗒️ Table of Contents
1. [Application Architecture](#application-architecture)
1. [Logic](#logic)
    * [Autocomplete Input](#autocomplete-input)

----

### 📝 Application Architecture 

__Search Box__
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
----

### 💭 Logic

#### __Autocomplete Text Input:__

#### ✅ __Fetching Data:__

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

#### 💭 __Searching the API on Input Change:__

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

// select the input element and assign to a variable
const input = document.querySelector("input");

// add our event listener listening for the "input" event
input.addEventListener("input", (event) => {
  event.target.value; // this reference allows us access to that change text (this will be whatever the user just typed into the input) 
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
      s: searchTerm // 3. pass our "searchTerm" argument as a value to "s" (the API search key) (this will now search the API for whatever the user types into the input)
    }
  });

  const data = response.data;
  console.log(data);
};

const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  fetchData(event.target.value); // 1. call fetchData and pass in the value from the input (this will be what the user types into the input field)
});
```
This is working well except we have one issue. Our issue is we're fetching a search of the API for every single key press. This is not ideal because we're only allowed access to the API 1,000 times per day. It's also not optimal for performance. Let's explore how we're going to solve this in the next section.

#### ⏸️ __Delaying Search Input:__

An ideal solution would be to allow the user to press a key inside the input field as many times as they want without triggering an API call. Only after we have about one second or so of nothing happening do we want to call search and send a request to the API.

To accomplish this we will be harnessing the power of the built in  `setTimeout` function. Let's break this down:

The first thing we want to do is save our `setTimeout` function to a variable called `onInput` and pass `onInput` into our event listener as the second argument. Let's have a look below:

```js
const fetchData = async (searchTerm) => {
  // fetchData logic
};

const input = document.querySelector("input");

// assign our event function to a variable
const onInput = (event) => {
  fetchData(event.target.value);
};

// we then pass it in as our second argument to the event listener
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
const fetchData = async (searchTerm) => {
  // fetchData logic
};

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

So behind the scenes, we will be calling `onInput` many times in a row. It could be a user typing into the input field something like, "avengers", however many characters that is, we will be calling `onInput` that number of times.

So the very __first time__ `onInput` is going to be called, we will enter our `onInput` function and look and see if `timeoutID` is defined (our `if` statement). The __first time__ we call `onInput`, `timeoutID` will return `undefined` so we are going to skip over our `if` statement entirely.

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

#### ♻️ __Understanding Debounce:__

__Debouncing__ an input is when we are waiting for some time to pass after the last event to actually do something. In the life span of an application there can be many different scenarios in which we might want to bounce some events. This doesn't just have to be for text inputs either.

There may be some other scenarios in our app that we would want to limit how often we make calls to our API for performance reasons. Because of this, it could be very useful for us to think of a way to refactor the code we just wrote to make it more usable by nature. It may turn out that we need to debounce other things inside our application at a future time.

Let's refactor our above code into more reusable code. This way we can add abstraction to some of the logic as well.

For this we need to create a debounce helper function. This will take an argument of a callback function called `func`. We also need to add all of our old code into our new `debounce` function.

```js
const fetchData = async (searchTerm) => {
  // fetchData logic
};

const input = document.querySelector("input");

// debounce helper function
const debounce = (func) => {
  let timeoutID;

  // our wrapper function (this is the function we will be calling many times)
  return () => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      // call our callback function from "debounce"
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

  // here we're adding "...args" to be sure it works if multiple arguments are passed in
  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      // here we add "apply()" to handle multiple arguments
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

// 2. "onInput" gets passed into our "debounce" callback function ("func")
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

// 1. here we wrap "onInput" with our "debounce" function
input.addEventListener("input", debounce(onInput));
```

We can imagine that our `onInput` function is going to be received into `debounce` as `func`. And we are going to rate limit it on how often it can be invoked.

Lastly, we currently have a hard coded delay in our `setTimeout` for `1000`ms. We might want this delay to be easily changed by other developers working on our code. An easy way to accomplish this would be do pass in another argument to our `debounce` function. We'll call it `delay`.

```js
const input = document.querySelector("input");

// add the second argument of "delay"
const debounce = (func, delay) => {
  let timeoutID;

  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      func.apply(null, args);
    }, delay); // replace the hard coded 1000 with just "delay"
  };
};

const onInput = (event) => {
  fetchData(event.target.value);
};

// we add the second argument to "debounce" with how many milliseconds we want our "delay" to be for
input.addEventListener("input", debounce(onInput, 1000));
```

And thats it! We can now use our `debounce` function anywhere inside of our code whenever we need to introduce some type of rate limiting on how often a function can be invoked.

#### 💬 __Awaiting Async Functions:__

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

#### 🖼️ __Rendering Movies:__
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

#### ❗ __Error Handling:__

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

#### 🎨 __Widget Styling:__

We want to try and reduce the coupling of our `index.html` file and our `app.js` file. In other words, we don't want these two files to rely on each other too much. This will make our lives a lot easier in the long run.

Generally, what we want to do is push off as much of the html generation to JavaScript as we can. Leaving our `index.html` as minimal as possible. For our project, what we're going to try and do is create one single `div` inside our `index.html` file and then in our `app.js` file we will append all our autocomplete widget html and JavaScript code inside of that single `div`.

With this approach we can easily create reusable widgets that we can interchange between different projects. It also much it much easier to share our code with other developers.

#### 🪄 __Rendering HTML with JavaScript:__

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

Next, we need to create a tag elements for all of our movie results. The [Bulma docs](https://bulma.io/documentation/components/dropdown/#dropdown-content) say it can be a `<a>` or a `<div>` tag. We will give our newly created `<a>` elements the class name of `dropdown-item`s in order to style them nicely per the [Bulma docs](https://bulma.io/documentation/components/dropdown/#dropdown-content).

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

#### 🪄 __Cleaning up our Autocomplete Widget:__

The first thing we need to cleanup is when we search for a new movie, the results get listed under our old search results. We don't want this. What we're going to do is make sure that whenever we fetch a new list of movies, we clear out the existing movies inside our dropdown.

First step is to decide when should we clear out the existing list? I think a good place would be right after our `fetchData` inside `onInput`. To clear out the list is pretty straight forward. We're going to set our `resultsWrapper` inner HTML equal to an empty string and thats it.

Another feature we need to add to our `dropdown` is, if the user clicks anywhere outside of the `dropdown`, we want to close the `dropdown` window. Here's how we can accomplish this:

In the global document space we're going to add another `eventListener` to the `document`. We're going to watch for anytime the user clicks on any element in the document. We're then going to look at our `root` element because the `root` element encapsulates everything that has to do with our autocomplete widget. So we're going to check and see if the element that was clicked on is contained inside of `root`.

So essentially, if the user clicks on any of the elements inside of the `root` then when want the dropdown to stay open. But if the user clicks on any elements that are not contained in `root`, we want to close the dropdown.

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
__So what we are trying to check for is__: if `movie.Poster` = `N/A` (the image source our API gives us if the movie does not have a poster), return an empty string (`" "`) and if `movie.Poster` does not equal `N/A` return the `movie.Poster` image source. So basically if there is no movie poster than just don't show anything.

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

#### 😶 __Handling Empty Responses:__

The next minor fix we are going to want to fix is, if a user searches for something but then deletes their input text, the dropdown stays open. We want the dropdown to close if this happens.

So to do this, we want to add our code right after we fetch the data in our `onInput` function. Let's take a look at `movies` and let's say that if there are no movies being returned, let's `return` early and don't run anything else inside of `onInput`.

Let's fix this now:
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

#### 👋 __Handling Movie Selection:__

We just have one lsat major user interaction we need to handle and that's if the user wants to actually click on a movie.

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