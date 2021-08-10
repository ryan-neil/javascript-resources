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

### Creating a web server

* [Video tutorial](https://www.udemy.com/course/javascript-beginners-complete-tutorial/learn/lecture/17007110#content)



__[Back to Top](#table-of-contents)__

----

### ⚒️ Built With
* HTML
* CSS
* JavaScript

----

### Contributing
Contributions are always welcome! All I ask is that you open an issue and we discuss your proposed changes before you create a pull request.

----

### License
[App Name] is [MIT licensed](#)