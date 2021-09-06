// require in express
const express = require('express');
const app = express();

// render the index.html page to user
app.use(express.static(__dirname + '/views'));

// import router from users.js into the server
const userRouter = require('./routes/users.js');

// link up the routes from users.js to a particular path
app.use('/users', userRouter);

// run the server on port 3000
app.listen(3000, (err) => {
	if (err) console.log(err);
});
