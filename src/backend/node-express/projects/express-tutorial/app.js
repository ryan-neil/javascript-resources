const express = require('express');
const app = express();

// set index route
app.get('/', (req, res) => {
	res.status(200).send('Home page');
});

// set about page route
app.get('/about', (req, res) => {
	res.status(200).send('About page');
});

// set 404 route
app.all('*', (req, res) => {
	res.status(404).send('<h1>404</h1>');
});

// run the server
app.listen(3000, () => {
	console.log(`Server listening at port 3000...`);
});
