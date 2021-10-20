const express = require('express');
const app = express();
// import our data.js data
const { products } = require('./data.js');

// set api products route
app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

// set GET route for the above request
app.get('/api/products', (req, res) => {
	// create new array with each item as a 'product'
	const newProducts = products.map((product) => {
		// destructure out id, name, and image
		const { id, name, image } = product;
		// return new object with just id, name, and image
		return { id, name, image };
	});

	res.json(newProducts);
});

// set 404 route
app.all('*', (req, res) => {
	res.status(404).send('<h1>404</h1>');
});

// run the server
app.listen(3000, () => {
	console.log(`Server listening at port 3000...`);
});
