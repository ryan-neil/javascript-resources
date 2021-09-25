## Express

* [Tutorial](https://www.youtube.com/watch?v=SccSCuHhOw0)

#### ❓ What is Express.js?

Express.js is a modular web framework for Node.js. It is used for easier creation of web applications and services. 

Express.js simplifies development and makes it easier to write secure, modular and fast applications.

#### ❓ What's the purpose of it with Node.js?

It is used for easier creation of web applications and services.

#### ❓ Why do we actually need Express.js? How is it useful for us to use with Node.js?

Express.js simplifies development and makes it easier to write secure, modular and fast applications. You can do all that in plain old Node.js, but some bugs can (and will) surface, including security concerns (eg. not escaping a string properly).

#### ❓ What is Redis? Does it come with Express.js?

Redis is an in-memory database system known for its fast performance. No, but you can use it with Express.js using a redis client.


## Table of Contents

1. [Installation](#Installation)
1. [Set up scripts](#Set-up-scripts)
1. [Create Express server](#Create-Express-server)
1. [Basic routing in Express](#Basic-routing-in-Express)
1. [Sending data in Express](#Sending-data-in-Express)
1. [Routers in Express](#Routers-in-Express)
1. [Advanced routing in Express](#Advanced-routing-in-Express)
1. [Middleware in Express](#Middleware-in-Express)
1. [Rendering static files in Express](#Rendering-static-files-in-Express)
1. [Parsing form/JSON data in Express](#Parsing-form/JSON-data-in-Express)
1. [Parsing query params in Express](#Parsing-query-params-in-Express)

### Installation

Create our package.json file:
```bash
npm init -y
```
 
Add Express:
```bash
npm i express
```

Add Nodemon as a dev dependency:
```bash
npm i --save-dev nodemon 
```

By installing Nodemon as a dev dependency, it will allow me to easily restart the server anytime I need to make changes.

---

### Set up scripts

Create a script called `devStart` inside of our `scripts` key of the `package.json` file and run `nodemon` and the name of our javascript file (server.js).

Add `devStart` script to `package.json` file. Run `nodemon` and the folder route of our javascript file (`server.js`):
```json
// package.json file

...

"scripts": {
    "devStart": "nodemon server.js"
  },

...
```

Now, let's start the server with:
```bash
npm run devStart
```

[Back to Top](#Table-of-Contents)

---

### Create Express server

Inside our `server.js` file:
```js
// require in express to our application
const express = require('express');
// create an "app" variable by calling the express function
const app = express();

// run the server on localhost 3000
app.listen(3000);
```

Now, when I go to `http://localhost:3000/` in the browser I get a "Cannot GET /" message. This is because the app doesn't have any routes set up.

Now this is where Express.js excels, how it can set up different routes.
  * [Express Routing](https://expressjs.com/en/guide/routing.html)

[Back to Top](#Table-of-Contents)

---

### Basic routing in Express

Common Express routing methods:
```js
const express = require('express');
const app = express();

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

// PUT method route
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

// DELETE method route
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

// PATCH method route
app.patch('/user', function (req, res) {
  res.send('Got a PATCH request at /user')
})

// run the server on localhost 3000
app.listen(3000);
```

Make a GET request to the "index" page:
```js
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

app.listen(3000);
```

The first parameter to `app.get()` is the path (`/`). The second parameter is a callback function that takes 3 parameters.

The first parameter is a request (`req`), the second is a response (`res`), and the final parameter is the `next` function. 99.9% of the time we will not be using `next` so I will drop it for my example.

[Back to Top](#Table-of-Contents)

---

### Sending data in Express

Inside of our `app.get()` function we can call other methods to do things:
```js
...

app.get('/', function (req, res) {
  // send method
  res.send('<message to be displayed>');
  // sendStatus method
  res.sendStatus(500); // -> Internal Server Error
  res.sendStatus(200); // -> OK
  // json method
  res.json({ message: 'Hello World' }); // -> { "message": "Hello World" }
  // download method
  res.download('/<path to file>');
})

...
```

We can also chain on methods:
```js
...

app.get('/', function (req, res) {
  // sendStatus method with json messaged chained on
  res.sendStatus(500).json({ message: 'Error' });
})

...
```

  * [Sending a json file to Express server](https://stackoverflow.com/questions/44849082/sending-a-json-file-to-express-server-using-js)

[Back to Top](#Table-of-Contents)

---

### Routers in Express

A router is a way for us to create another instance of the application that is it's own little mini application that has all of it's own logic applied to it and can be inserted into the main application.

Create two simple routes:
```js
// server.js file

...

// create a users route
app.get('/users', (req, res) => {
  res.send('User List');
});
// http://localhost:3000/users -> "User List"

// create a new users route
app.get('/users/new', (req, res) => {
  res.send('User New Form');
});
// http://localhost:3000/users/new -> "User New Form"

...
```

Put all the code related to our users in it's own file (`users.js`), for encapsulation. We can then import that into the main application.

For this, the industry standard is to create a folder called `routes`. Now let's set up a mini application (our own little router):
```js
// users.js file

const express = require('express');
const router = express.Router();

// create a users route
router.get('/users', (req, res) => {
  res.send('User List');
});

// create a new users route
router.get('/users/new', (req, res) => {
  res.send('User New Form');
});
```

What we set up on this mini router is going to be independent from the main router. Now the `router` works exactly the same as our `app` did, so we can just replace `app` with `router`.

An advantage of using a router is we can nest it inside of parent route. Since all of our routes start with `/users` we know that everything having to do with this router starts with users and we can just remove the `/users` from the file paths.

Now let's be sure we can use this router by exporting it:
```js
// users.js file

const express = require('express');
const router = express.Router();

// create a users route
router.get('/', (req, res) => {
  res.send('User List');
});

// create a new users route
router.get('/new', (req, res) => {
  res.send('User New Form');
});

// export the router to use in server.js
module.exports = router;
```

Now, we import the router from users.js into the server and link up the routes:
```js
// server.js file

const express = require('express');
const app = express();

// import router from users.js into the server
const userRouter = require('./routes/users.js');

// link up the routes from users.js to a particular path
app.use('/users', userRouter);

app.listen(3000);
```

What this is saying is, anything that starts with `/users` add all of these different routes (`userRouter`) to the end of it.

This is a great practice to get into, making sure all of the different routes are defined in these different "router" (`userRouter`) files and then we can just "use" (`app.use('/users', userRouter);`) them throughout the application.

For example, if we had a "post" section we would just do:
```js
// server.js file

const express = require('express');
const app = express();

const userRouter = require('./routes/users.js');
// import a post route
const postRouter = require('./routes/posts.js');

app.use('/users', userRouter);
// link up the routes from posts.js
app.use('/posts', postRouter);

app.listen(3000);
```

We can do this for all the different routes in the application, which keeps the code in our `server.js` and `users.js` super clean.

[Back to Top](#Table-of-Contents)

---

### Advanced routing in Express

Let's look at some ways we can clean up how our routes are going to look, this both works if we want to call it on the `app` variable or the `router` variable. 

We'll show it in the `router` instance because it's going to make the most sense to do all of these in router files.

Let's now create a user:
```js
// users.js file

// create a new user
router.post('/', (req, res) => {
  res.send('Create User');
});

// access an individual user based on the ID (dynamically)
router.get('/:id', (req, res) => {
  // get the id parameter
  res.send(`Get User with ID ${req.params.id}`);
  // http://localhost:3000/users/01458 -> "Get User with ID 01458"
});
```

An important thing to note is when using dynamic parameters like in our example above (`/:id`), if we have another parameter such as (`/new`) and we call it underneath the GET request to `/:id` [18:30]:
```js
...

router.get('/', (req, res) => {
  res.send('User List');
});

router.post('/', (req, res) => {
  res.send('Create User');
});

// http://localhost:3000/users/new
// this becomes '/new' since we typed it into our URL
router.get('/:id', (req, res) => {
  res.send(`Get User with ID ${req.params.id}`);
});

// move route "/new" down under route "/:id"
router.get('/new', (req, res) => {
  res.send('User New Form');
});

...
```
What's going to happen is Express runs everything top to bottom, so if we make a URL, `http://localhost:3000/users/new` it's going to read, `router.get('/', (req, res) => {}` first and check if our `users/new` route matches a `/` route, which it does not.

Next, it's going to skip over `router.post('/', (req, res) => {}` because it's a POST request.

Next, it runs `router.get('/new', (req, res) => {}` and checks if the route matches `/new` which it does.

Last, it runs `router.get('/:id', (req, res) => {}`, which is dynamic, so whatever we type in after `/` becomes that route. Then, it checks if the route matches `/` with anything after it, which it does (`/users/new`). So, `req.params.id` becomes `new`.

> Note: the `/users` in `/users/new` is coming from the `server.js` file.

If we ever have a route like, `/new` that's static (hard-coded), we need to be sure we ALWAYS put it above our dynamic routes (i.e. `/:<something>`).

> Note: Almost ALWAYS when we're creating routes we will be using a PUT route. This allows us to update a user based on an ID.

Let's look at 3 very common routes:
```js
// GET: dynamically access an individual user based on the ID
router.get('/:id', (req, res) => {
  res.send(`Get User with ID ${req.params.id}`);
});

// PUT: dynamically update a user based on an ID
router.put('/:id', (req, res) => {
  res.send(`Update User with ID ${req.params.id}`);
});

// DELETE: dynamically delete a user based on an ID
router.delete('/:id', (req, res) => {
  res.send(`Delete User with ID ${req.params.id}`);
});
```

#### app.route() Function:

The GET, PUT, and DELETE pattern is so common that Express created another method called __app.route()__.

The [app.route()](https://www.geeksforgeeks.org/express-js-app-route-function/) function returns an instance of a single route, which you can then use to handle HTTP verbs with optional middleware. Use __app.route()__ to avoid duplicate route names (and thus typo errors).

__Syntax:__
```js
app.route( path )
```

Let's look at an example from our app:
```js
// users.js file

// Old
router.get('/:id', (req, res) => {
  res.send(`Get User with ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update User with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete User with ID ${req.params.id}`);
});

// New
// 1. call the route() function
// 2. pass it the path to our dynamic route (/:id)
// 3. we can then chain together all our requests
router.route('/:id')
  .get((req, res) => {
    res.send(`Get User with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  });
```

This makes our code-base a lot cleaner and we have less of a chance to make typos.

#### app.param() Function:

The [app.param()](https://www.geeksforgeeks.org/express-js-app-param-function/) function is used to add the callback triggers to route parameters. It is commonly used to check for the existence of the data requested related to the route parameter.

__Syntax:__
```js
app.param([name], callback)
```

__Parameters:__
1. __name__: It is the name of the parameter or an array of them.
2. __callback__: It is a function that is passed as a parameter.

Let's look at an example from our app:
```js
// users.js file
// http://localhost:3000/users/2

router.route('/:id')
  .get(...)
  .put(...)
  .delete(...);

router.param('id', (req, res, next, id) => {
  console.log(id); // -> 2
  next(); // -> app will continue to run code
});

```

In the code above, the `router.param()` function is saying, whenever we go to a route that has an `id` parameter which all of our routes (get, put, delete) from `router.route()` do. We're going to run the callback function with the `req`, `res`, `next`, `id` params.

We need to call the `next()` function in order for the program to run other code. Without calling `next()` our browser will load indefinitely.

Since `app.param()` is a type of "middleware" in Express. Middleware inside of Express is code that runs between the _request_ being sent to our _server_ and the actual _response_ being returned to the _user_.

For example, our:
```js
  .get((req, res) => {
    res.send(`Get User with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  });
```
are all the responses being sent to the user and middleware is code that runs before this section. So `route.param` is actually running first.

Now, instead of just console logging out the `id`, let's get the user with that `id`:
```js
router.route('/:id')
  .get((req, res) => {
    console.log(req.user); // -> { name: 'Katie' }
    ...
  })
  .put(...)
  .delete(...);

// create users array
const users = [ { name: 'Ryan' }, { name: 'Katie' } ];

router.param('id', (req, res, next, id) => {
  // create req.user variable ("id" comes from URL)
  req.user = users[id];
  next();
});
```

What this `param` has allowed us to do is, anytime we have an `id` get it from our `users[id]`. Then continue on with the rest of our code (`next()`). We're saving that `id` inside `req.user`.

Now, anywhere else we have a request object (`req`) which is pretty much everywhere, we can access that user directly with `req.user` and do whatever we want with that user.

This saves us from having to write a ton of code inside of each request in order to get the `id`.

[Back to Top](#Table-of-Contents)

---

### Middleware in Express

  * [Express Middleware](https://www.youtube.com/watch?v=lY6icfhap2o)

__Middleware__ is essentially code that runs between the _starting_ if the _request_ and the _ending_ of the _request_.

A really common type of middleware we might create is a middleware for logging out something:
```js
// server.js

const express = require('express');
const app = express();

// use our logger middleware (call it before our other app.use() functions)
app.use(logger);

const userRouter = require('./routes/users.js');

app.use('/users', userRouter);

// create middleware logger function
function logger(req, res, next) {
  // print out the URL this request comes from
  console.log(req.originalUrl); // -> i.e. "/users/1"
  next();
}
```

Every piece of middleware takes `req`, `res`, and `next`. They work exactly the same as our .get() functions which take a `req`, `res`, and `next`, we just never use the `next` function when we're making a GET or POST request. So, we only ever see `next` when we're creating middleware.

If we have a middleware that we would want to use everywhere on all of our routes, always define it at the very top of the page, like in the example above. If we do NOT want it to be used everywhere we can just use it on individual endpoints.

We can also move our `logger` function into the `router` for our users inside our `users.js` file. We then call `router.use(logger)` at the top of the file:
```js
// users.js file

const express = require('express');
const router = express.Router();

// use our logger middleware
router.use(logger);

router.get('/', (req, res) => {
  res.send('User List');
});

router.get('/new', (req, res) => {
  res.send('User New Form');
});

router.post('/', (req, res) => {
  res.send('Create User');
});

router.route('/:id')
  .get(...)
  .put(...)
  .delete(...);

const users = [ { name: 'Ryan' }, { name: 'Katie' } ];
router.param('id', (req, res, next, id) => {
  req.user = users[id];
  next();
});

// create middleware for logging out something
function logger(req, res, next) {
  // print out the URL this request comes from
  console.log(req.originalUrl);
  next();
}

module.exports = router;
```

This now means that every route defined on the `router` (user routes) are going to log themselves out to the terminal.

[Back to Top](#Table-of-Contents)

---

### Rendering static files in Express

Express has built in middleware functions and one of the most common built in middleware functions is for serving static files, things like, static HTML, CSS or JavaScript that we want to serve to the user.

  * [Serving static files in Express](https://expressjs.com/en/starter/static-files.html)

Let's begin by creating a folder called `public`. Inside `public` let's create an `index.html` file. Now back inside our `server.js` file lets write out some code to serve our static HTML file:
```js
// server.js file

const express = require('express');
const app = express();

// serve/render the "index.html" from our "public" folder to the user
app.use(express.static('public'));
```

The function we are using is called `express.static()`. The `.static()` function takes the name of the folder where all of our static files are located, so for our app it would be `public`.

So now let's serve our test file from another folder inside `public`. To do this we'll create a folder inside `public` called, `test`. Inside `test` create a file called `test.html`.

Now we just need to go to: `http://localhost:3000/test/test.html`, we will see our text being rendered out to the screen. Similarly, if we have any static CSS or JavaScript we need to render out they will also go inside that `public` folder, which we will need in just about every application.

[Back to Top](#Table-of-Contents)

---

### Parsing form/JSON data in Express

Another instance where we're going to be harnessing Express middleware is for parsing all the information sent to your server from something like a form or JSON requests.

By default Express does not allow us to access the body, or form data. To do this we need to use another built in middleware function called `urlencoded()`. This will allow us to access information coming from forms.

Inside of our `.urlencoded()` middleware function we need to pass in an object called `extended` that is set to `true`. So to use:
```js
app.use(express.urlencoded({ extended: true }));
```

We can also do the exact same thing with the `.json()` middleware function. But this works for whenever we are making a JSON request. So maybe we're making a `fetch` from the client to the server or calling an API, `.json()` will allow us to parse JSON information from the body. To use this:
```js
app.use(express.json());
```

[Back to Top](#Table-of-Contents)

---

### Parsing query params in Express

We can send data in our HTTP request in different ways. Some different ways we can send data are inside the:
  * Body
  * Query parameters
  * Headers
  * Resource parameter

For this example we'll be passing data with query parameters.

Now let's talk about when we have to deal with query parameters. For example, if we put a query parameter in our URL that has, `http://localhost:3000/users?name=Ryan`, what we want to do is access the actual name property from users and get that name from the query string.

Inside `router.get('/', (req, res) => {}`:
```js
// users.js file
// http://localhost:3000/users?name=Ryan

...

router.get('/', (req, res) => {
  console.log(req.query.name); // -> Ryan
  res.send('User List');
});

...
```

The `.name` from `req.query.name` is coming from whatever we pass into the URL as our name.

[Back to Top](#Table-of-Contents)