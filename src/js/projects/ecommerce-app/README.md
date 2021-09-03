## E-Commerce App
<!-- <p align="center">
  <img src="" width="500" alt="">
</p> -->

## Introduction
In this application, we're going to be building an e-commerce app. In addition, we're going to be building a Node.js web server that's going to serve up some HTML pages to the user where they can view items, shop, add them to a cart, and eventually purchase their items.

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
1. [Part 1: Project Start](#part-1-project-start)
    * 1.1 [App architecture](#11-app-architecture)
    * 1.2 [Package.json scripts](#12-packagejson-scripts)
    * 1.3 [Creating a web server](#13-creating-a-web-server)
    * 1.4 [Requests behind the scenes](#14-requests-behind-the-scenes)
    * 1.5 [Displaying simple HTML](#15-displaying-simple-html)
    * 1.6 [Understanding form submissions](#16-understanding-form-submissions)
    * 1.7 [Parsing form data](#17-parsing-form-data)
    * 1.8 [Middlewares in Express](#18-middlewares-in-express)
1. [Part 2: Designing a Custom Database](#part-2-designing-a-custom-database)
    * 2.1 [Data storage](#21-data-storage)
    * 2.2 [Different data modeling approaches](#22-different-data-modeling-approaches)
    * 2.3 [Implementing the users repository](#23-implementing-the-users-repository)
    * 2.4 [Opening the repo data file](#24-opening-the-repo-data-file)
    * 2.5 [Saving records](#25-saving-records)
    * 2.6 [Random ID generation](#26-random-id-generation)
    * 2.7 [Finding by ID](#27-finding-by-id)
    * 2.8 [Deleting records](#28-deleting-records)
    * 2.9 [Updating records](#29-updating-records)
    * 2.10 [Adding filtering logic](#210-adding-filtering-logic)
    * 2.11 [Exporting an instance](#211-exporting-an-instance)
    * 2.12 [Signup validation logic](#212-signup-validation-logic)
1. [Part 3: Production-grade authentication](#part-3)

----

### Part 1: Project Start

### 1.1 App architecture

  1. Create a new project directory
  1. Generate a package.json file
  1. Install the dependencies we need to write the app
  1. Create a "start" script to run our project

### 1.2 Package.json scripts

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

> Note: To stop the application from running we can type "Control + C" in the terminal

__[Back to Top](#table-of-contents)__

----

### 1.3 Creating a web server

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

The first argument, `req` stands for "request" and it is an object that represents the incoming request from a browser into our web server. The second argument, `res` stands for "response" and it represents the outgoing response from our server back over to the browser.

So what this segment of code is saying is, anytime someone makes a network request to the root route of our application we want to run the callback function. When this callback function runs we're going to take the string `"Hi there!"` and send it back to whoever just made a request to us.

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

Now, when we type in `localhost:3000` into the browser search bar we are making an HTTP request to the running Express web server that we just created on our local machine. And those are the basics of using Express!

__[Back to Top](#table-of-contents)__

----

### 1.4 Requests behind the scenes

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

### 1.5 Displaying simple HTML

The first thing we want to focus on is our Admin Panel Sign Up page. We need to make sure we have the ability to show two different forms to the user, one to sign up and one to sign in.

Back inside our index.js file, we're going to find our route handler and we're going to replace our `res.send('Hi there!')` with a template string and some html for our sign up page instead:
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

### 1.6 Understanding form submissions

By inspecting the "Network" tab in the browser dev tools we know that whenever we have a form element and we click on some sign up button, a request is being issued. The important thing to understand is exactly what is being communicated.

By default whenever we click a "submit" button inside of a form or whenever we select an input and hit the "enter" key, the browser is going to initiate an "automatic submission".

With the "automatic submission" our browser is going to take a look at that form element. It's going to find all the different input elements inside of it and the browser is going to attempt to collect all that information for each of those input elements that have a name property assigned to them. Let's revisit our `res.send` html we added earlier and assign name properties to our inputs:
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

A `POST` type request is commonly associated with creating a record of some kind (blog post, comment, image upload, user account, etc.). Currently, we're getting an error message of, "Cannot POST /". Our browser is trying to make a request with a method of `POST` and a route of forward slash (`/`) and this is coming from our running Express web server. It's complaining that we don't have any configuration to handle a request with the "POST /" configuration.

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

### 1.7 Parsing form data

Now that we have a better understanding of how the browser makes a form submission to our server, we need to figure out how to access the information that is sent along with the request on our web server.

Since our form is making a request with a method of `POST`, all the information is being appended into the body of the request.

Our goal here is to make sure we can add in some code to `app.post()` request handler and take the email, password, and password confirmation that the user provides inside the request object (`req`) and create a user account with it.

First thing we do is call `req.on()` and pass in the data event along with a callback function that will receive an argument of `data`.
```js
// index.js file

...

app.post('/', (req, res) => {
  req.on('data', (data) => {
    console.log(data); // -> Buffer object with hex values
  });
  res.send('Account created!');
});

...
```

Right now, let's look under the hood of `req.on('data')`. Back inside of the browser we have the `addEventListener` method that we can use to register a callback function whenever some event occurred. Essentially, `req.on('data')` is doing the same thing.

We can think of the `req` object as being like an HTML element that is going to emit an event at some point in time. The `on()` method is just about identical to `addEventListener` method we have in the browser. In our case, the event that we're waiting for is called the `'data'` event. So, the `req` object emits a `data` event any time that it receives some bit of data.

The received `data` is then passed in as the first argument to the callback function in `req.on()`. When we run the above code we get back a "Buffer" object which is essentially an array of raw information. 

What we now need to do with this information is convert it into a string so we can understand exactly what is being communicated. We then need to create an object with our key value pairs of user information so we can access it much more easily:
```js
// index.js file

...

app.post('/', (req, res) => {
  req.on('data', (data) => {
    // parse data to turn it into plain information that we can use
    const parsed = data.toString('utf8').split('&');

    // create our formData object
    const formData = {};
    // loop through parsed data
    for (let pair of parsed) {
      // destructure key and value, then split each pair by the equal sign
      const [ key, value ] = pair.split('=');
      // now we can use key and value and add that information to our formData object
      formData[key] = value;
    }
  });
  res.send('Account created!');
});

...
```

Let's brake down some of the more confusing aspects of the code example above. Inside of our for loop, we're destructing our `key` and `value` variables with `pair.split()`. 

When we call `pair.split()`, we're going to receive an array of 2 strings. When we put `key` and `value` in brackets its saying, take the first element out of that array and assign it to the `key` variable and then take the second element and assign it to the `value` variable.

__[Back to Top](#table-of-contents)__

----

### 1.8 Middlewares in Express

Anytime we get a `POST` request to our root (`/`) or a `POST` request to products (`/products`), we would want to run our form parsing logic and essentially receive all the information in the body of the request BEFORE we hand it off to our final root handler that contains the actual application specific logic (account creation, product creation, etc.).

This is a separate helper function that's going to process an incoming requests is what we refer to inside of Express as a "middleware function". 

Inside of Express, "middleware functions" are functions that do some amount of preprocessing or computation on a request object or a response object. These "middleware functions" are executed before we ever call a final route handler. These "middleware functions" are our primary means of code reuse whenever we are making use of Express.

So with our example we want to extract all the form parse and logic into a "middleware function":
```js
// index.js file

...

app.post('/', (req, res) => {
  // extract this req.on() logic into a middleware function
  req.on('data', (data) => {
    const parsed = data.toString('utf8').split('&');

    const formData = {};
    for (let pair of parsed) {
      const [ key, value ] = pair.split('=');
      formData[key] = value;
    }
  });
  res.send('Account created!');
});

...
```

We're then going to make sure we run that "middleware function" before we call our actual route handler which in our example is the `app.post()` callback function (`(req, res) => {}`).

Next, we're going to refactor our `app.post()` function with a sub-dependency of Express called `body-parser`:
```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

...
```

We can now use the `app.use()` function whenever we need to wire up some middleware inside of our app.

> Note: The body-parser middleware is going to auto detect whether or not we are using it on a 'GET' or 'POST' type request and NOT apply it on a 'GET' type request

__[Back to Top](#table-of-contents)__

----
### Part 2: Designing a Custom Database

### 2.1 Data storage

Let's begin to think about what it means to create an account. To begin, this most likely means we need to have some kind of record of the user coming to the application and entering their email and their password.

To do this we need to store their email somewhere and record them as being someone who signed into our application or at least created an account. In order to store this information, we're going to have to have some "persistent" data store.

"Persistent" meaning, if we ever happen to restart our application, we need to make sure that all the information or all the different accounts that have been created somehow get "persisted" into the next restart or start up of our server.

Let's see how we're going to implement this:

We will have our "Express Server" interface with a "Data Store". The "Data Store" is going to store a "List of Users" who have created an account with our application and a "List of Products".

The "Data Store" itself is going to save all of its data to our "Hard Drive" in the form of JSON files (`products.json`, `users.json`). 

#### Building the data store
We will implement the 'Data Store' from scratch, so we're going to figure out how to:
  * Create the data store
  * How to work with some data stored inside of a file
  * How to load it all up, etc

It's important to note that this 'Data Store' we will be implementing is not suited for production use. Let's discuss a few reason's why this is the case:
  1. If we try to open/write to the same file twice at the same time we will get an error
  2. This won't work if we have multiple servers running on different machines because they're all going to have their own version of a products.json and `users.json` file
  3. Also, the performance won't be that great because we have to write to the file system every single time we want to update some data inside of our app.

__[Back to Top](#table-of-contents)__

----

### 2.2 Different data modeling approaches

To begin, our "Data Store" is going to take the form of a couple of different individual classes. Each individual class is going to manage its own collection of objects. For example:
  * We're going to have one class manage all of the different user of our application
  * Another class that's going to manage all of our different products in the application

We're going to call these different objects, "Repositories". So for example, the object that matches the "List of Users" will be called the "Users Repository". And the object that matches the "List of Products" will be called the "Products Repository".

Let's think about how we would design the `UsersRepository`:
| Method  | Input Arguments | Return Value | Description |
| ------------- | ------------- | ------------- | ------------- |
| getAll |	- | [user] |	Get a list of all users |
| getOne |	id | user |	Finds the user with the given id |
| getOneBy |	filters | user |	Finds one user with the given filters |
| create |	attributes | null |	Creates a suer with the given attributes |
| update |	id, attributes | null |	Updates the user with the given id using the given attributes |
| delete |	id | null |	Delete the user with the given id |
| randomId |	- | id |	Generates a random id |
| writeAll |	- | null |	Writes all users to a `users.json` file |

Again, this is going to be a class that has a bunch of different methods attached to it for working all the different users that we intend to create inside of our app.

In the world of server design and data management, especially around web applications, there are two very popular approaches for managing data:
  1. __Repository approach__: A single class (repository) is responsible for data access. All records are stored and used as plain JavaScript objects.
  2. __Active record approach__: Every record is an instance of a "model" class that has methods to save, update, delete this record.

__[Back to Top](#table-of-contents)__

----

### 2.3 Implementing the users repository

Currently, we have our `'POST'` request handler to handle account creation:
```js
app.post('/', (req, res) => {
  res.send('Account created!');
});
```

So when a user makes a `'POST'` request we need to save some details about the user that is being created, mainly their email and password. This way later on when they log in they can log in with that same email and password combination.

Let's implement this now. We'll begin by creating a new folder called `repositories` inside of our root project folder. Inside `repositories` we'll create a file called `users.js`. This is where all the logic for our `UsersRepository` class will live.

Next, we need to make sure that we have some file on our "Hard Drive" that we can use to store all of our information to. For this we will be using the Node "file system" module.  Let's write some code for this:
```js
// 1. require in Node "file system"
const fs = require('fs');

class UsersRepository {
  // 2. the argument to the constructor is going to be the file we pass in
  constructor(filename) {
    // 3. check to make sure we were passed a filename
    if (!filename) {
      throw new Error('Creating a repository requires a filename');
    }
    
    // 4. store whatever filename was provided into an instance variable
    this.filename = filename;

    // 5. using a node function to make sure the filename exists, try catch to catch the error if it doesn't exist
    try {
      fs.accessSync(this.filename);
    } catch (err) {
      // 6. if we end up inside this catch case that means the file does not exists which means we need to create the file, when we create the file we'll pass in an empty array
      fs.writeFileSync(this.filename, '[]');
    }
  }
}

// 7. quick testing code to make sure everything is working as expected
const repo = new UsersRepository('users.json');
```

Let's explain the code example above, the first thing we're doing is checking to see if we have a file already created to store data in (`users.json`) and if we don't, we need to create it. 

To begin we create our `UsersRepository` class and we'll use a constructor function for this because they get created instantly whenever we create a new instance of the class. The argument to the constructor is going to be a `filename` that we will pass to it when we invoke the class.

Next, we need to store whatever filename was provided into an instance variable `this.filename = filename`. Now we need to use a node "file system" module function (`fs.accessSync()`) to make sure the filename exists and if it doesn't exist it will throw an error so we need to wrap it in a try catch to catch the error.

If we end up inside the `catch` case which means the file does not exists which means we need to create the file with another Node "file system" module (`fs.writeFile()` & `fs.writeFileSync()`).

Now when we call our new class we pass in a `filename` to use which should create the `users.json` file with an empty array (`[]`) in our "repositories" directory.

__[Back to Top](#table-of-contents)__

----

### 2.4 Opening the repo data file

Now we're going to implement the `getAll` method for our `UsersRepository` class. For this we will be using another Node module function called `fs.promises.readFile()`. Let's handle this now:
```js
class UsersRepository {
  constructor(filename) {
    ...
  }

  // 1. create the getAll method
  async getAll() {
    // open the file called this.filename
    const contents = await fs.promises.readFile(this.filename, { encoding: 'utf8' });
    // read the files contents (returns an array string)
    console.log(contents); // -> '[]'
    // parse the contents (turns the data into an actual JS array)
    const data = JSON.parse(contents);
    // return parsed data
    return data;
  }
}

// 2. create an async test function
const test = async () => {
  const repo = new UsersRepository('users.json');

  // assign our parsed user.json data to a variable
  const users = await repo.getAll();
  console.log(users); // -> []
};
test();
```

The code above works but we have some extraneous, or unrelated variables being used. Let's see how we can refactor the above code down to a single expression:
```js
class UsersRepository {
  constructor(filename) {
    ...
  }

  async getAll() {
    // 1. refactor the returned parsed json from our file
    return JSON.parse(await fs.promises.readFile(this.filename, { encoding: 'utf8' }));
  }
}

// 2. test our new getAll function
const test = async () => {
  const repo = new UsersRepository('users.json');

  const users = await repo.getAll();
};
test();
```

__[Back to Top](#table-of-contents)__

----

### 2.5 Saving records

Our next step is to create the `create` function. The `create` function is going to take some attributes (`attrs`) that a user should have. We will then take that record and store it inside our data file.

In order to add a new user we must first load up the contents of our `users.json` file. Essentially every time we want to make a change to our list of users, we're going to load our file back up so we have the most recent collection of the data.

We will then add in our new user to that array and then write the file directly back to our hard drive (`fs.promises.writeFile()`). Let's take a look at this now:
```js
class UsersRepository {
  constructor(filename) {
    ...
  }

  async getAll() {
    ...
  }

  // 1. create async function
  async create(attrs) {
    // this gives us our big list of existing users
    const records = await this.getAll();
    // push in the new user
    records.push(attrs);
    // write the updated 'records' array back to this.filename (users.json)
    await fs.promises.writeFile(this.filename, JSON.stringify(records));
  }
}

// 2. test the create function
const test = async () => {
  // get access to users repository
  const repo = new UsersRepository('users.json');

  // save a new record to the users repository
  await repo.create({ email: 'test@test.com', password: '123abc' });

  // get all the records we have saved
  const users = await repo.getAll();
  // console log all saved records
  console.log(users);
};
test();
```

After this lets really quickly create our `writeAll` function. We'll do this now:
```js
class UsersRepository {
  constructor(filename) {
    ...
  }

  async getAll() {
    ...
  }

  async create(attrs) {
    const records = await this.getAll();
    records.push(attrs);

    // 2. call writeAll function that adds our new users
    await this.writeAll(records);
  }

  // 1. writeAll async function called with some list of records that need to be saved
  async writeAll(records) {
    // write the updated 'records' array from 'create()' back to 'this.filename' (users.json)
    await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
  }
}

const test = async () => {
	...
};
test();
```

> Note: The second and third arguments to JSON.stringify is 'null' and '2'. 'null' = json formatting and '2' = tab indentation.

__[Back to Top](#table-of-contents)__

----

### 2.6 Random ID generation

When creating our database, it's possible that an item (product) could have the same name. Because of this we're going to create a method that generates a random ID for us.

Fot this we will be using the Node `crypto` module, `randomBytes()`. Let's look at an example in action:
```js
const crypto = require('crypto');

// return 4 byte random numbers
crypto.randomBytes(4); // -> 6d 8e c7 44

// return random hex string
crypto.randomBytes(4).toString('hex'); // -> 'cbdf097c'
```

Let's implement this into our code now:
```js
class UsersRepository {
  constructor(filename) {
    ...
  }

  async getAll() {
    ...
  }

  async create(attrs) {
    // 2. generate our users random ID
    attrs.id = this.randomId();

    const records = await this.getAll();
    records.push(attrs);

    await this.writeAll(records);
  }

  async writeAll(records) {
    ...
  }

  // 1. method to create a ransom ID using the 'crypto' module (randomBytes)
  randomId() {
    return crypto.randomBytes(4).toString('hex');
  }
}

const test = async () => {
	...
};
test();
```

__[Back to Top](#table-of-contents)__

----

### 2.7 Finding by ID

We're now going to create another function called `getOne()` with a parameter of `id` to help find a user by ID:
```js
class UsersRepository {
  constructor(filename) {
    ...
  }

  async getAll() {
    ...
  }

  async create(attrs) {
    ...
  }

  async writeAll(records) {
    ...
  }

  randomId() {
    ...
  }

  // 1. function to find the ID of the record we want to retrieve
  async getOne(id) {
    // get all of our records out of the users database file
    const records = await this.getAll();
    // iterate through that different array of records and find the user with the particular ID and return it if it exists
    return records.find((record) => record.id === id);
  }
}

// 2. test 'getOne()'
const test = async () => {
  // get access to users repository
  const repo = new UsersRepository('users.json');

  // get a specific user ID
  const user = await repo.getOne('3e620a80');

  // console log the user with the matching ID
  console.log(user);
};
test();
```

__[Back to Top](#table-of-contents)__

----

### 2.8 Deleting records

Now we're going to create a function that removes records from our users database. For this we will pass in the ID of the record we want to delete.
```js
class UsersRepository {
  constructor(filename) {
    ...
  }

  async getAll() {
    ...
  }

  async create(attrs) {
    ...
  }

  async writeAll(records) {
    ...
  }

  randomId() {
    ...
  }

  async getOne(id) {
    ...
  }

  // 1. delete function that removes records from our users database (we will pass in the ID of the record we want to delete)
  async delete(id) {
    // get all users
    const records = await this.getAll();
    // iterate through list of records (users) with filter and filter out any record that has the same ID as the ID that was passed in
    const filteredRecords = records.filter((record) => record.id !== id);
    // pass filteredRecords back into our writeAll function
    await this.writeAll(filteredRecords);
  }
}

// 2. test 'delete()'
const test = async () => {
  // get access to users repository
  const repo = new UsersRepository('users.json');

  // delete a user by specific ID
  await repo.delete('3e620a80');
};
test();
```

We now deleted our user with the ID of `'3e620a80'`.

__[Back to Top](#table-of-contents)__

----

### 2.9 Updating records

The next method we will be creating in our `UsersRepository` class is the `update` method. The idea behind this method is, we will receive an `id` and some object that has the new `attributes` that we want to use to update an existing record.

Then, we're going to find the appropriate record inside of our array of records (`users.json`), update it and then save all that back to our `users.json` file. We'll handle this now:
```js
class UsersRepository {
  constructor(filename) {
    ...
  }

  async getAll() {
    ...
  }

  async create(attrs) {
    ...
  }

  async writeAll(records) {
    ...
  }

  randomId() {
    ...
  }

  async getOne(id) {
    ...
  }

  async delete(id) {
    ...
  }

  // 1. create our 'update' method
  async update(id, attrs) {
    // get all our records
    const records = await this.getAll();
    // find the record we want to update
    const record = records.find((record) => record.id === id);

    // check if the record has been found, throw error if nothing is found
    if (!record) {
      throw new Error(`Record with the id ${id} not found`);
    }

    // now we update the record we just found with 'Object.assign()'
    Object.assign(record, attrs);
    // take all of our records inside of the 'records' array and write them back to our 'users.json' file
    await this.writeAll(records);
  }
}

// 2. test the 'update' method
const test = async () => {
  // get access to users repository
  const repo = new UsersRepository('users.json');

  // update the user
  // the 1st argument takes the ID of the user we want to update and 
  // the 2nd argument takes the update we want to apply
  await repo.update('61598ab3', { password: 'mypassword' });
};
test();
```

Let's explain what `Object.assign()` is doing in the above code example. In our example `Object.assign(record, attrs)` is going to take all the different properties and key value pairs inside the `attrs` object and copy them one by one into the `record` object.

So say we have:
```js
record === { email: 'test@test.com' }
attrs === { password: 'mypassword' }
```

`record` would be updated to look like:
```js
record === { email: 'test@test.com', password: 'mypassword' }
```

__[Back to Top](#table-of-contents)__

----

### 2.10 Adding filtering logic

In this section we're going to be creating our last `UsersRepository` method, `getOneBy()`. Let's break down how we'll take care of this.

We'll begin by getting the collection of all the `records` and then iterating through those `records`. We'll create a variable called `found` and set it equal to `true`.

Next, we're going to iterate over our `filters` object and look at every key value pair and for every key we're going to compare the value at the appropriate key inside the `record` object. If they are __NOT__ the same then we're going to update `found` to `false`. If they are the same then we won't update `found` at all.

Lastly, after we iterate through all the different properties inside of `filters`, if `found` is still equal to `true` that means we must have found the record we are looking for so we will immediately `return` it.

```js
class UsersRepository {
  constructor(filename) {
    ...
  }

  async getAll() {
    ...
  }

  async create(attrs) {
    ...
  }

  async writeAll(records) {
    ...
  }

  randomId() {
    ...
  }

  async getOne(id) {
    ...
  }

  async delete(id) {
    ...
  }

  async update(id, attrs) {
    ...
  }

  // 1. create getOneBy function
  async getOneBy(filters) {
    // get collection of all records
    const records = await this.getAll();

    // iterate through our records
    for (let record of records) {
      let found = true;

      // iterate over our filters object and look at every key value pair and for every key we're going to compare the value at the appropriate key inside the record object
      // if they are NOT the same then we're going to update found to false
      // if they are the same then we won't update found at all
      for (let key in filters) {
        // this is saying that the email or the password that we passed inside the filters is different than the email or password inside of the record that we are currently iterating over
        if (record[key] !== filters[key]) {
          found = false;
        }
      }

      // after we iterate through all the different properties inside of filters, if found is still equal to true that means we must have found the record we are looking for so we will immediately return it
      if (found) {
				return record;
      }
    }
  }
}

// 2. test the 'update' method
const test = async () => {
  // get access to users repository
  const repo = new UsersRepository('users.json');

  // filter for the user with an email of 'test@test.com'
  const user = await repo.getOneBy({ email: 'test@test.com' });

  // log the entire user object to the console
  console.log(user);
};
test();
```

> Note: When iterating through an object we use a for...in loop

And thats it! That's pretty much our `UsersRepository` class overall. We now have a very useful set of "methods" that allows us to work with a collection of users and manipulate them in some predictable fashion.

__[Back to Top](#table-of-contents)__

----

### 2.11 Exporting an instance

The last thing we need to do inside of our `users.js` file is clean up the code base a bit. We also need to be sure we export our `UsersRepository` class we created. This way other files inside of our project can get access to this class.

To do this, at the bottom of the code base we add:
```js
  async update(id, attrs) {
    ...
  }

  async getOneBy(filters) {
    ...
  }
}

// export an instance of the class for other files to use
module.exports = new UsersRepository('users.json');
```

Other file example of using the exported class:
```js
// index.js file

const repo = require('./users');

repo.getAll();
repo.create();
repo.randomId(); // etc...
```

__[Back to Top](#table-of-contents)__

----

### 2.12 Signup validation logic



__[Back to Top](#table-of-contents)__

----

### ⚒️ Built With
* HTML
* CSS
* JavaScript (Node.js, Express.js)

----

### Contributing
Contributions are always welcome! All I ask is that you open an issue and we discuss your proposed changes before you create a pull request.