// history api
const navigateTo = (url) => {
	history.pushState(null, null, url);
	// call router() to process the new history entry
	router();
};

// add client side router
const router = async () => {
	// define our routes
	const routes = [
		// whenever the user goes to this root path (/...), run the "view" function
		{ path: '/', view: () => console.log('Viewing Dashboard') },
		{ path: '/posts', view: () => console.log('Viewing Posts') },
		{ path: '/settings', view: () => console.log('Viewing Settings') }
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

	console.log(match.route.view());
};

// re-run router when navigating through history
window.addEventListener('popstate', router);

// event listener for if DOM is completely loaded up
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
