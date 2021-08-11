## E-Commerce App
<!-- <p align="center">
  <img src="" width="500" alt="">
</p> -->

## Introduction
In this application, we're going to be building an e-commerce app. In addition, we're going to be building a Node.js web server that's going to serve up some HTML pages to the user where they can view items, shop, add them to a cart, and eventually purchase their items.

<br>

<!-- <p float="left" align="middle">
  <img src="" width="49%" alt="">
  <img src="" width="49%" alt="">
</p> -->

<br>

### 🧐 What's inside?
A quick look at the files and directories you'll see in the repo.

```bash
├─ assets
├─ src
│ ├─ js
│ │ ├─ components
│ │ └─ index.js
│ ├─ index.html
│ └─ style.css
└─ README.md
```

----

### Table of Contents
1. [Part 1: Project start](#part-1)
    * [App architecture](#app-architecture)
    * [Package.json scripts](#packagejson-scripts)
    * [Creating a web server](#creating-a-web-server)
    * [Requests behind the scenes](#requests-behind-the-scenes)
    * [Displaying simple HTML](#displaying-simple-html)
    * [Understanding form submissions](#understanding-form-submissions)
    * [Parsing form data](#parsing-form-data)
1. [Part 2: Designing a custom database](#part-1)
1. [Part 3: Production-grade authentication](#part-1)

----

### Part 1: Project start

### App architecture

  1. Create a new project directory
  1. Generate a package.json file
  1. Install the dependencies we need to write the app
  1. Create a "start" script to run our project

### Package.json scripts

We'll begin by creating our `package.json` file inside our root directory "ecommerce-app":
```bash
$ npm init -y
```

Next, we'll install the dependencies we'll need for the application. The first dependency is going to be "[Express](https://www.npmjs.com/package/express)" and the second is going to be "[Nodemon](https://www.npmjs.com/package/nodemon)":
```bash
$ npm install express nodemon
```

We will be using "Express" to help us create the web server and "Nodemon" is a development tool that will automatically restart our web server anytime one of our project files changes.

This is useful because now, anytime we make a change to our code, we no longer have to go back into the terminal, stop our running application and then restart it manually.

Now that we have that taken care of, we need to create our root JavaScript file. Inside our app directory let's create a file called `index.js`. 

Inside our `package.json` file we're going to look for the `"scripts"` section and add in a script that is going to automatically start up our project for us, we'll call this script `"dev"`:
```json
{
  "name": "ecommerce-app",
  "version": "1.0.0",
  "description": "In this application, we're going to be building an e-commerce app. In addition, we're going to be building a Node.js web server that's going to serve up some HTML pages to the user where they can view items, shop, add them to a cart, and eventually purchase their items.",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.12"
  }
}
```

Now, to start our project up we can open up the terminal and inside the project directory we can run:
```bash
$ npm run dev
```

To stop the application from running we can type "Control + C" in the terminal.

__[Back to Top](#table-of-contents)__

----

### Creating a web server

First thing we need to do is "require" in our "Express" library and then we will use it to set up a new web server. We're then going to use the Express library to create a new variable called "app":
```js
// index.js file

const express = require('express');

const app = express();
```

`app` is an object that describes all the different things that our web server can do. We will be customizing this `app` object to tell our web server exactly what kind of "requests" it should expect to receive and what it should do whenever it does receive a "request".

Next, we're going to add in our "route handler". This is going to tell our web server what it should do when it receives a network request coming from the browser. 

Here we call `app.get()` where the first argument is a forward slash (root route of the app) inside a string and the second argument is a callback function with `req` and `res` as the arguments (always):
```js
// index.js file

const express = require('express');
const app = express();

// set our route handler
app.get('/', (req, res) => {
  // send response to whoever made a request to the server
  res.send('Hi there!')
});
```

The first argument, `req` stands for request and it is an object that represents the incoming request from a browser into our web server. The second argument, `res` stands for response and it represents the outgoing response from our server back over to the browser.

So what this segment of code is saying is, anytime someone makes a network request to the root route of our application we want to run the callback function. When this callback function runs we're going to take the string "Hi there!" and send it back to whoever just made a request to us.

Now that we've done that we can tell our application to start listening for incoming network requests. By default, when we run all of this code we can't actually access it right away from a browser. Instead, we have to tell this application to start listening for incoming network traffic on a particular "port" on our machine:
```js
// index.js file

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi there!')
});

// tell our app to start listening on port 3000
app.listen(3000, () => {
  console.log('Listening...');
})
```

Now, when we type in `localhost:3000` we are making an HTTP request to the running Express web server that we just created on our local machine. And those are the basics of using Express!

__[Back to Top](#table-of-contents)__

----

### Requests behind the scenes

When we typed in `localhost:3000` into our browser, our browser formulated a network request. The browser itself is not actually responsible for issuing that network request. Instead, it hands the request off to our operating system and all the different network devices connected to our operating system.

The request that was issued has a couple different properties typed to it. First, the browser takes the URL we entered and splits it into a couple of different pieces:
  1. __Host:__ 'localhost'
  2. __Port:__ 3000
  3. __Path:__ '/'
  4. __Method:__ 'GET'

__Host:__ This is essentially the domain we are trying to access. 

__Path:__ We put in `localhost:3000` by itself but everything after the `:3000` is interpreted to be the "path" that we are trying to access on this remote server. If we don't put anything at all, a default forward slash (`/`) is used. In our example we used a forward slash (`/`).

__Method:__ When we put an address into the address bar and hit enter, the "method" of the request by default is "GET", capitalized. There are several other "methods" of request available to us. The "method" of the request indicates the intent of the request.

So this request is taken and handed off to our operating system (OS). The OS is then in charge of accessing some network device that is connected to our computer and then sending the request out over the open internet.

__[Back to Top](#table-of-contents)__

----

### Displaying simple HTML

The first thing we want to focus on is our Admin Panel Sign Up page. We need to make sure we have the ability to show two different forms to the user, one to sign up and one to sign in.

Back inside our index.js file, we're going to find our route handler and we're going to replace our `res.send('Hi there!')` with a template string and some html instead:
```js
// index.js file

const express = require('express');
const app = express();

// add in our html elements
app.get('/', (req, res) => {
  res.send(`
    <div>
      <form>
        <input placeholder="email" />
        <input placeholder="password" />
        <input placeholder="password confirmation" />
        <button>Sign up</button>
      </form>
    </div>
  `);
});

app.listen(3000, () => {
  console.log('Listening...');
})
```

__[Back to Top](#table-of-contents)__

----

### Understanding form submissions

By inspecting the "Network" tab in the browser dev tools we know that whenever we have a form element and we click on some sign up button, a request is being issued. The important thing to understand is exactly what is being communicated.

By default whenever we click a "submit" button inside of a form or whenever we select an input and hit the "enter" key, the browser is going to initiate an "automatic submission".

With the "automatic submission" our browser is going to take a look at that form element. It's going to find all the different input elements inside of it and the browser is going to attempt to collect all that information for each of those input elements that have a name property assigned to them. Let's revisit our res.send html we add earlier and assign name properties to our inputs:
```js
// index.js file

...

// add name properties to input elements
app.get('/', (req, res) => {
  res.send(`
    <div>
      <form>
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign up</button>
      </form>
    </div>
  `);
});

...
```

Now, back in our webpage at `localhost:3000`, let's add in some text to the input fields and submit it. We'll notice that when we submit the information our URL has been updated to, `http://localhost:3000/?email=email%40email.com&password=123abc&passwordConfirmation=123abc`.

This is our browser taking a look at the `name` properties of our three different `input` elements as well as the values. It then converts all that information into something called a "query string" (everything after the question mark). The browser then makes a "GET" type request to the same URL that it's currently looking at.

So we can now configure our Express web server to receive this information and take a look at the email, password, and password confirmation properties. We can then use that information to create an account for the user.

By default, when the browser takes this information and makes a request, it's a "GET" type request but often times we modify this behavior. To do this we need to add a `method` property to the `form` element of our HTML and give it a value of "`POST`":
```js
// index.js file

...

// add method property of POST to form element
app.get('/', (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign up</button>
      </form>
    </div>
  `);
});

...
```

Adding a `method` property of `POST` to the form element is going to cause the default behavior of the browser to change. Now, rather than making a `GET` type request to our Express web server it is instead going to make a `POST` type request.

A `POST` type request is commonly associated with creating a record of some kind (blog post, comment, image upload, user account, etc.). Currently, we're getting an error message of, "Cannot POST /". Our browser is trying to make a method or a request with a method of `POST` and a route of forward slash (`/`) and this is coming from our running Express web server. It's complaining that we don't have any configuration to handle a request with the "POST /" configuration.

We can easily fix this by adding `app.post()` underneath our `app.get()` statement. We tell our router to watch for an incoming request with a path of `'/'` and method of POST:
```js
// index.js file

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign up</button>
      </form>
    </div>
  `);
});

// tell our router to watch for an incoming request with path of "/" and a method of POST
app.post('/', (req, res) => {
  // response when user clicks Sign up
  res.send('Account created!');
});

app.listen(3000, () => {
  console.log('Listening...');
})
```

__[Back to Top](#table-of-contents)__

----

### Parsing form data

Now that we have a better understanding of how the browser makes a form submission to our server, we need to figure out how to access the information that is sent along with the request on our web server.

Since our form is making a request with a method of `POST`, all the information is being appended into the body of the request.

__[Back to Top](#table-of-contents)__

----


### ⚒️ Built With
* HTML
* CSS
* JavaScript (Node.js, Express.js)

----

### Contributing
Contributions are always welcome! All I ask is that you open an issue and we discuss your proposed changes before you create a pull request.