const express = require('express');
const router = express.Router();

// set task routes
router.route('/').get((req, res) => {
	res.send('All items');
});

// export the router
module.exports = router;
