const mongoose = require('mongoose');

/** Key Notes:
 * We can think of the term "model" as a diagram or design for the collection

 * A mongoose model is a wrapper for the Schema

 * If the Schema defines the structure of the document (type, validations, etc.) a mongoose model provides an interface to the database

 * So, using the model we'll be able to create, update, query, and delete our documents easily

 * An instance of a model is called a "document"

 * Mongoose Schema Docs - https://mongoosejs.com/docs/guide.html
 * Mongoose Models Docs - https://mongoosejs.com/docs/models.html
 * Mongoose Validation Docs - https://mongoosejs.com/docs/validation.html
 * Mongoose CRUD Operation Methods - https://mongoosejs.com/docs/queries.html
*/

// set up the schema structure for all the documents that will make up our collection
// only these props ('name', 'completed') are going to be passed to the database
const TileSchema = new mongoose.Schema({
	// add validation to schema
	// set our main props equal to an object and add the correct props
	name: {
		type: String,
		required: [ true, 'Must provide name' ],
		trim: true,
		maxlength: [ 20, "Name can't exceed 20 characters" ]
	},
	completed: {
		type: Boolean,
		default: false
	}
});

// export model for use in controllers
module.exports = mongoose.model('Tile', TileSchema); // looks for model name and schema
