# 💾 Node.js - Express.js

These are just the fundamentals of Node and Express. This guide is not meant to be used for anything too serious...lol

## ✌🏻

### Table of Contents:
1. [Node.js](#1-Nodejs)
2. [Express.js](#2-Expressjs)
    * [2.1 Installation](#21-Installation)
    * [2.2 Starting the Server](#22-Starting-the-server)
    * [2.3 HTTP Methods](#23-HTTP-methods)
    * [2.4 Sending Files with HTTP Methods](#24-Sending-files-with-HTTP-methods)
    * [2.5 Serving Static Files](#25-Serving-static-files)
    * [2.6 API vs. SSR](#26-API-vs-SSR)
    * [2.7 Express API](#27-Express-APIs)
    * [2.8 Route Parameters and Query String Parameters](#28-Route-Parameters-and-Query-String-Parameters)
    * [2.9 Middleware](#29-Middleware)
    * [2.10 Advanced HTTP Methods](#210-Advanced-HTTP-Methods)
    * [2.11 Express Router](#211-Express-Router)
    * [2.12 Express Controllers](#211-Express-Controllers)

#

# 1. Node.js

* [Introduction to Node.js](https://nodejs.dev/learn)
* [Node.js Docs](https://nodejs.org/api/all.html)

__Node.js__ is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

__Node.js__ runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows __Node.js__ to be very performant.

A __Node.js__ app runs in a single process, without creating a new thread for every request. __Node.js__ provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in __Node.js__ are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

When __Node.js__ performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, __Node.js__ will resume the operations when the response comes back.

This allows __Node.js__ to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.

## Table of Contents

1. [Introduction](#1-introduction)
    * [JavaScript with Node vs. JavaScript in the Browser](#javascript-with-node-vs-javascript-in-the-browser)
    * [Executing JavaScript with Node](#executing-javascript-with-node)
    * [Working with Modules](#working-with-modules)
    * [Invisible Node Functions](#invisible-node-functions)
        * [Node Functions Arguments](#node-functions-arguments)
    * [The Require Cache](#the-require-cache)
    * [Debugging with Node](#debugging-with-node)
2. [How The Backend Works](#2-How-The-Backend-Works)
3. [REST](#3-REST)
4. [Model View Controller](#4-Model-View-Controller)

## Introduction

### JavaScript with Node vs. JavaScript in the Browser

When we run code with Node, we're going to be running code directly on our machine (computer) without any browser being involved.

__JavaScript in the Browser:__
1. Executed by adding script tags to an HTML document
2. We get access to the DOM and related objects (window)
3. Code can references variables in other files freely
4. Include libraries by adding script tags (more complicated solutions exist)

__Vs.__

__JavaScript with Node:__
1. Executed by running the Node CLI (Command Line Interface) from your terminal
2. No DOM exists
3. Each file is its own separate world
4. Include libraries by using NPM (Node Package Manager)

[⬆️ Top](#table-of-contents)

---

### Executing JavaScript with Node

We have two different ways to run code with node:

The first way is to run node and then the name of the file in the same directory:

```bash 
node <file name>
```

> Note: We can technically execute files in different directories, we just have to provide a relative path

The second way to run JavaScript code with node is by entering the node REPL by just running `node`:

```bash 
node
```

We can use the node REPL to execute one off JavaScript statements. This is very similar to the console inside the browser.

> Note: To stop node at any time, we can press Control + C twice

[⬆️ Top](#table-of-contents)

---

### Working with Modules

#### Sharing Code Between Multiple Files

If we want to share code between different JavaScript files, we have to use the "module system". An example of how we would share code between files would look something like this:

`index.js` file:
```js
const message = require('./myscript.js');

console.log(message) // -> Hello there!
```

`myscript.js` file:
```js
const message = 'Hello there!';

module.exports = message
```

[⬆️ Top](#table-of-contents)

---

### Invisible Node Functions

How Node works is technically, the code inside `index.js` is being automatically wrapped inside of a function and then executed.

Let's look at this visually:
```js
// index.js file

const message = require('./myscript.js');
console.log(message) // -> "Hey, it's working!"
```

The above code at runtime looks like this:
```js
function(exports, require, module, __filename, __dirname) {
  const message = require('./myscript.js');

  console.log(message) // -> "Hey, it's working!"
}
```

In the above example `message` is calling the `require` argument to read the code inside of our `myscript.js` file.

> Note: A real world example of this could be, when 1 file (`feature.js`) has maybe one function that is a key feature of the app that we would want to use in our root JavaScript file.

In total, there are 5 different arguments being automatically passed into the function.

Let's look at these 5 different arguments and what they mean:
1. `exports`: Equivalent to `module.exports`. We can technically export code using this, but it is easier to use `module.exports` because of a little corner case.
2. `require`: Function to get access to the exports from another file.
3. `module`: Object that defines some properties + information about the current file.
4. `__filename`: Full path + file name of this file.
5. `__dirname`: Full path of this file.

#### Node Functions Arguments

Now in our index.js file if we `console.log` "arguments" (`console.log(arguments)`), we are returned a big object with indices of `0-4`. So in other words, it's an array of all the different arguments that are being passed to this invisible function.

Here's an example:
```js
[Arguments] {
  // The "exports" object
  '0': {},
  // The "require" object
  '1': [Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: Module {
      id: '.',
      path: '/Users/username/Documents/Ryan Neil/1_Programming/5_Github Repos/JavaScript-Resources/src/js/projects/node-clt/js',
      exports: {},
      parent: null,
      filename: '/Users/username/Documents/Ryan Neil/1_Programming/5_Github Repos/JavaScript-Resources/src/js/projects/node-clt/js/index.js',
      loaded: false,
      children: [],
      paths: [Array]
    },
    extensions: [Object: null prototype] {
      '.js': [Function (anonymous)],
      '.json': [Function (anonymous)],
      '.node': [Function (anonymous)]
    },
    cache: [Object: null prototype] {
      '/Users/username/Documents/Ryan Neil/1_Programming/5_Github Repos/JavaScript-Resources/src/js/projects/node-clt/js/index.js': [Module]
    }
  },
  // The "module" object
  '2': Module {
    id: '.',
    path: '/Users/username/Documents/Ryan Neil/1_Programming/5_Github Repos/JavaScript-Resources/src/js/projects/node-clt/js',
    exports: {},
    parent: null,
    filename: '/Users/username/Documents/Ryan Neil/1_Programming/5_Github Repos/JavaScript-Resources/src/js/projects/node-clt/js/index.js',
    loaded: false,
    children: [],
    paths: [
      '/Users/username/Documents/node_modules',
      '/Users/username/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  // The "__filename" object
  '3': '/Users/username/Documents/Ryan Neil/1_Programming/5_Github Repos/JavaScript-Resources/src/js/projects/node-clt/js/index.js',
  // The "__dirname" object
  '4': '/Users/username/Documents/Ryan Neil/1_Programming/5_Github Repos/JavaScript-Resources/src/js/projects/node-clt/js'
}
```

[⬆️ Top](#table-of-contents)

---

### The Require Cache

The "require cache" is an object that stores the results of requiring in a file. This "object" is going to have some number of __keys__ and __values__.

The different __keys__ of this object are going to be the names of the different files that we require in and the __value__ is going to be whatever we exported from that file. From the example above, we can imagine the __key__ is going to be `myscript.js` and the value is going to be `module.exports = "Hey, it's working!"`.

When we call `require()` for the first time, node is going to look out into the current file folder and find the file being referenced (i.e. `require('./myscript.js')`). It's then going to wrap the contents of that file in that invisible function and execute it.

Here's the key part, if we try and and call `require('./myscript.js')` a second time it's not going to cause the `myscript.js` file to be executed again. Instead, node is going to look at the "require cache" and it's going to see we've already required in that file called `myscript.js`.

Now, it's going to take a short cut and look at whatever has been exported previously and give us that value directly.

This is the big key point in a Node.js project. Each file is only ever executed one single time.

#### Files Get Required Once!

 So why do we care about knowing that we can only run a given file exactly one time in the life cycle of a project?

 Let's look at an example:
 ```js
// myscript.js file

let counter = 0;

module.exports = {
  incrementCounter() {
    counter = counter + 1;
  },
  getCounter() {
    return counter;
  }
};
 ```
 ```js
// index.js file

const counterObject = require('./myscript.js');

console.log(counterObject.getCounter()); // -> 0
counterObject.incrementCounter();
console.log(counterObject.getCounter()); // -> 1

const newCounterObject = require('./myscript.js');

console.log(newCounterObject.getCounter()); // -> 1
 ```
In the above example, when we require in `myscript.js` again we receive the exact same object with reference to the same counter variable that we received the first time. So `newCounterObject` takes the same value as `counterObject`, which is 1.

[⬆️ Top](#table-of-contents)

---

### Debugging with Node

Here's how we debug inside node:

  1. `node inspect index.js`: Start up a debugger __CLI__ and __pause__ execution whenever a 'debugger' statement is hit.
  2. `node --inspect index.js`: Start up a debugger __instance__ and __pause__ execution whenever a 'debugger' statement is hit. Access the debugger at 'chrome://inspect'.
  3. `node --inspect-brk index.js`: Start up a debugger instance and __wait__ to execute until a 'debugger' statement is hit. Access the debugger at 'chrome://inspect'.

  > Note: `node --inspect-brk index.js` is the more common method.

#### CLI Debugger Commands

  1. `c`: Continue execution until program ends or next debugger statement.
  2. `n`: Run the next line of code.
  3. `s`: Step in to a function.
  4. `o`: Step out of the current function.
  5. `repl`: Start up an execution environment where we can reference the different variables inside our program.

**[⬆ Top](#table-of-contents)**

## How The Backend Works

The web is made up of two main parts, the __Front End__ and the __Back End__.

#### Front End
  * Concerned with presentation
  * Fairly easy to understand since it's what we interact with daily on the web

#### Back End
  * Consists of all the parts of the web that users do not interact with

Let's see how the backend really works. Starting at the beginning the server will receive a request from a client in the form of a URL: 
```
http://example.com/path?query=value
```

From this URL the server can get almost all of the information it needs in order to process a request. Let's break apart this URL a bit more:

#### The Protocol:
```
http://
```

The only thing the __protocol__ does is tell the server if the request is encrypted. `HTTP` is for standard, non-encrypted requests. `HTTPS` is for encrypted requests.

#### The Host (Domain name):
```
example.com
```

Similarly, this is not important for the server since all it does is tell the internet which server to send the response to. Each server has their own particular __host__ (youtube.com, netflix.com, reddit.com). 

So once the request actually gets to the server the __host__ does not matter since all requests for the server will have the same __host__. For example `youtube.com` is the host for the YouTube server already knows that all requests it gets will have the host `youtube.com`.

This all means we can safely ignore the first have of the URL.

#### The Path:
```
/path
```

The __path__ tells the server what the client wants and defines which section of code on the server should be run in-order to get the correct response. Essentially the server is broken down into a bunch of different sections (i.e. `/users`, `/cats`, `/dogs`) which all correspond to a specific path.

#### The Query String:
```
?query=value
```

Lastly, the __query string__ is used by the specific section of the server to alter the response. The __query string__ is broken down into specific parameters which can augment the way that the server responds to a request for a specific path:

| Key  | Value |
| ---- | ----- |
| query | value |
| search | dogs |
| fullscreen | false |

For example, YouTube uses the same path when you search for a video:
```
https://www.youtube.com/results?search_query=dogs
```

But the __query string__ contains a search query parameter which tells the server what we searched for so it can respond with what we want:
```
?search_query=dogs
```

The URL alone is not enough to tell the server exactly what it needs to do. It can tell the server which section to look for and how to alter that section based on the query parameters.

This section of the server is broken down even further into multiple different parts. To determine which part of that section the server should run it needs to use an _action_ which is passed along with the URL. This _action_ can be a:
  * [GET]
  * [POST]
  * [PUT]
  * [DELETE]

By combining the action and this path the server can find the correct part of the correct section that it needs to run. It can then use the query parameters to alter the response of the particular part and section. 

Typically, the response from the server will be an HTML page that is dynamically generated based on the request from the client. This is why when we go to the YouTube search page it allows shows us the same page since it has the same path and action but the videos that are returned from our search are different based on the query parameter for our specific search.

#### More about the server...

It's important to note that the server is only accessible to the outside world through the sections it defines (i.e. `/users`, `/search`, `/database`). This means we can store any secure information on the server and it will be safe as long as it is not exposed through a specific path.

This is why it's safe to have a database and a website running on the same server since the server only chooses to expose the website and not the database. Essentially, the server acts as a barrier between the outside world and all the parts of a website.

[Back to Top](#Table-of-Contents)

## REST

What is REST?
  * (RE)presentation
  * (S)tate
  * (T)ransfer

It's basically a fancy way of saying that a server responds to __Create__, __Read__, __Update__, and __Delete__ requests in a _standard_ way. The idea behind REST is to treat all server URL's as access points for the various resources on the server.
```
http://example.com/users
```

In the example above, `/users` represents the resource that the server is exposing. As we mentioned earlier, REST needs a way to __Create__, __Read__, __Update__, and __Delete__ these resources. 

Let's explore this with  the following 5 URL's:
```
http://example.com/users
http://example.com/users
http://example.com/users/1
http://example.com/users/1
http://example.com/users/1
```

The first 2 URL's do not have an ID so they act on the entire _users_ resource:
```
http://example.com/users
http://example.com/users
```

Where the last 3 URL's do have an ID in their URL and thus act only on a single _user_ resource:
```
http://example.com/users/1
http://example.com/users/1
http://example.com/users/1
```

You may have noticed that there are only 2 distinct URL's:
```
http://example.com/users
http://example.com/users/1
```

This is because REST uses the 4 basic HTTP actions (`GET`, `POST`, `PUT`, and `DELETE`) to determine what to do with each URL:
```
[GET]    http://example.com/users
[POST]   http://example.com/users
[GET]    http://example.com/users/1
[PUT]    http://example.com/users/1
[DELETE] http://example.com/users/1
```

#### Let's break each of these down...

#### The first URL:
```
[GET] http://example.com/users
```
This URL is used to __get__ a list of the resource (users). In REST when a __GET__ URL does not have an ID, it acts upon the entire resource and will always return a list of every item in that resource.

The __GET__ action in REST corresponds with __reading__ data.

#### The second URL:
```
[POST] http://example.com/users
```
This URL is used to __create__ a new resource (user). In REST the __POST__ action corresponds with __creation__ and should always be used on the entire resource by not using an ID in the URL.

#### The third URL:
```
[GET] http://example.com/users/1
```
This URL is used to __get__ a _single_ resource (user) based on the _given ID_. The ID portion of the URL is used by REST to determine which resource from the collection of resources it should act upon.

In the case of our URL it is used to return the user with that specific ID.

#### The fourth URL:
```
[PUT] http://example.com/users/1
```
This URL can be the most confusing of them all. This URL is used to __update__ a resource (user) with the _given ID_. The __PUT__ action in REST corresponds with __update__ and works very similarity to POST but instead of creating a new resource (user) it updates an existing resource (user).

#### The fifth URL:
```
[DELETE] http://example.com/users/1
```
This URL is the most straight forward of them all. It is used to __delete__ a resource (user) with a _given ID_.

In order for a website to use REST the URL's do not have to be formatted exactly the same as above. For example, using these URL's would still be considered "RESTful" but most applications use the previously mentioned URL's.

The only thing that matters with REST is that the URL's used represent a resource, in our case a _user_, and that they support _Creating_, _Reading_, _Updating_, and _Deleting_ from that resource using the HTTP actions __GET__, __POST__, __UPDATE__, and __DELETE__.

[Back to Top](#Table-of-Contents)

## Model View Controller

In order to make highly complex web applications easier to work with, developers use different patterns to lay out there projects to make the code less complex and easier to maintain.

By far the most popular of these patterns is __MVC__, also known as:
  * Model
  * View
  * Controller

The goal of the __MVC__ pattern is to split a large application into specific sections that all have there own purpose. Let's look at an example where a user is requesting a specific page from the server:

#### Controller:
1. __Request__: Based on what URL the user is requesting the server will send all the request information to a specific _Controller_.
    * __Handles request flow__: The _Controller_ is responsible for handling the entire request from the client and will tell the rest of the server what to do with the request. It acts as the middleman between the other two sections, _Model_ and _View_. It should not contain very much code.
    * __Never handles data logic__: The _Controller_ should never directly interact with the data logic, it should only ever use the _Model_ to perform these interactions. The Controller never has to worry about how to handle the data that it sends and receives and instead only needs to tell the _Model_ what to do and then respond based on what the _Model_ returns.

#### Model:
2. __Get Data__: The first thing that happens when a _Controller_ receives a request is it asks the _Model_ for information based on the request. 
    * __Handles data logic__: The _Model_ is responsible for handling all of the data logic of a request. 
    * __Interacts with database__: The _Model_ interacts with the database and handles all __validation__, __saving__, __updating__, __deleting__, etc. of the data. The _Model_ never has to worry about handling user requests and what to do on failure or success, this is all handled by the _Controller_ and the Model only cares about interacting with the data.

#### View:
3. __Get Presentation__: After the _Model_ sends its response back to the _Controller_ the _Controller_ then needs to interact with the _View_ to render the data to the user. 
    * __Handles data presentation__: The _View_ is only concerned with how to present the information that the Controller sends it. 
    * __Dynamically rendered__: The _View_ will be a template file that dynamically renders HTML based on the data the Controller sends. The View does not worry about how to handle the final presentation of the data but instead only cares about how to present it.

#### Controller:
4. __Response__: The _View_ will send it's final presentation back to the _Controller_ and the _Controller_ will handle sending that presentation back to the user.

The important thing to note about this design is that the _Model_ and _View_ __NEVER__ interact with each other. Any interactions between the _Model_ and the _View_ are done through the _Controller_. Having the _Controller_ between the _Model_ and the _View_ means that the presentation of data and the logic of data are completely separated, which makes creating complex applications much easier.

#### Example:
Let's look at an example of how this design handles a request. Let's imagine a user sends a request to a server to get a list of _Dogs_.

1. __Get Dogs__: Server sends that request to the _Controller_ that handles `Dogs` (User -> Server -> Controller)
2. __Get Dog Data__: _Controller_ then asks the _Model_ that handles `Dogs` to return a list of all `Dogs` (Controller -> Model)
    * _Model_ queries database for list of all `Dogs` and then return that list back to _Controller_ (Model -> Controller)
    * If the _Model_ returns an error instead of a list of `Dogs` the _Controller_ would handle that error by asking the _View_ that handles errors to render a presentation for that error (3. Get Error Presentation) (Model -> Controller -> View)
    * This error presentation would then be returned to the user instead of the `Dog` list presentation (4. Error!) (View -> Controller -> User)
3. __Get Dog Presentation__: If the response back from the _Model_ was successful then the _Controller_ would ask the _View_ associated with `Dogs` to return a presentation of the list of `Dogs` (Model -> Controller -> View)
    * This _View_ would take the list of `Dogs` from the _Controller_ and render the list into HTML that could be used by the browser (View -> Controller -> User)
4. __Dogs!__: The _Controller_ would then take that presentation and return it back to the user, thus ending the request (View -> Controller -> User)

As we can see from this example, the _Model_ handles all the data, the _View_ handles all the presentation, and the _Controller_ just tells the _Model_ and _View_ what to do.

[Back to Top](#Table-of-Contents)

# 2. Express.js
  * [Express Documentation](https://expressjs.com/en/5x/api.html)
  * [Express Tutorial (FCC - 4:48:00)](https://www.youtube.com/watch?v=Oe421EPjeBE)

## 2.1 Installation
  * [Docs - Installation](https://expressjs.com/en/starter/installing.html)

First create a directory named myapp, or whatever you want your app to be called and navigate into it. Use the `npm init` command to create a `package.json` file for your application:
```bash
npm init
```

Next, install Express as a dependency with the CLI:
```bash
npm install express --save
```

## 2.2 Starting the Server

Let's first create a `app.js` file, or `server.js` file whichever you prefer. This will be where all of our server logic will live.

We can now invoke our server and listen for port 3000. When we run the application, we should receive a "`Cannot GET /`" message since our index route has yet to be defined:
```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
```

To run our application locally, inside the file's directory we simply run the following command:
```bash
node app.js
```

## 2.3 HTTP Methods

HTTP methods are referring to what the user is trying to do. Is the user trying read data, update data, delete data? 

Here are some of the most common Express methods you will see:
```js
const express = require('express');
const app = express();

app.get() // read data
app.post() // insert data
app.put() // update data
app.delete() // delete data

app.all() // response if we can't find a resource on the server
app.use() // responsible for middleware in the app
app.listen() // listens for connections on the specified host and port
```

Example HTTP requests:
```
GET      www.store.com/api/orders       ->   get all orders
POST     www.store.com/api/orders       ->   place an order (send data)
GET      www.store.com/api/orders/:id   ->   get single order (path params)
PUT      www.store.com/api/orders/:id   ->   update specific order (params + send data)
DELETE   www.store.com/api/orders/:id   ->   delete order (path params)
```

> Note: By default, all browsers perform a GET request.

Let's now set up some standard routes (paths) for our application:
```js
const express = require('express')
const app = express()
const port = 3000

// index route
app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

// 404 route
app.all('*', (req, res) => {
  res.status(404).send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Server listening at: http://localhost:${port}`)
})
```

The app will respond with “Hello World!” for requests to the root URL (`/`). For every other route, it will respond with a `404 Not Found`.

> Note: The `all` method handles all HTTP verbs (GET, POST, etc.). We will use a `*` as the first argument, which refers to all routes.

This is a bare-bones example of how we would set up an Express application.

[Back to Top](#Table-of-Contents)

## 2.4 Sending Files with HTTP Methods

For this, we need to use the `sendFile` method that comes with Express. In order to accomplish this we need to send an absolute path and use the `path` module.

```js
const express = require('express');
// import the 'path' module
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  // use the 'sendFile' method to serve the index.html file
  res.sendFile(path.resolve(__dirname, './<path to index.html>'));
});

...
```

> Note: `__dirname` is providing the absolute path for us.

[Back to Top](#Table-of-Contents)

## 2.5 Serving Static Files

So what does the term 'static', or 'static asset' mean? In the terms of our application, this means it's a file that the server doesn't have to change. Common examples of 'static' files are, an image file, styles files and most JavaScript files (as far as the server is concerned).

To serve static files such as images, CSS files, and JavaScript files, we use the `express.static` built-in middleware function in Express.

So basically the 'static' method is only looking for our 'public' folder. It then places all the contents of the 'public' folder as our 'static' assets so they are publicly available.

The function syntax is:
```js
express.static(root, [options])
```

The `root` argument specifies the root directory from which to serve static assets. Standard convention is to name this directory, 'public'.

For example, use the following code to serve images, CSS files, and JavaScript files in a directory named `public`:
```js
app.use(express.static('./public'));
```

Now, we can load the files that are in the public directory:
```bash
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html
```

Let's look at some example code inside our little application:
```js
const express = require('express');
const path = require('path');
const app = express();

// set up middleware and serve the static folder
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './<path to index.html file>'));
});

...
```

> Note: It's important to remember the `use()` method is used for setting up the Express middleware.

[Back to Top](#Table-of-Contents)

## 2.6 API vs. SSR

When it comes to using Express we will most likely be using it in one of these following ways:
  1. Setting up API's
  2. Templating with Server Side Rendering (SSR)

### API's with Express
When talking about API's with Express, we are talking about setting up an HTTP interface to interact with our data. 

Data is sent using JSON and in order to send a response back we will be using the `res.json` method. This will do all the heavy lifting for us like setting up the proper content type and stringify-ing our data.

### Server Side Rendering with Express
This is where we set up templates and send back entire HTML, CSS, and JavaScript ourselves. We will accomplish this by using `res.render` method.

For now we will just be focusing on the API side of Express.

## 2.7 Express API's

### res.json Method
  * [res.json Documentation](https://expressjs.com/en/4x/api.html#res.json)

The `res.json` method sends a JSON response. It sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().

The parameter can be any JSON type (object, array, string, boolean, number, or null) and you can also use it to convert other values to JSON:
```js
res.json(null)
res.json({ user: 'Ryan' })
res.status(500).json({ error: 'error message' })
```

Let's look at a quick example of this in our application where we hard-code in the data to `res.json`:
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json([ { name: 'Ryan' }, { name: 'Katie' } ]);
});

...
```

This returns us JSON with our two objects in the browser. And this is a very basic API where `res.json` is serving our data and we can build the frontend app using this data.

Let's take it a step further and instead of hard-coding our data let's replace that with a file:
```js
// data.js file

const users = [
  {
    id: 1,
    name: 'Ryan',
    email: 'ryan@gmail.com',
    gender: 'male'
  },
  {
    id: 2,
    name: 'Katie',
    email: 'katie@gmail.com',
    gender: 'female'
  }
];

// export users array
module.exports = { users };
```

Now, inside of our `app.js` file:
```js
// app.js file

const express = require('express');
const app = express();
// import our data.js file
const { users } = require('./data');

app.get('/', (req, res) => {
  // pass in data.js file to res.json
  res.json(users);
});
```
#### Expected Output:
```json
[
  { "id": 1, "name": "Ryan", "email": "ryan@gmail.com", "gender": "male" },
  { "id": 1, "name": "Katie", "email": "katie@gmail.com", "gender": "female" }
]
```

[Back to Top](#Table-of-Contents)

## 2.8 Route Parameters and Query String Parameters
  * [Routing Documentation](https://expressjs.com/en/guide/routing.html)

### Route parameters:
  * [req.params Documentation](https://expressjs.com/en/api.html#req.params)

Let's look at some example code with route parameters. Here we'll return all the users' information:

```js
const express = require('express');
const app = express();

const { users } = require('./data.js');

// index route
app.get('/', (req, res) => {
  res.send(`
    <h1>Home Page</h1>
    <a href="/api/users">Users</a>
  `);
});

// EXample URL = http://localhost:3000/api/users

// api route (all users)
app.get('/api/users', (req, res) => {
  // get JSON data from our imported users array
  res.json(users);
});
```
#### Expected Output:
```json
[
  { "id": 1, "name": "Ryan", "email": "ryan@gmail.com", "gender": "male" },
  { "id": 1, "name": "Katie", "email": "katie@gmail.com", "gender": "female" }
]
```

A more realistic approach is to send back specific information about the data we're fetching. This time let's just return the `name` and `email` from our `users`:

```js
const express = require('express');
const app = express();

const { users } = require('./data.js');

// index route
app.get('/', (req, res) => {
  res.send(`
    <h1>Home Page</h1>
    <a href="/api/users">Users</a>
  `);
});

// Example URL = http://localhost:3000/api/users

// api route (users name and email)
app.get('/api/users', (req, res) => {
  const newUsers = users.map((user) => {
    const { name, email } = user;
    return { name, email };
  });

  res.json(newUsers);
});
```
#### Expected Output:
```json
[
  { "name": "Ryan", "email": "ryan@gmail.com" },
  { "name": "Katie", "email": "katie@gmail.com" }
]
```

Now, when we navigate to the `/api/users` route in the browser we see the JSON data with our two `users` objects, displaying only the users' `name` and `email`.

#### Return Data for One Specific User

Let's now see how we can get some information about one specific user using Express route parameters:

```js
const express = require('express');
const app = express();

const { users } = require('./data.js');

// index route
app.get('/', (req, res) => {
  res.send(`
    <h1>Home Page</h1>
    <a href="/api/users">Users</a>
  `);
});

// Example URL = http://localhost:3000/api/users/1

// api route (single user)
app.get('/api/users/:userID', (req, res) => {
  const { userID } = req.params;

  const singleUser = users.find((user) => {
    return user.id === Number(userID);
  });

  res.json(singleUser);
});
```
#### Expected Output:
```json
[
  { "id": 1, "name": "Ryan", "email": "ryan@gmail.com", "gender": "male" }
]
```

It's important to remember that the request parameter will return a string. So our returned user ID is, `'1'` which we must convert into a number with the `Number()` method.

Of course, if our ID's are set up as strings (which is quite typical) then we can leave it as is and pass in the string.

#### Error Handling with Route Parameters

What if the user gives us an ID that doesn't make sense or is not present in our database? Let's see how we can handle this situation:
```js
const express = require('express');
const app = express();

const { users } = require('./data.js');

app.get('/', (req, res) => {
  res.send(`
    <h1>Home Page</h1>
    <a href="/api/users">Users</a>
  `);
});

// Example URL = http://localhost:3000/api/users/1

// api route (single user)
app.get('/api/users/:userID', (req, res) => {
  const { userID } = req.params;

  const singleUser = users.find((user) => {
    return user.id === Number(userID);
  });

  // check if the single user exists
  if (!singleUser) {
    return res.status(404).send('User Does Not Exist');
  }

  return res.json(singleUser);
});
```

Whenever we think of _route parameters_, we can think of them as placeholders where the user provides the data and then by using the request (`req`) and parameters (`params`) we can access that data and set up some logic for what we want to do with the data.

### Query String Parameters:
  * [req.query Documentation](https://expressjs.com/en/api.html#req.query)
  * [Query Parameters in Express](https://masteringjs.io/tutorials/express/query-parameters)
  * [HN Search API - Example](https://hn.algolia.com/api)

Query parameters are essentially a way for us to send small amounts of information to the server using the URL. Typically this information is used as parameters to query a database or filter results. 

Ultimately, this is up to the people who are setting up the server. They are the ones deciding what parameters are going to be accepted and what functionality will depend on these values.

Let's say we have a URL:
```
https://www.example.com/user?name=ryan
```

The _query string_ portion of the URL is the part of the URL after the question mark (`?`). For example:
```
?name=ryan
```

Each `key=value` pair is called a _query parameter_. If your query string has multiple query parameters, they're separated by `&`. For example, the below string has 2 query parameters, `name` and `age`.
```
?name=ryan&age=29
```

Pick up Query Strings here:
[Video 5:50:00](https://www.youtube.com/watch?v=Oe421EPjeBE)

[Back to Top](#Table-of-Contents)

## 2.9 Middleware

Express _middleware_ are functions that execute during the request to the server. Each middleware function has access to _request_ and _response_ objects and when it comes to functionality, the sky is the limit.

> Note: Middleware is EVERYWHERE in Express. We could go as far as saying, Express apps are just a bunch of middleware functions crammed together to make one big Express app.

Because of this, understanding middleware is fundamental to any developer using Express. To better understand Express middleware let's go through some examples.

### Middleware Example 1:

Let's start with a simple scenario where we have two routes, the 'home' (`/`) route and the 'about' (`/about`) route. In these routes, we'll log out the _method_ the user is using, the _url_ the user is trying to access, and the _date_.
```js
const express = require('express');
const app = express();

// request => middleware => response

// index route
app.get('/', (req, res) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method, url, date); // -> GET / 2021

  res.send('Home page');
});

// about route
app.get('/about', (req, res) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method, url, date); // -> GET / 2021

  res.send('About page');
});

app.listen(3000, () => {
  console.log(`Server listening at port 3000...`);
});
```

The problem with this method is we have to add those 4 lines of code to every single route and if our app has tons of routes this can get very messy. 

I better solution for this would be to set up a separate function to handle our 'logging' logic. Then, we can just attach the `logger` function to any of the routes we want. 

Let's do this now:
```js
const express = require('express');
const app = express();

// request => middleware => response

// logger helper function
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method, url, date); // -> GET / 2021
};

// pass in logger middleware to 'index' route
app.get('/', logger, (req, res) => {
  res.send('Home page');
});

  // pass in logger middleware to 'about' route
app.get('/about', logger, (req, res) => {
  res.send('About page');
});

app.listen(3000, () => {
  console.log(`Server listening at port 3000...`);
});
```

In our logger function above, express passes in the `req`, `res`, and `next` automatically to our middleware function. This is how we can gain access to the users method (`req.method`) and url (`req.url`).

In the above example, we are successfully logging out the users, `method`, `url` and `date` but you might notice our browser wheel is infinitely spinning. This is happening because we haven't passed it on to the next middleware.

So when we work with middleware, we must __always__ pass it on to the 'next' middleware, unless we're purposely terminating the whole cycle by sending back the response.

Let's adjust our code a bit more:
```js
const express = require('express');
const app = express();

// request => middleware => response

// logger helper function
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method, url, date);

  // pass to next middleware (req, res)
  next();
};

app.get('/', logger, (req, res) => {
  res.send('Home page');
});
// -> GET / 2021

app.get('/about', logger, (req, res) => {
  res.send('About page');
});
// -> GET /about 2021

app.listen(3000, () => {
  console.log(`Server listening at port 3000...`);
});
```

Okay, this is working as expected. But we have a few issues. First, our `app.js` file is getting a bit large and messy. It would be much cleaner with we put our `logger` function in a separate file.

Secondly, what if our `app.js` file as ~50 routes? We wouldn't want to add our `logger` function manually to all 50 routes. A much more efficient solution would be to have a method that essentially adds our middleware function to any route.

We're in luck because in Express there is such a function that does this for us, `app.use()`. We'll dive deeper into the `.use()` method in the next section.

### The app.use() Method
  * [Express app Middleware](https://expressjs.com/en/guide/using-middleware.html)

In short, each `app.use(<middleware>)` method is called every time a request is sent to the server.

So carrying on from our above example, let's add our `logger` middleware function to all of our routes:
```js
// logger.js file

// logger helper function
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method, url, date);

  next();
};

module.exports = logger;
```
```js
// app.js file

const express = require('express');
// import our logger function
const logger = require('./logger.js');
const app = express();

// middleware function to add logger to all application routes
app.use(logger);

// index route
app.get('/', (req, res) => {
  res.send('Home');
});

// about route
app.get('/about', (req, res) => {
  res.send('About');
});

// api products route
app.get('/api/products', (req, res) => {
  res.send('Products');
});

// api items route
app.get('/api/items', (req, res) => {
  res.send('Items');
});

app.listen(3000, () => {
  console.log(`Server listening at port 3000...`);
});
```

Now when we visit our route URL's we are getting our console logs:
```bash
GET / 2021
GET /about 2021
GET /api/products 2021
GET /api/items 2021
```

Now, it's important to note that where we invoke our `app.use(logger)` middleware matters. In Express everything goes in order. If we were to call our middleware below the index route (`/`) it will not work on that route. It will however, work on the about route because it is being called before that route's `GET` method.
```js
// app.js file

const express = require('express');
const logger = require('./logger.js');
const app = express();

// logger does not work here
app.get('/', (req, res) => {
  res.send('Home');
});

// invoke logger here
app.use(logger);

// logger works here
app.get('/about', (req, res) => {
  res.send('About');
});
```

We can also provide a path to our `app.use()` middleware functions. Now when we add the path to `use` it's going to be applied to anything that the base of the request path matches:
```js
const express = require('express');
const logger = require('./logger.js');
const app = express();

// middleware function will only be applied to routes with base of '/api'
app.use('/api', logger);

// doesn't work
app.get('/', (req, res) => {
  res.send('Home');
});

// will work
app.get('/api/products', (req, res) => {
  res.send('Products');
});
```

### Multiple Middleware Functions

In order to execute multiple middleware functions we can simply just place our functions in an array inside `app.use()`:

```js
const express = require('express');
// import authorize middleware function
const authorize = require('./authorize.js');
// import logger middleware function
const logger = require('./logger.js');
const app = express();

// place imported middleware inside an array to be used on all routes
app.use([ logger, authorize ]);

app.get('/', (req, res) => {
  res.send('Home');
});

app.listen(3000, () => {
  console.log(`Server listening at port 3000...`);
});
```

It's important to note that the middleware functions will be executed in order so if we flip the functions inside the `app.use` array, they will be called in that order:
```js
// 'authorize' will now be invoked before 'logger'
app.use([ authorize, logger ]);
```

### Adding an 'if' condition to our middleware functions

> Note: This is not how we authorize users in our Express applications. This is simply an example of executing multiple middleware functions.

Let's look at a simple example using a query string parameter. So what we're going to do is check if the user provides a query string in the URL, then send back the resource the user is requesting. However, if the user does not provide the query string parameter, we'll send back `401`:
```js
// authorize.js file

const authorize = (req, res, next) => {
  // look for specific user query string
  const { user } = req.query;
  // check if user provides a query string to the URL
  if (user === 'ryan') {
    // add a property of user onto the req object
    req.user = { name: 'ryan', id: 3 };
    // must call 'next'
    next();
  } else {
    // send back if user doesn't provide the query string
    res.status(401).send('Unauthorized');
  }

  next();
};

module.exports = authorize;
```

> Error 401 stands for 'unauthorized'.

Now, if we navigate to our home page (`http://localhost:3000`), products page (`http://localhost:3000/products`), or any of the routes, we get `401` 'Unauthorized'. This is because there is no path in our `app.use()`.

But, if we provide the correct query string parameters (`http://localhost:3000/?user=ryan`), we successfully get our home page. This is because the condition from our `authorize.js` file is  and we got o 'next'.

This is incredibly powerful because inside our `authorize` function we add the user (`{ name: 'ryan', id: 3 }`) which means we can now check for that query string parameter as well as accessing the users information (`name`, `id`, etc.).

Again, this is for demonstration purposes, normally what we would do is check for the JSON Web Token (JWT) and then check if the token exists and communicate with the database to get the user.

Back in the `app.js` file, let's add `req.user` to any of the routes just for demonstration purposes:
```js
const express = require('express');
const authorize = require('./authorize.js');
const logger = require('./logger.js');
const app = express();

app.use([ logger, authorize ]);

app.get('/', (req, res) => {
  res.send('Home');
});

// log the user at api/items route
app.get('/api/items', (req, res) => {
  // access to our 'req' object from 'authorize'
  console.log(req.user);

  res.send('Items');
});

app.listen(3000, () => {
  console.log(`Server listening at port 3000...`);
});
```
#### Expected Output:
```
GET /api/items?user=ryan 2021
{ name: 'ryan', id: 3 }
```

This is why it's so powerful, we can add our middleware and then do some kind of functionality. So now we're essentially attaching this to our `req` object in `api/items`. 

So, we have the `req` object and we're attaching the `req.user` property and now in any of our routes, we went with `api/items` in our example but it really doesn't matter because in any of our routes we have access to that user.

This is why middleware is so crucial and that's also why it's a big part of Express applications because it truly allows us to structure our applications as lego blocks.

### Common questions:

  1. If we have access to `app.use()` and know how to use it, are we going to add the middleware in route?

The answer is, yes. Imagine the scenario where we don't want to apply the `app.use()` to all our routes. For example, say we only want to check for 'authorized' users in the `/api/items` route.

We would just add our authorized middle to that route:
```js
const express = require('express');
const authorize = require('./authorize.js');
const logger = require('./logger.js');
const app = express();

app.get('/', (req, res) => {
  res.send('Home');
});

// pass in 'authorize' middleware function
app.get('/api/items', authorize, (req, res) => {
  console.log(req.user);
  res.send('Items');
});
```

To pass two middleware functions into a route we would:
```js
const express = require('express');
const authorize = require('./authorize.js');
const logger = require('./logger.js');
const app = express();

app.get('/', (req, res) => {
  res.send('Home');
});

// pass 2 middleware functions inside an array
app.get('/api/items', [ logger, authorize ], (req, res) => {
  console.log(req.user);
  res.send('Items');
});
```

  2. What are our options when it comes to middleware?

So far, we have covered one option, _setting up our own middleware_. The other option is _Express_. Express provides it's own built in middleware functions and for this we just need to reference the documentation and see what options are provided.

An example of a built in Express middleware function is `static`. We've seen this method when linking all of our static files (images, css, js, etc.):
```js
const express = require('express');
const app = express();

// built in middleware
app.use(express.static('./public'));
```

In the above example, `app.use()` is expecting to be passed some middleware (`static`). So somewhere in the Express codebase there is some logic for `static()` that is tacked onto the `express` object. 
```js
class Express {
  constructor() {}

  static(req, res, next) {
    // some crazy static logic...
  }
}

module.exports = Express;
```
Now this is way over simplified but hopefully you get the jist. 

The last option is _third parties_. For third party middleware we need to install them into our application. An example of a third party middleware library is '[morgan](https://www.npmjs.com/package/morgan)'.

[Back to Top](#Table-of-Contents)

## 2.10 Advanced HTTP Methods

### GET Method
* [Methods GET](https://www.youtube.com/watch?v=Oe421EPjeBE)

Let's look at an example of how we can _read_ data with the GET method:
```js
// data.js file

const people = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'susan' },
  { id: 4, name: 'anna' },
  { id: 5, name: 'emma' }
];
```
```js
// app.js file

const express = require('express');
const app = express();
// import data from data.js
let { people } = require('./data');

// api people route
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// start server...
app.listen(3000, () => console.log(`Server listening at port 3000...`));
```

Output:
```json
[
  {
    "success": true,
    "data": [
      { "id": 1, "name": "john" },
      { "id": 2, "name": "peter" },
      { "id": 3, "name": "susan" },
      { "id": 4, "name": "anna" },
      { "id": 5, "name": "emma" }
    ]
  }
]
```

### POST Method
  * [Methods POST](https://www.youtube.com/watch?v=Oe421EPjeBE)

In order to add or insert data onto the server we need to use the http verb, POST.

In this section we'll look at two ways we can setup POST requests and then we will checkout a tool called Postman to test our methods much faster.

When we talk about http messages, the body is optional. For example when we're sending a GET request, we're not sending a body. However, when we're sending a POST request it is crucial to include the body.

If we're trying to add something onto the server, we're going to need access to that data coming from the body. Otherwise how are we going to know what to add to the server?

Let's look at our 2 examples for how we can send the requests:

#### Method 1: Form Example

```js
const express = require('express');
const app = express();
let { people } = require('./data');

// 1. serve static assets
app.use(express.static('./methods-public'));

// 3. parse form data
// parsing the data adds the values to req.body
app.use(express.urlencoded({ extended: false }));

// 2. set post route
app.post('/login', (req, res) => {
  console.log(req.body); // -> { name: 'Katie' }
  res.send('Post route');
});

// start server...
app.listen(3000, () => console.log(`Server listening at port 3000...`));
```

Parsing the data with the `urlencoded` method adds the values of the form to the `req.body`. Let's now add some more logic to this example.

Let's add a quick check to make sure the user has submitted a name:
```js
const express = require('express');
const app = express();
let { people } = require('./data');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));

// post login route
app.post('/login', (req, res) => {
  // destructure name from req.body
  const { name } = req.body;
  // check if name exists
  if (name) {
    return res.status(200).send(`Welcome ${name}!`);
  } else {
    res.status(401).send('Please provide a name.');
  }
});

// start server...
app.listen(3000, () => console.log(`Server listening at port 3000...`));
```

#### Method 2: JavaScript Example

In this example we will still have the same form on the frontend but in instead of using the form to send the request to the server, we will be strictly using JavaScript. 

We will also be using JavaScript to send out http requests, which is the main difference between our two examples. This also means that our `content-type` will be different and this is important to note.

### PUT Method
  * [Methods PUT](https://www.youtube.com/watch?v=Oe421EPjeBE)

### DELETE Method
  * [Methods DELETE](https://www.youtube.com/watch?v=Oe421EPjeBE)

### Postman
  * [Postman Section - Tutorial](https://www.youtube.com/watch?v=Oe421EPjeBE)

Postman is a very useful tool that saves us a lot of trouble when working with GET, POST, PUT, and DELETE methods.

The URL we will be using is:
```bash
localhost:5000/api/people
```

[Back to Top](#Table-of-Contents)

## 2.11 Express Router
  * [Express Router - Docs](https://expressjs.com/en/5x/api.html#router)

### Defining and using separate route modules

Let's look at our file structure for the example we will be using:
```bash
├── src
│  ├── routes
│  │  └── users.js
│  └── app.js
```

The code below provides a concrete example of how we can create a route module and then use it in an Express application.

First we create routes for users in a module named `users.js`. The code first imports the Express application object, uses it to get a Router object and then adds a couple of routes to it using the `get()` method. Last of all the module exports the `Router` object.
```js
// user.js file

const express = require('express');
const router = express.Router();

// users index route
router.get('/', (req, res) => {
  res.send('Users home page');
})

// specific user route
router.get('/:id', (req, res) => {
  res.send('Specific user page');
})

module.exports = router;
```

To use the router module in our main app file (`app.js`) we first `require()` the route module (`user.js`). We then call `use()` on the Express application to add the Router to the middleware handling path, specifying a URL path of '/users'.
```js
// app.js file

const usersRouter = require('./routes/users.js');

// ...

app.use('/users', usersRouter);
```

The two routes defined in our users route module are then accessible from `/users` and `/users/1`, `/users/2`, etc.

[Back to Top](#Table-of-Contents)

## 2.12 Express Controllers
  * [Routes and Controllers - MDN](https://expressjs.com/en/5x/api.html#router)

### Defining and using separate controller modules

Let's look at our file structure for the example we will be using:
```bash
├── src
│  ├── controllers
│  │  └── usersController.js
│  ├── routes
│  │  └── users.js
│  └── app.js
```

Inside our `app.js` file:
```js
const express = require('express');
const app = express();

const usersRouter = require('./routes/users.js');

// ...

app.use('/users', usersRouter);
```

Inside the `users.js` file:
```js
const express = require('express');
const router = express.Router();

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/usersControllers')

// get users
router.get('/', getUsers)

// create user
router.post('/', createUser)

// update user
router.put('/', updateUser)

// delete user
router.delete('/', deleteUser)

module.exports = router;
```

Inside the `usersController.js` file:
```js
const getUsers = (req, res) => {
  // get all users logic
}

const createUser = (req, res) => {
  // create user logic
}

const updateUser = (req, res) => {
  // update user logic
}

const deleteUser = (req, res) => {
  // delete user logic
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
}
```

[Back to Top](#Table-of-Contents)