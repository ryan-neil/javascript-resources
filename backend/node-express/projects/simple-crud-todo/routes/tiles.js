const express = require('express');
const router = express.Router();

// import tile controllers
const {
	getTiles,
	createTile,
	getTile,
	updateTile,
	deleteTile
} = require('../controllers/tilesController');

// get all tiles route
router.get('/', getTiles);

// create tile route
router.post('/', createTile);

// get single tile route
router.get('/:id', getTile);

// update tile route
router.patch('/:id', updateTile);

// delete tile route
router.delete('/:id', deleteTile);

module.exports = router;
