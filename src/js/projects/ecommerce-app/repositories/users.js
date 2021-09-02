// require in Node file system and crypto module
const fs = require('fs');
const crypto = require('crypto');

class UsersRepository {
	// 1. check to see if we have a file already created to store data in
	constructor(filename) {
		// check to make sure we were passed a filename, if no filename was given we will throw an error right away
		if (!filename) {
			throw new Error('Creating a repository requires a filename');
		}

		// store whatever filename was provided into an instance variable
		this.filename = filename;

		// using a Node module function to make sure the filename exists
		try {
			fs.accessSync(this.filename);
		} catch (err) {
			// using a Node module function to create our file
			fs.writeFileSync(this.filename, '[]');
		}
	}

	// 2. getAll async function
	async getAll() {
		// 1. return the parsed json from our file
		return JSON.parse(await fs.promises.readFile(this.filename, { encoding: 'utf8' }));
	}

	// 3. create async function
	async create(attrs) {
		// generate our random ID
		attrs.id = this.randomId();

		// this gives us our big list of existing users
		const records = await this.getAll();
		// push in the new user
		records.push(attrs);

		// call our write all function that adds new users
		await this.writeAll(records);
	}

	// 4. writeAll async function called with some list of records that need to be saved
	async writeAll(records) {
		// write the updated 'records' array from 'create()' back to 'this.filename' (users.json)
		await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
	}

	// 5. method to create a ransom ID using the 'crypto' module (randomBytes)
	randomId() {
		return crypto.randomBytes(4).toString('hex');
	}

	// 6. getOne function find the ID of the record we want to retrieve
	async getOne(id) {
		// get all of our records out of the users database file
		const records = await this.getAll();
		// iterate through that different array of records and find the user with the particular ID and return it if it exists
		return records.find((record) => record.id === id);
	}

	// 7. delete function that removes records from our users database (we will pass in the ID of the record we want to delete)
	async delete(id) {
		// get all users
		const records = await this.getAll();
		// iterate through list of records (users) with filter and filter out any record that has the same ID as the ID that was passed in
		const filteredRecords = records.filter((record) => record.id !== id);
		// pass filteredRecords back into our writeAll function
		await this.writeAll(filteredRecords);
	}

	// 8. function that updates users
	async update(id, attrs) {
		// get all our records
		const records = await this.getAll();
		// find the record we want to update
		const record = records.find((record) => record.id === id);

		// check if the record has been found, throw error if nothing is found
		if (!record) {
			throw new Error(`Record with the id ${id} not found`);
		}

		// now we update the record we just found with 'Object.assign()'
		Object.assign(record, attrs);
		// take all of our records inside of the 'records' array and write them back to our 'users.json' file
		await this.writeAll(records);
	}

	// 9. create getOneBy function
	async getOneBy(filters) {
		// get collection of all records
		const records = await this.getAll();

		// iterate through our records
		for (let record of records) {
			let found = true;

			// iterate over our filters object
			for (let key in filters) {
				// check if the email or password passed into filters is different than the email or password inside of the record that we are currently iterating over
				if (record[key] !== filters[key]) {
					found = false;
				}
			}

			// if 'found' is still equal to 'true', we must have found the record we are looking for so we will return it
			if (found) {
				return record;
			}
		}
	}
}

const test = async () => {
	// get access to users repository
	const repo = new UsersRepository('users.json');
};
test();
