# Node LS
<!-- <img src="" width="800" alt=""> -->

## Introduction
The focus behind this project is to help us get a better handle on the Node.js standard library.

What we're going to be doing is basically recreating the "ls" command from the terminal. Where "ls" with no arguments prints out all the files and folders in the current directory. "ls" with a path prints out all the files and folders in a relative or absolute path.

  * [Node.js Documentation](https://nodejs.org/api/)

### 📂 File Tree
```bash
├─ nls
│ ├─ js
│ │ └─ index.js
│ ├─ index.html
│ ├─ package.json
│ ├─ README.md
│ └─ style.css
```

----

### Table of Contents
1. [Running a Node Program as an Executable](#running-a-node-program-as-an-executable)
1. [Running our Project from Anywhere](#running-our-project-from-anywhere)

----

### Running a Node Program as an Executable

```js
// index.js file

// get access to the "file system" module
const fs = require('fs');

// https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options
// syntax: fsPromises.readdir(path[, options])

// call readdir function
fs.readdir(process.cwd(), (err, fileNames) => {
  // process.cwd() means current working directory. automatically added into the global scope of the project so it does not have to be "required" ahead of time ("const process = require('process');")

  // Either: err === an error object, which means something went wrong
  // Or: err === null, which means everything is OK

  // check if there's an error
  if (err) {
    console.log(err); // method 1
    // throw new Error(err); // method 2
  }
  console.log(fileNames); // -> ['README.md','index.html','js','style.css']
});
```

Right now, to run our program we have to type in the entire path to the `index.js` file which is extremely inefficient.

```bash
node index.js
..
node js/index.js
..
node nls/js/index.js
```

So if we wanted to run our program from some very far removed directory on our machine, we would end up typing out some really complicated path in order to navigate back to the "nls" directory.

Let's fix this.

First thing we need to do is, run `npm init -y` inside our project directory. When we run this command, it's going to create a new [special :)] file in my project directory. This new file is called `package.json`.

#### package.json

Overall, this file describes some of the different qualities ("name", "version", "description", "scripts", etc.) of our project.

Let's take a look at our project `package.json` file:
```js
{
  "name": "nls",
  "version": "1.0.0",
  "description": "<!-- <img src=\"\" width=\"800\" alt=\"\"> -->",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

There are two extremely important uses for this file that we need to understand...

  1. The `"scripts"` section of the object

Inside the `"scripts"` section, we're going to be writing out some different mini little programs. These will be little scripts that do some automated task inside of our project. 

An example of this could be the `"test"` key that is created with the `package.json` file. This key could automatically run some test script inside of our project whenever we invoke it.

  2. The `"dependency"` section of the object

The second crucial thing that we need to understand about our `package.json` file is how it records "dependencies" that our project has. So, in other words, if we ever decide to install someone elses code or dependency into our project, it will be automatically recorded inside our `package.json` file.

The reason for it getting automatically recorded in the `package.json` file is, if we ever decide to share our project with someone else, they ca run a single command that will take a look at all the dependencies that get listed inside our `package.json` file.

#### "configuration" Section

Another thing we can do inside package.json is set up a little `configuration` section that will allow us to run some commands and have it trigger some code inside of our project.
```js
{
  "name": "nls",
  "version": "1.0.0",
  "description": "<!-- <img src=\"\" width=\"800\" alt=\"\"> -->",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  // add our config section
  "bin": {
    "nls": "index.js"
  }
}
```

What this section (`"bin"`) is saying is that we have some binary or some executable thing that we want to be able to run inside of our project.

In our project example, the name of that program is `nls`. This name could be anything, it could be...`node-ls` or whatever we want.

Then as the value, we specify `index.js`. This means that when we run "nls" at our terminal we want to run the `index.js` file.

### Running our Project from Anywhere

Adding the `configuration` section to our `package.json` file is only step one on being able to run our project from anywhere on our machine.

Let's take a look at all of the steps in order to do this:
  1. Create `package.json` file with `bin` section
  2. Change `index.js` file permissions
  3. Add comment to `index.js` file to allow it to be treated like an executable
  4. link our project

> Note: Step's 2 and 3 should not be required on a windows machine.

#### Change index.js File Permissions

The first thing we need to do is, inside our terminal we need to run:
```bash
chmod +x index.js
```

And that's it! We now have permission to run that file as though it were an executable.

#### Allow index.js to be Treated like an Executable

The next thing we need to do is, add a comment to the top of our `index.js` file that essentially tells our computer that we want to use node to execute this file.
```js
#!/usr/bin/env node

const fs = require('fs');

fs.readdir(process.cwd(), (err, fileNames) => {
  if (err) {
    console.log(err);
  }
  console.log(fileNames);
});
```

#### Linking our Project

Next, inside our project directory in the terminal we need to run:
```bash
npm link
```

What this command does is essentially take our current project and make it globally available everywhere else on our machine.

### Styling the Console Logged files

#### File or Folder?

[⬆️ Top](#table-of-contents)

---