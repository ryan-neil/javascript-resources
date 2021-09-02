// require in Node file system
const fs = require('fs');

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
}

const test = async () => {
	// get access to users repository
	const repo = new UsersRepository('users.json');

	// save a new record to the users repository
	await repo.create({ email: 'test@test.com', password: '123abc' });

	// get all the records we have saved
	const users = await repo.getAll();
	// console log all saved records
	console.log(users);
};
test();
