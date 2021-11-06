const mongoose = require('mongoose');

// wire up mongoose database (returns a promise)
const connectDB = (url) => {
	// pass in object param to remove deprecation errors
	return mongoose.connect(url, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	});
};

module.exports = connectDB;
