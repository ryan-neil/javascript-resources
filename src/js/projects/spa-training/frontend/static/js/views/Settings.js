// extend from AbstractView.js
import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor() {
		super();
		// this.setTitle is coming from AbstractView and setting the <title> to be "Dashboard"
		this.setTitle('Settings');
	}

	// server side (fetch api) can also render our html so it's not hard coded into here
	async getHTML() {
		return `
      <h1>Settings</h1>
      <p>Manage your privacy and configuration settings.</p>
    `;
	}
}
