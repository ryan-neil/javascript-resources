// import model
const Product = require('../models/product');

// for testing
const getAllProductsStatic = async (req, res) => {
	const products = await Product.find({}).sort('name').select('name price').limit(10);

	res.status(200).json({ products, nbHits: products.length });
};

// get all products logic
const getAllProducts = async (req, res) => {
	// ** filtering logic **
	// pull out the properties we want to find, sort by, etc.
	const { featured, company, name, sort, fields, numericFilters } = req.query;
	// set up a new object to hold all query param values
	const queryObject = {};

	// check if featured is coming in with the request
	if (featured) {
		// ternary op to set up new property on our query object, if featured is true then set to true, else set to false
		queryObject.featured = featured === 'true' ? true : false;
	}
	// check if the company coming in with the request exists
	if (company) {
		// if true set up company property on the queryObject, company will be equal to company
		queryObject.company = company;
	}
	// check if the name coming in with the request exists
	if (name) {
		// if true set up name property on the queryObject, name will be equal to name
		// MongoDB Regex: https://docs.mongodb.com/manual/reference/operator/query/regex/#mongodb-query-op.-regex
		queryObject.name = { $regex: name, $options: 'i' }; // 'i' = case insensitive
	}

	// ** numeric filters logic **
	if (numericFilters) {
		// set up th operator map for mongoose
		const operatorMap = {
			'>': '$gt',
			'>=': '$gte',
			'=': '$eq',
			'<': '$lt',
			'<=': '$lte'
		};
		// set up regular expression magic
		const regEx = /\b(<|>|>=|=|<|<=)\b/g;
		// convert the user friendly expression to the mongoose familiar expression
		let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`);

		// Tutorial: https://www.youtube.com/watch?v=qwfE7fSVaZM&t=11241s [5:01:00]
		const options = [ 'price', 'rating' ];
		filters = filters.split(',').forEach((item) => {
			const [ field, operator, value ] = item.split('-');
			if (options.includes(field)) {
				queryObject[field] = { [operator]: Number(value) };
			}
		});
	}

	console.log(queryObject);

	// remove await here since this returns the documents right away
	let result = Product.find(queryObject);

	// ** sorting logic **
	if (sort) {
		// handling multiple query parameters
		const sortList = sort.split(',').join(' '); // (name,price) = (name price)
		result = result.sort(sortList); // result is the query object we're getting back from the find method
	}
	else {
		result = result.sort('createdAt');
	}

	// ** select specific fields logic **
	if (fields) {
		// handling multiple query parameters
		const fieldsList = fields.split(',').join(' '); // (company,rating) = (company rating)
		result = result.select(fieldsList); // result is the query object we're getting back from the find method
	}

	// ** skip and limit for pagination **
	// set up our 3 values
	const page = Number(req.query.page) || 1; // 'page' is a sting so we convert it to a number with 'Number()'
	const limit = Number(req.query.limit) || 10; // 'limit' is a sting so we convert it to a number with 'Number()'
	// set up the pagination logic
	const skip = (page - 1) * limit;

	// chain skip and limit to our result
	result = result.skip(skip).limit(limit);

	// ** get final product results from params **
	// add await here
	const products = await result;
	// now we search the database with all our properties passed into the query params encapsulated by the 'queryObject'
	res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
