## Express

* [Tutorial](https://www.youtube.com/watch?v=SccSCuHhOw0)

#### What is Express.js?

Express.js is a modular web framework for Node.js. It is used for easier creation of web applications and services. 

Express.js simplifies development and makes it easier to write secure, modular and fast applications.

#### What's the purpose of it with Node.js?

It is used for easier creation of web applications and services.

#### Why do we actually need Express.js? How is it useful for us to use with Node.js?

Express.js simplifies development and makes it easier to write secure, modular and fast applications. You can do all that in plain old Node.js, but some bugs can (and will) surface, including security concerns (eg. not escaping a string properly).

#### What is Redis? Does it come with Express.js?

Redis is an in-memory database system known for its fast performance. No, but you can use it with Express.js using a redis client.


## Table of Contents

1. [Installation](#Installation)
1. [Set up scripts](#Set-up-scripts)
1. [Create Express server](#Create-Express-server)

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

Installing Nodemon as a dev dependency will allow us to easily restart our server anytime we make changes.

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

Now, we just need to start the server with:
```bash
npm run devStart
```

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

Now, when we travel over to `http://localhost:3000/` in the browser we get a "Cannot GET /" message. This is because we don't have any routes set up so when trying to get the index route (`/`) it's saying it can't find this route.

Now this is where Express.js excels. The easiest way to set up a route