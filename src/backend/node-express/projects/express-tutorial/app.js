const express = require('express');
// import logger middleware function
const logger = require('./logger.js');
// import authorize middleware function
const authorize = require('./authorize.js');
const app = express();

// execute multiple middleware functions (place in an array)
// app.use([ logger, authorize ]);

// index route
app.get('/', (req, res) => {
	res.send('Home');
});

// about route
app.get('/about', (req, res) => {
	res.send('About');
});

// api 'products' route
app.get('/api/products', (req, res) => {
	res.send('Products');
});

// api 'items' route
app.get('/api/items', [ logger, authorize ], (req, res) => {
	// log the user
	console.log(req.user);
	res.send('Items');
});

app.listen(3000, () => {
	console.log(`Server listening at port 3000...`);
});
