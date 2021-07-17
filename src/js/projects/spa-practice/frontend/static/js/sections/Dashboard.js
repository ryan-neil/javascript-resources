// extend from AbstractSection.js
import AbstractSection from './AbstractSection.js';

export default class extends AbstractSection {
	constructor() {
		// this.setTitle is coming from AbstractSection and setting the title to be "Dashboard"
		this.setTitle('Dashboard');
	}

	async getHTML() {
		return `
      <h1>Welcome back, Ryan</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint repellat a.
      </p>
      <p>
        <a href="/" data-link> View recent posts</a>.
      </p>
    `;
	}
}
