const express = require('express');
const bodyParser = require('body-parser');
const usersRepo = require('./repositories/users.js');

// app is an object that describes what our web server can do
const app = express();

// all route handlers inside our app will now automatically be body parsed for us
app.use(bodyParser.urlencoded({ extended: true }));

// set our route handler
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
// we can think of "middleware functions" as functions in the "middle" (literally) of a request handler
app.post('/', async (req, res) => {
	// deconstruct our form fields variables
	const { email, password, passwordConfirmation } = req.body;

	// create existingUser variable
	const existingUser = await usersRepo.getOneBy({ email: email });
	// check if email is already in use
	if (existingUser) {
		return res.send('Email in use');
	}

	// check if passwords match each other
	if (password !== passwordConfirmation) {
		res.send('Passwords must match');
	}

	res.send('Account created!');
});

// tell our app to start listening on port 3080
app.listen(process.env.PORT || 3080, () => {
	console.log('Server running on http://localhost:3080');
});
