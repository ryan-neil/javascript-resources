require('dotenv').config();
// async errors
require('express-async-errors');

const express = require('express');
const app = express();

// imports
const connectDB = require('./src/db/connect');
const productsRouter = require('./src/routes/products');
const errorHandlerMiddleware = require('./src/middleware/error-handler');
const notFoundMiddleware = require('./src/middleware/not-found');

// express json middleware
app.use(express.json());

// serve index route
app.get('/', (req, res) => {
	res.send(`
    <h1>Store API</h1>
    <a href="/api/v1/products">Products</a>
  `);
});

// serve api routes
app.use('/api/v1/products', productsRouter);

// serve custom middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// dj, spin that sh*t...
const start = async () => {
	const { PORT } = process.env;
	const { MONGO_URI } = process.env;
	try {
		// connect to db
		await connectDB(MONGO_URI);

		// when db successfully connects, start server
		app.listen(PORT, () =>
			console.log(`Server listening on port: http://localhost:${PORT}/`)
		);
	} catch (error) {
		console.log(error);
	}
};
start();
