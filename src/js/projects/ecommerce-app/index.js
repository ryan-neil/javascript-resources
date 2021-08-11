const express = require('express');

// app is an object that describes what our web server can do
const app = express();

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
app.post('/', (req, res) => {
	// get access to email, password, and passwordConfirmation
	res.send('Account created!');
});

// tell our app to start listening on port 3000
app.listen(3000, () => {
	console.log('Listening...');
});
