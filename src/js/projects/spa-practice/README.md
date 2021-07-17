# Create a Single Page Application
<!-- <img src="" width="800" alt=""> -->

## Introduction
This is a practice application for creating SPA's.

### 📂 File Tree
```bash
├─ spa-practice
│ ├─ src
│ │ ├─ static
│ │ │ ├─ css
│ │ │ │ └─ main.css
│ │ │ └─ js
│ │ │   ├─ views
│ │ │   └─ main.css
│ │ └─ index.js
│ └─ README.md
```

----

### Table of Contents
1. [App Setup](#app-setup)
1. [Writing the Client Side JavaScript](#writing-the-client-side-javascript)
1. [Preventing Default Browser Behavior](#preventing-default-browser-behavior)
1. [Harnessing the History API](#harnessing-the-history-api)
1. [Rendering Actual Content to the Page](#rendering-actual-content-to-the-page)


----

### App Setup

Let's begin by installing our dependencies. Inside our VS Code terminal, let's create a new node.js project with:
```bash
npm init -y
```

Now that we've done this, we can include [Express](https://expressjs.com/) with:
```bash
npm i express
```

Now we can create the server javascript file (`server.js`). And include a few dependencies.

Our first dependency's are going to be `express` and `path`. So we'll do:
```js
const express = require('express');
const path = require('path');
```

After this we will create the express app and set our root path behavior. 

Any path at all (represented with: `'/*'`), no matter what path we send to the root server (posts, settings, etc.) they're all going to get back to the `index.html` root file
```js
...

const app = express();

// always route back to index.html
app.get('/*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});
```

Next, let's set our environment variable `PORT`. To do this we're going to pass `PORT` to `app.listen` and that makes your server able to accept a "what port to listen on" parameter from the environment.
```js
...

// set environment variable "PORT", or default to 8080
app.listen(process.env.PORT || 8080, () => {
  console.log('Server running...');
});
```

If we pass `8080` hard-coded to `app.listen()`, you're always listening on port `8080`, which might be just for you, or not, depending on your requirements and the requirements of the environment in which you're running your server.

In other words: 
  * if we run `node server.js`, Node will use port `8080`
  * if we run `PORT=4444 node server.js`, Node will use `process.env.PORT` which equals `4444` in this example.

---

__Use Case:__

Now, inside our browser we can head to `localhost:8080` and we should see some content from our `index.html` file rendered to the screen.

If we type `localhost:8080/settings` it will take us back to the same `index.html` file. This, of course is crucial to our Single Page Application. 

For example, if we were to send the link `localhost:8080/posts` to our friend and he/she were to open it up in their own browser, they would want it to go back to the `index.html` file and then handled on the frontend to decide what gets displayed.

This is what contributes to the Single Page Application nature of the web page.
 
---

So currently we are getting an error `{file path} was blocked because of a disallowed MIME type (“text/html”)`... and this is because every path is going through:
```js
app.get('/*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});
```

In order to fix this we need to first define our `static` directory and then serve our `static` directory with some middleware.
```js
...

const app = express();

// middleware to serve the static directory
app.use('/static', express.static(path.resolve(__dirname, 'src', 'static')));

...
```

What the above code is saying is, whenever the path has `/static` (i.e. `/static/js/index.js`) we're going to server the `static` directory (`src` -> `static`).

[⬆️ Top](#table-of-contents)

---

### Writing the Client Side JavaScript

The first thing we're going to want to do is write the client side router and this router is going to be an __asynchronous__ function. This is because we're going to be loading the content for each one of our views (dashboard, posts or settings) inside of the async `router` function.

For example, in settings the client side may actually want to make an asynchronous request to the server side to get some settings before it actually renders or shows the page.

In order to achieve this, we can use an async function and the goal is whenever the user goes to a root path (`/`, `/posts`, `/settings`), run the associated `view` function.
```js
const router = async () => {
	const routes = [
		// whenever the user goes to this root path (/...), run the "view" function
		{ path: '/', view: () => console.log('Viewing Dashboard') },
		{ path: '/posts', view: () => console.log('Viewing Posts') },
		{ path: '/settings', view: () => console.log('Viewing Settings') }
	];
};
```

Next, we're going to test each route for potential matches. For this, we want to loop through each object and return an object for each loop and inside `map()` grab each route and return a new object.

Inside the object we will have a key of `route` which will contain the route itself. And then the next one `isMatch` will be a boolean value. The value of `isMatch` will be `location.pathname === route.path`. 

This is because if we were to go into our browser and in the console type, `location.pathname` we would get the output of `'/'` because that's our route path from `localhost:8080`. Say we switch to, `localhost:8080/posts` and typed `location.pathname` we would get the output of `'/posts'`.

Ultimately, we're testing to see if the path `localhost:8080/posts` matches against any of our `routes` paths from our `router` function.
```js
const router = async () => {
  const routes = [
    { path: '/', view: () => console.log('Viewing Dashboard') },
    { path: '/posts', view: () => console.log('Viewing Posts') },
    { path: '/settings', view: () => console.log('Viewing Settings') }
  ];

  // test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });
};
```

Now let's call our router function. We're going to call router() with a `DOMContentLoaded` event listener and just pass in `router()`. So once all of the DOM has loaded up we can run our `router` function.
```js
const router = async () => {
  const routes = [
    { path: '/', view: () => console.log('Viewing Dashboard') },
    { path: '/posts', view: () => console.log('Viewing Posts') },
    { path: '/settings', view: () => console.log('Viewing Settings') }
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });

  console.log(potentialMatches);
};

// call our router function
document.addEventListener('DOMContentLoaded', () => {
  router();
});
```

Now this returns an array of our three objects from `routes` with `isMatch` key displaying `true` or `false` depending on which route our webpage is on.

Now that we have that working, let's find our `match`. For this, we take our `potentialMatches` array and attach the `.find()` method. The `.find()` method is going to look through the array (`potentialMatches`) and find something which matches a particular condition that we define.
```js
const router = async () => {
  const routes = [
    { path: '/', view: () => console.log('Viewing Dashboard') },
    { path: '/posts', view: () => console.log('Viewing Posts') },
    { path: '/settings', view: () => console.log('Viewing Settings') }
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });

  // we look for our match
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);
};

document.addEventListener('DOMContentLoaded', () => {
  router();
});
```

In the above code, `match` is going to be one of our `potentialMatches` (`/`, `/posts`, `/settings`). For example, let's say we're at `localhost:8080/posts` `match` would be `/posts`. So `/posts` route `isMatch` is going to be `true`, which means our `potentialMatches.find()` is going to return `true`.

Let's do a bit of error handling. What we're going to do if our match is not defined, default to our dashboard (`/`) directory.
```js
const router = async () => {
  const routes = [
    { path: '/', view: () => console.log('Viewing Dashboard') },
    { path: '/posts', view: () => console.log('Viewing Posts') },
    { path: '/settings', view: () => console.log('Viewing Settings') }
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  // define our route if no match is found
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    };
  }
};

document.addEventListener('DOMContentLoaded', () => {
  router();
});
```

> Note: We can also define our own custom 404 route or page and change `routes[0]` to the correct page if we so wish

[⬆️ Top](#table-of-contents)

---

### Preventing Default Browser Behavior

Now, before we can start rendering the correct content for each page we need to create a few helper functions.

What if we want to navigate using the history API? Say, when we click on our "Posts" tab in the navigation bar, we get redirected to `localhost:8080/posts` without loading a new page.

In order to achieve this we're going to be using the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API).

To begin, let's create a function called `navigateTo()`. What `navigateTo` will do is, when our nav links from our `index.html` file with the property of `data-link` are clicked, we want to run our `navigateTo` function instead of the default behavior of refreshing the page.

```js
const navigateTo = (url) => {
  history.pushState(null, null, url);
  // call router() to process the new history entry
  router();
};

const router = async () => {

...
```

Now tht we have this, inside our `DOMContentLoaded` event listener, we need to add another event listener to the `body`.
```js
...

// call our router function
document.addEventListener('DOMContentLoaded', () => {
	document.body.addEventListener('click', (e) => {
		// does this link element have the "data-link" attribute
		if (e.target.matches('[data-link]')) {
			// if yes, prevent the default behavior of following that link
			e.preventDefault();

			// and instead, navigate to the corresponding href set on the element itself (inside index.html)
			navigateTo(e.target.href);
		}
	});

	router();
});
```

`document.body.addEventListener()` is a delegated `eventListener` because if we add new content to the page which has those links, we want the actual links to work.

[⬆️ Top](#table-of-contents)

---

### Harnessing the History API

So, right now in the browser, if we were to go to `localhost:8080/posts` and then click "Settings" and be taken to `localhost:8080/settings` the console is logging our correct message when clicking through the links. 

However, while we're still in `localhost:8080/settings` if we click the back button to go back to `localhost:8080/posts` the console isn't logging our message associated with that page. This means when we're navigating through the history, it's not actually re-running the `router` function.

So what we need to add is an event listener to the `window`.
```js
...

// re-run router when navigating through history
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {

...
```

[⬆️ Top](#table-of-contents)

---

### Rendering Actual Content to the Page

We're naming our app parts "sections" instead of "pages" because our app is suppose to be a Single Page Application, which means the parts aren't necessarily pages but more "sections" of the app.

So now we'll be creating a single JavaScript file for each one of our sections (`/`, `/posts`, `/settings`).

The first file will be `AbstractSection.js` and all the other "sections" will be inheriting this file. Inside this file, let's include:
```js
// * AbstractSection.js file *

export default class {
	constructor() {
		// logic
	}

	// this will just be for the page title
	setTitle(title) {
		document.title = title;
	}

	// inject HTML content we want to display for that particular section
	async getHTML() {
		// for AbstractSection we can return nothing
		return '';
	}
}
```

Our `setTitle` function takes a parameter of `title` and this will set the browser tab to be the appropriate name. For example, now when we go into the "Dashboard" section, we can call `setTitle()` and pass through `Dashboard`.

The `getHTML` function will inject the HTML content we want to display for that particular section. So, whenever we have a section, e.i. "Posts", which is going to extend `AbstractSection.js` it will override the `AbstractSection.js` `getHTML` function and provide it's own "Posts" HTML content for that specific section.

The next file will be `Dashboard.js`.
```js

```