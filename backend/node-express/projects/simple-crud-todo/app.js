const express = require('express');
const app = express();

// imports
require('dotenv').config();
const connectDB = require('./db/connect'); // import database
const tilesRouter = require('./routes/tiles'); // import tiles routes

// serve json middleware
app.use(express.json());

// serve routes
app.use('/api/v1/tiles', tilesRouter);

// dj, spin that sh*t...
const start = async () => {
	const { PORT } = process.env;
	const { MONGO_URI } = process.env;
	try {
		// await invocation of the database to finish connecting before starting the server
		await connectDB(MONGO_URI);

		// invoke the server if the db is connected
		app.listen(PORT, () =>
			console.log(`Server running at: http://localhost:${PORT}`)
		);
	} catch (err) {
		console.log(err);
	}
};
start();
