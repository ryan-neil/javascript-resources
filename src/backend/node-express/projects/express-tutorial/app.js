const express = require('express');
const path = require('path');
const app = express();
const port = 3080;

// setup static and middleware
// 'static' is a file (assets) that the server doesn't have to change
app.use(express.static('./public'));

// setup the home page
app.get('/', (req, res) => {
	res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});

// setup the about page
app.get('/about', (req, res) => {
	res.status(200).send('About page');
});

// setup 404 response
// '*' == all routes
app.all('*', (req, res) => {
	res.status(404).send('<h2>Resource not found: 404</h2>');
});

// run the server
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
