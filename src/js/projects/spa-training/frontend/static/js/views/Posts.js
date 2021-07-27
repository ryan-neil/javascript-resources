// extend from AbstractView.js
import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor() {
		super();
		// this.setTitle is coming from AbstractView and setting the <title> to be "Dashboard"
		this.setTitle('Posts');
	}

	// server side (fetch api) can also render our html so it's not hard coded into here
	async getHTML() {
		return `
      <h1>Posts</h1>
      <p>You are viewing the posts.</p>
    `;
	}
}
