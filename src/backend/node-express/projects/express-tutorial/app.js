const express = require('express');
const app = express();

// req => middleware => res

// logger helper function
const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const date = new Date().getFullYear();
	console.log(method, url, date);

	// pass to next middleware (req, res)
	next();
};

// pass in logger middleware function
app.get('/', logger, (req, res) => {
	res.send('Home page');
});

app.get('/about', logger, (req, res) => {
	res.send('About page');
});

app.listen(3000, () => {
	console.log(`Server listening at port 3000...`);
});
