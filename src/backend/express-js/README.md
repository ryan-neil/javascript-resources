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
1. [Rendering HTML in Express](#Rendering-HTML-in-Express)
1. [Routers in Express](#Routers-in-Express)
1. [Advanced routing in Express](#Advanced-routing-in-Express)

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

### Rendering HTML in Express

Rendering a file to the user:
```js
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));

app.listen(3000)
```
  * [Serving static files in Express](https://expressjs.com/en/starter/static-files.html)

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

app.use(express.static(__dirname + '/views'));

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

app.use(express.static(__dirname + '/views'));

const userRouter = require('./routes/users.js');
// import a post route
const postRouter = require('./routes/posts.js');

app.use('/users', userRouter);
// link up the routes from posts.js
app.use('/posts', postRouter);

app.listen(3000);
```

[Back to Top](#Table-of-Contents)

---

### Advanced routing in Express

<!-- 16:00 -->

[Back to Top](#Table-of-Contents)

---