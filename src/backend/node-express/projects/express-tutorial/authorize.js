const authorize = (req, res, next) => {
	// set up query string
	const user = req.query.user;
	// const { user } = req.query;
	if (user === 'ryan') {
		// console.log(req.user); // -> undefined
		// add a property (object) onto the user object
		req.user = { name: 'ryan', id: 3 };
		// console.log(req.user); // -> { name: 'ryan', id: 3 }
		// pass to next function
		next();
	} else {
		res.status(401).send('Unauthorized user');
	}

	// pass to next function
	next();
};

module.exports = authorize;
