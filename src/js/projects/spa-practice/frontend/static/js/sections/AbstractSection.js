export default class {
	constructor() {
		// logic
	}

	// this will be just for the page title
	// for example, now when we go into the "Dashboard" section, we can call "setTitle()" and pass through "dashboard"
	setTitle(title) {
		document.title = title;
	}

	// whenever we have a section, e.i. "Dashboard", which is going to extend this "AbstractSection" it will override this "getHTML" function and provide it's own HTML for that specific section
	async getHTML() {
		// for AbstractSection we can return nothing
		return '';
	}
}
