// 1. import express
const express = require('express');
// 2. create the express router
const router = express.Router();

// 3. create our root routes (localhost:3000)
router.get('/', (req, res) => {
	// 3.1 render index.ejs view
	res.render('index');
});

// 4. export the router
module.exports = router;
