# 💾 Node.js - Express.js

These are just the fundamentals of Node and Express. This guide is not meant to be used for anything too serious...lol

## ✌🏻

### Table of Contents:
1. [Node.js](#1-Nodejs)
2. [Express.js](#2-Expressjs)

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

[Documentation](https://expressjs.com/en/5x/api.html)

## Installing Express: [Docs](https://expressjs.com/en/starter/installing.html)

Install Express with the CLI:
```bash
npm install express --save
```

## Start up the Express server:

This app will start a server and listen on port 3080 for connections. The app responds with “Hello World!” for requests to the root URL (`/`) or route. For every other path, it will respond with a `404 Not Found`.

## Run the app:

Inside the file directory:
```bash
node app.js
```

```js
const express = require('express')
const app = express()
const port = 3080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

## App methods:

The most commonly used Express methods are going to be:
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



[Back to Top](#Table-of-Contents)