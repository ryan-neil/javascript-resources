// require in express
const express = require('express');
// create our mini app (router)
const router = express.Router();

// create a users route
router.get('/', (req, res) => {
	res.send('User List');
});

// create a new users route
router.get('/new', (req, res) => {
	res.send('User New Form');
});

// export the router to use in server.js
module.exports = router;
