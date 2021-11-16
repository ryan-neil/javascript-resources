// dynamically add data (values) to database

require('dotenv').config();

// import 2nd database connection
const connectDB = require('./src/db/connect');
// import the product model (model comes with all the methods)
const Product = require('./src/models/product');
// import json data (products) this is data we will be passing to the database
const jsonProducts = require('./products.json');

// ** set up the start function
// Instead of app.listen, we only need to connect to the database
// Next, use the model to automatically add the json data (products)
const start = async () => {
	const { MONGO_URI } = process.env;
	try {
		await connectDB(MONGO_URI);
		// remove all data currently in database with 'deleteMany' method
		// MongoDB docs: https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/
		await Product.deleteMany();
		// dynamically add all our data from 'products.json' with 'create' method
		await Product.create(jsonProducts);
		console.log('Successfully populated database!');
		// if successful terminate with '0' for success
		process.exit(0);
	} catch (error) {
		console.log(error);
		// if failure terminate with '1' for error code
		process.exit(1);
	}
};
start();

// Once connected to the database:
// 1. Remove all the data (products) that is currently there
// 2. Next, use the create and pass in the json products array (this can be an object or an array)
