const mongoose = require('mongoose');

// product schema (structure)
const productSchema = new mongoose.Schema({
	// set up our properties
	name: {
		type: String,
		required: [ true, 'Must provide product name' ]
	},
	price: {
		type: String,
		required: [ true, 'Must provide product price' ]
	},
	featured: {
		type: Boolean,
		default: false
	},
	rating: {
		type: Number,
		default: 4.5
	},
	// date when product was created
	createdAt: {
		type: Date,
		default: Date.now()
	},
	company: {
		type: String,
		// limit the possible options for this property and
		// set up custom error message if value doesn't match any items in provided list
		enum: {
			values: [ 'ikea', 'liddy', 'caressa', 'marcos' ],
			message: '{VALUE} is not supported'
		}
	}
});

module.exports = mongoose.model('Product', productSchema);
