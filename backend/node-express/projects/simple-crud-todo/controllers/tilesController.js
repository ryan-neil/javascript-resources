// import database model
const Tile = require('../models/Tile');

// get all tiles in document
const getTiles = async (req, res) => {
	try {
		const tiles = await Tile.find({});
		res.status(200).json({ tiles });
	} catch (err) {
		res.status(500).json({ msg: err });
	}
};

// create tile logic
const createTile = async (req, res) => {
	try {
		// in create task route we can access the task data in
		// 'req.body' we can pass the data to model.create()
		// method (make createTile async)
		const tile = await Tile.create(req.body);
		res.status(201).json({ tile });
	} catch (err) {
		res.status(500).json({ msg: err });
	}
};

// get single tile from document
const getTile = async (req, res) => {
	try {
		const { id: tileID } = req.params;
		const tile = await Tile.findOne({ _id: tileID });

		// check if param tile ID exists
		if (!tile) {
			return res.status(404).json({ msg: `No tile with the ID: ${tileID}` });
		}

		// send back status 200 and the correct tile json
		res.status(200).json({ tile });
	} catch (err) {
		res.status(500).json({ msg: err });
	}
};

// update tile logic
const updateTile = (req, res) => {
	// do something
};

// delete tile logic
const deleteTile = (req, res) => {
	// do something
};

module.exports = {
	getTiles,
	createTile,
	getTile,
	updateTile,
	deleteTile
};
