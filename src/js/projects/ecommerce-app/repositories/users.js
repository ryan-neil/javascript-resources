// require in Node file system
const fs = require('fs');

class UsersRepository {
	// check to see if we have a file already created to store data in
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

	async getAll() {
		// 1. return the parsed json from our file
		return JSON.parse(await fs.promises.readFile(this.filename, { encoding: 'utf8' }));
	}
}

const test = async () => {
	// quick testing code pass in filename to use
	const repo = new UsersRepository('users.json');

	// assign our parsed user.json data to a variable
	const users = await repo.getAll();
	console.log(users);
};
test();
