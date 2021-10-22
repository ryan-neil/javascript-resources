const express = require('express');
// import our logger function
const logger = require('./logger.js');
const app = express();

// middleware function to add logger to all application routes
app.use(logger);

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
app.get('/api/items', (req, res) => {
	res.send('Items');
});

app.listen(3000, () => {
	console.log(`Server listening at port 3000...`);
});
