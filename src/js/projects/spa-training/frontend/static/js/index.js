// 1. import our file
import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import Settings from './views/Settings.js';

// 2. url = e.target.href
const navigateTo = (url) => {
	// on click of "url", add the "url" link to the browser's session history stack
	history.pushState(null, null, url);
	// call router() to process the new history entry
	router();
};

// 3. add client side router
const router = async () => {
	// define our routes
	const routes = [
		// reference the view's class references
		{ path: '/', view: Dashboard },
		{ path: '/posts', view: Posts },
		{ path: '/settings', view: Settings }
	];

	// test each route for potential match
	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			isMatch: location.pathname === route.path
		};
	});

	// we look for our match
	let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

	// define our route if no match is found
	if (!match) {
		match = {
			route: routes[0],
			isMatch: true
		};
	}

	// create a new instance of the view at the match route
	const view = new match.route.view();

	// select the "app" element from index.html and set the inner HTML to the matched views content
	document.querySelector('#app').innerHTML = await view.getHTML();
};

// 4. re-run router when navigating through history
window.addEventListener('popstate', router);

// 5. event listener for when DOM is completely loaded up
document.addEventListener('DOMContentLoaded', () => {
	// event listener on click of links with "data-link"
	document.body.addEventListener('click', (e) => {
		// check if the link element clicked has the "data-link" attribute
		if (e.target.matches('[data-link]')) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	});

	// once the DOM is loaded, run our "router" function
	router();
});
