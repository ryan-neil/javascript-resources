// require in express
const express = require('express');
const app = express();
const PORT = 3000;

// render the index.html page to user
app.use(express.static(__dirname + '/views'));

// import router from users.js into the server
const userRouter = require('./routes/users.js');

// link up the routes from users.js to a particular path
app.use('/users', userRouter);

// run the server on port 3000
app.listen(PORT, (err) => {
	if (err) console.log(err);
	console.log(`Server running on PORT: ${PORT}`);
});
