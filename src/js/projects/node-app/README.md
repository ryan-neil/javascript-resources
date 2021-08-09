# Node.js

## Introduction
What we will be doing is creating a fullstack web application with Node.js to better understand how Node works behind the scenes.

---

### 📓 Resources
1. [Node.js Guide in 7 Steps](https://www.youtube.com/watch?v=ENrzD9HAZK4&t=34s)

----

### Table of Contents
1. [Part 1: What is Node.js?](#part-1-what-is-nodejs)
    * [How do we use Node.js?](#how-do-we-use-nodejs)
    * [Understanding the Node runtime](#understanding-the-node-runtime)
    * [How events work in Node.js](#how-events-work-in-nodejs)
    * [Node.js file system](#nodejs-file-system)
    * [Modules and npm](#modules-and-npm)
1. [Part 2: Building the application](#part-2-building-the-application)
    * [HTTP and GET](#attp-and-get)
    * [Handling the request](#handling-the-request)
    * [Listening for requests](#listening-for-requests)
    * [Deploying to the Cloud](#deploying-to-the-cloud)

----

### Part 1: What is Node.js?

Node.js itself is not a programming language but a runtime that allows us to run JavaScript on a server and not just in the browser.

### How do we use Node.js?

1. [REPL](https://codeforgeek.com/nodejs-repl/)

The REPL acronym stands for READ, EVALUATE, PRINT & LOOP. REPL is an easy-to-use command-line tool, used for processing Node.js expressions. 

It captures the user's JavaScript code inputs, interprets, and evaluates the result of this code. It displays the result to the screen, and repeats the process till the user quits the shell.

> Note: Ctrl + C twice will shut down the REPL environment

REPL is useful when you want to debug your code, run or test some code outside your project but in most cases we will want to execute JavaScript code that lives inside an actual JavaScript file.

2. index.js File

The default entry point into a Node.js app is the "index.js" file. We can run the code inside "index.js" with the command `node index.js` or `node <path to file>`.

Since this is an "index" file we can shorten the command by just pointing to the parent directory with, `node .`. And there we go, we just built a Node app!

**[⬆ Top](#table-of-contents)**

----

### Understanding the Node runtime

In most ways, JavaScript works the same way it does in the browser as it does in Node.js. Although, there are some very important differences we need to know about...

1. Node has a handful of built in "global" identifiers

One of those "globals" is `console`, which we are already familiar with for logging out values to the terminal. 

There's another "global" with the name of `global`. This object is a namespace that is available throughout the entire Node process. For example, if we assign a `luckyNumber` property to `global` we can then access it anywhere in our code:
```js
console.log(global.luckyNumber) // -> undefined

global.luckyNumber = '23';

console.log(global.luckyNumber) // -> 23
```

Frontend developers can compare `global` to the `window` object in the browser.

Now, one of the most important "globals" for us to know is `process` which gives us access to the currently running Node "process". 

We might use this to check the current platform or operating system:
```js
console.log(process.platform); // -> darwin
```

Or grab an environment variables from our server:
```js
console.log(process.env.USER); // -> ryanneil
```

**[⬆ Top](#table-of-contents)**

----

### How events work in Node.js

We will often hear people describe it as an asynchronous event-driven JavaScript runtime. The runtime implements something called an event loop similar to how a web browser does.

What this does is allow Node to push intensive operations off to a separate thread so that only very fast non-blocking operations happen on the main thread. This is also why people often refer to Node as "non-blocking".

This is a design choice that makes Node.js very suitable for things that require high throughput like, real-time applications, web servers, etc. So how does this effect us as programmers?

Typically, we won't have to think about the low-level details, we just need to understand how events and callbacks work.

#### Events

In most cases, we will listen to events. Events can come in many forms but one example is on the `process` "global" that we had a look at earlier.

Before a node process finishes it emits an event named `'exit'` and we can "listen" to this event using `on()` and register a callback function as the second argument.
```js
process.on('exit', function() {
  // logic
});
```

This is similar to our DOM event listener syntax:
```js
variable.addEventListener('click', function() {
  // logic
})
```

When the `exit` event occurs Node will run this function. This is where it gets it's name "callback" because the function isn't called the first time Node sees it. It's only called after the `exit` event occurs at some point in the future.

The event above is built into Node but we can also build our own from scratch. First thing we need to do is import an `EventEmitter` from the events module that is built into Node:
```js
// import the EventEmitter event
const { EventEmitter } = require('events');
```

We can then create a custom event emitter by instantiating the class and then registering a callback that fires on the `lunch` event:
```js
const { EventEmitter } = require('events');
// instantiating the class
const eventEmitter = new EventEmitter();

// register callback that fires on 'lunch' event
eventEmitter.on('lunch', () => {
  console.log('Yummy');
});
```

Now that our callback is registered, we can simply call our event emitter `emit` with the event name:
```js
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
  console.log('Yummy');
});

// call our event emitter with our event name
eventEmitter.emit('lunch'); // -> Yummy
```

This event driven style of programming is extremely useful when we have something that is CPU intensive.

**[⬆ Top](#table-of-contents)**

----

### Node.js file system

Node.js have a built in file system module called `fs`. The file system module can read, write, and delete files on the file system among other things. It can also do things in a "blocking" or "non-blocking" way.

Let's look at an example of this. Let's create a `.txt` file inside our app directory. We'll add some text inside, "Oh, hello file system!". 

Back in our index.js file we'll import two functions from the file system module:
```js
// import two functions from the file system module
const { readFile, readFileSync } = require('fs');
```

> Note: Anytime we see a function that ends in "sync", think "blocking" or in other words, it will need to finish all of it's work before any of our other code can run

We can read a `txt` file with Node by simply passing the path to that file and then specifying the encoding as `utf8`. This is a "blocking" method:
```js
const { readFile, readFileSync } = require('fs');

// read our txt file
const txt = readFileSync('./hello.txt', 'utf8');

console.log(txt); // this runs first
console.log('do this asap'); // this runs second

// -> Oh, hello file system!
// -> do this asap
```

Reading a file could take a while especially if it's a very large file. What you'll notice when we run our code is the second `console.log` won't run until after the `hello.txt` file has been read.

If we want to transform the example above to "non-blocking" we can refactor the code to a callback. with `readFile` we can pass the same first two arguments and then add a callback function as the third argument:
```js
const { readFile, readFileSync } = require('fs');

// read our txt file
readFile('./hello.txt', 'utf8', (err, txt) => {
	console.log(txt); // -> this runs second
});

console.log('do this asap'); // -> this runs first
// -> do this asap
// -> Oh, hello file system
```

Inside the callback function we can access an error object if the operation fails or when success, the actual text from the `hello.txt` file.

What's great about this is even though the `console.log` to the `hello.txt` file comes first in our script, it's not the thing that gets executed first. Node executes the callback, runs the rest of the script and then finally runs the callback when the file has been read.

The last way we can read a file in Node is by using a "promise-based" solution. Promises are also asynchronous and "non-blocking". They also tend to produce much cleaner code when compared to callbacks.

This time we're going to import `readFile` from the `promises` name space. This gives us a function that returns a promise when called:
```js
const { readFile } = require('fs').promises;

async function hello() {
  const file = await readFile('./hello.txt', 'utf8');
  console.log(file);
}
hello(); // -> Oh, hello file system
```

The `async` and `await` syntax will make our code much easier to read especially when we have multiple `async` calls in the same function.

In the next section we'll talk a bit more in depth about the `require()` function we've been using in our examples.

**[⬆ Top](#table-of-contents)**

----

### Modules and npm

A module is nothing more than a JavaScript file that exports its code. Node has a ton of built in modules like `fs` and `events` that we've already been playing around with.

The traditional way to import a module in Node is to use the `require()` function. Node has added support for "es modules" which use the `import`/`export` syntax. Though, most Node.js code written in Vanilla JavaScript still uses `require()` and this is important to know as a Node.js developer.

Let's look at how we can use modules in our own code base. We'll start by creating a `module.js` file to serve as our module. Next, inside  our `index.js` file we need to create a variable for the module and import it using `require()`.
```js
// index.js file

const myModule = require('./module.js');

console.log(myModule); // -> {}
```

You'll notice when we `console.log` our module, it's just an empty object. In order to make a module useful we need to export some code from it.

Back inside our `module.js` file, we can reference this object with `module.exports`. We can add new properties to this object or redefine it as a new object. In any case, whatever we add here can be used in the other file:
```js
// module.js file

module.exports = {
  superhero: 'Thor'
}
```

Now when we `console.log` it, the object is no longer empty:
```js
// index.js file

const myModule = require('./module.js');

console.log(myModule); // -> { superhero: 'Thor' }
```

#### Using external code with npm

At some point it's very likely we will want to use somebody else's code out there in the world and the primary place to do that is via the "node package manager" or "npm".

"npm" is a tool we can use to install remote packages to use in our own code. The first step is to open the terminal and run `npm init` and we'll use the `-y` flag to use the default options:
```bash
npm init -y
```

You'll notice this created a `package.json` file in our app directory. This file contains meta data about our project. But most importantly it keeps track of the dependencies that our app is using:
```json
// package.json file

{
  "name": "node-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

The first thing we're going to install is [Express](https://expressjs.com/). Express is a minimal web application framework and one of the most popular third-party node modules.

Inside our `package.json` file you'll notice we now have a `"dependencies"` section:
```json
// package.json file

{
  "name": "node-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  // newly created dependencies section
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

In addition you might notice we now have a "node_modules" directory in our app directory. The "node_modules" folder contains the raw source code for the dependency and we should NEVER have to modify code in the "node_modules" directory.

Now that we have the Express package installed, we can import it by name in our JavaScript code by simply "requiring" `express`:
```js
const express = require('express');
```

We're now ready for part 2 where we build a real full-stack application and deploy it to the cloud.

**[⬆ Top](#table-of-contents)**

----

### Part 2: Building the application

What we're going to be building is your typical full-stack web application. Our server is going to live on a URL and when a user makes a request to this URL in the browser the server will respond with some HTML.

In the code, we'll first create an instance of an Express app. An Express app allows us to create different URLs and "endpoints" that a user can navigate to in the browser. We then define code for the server to handle those requests.

#### HTTP and GET

Now, we won't get too deep into "[HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)" but when the user navigates to a URL in the browser it's what's known as a "[GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)" request.

A "GET" request means the user is requesting some data on the server and not trying modify or update anything on the server. With Express we can set up an "endpoint" like that by calling `app.get()`. 

For the first argument we add the URL the user will navigate to, which in our example is just going to be a forward slash (`'/'`) for the route URL. 

> Note: We can also create multiple pages for our web-app by creating different URLs here

The second argument in our "GET" request is going to be the callback function. We can think of every request to this URL as an "event" and then we handle that "event" with this callback function. Express gives us two parameters to make use of, `request` and `response`.
```js
const express = require('express');
const app = express();

app.get('/', (request, response) => {
  // some logic
});
```

The `request` is the  incoming data from the user. In our example, we don't need to parse any data from the `request`, however in many cases we might want to look at the "headers" or the "body" of the `request` to authenticate a user or understand what the user is trying to do.

#### Handling the request

At this point we need to implement the code to handle the `request`. What we want to do is read some HTML from our file system and then send it back down to the browser.

First thing we do is create a `home.html` file and add some generic code and styles to the document.
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Node App</title>

  <style>
    body {
      font-family: -apple-system, Ubuntu, sans-serif;
      text-align: center;
    }
  </style>
</head>

<body>
  <h1>
    This is my Node.js app!
  </h1>
</body>

</html>
```

Next, in our source code we can import `readFile` from Node's "file system" module. We'll then read our `home.html` file, use `utf8` encoding, and in our callback function we'll have access to the HTML string:
```js
const express = require('express');
const app = express();

// import readFile module
const { readFile, readFileSync } = require('fs');

app.get('/', (request, response) => {

  // set readFile
  readFile('./home.html', 'utf8', (err, html) => {
    // some logic
  });

});
```

We can now send a "response" back down to the client by calling `response.send()`:
```js
const express = require('express');
const app = express();

const { readFile, readFileSync } = require('fs');

app.get('/', (request, response) => {

  readFile('./home.html', 'utf8', (err, html) => {

    // send response back to client
    response.send(html);

  });

});
```

Let's also handle any error responses we might get back by sending a response with a status code of `500` which means a server error. This way the user knows something went wrong on the server:
```js
const express = require('express');
const app = express();

const { readFile, readFileSync } = require('fs');

app.get('/', (request, response) => {

  readFile('./home.html', 'utf8', (err, html) => {

    // handle any errors we get back from the server
    if (err) {
      response.status(500).send('Sorry, issue with the server.')
    }

    response.send(html);

  });

});
```

That's all there is to it, we now have a way of sending HTML from the server to the client.

#### Listening for requests

The last thing we need to do is tell our Express app to start listening to incoming requests. We do this by defining a "[PORT](https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js)" which will normally come from a Node environment variable.

Next, we call `app.listen()` with that "PORT" and when it starts up we'll `console.log` the, "App is available on http://localhost:3000":
```js
const express = require('express');
const app = express();

const { readFile, readFileSync } = require('fs');

app.get('/', (request, response) => {

  readFile('./home.html', 'utf8', (err, html) => {

    // handle any errors we get back from the server
    if (err) {
      response.status(500).send('Sorry, issue with the server.')
    }

    response.send(html);

  });

});

// tell the app to start listening
app.listen(process.env.PORT || 3000, () => {
  console.log(`App is available on http://localhost:3000`);
});
```

We can start it up by opening the terminal and running `node .` with the current working directory.

Now, there's one important thing we need to know and that's that callbacks can be very difficult to work with especially as the app grows in complexity.

It often leads to a state known as "callback hell" where we have a bunch of callbacks nested within callbacks, within callbacks, within more callbacks... The best way to avoid code like this is to use promises.

Instead of importing `readFile` from just `require('fs')`, we'll import it from `require('fs').promises`. We can then make our callback function `async` and then we can write the response in a single line of code by saying `response.send()` and then `await readFile()` with the html page followed by the `utf8` encoding:
```js
const express = require('express');
const app = express();

const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {
  response.send(await readFile('home.html', 'utf8'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is available on http://localhost:3000`);
});
```

This is much more concise and readable but it's especially useful when we have multiple `async` operations to handle in a single request. Now that we've built a Node.js app, let's see how we would deploy it to the cloud.

#### Deploying to the Cloud

There are a bunch of different ways we could deploy our app tp the cloud but for our example, we will use [Google App Engine](https://cloud.google.com/appengine).

App Engine has what's called a "standard environment" for Node.js up to version 12 and what this does is provide us with a server in the cloud that scales automatically based on the incoming traffic to the app.

We first need to have a [Google Cloud Platform](https://cloud.google.com/) account as well as the [Google Cloud Command Line Tools](https://cloud.google.com/sdk) installed on our local system.

  * [GCP Account Tutorial](https://www.youtube.com/watch?v=hRXMuMQQ27c)

Once we've done this, we can go into our source code and create an `app.yaml` file. This file is used to configure our cloud server. All we need to do for this is specify a `runtime` of `nodejs12` (Node.js version 12):
```yaml
# app.yaml file

runtime: nodejs12
```

App Engine will run our code by looking in the `package.json` file for `"start"` script:
```json
// package.json file

{
  "name": "node-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    // define our start script
    "start": "node ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

From here, we can simply open the terminal and run:
```bash
gcloud app deploy
```

This will give us a URL where we can access our app publicly on the web. 

Congratulations, we're now full-stack cloud architects! 😉

**[⬆ Top](#table-of-contents)**

----