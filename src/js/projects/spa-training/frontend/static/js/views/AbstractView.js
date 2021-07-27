export default class {
	// constructor function will be handling all the parameters
	constructor() {
		// logic
	}

	// this will be just for the page <title>
	// for example, now when we go into the "Dashboard" view, we can call "setTitle()" and pass through "dashboard"
	setTitle(title) {
		document.title = title;
	}

	// inject HTML content we want to display for that particular view
	// whenever we have a view, e.i. "Dashboard", which is going to extend this "AbstractView" it will override this "getHTML" function and provide it's own HTML for that specific view
	// server side can also render our html so it's not hard coded into here
	async getHTML() {
		// for AbstractView we can return nothing
		return '';
	}
}
