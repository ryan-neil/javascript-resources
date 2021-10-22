// logger helper function
const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const date = new Date().getFullYear();
	console.log(method, url, date);

	// pass to next middleware (req, res)
	next();
};

module.exports = logger;
