// extend from AbstractView.js
import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor() {
		super();
		// this.setTitle is coming from AbstractView and setting the <title> to be "Dashboard"
		this.setTitle('Dashboard');
	}

	// server side (fetch api) can also render our html so it's not hard coded into here
	async getHTML() {
		return `
      <h1>Welcome back, Ryan</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint repellat a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi repellat amet?
      </p>
      <p>
        <a href="/posts" data-link> View recent posts</a>.
      </p>
    `;
	}
}
