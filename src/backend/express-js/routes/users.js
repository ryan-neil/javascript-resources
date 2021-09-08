// require in express
const express = require('express');
// create our mini app (router)
const router = express.Router();

// GET: create a users route
router.get('/', (req, res) => {
	res.send('User List');
});

// GET: create a new users route
router.get('/new', (req, res) => {
	res.send('User New Form');
});

// POST: create a new user
router.post('/', (req, res) => {
	res.send('Create User');
});

// ID routes
// call the route() function
router
	.route('/:id')
	// GET: dynamically access an individual user based on the ID
	.get((req, res) => {
		console.log(req.user); // -> { name: 'Katie' }
		res.send(`Get User with ID ${req.params.id}`);
	})
	// PUT: dynamically update a user based on an ID
	.put((req, res) => {
		res.send(`Update User with ID ${req.params.id}`);
	})
	// DELETE: dynamically delete a user based on an ID
	.delete((req, res) => {
		res.send(`Delete User with ID ${req.params.id}`);
	});

const users = [ { name: 'Ryan' }, { name: 'Katie' } ];
router.param('id', (req, res, next, id) => {
	// id comes from URL '/users/1'
	req.user = users[id];
	next();
});

// export the router to use in server.js
module.exports = router;
