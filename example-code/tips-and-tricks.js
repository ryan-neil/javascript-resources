/*
===================================
JavaScript Tips and Tricks
===================================
*/

/*
1. Generate a list with random numbers:

We need A LOT of fake data, for different reasons. So here's a way to do that gently.
*/
Array.from({ length: 100 }, Math.random);
// [ 0.6163093133259432, 0.8877401276499153, 0.4094354756035987, ...] - 100 items

/*
2. Generate a list with numbers:

Yep, just one more trick to generate a list with numbers.
*/
Array.from({ length: 100 }, (v, i) => i);
// [0, 1, 2, 3, 4, 5, 6....99]

/*
3. Convert RGB → HEX:

Convert your RGB to HEX without any libs!
*/
const rgb2hex = ([ r, g, b ]) =>
	`#${(1 << 24) + (r << 16) + (g << 8) + b}`
		.toString(16)
		.substr(1);

rgb2hex([ 76, 11, 181 ]);
// #4c0bb5

/*
4. Convert HEX → RGB:

What's about convert it back?! Here's a nice way to implement that.
*/
const hex2rgb = (hex) =>
	[ 1, 3, 5 ].map((h) =>
		parseInt(hex.substring(h, h + 2), 16)
	);

hex2rgb('#4c0bb5'); // [76, 11, 181]

/*
5. Odd or Even:

Another yet odd/even checking.
*/
const value = 232;

if (value & 1) console.log('odd');
else console.log('even'); // even

/*
6. Check valid URL:

I guess most of you use this way to validate URL, but anyway. Let's share it
*/
const isValidURL = (url) => {
	try {
		new URL(url);
		return true;
	} catch (error) {
		return false;
	}
};

isValidURL('https://dev.to'); // true

isValidURL('https//invalidto'); // false

/*
7. N something ago:

Sometimes you need something to print a date to "6 minute(s) ago", but don't want to import monster-size libs. Here's a small snippet that does it, easily modify it as you wish and go ahead.
*/
const fromAgo = (date) => {
	const ms = Date.now() - date.getTime();
	const seconds = Math.round(ms / 1000);
	const minutes = Math.round(ms / 60000);
	const hours = Math.round(ms / 3600000);
	const days = Math.round(ms / 86400000);
	const months = Math.round(ms / 2592000000);
	const years = Math.round(ms / 31104000000);

	switch (true) {
		case seconds < 60:
			return `${seconds} second(s) ago"`;
		case minutes < 60:
			return `${minutes} minute(s) ago"`;
		case hours < 24:
			return `${hours} hour(s) ago"`;
		case days < 30:
			return `${days} day(s) ago`;
		case months < 12:
			return `${months} month(s) ago`;
		default:
			return `${years} year(s) ago`;
	}
};

const createdAt = new Date(2021, 0, 5);
fromAgo(createdAt); // 14 day(s) ago;

/*
8. Generate path with params:

We work a lot with routes/paths and we always need to manipulate them. When we need to generate a path w/ params to push browser there, generatePath helps us!
*/
const generatePath = (path, obj) =>
	path.replace(/(\:[a-z]+)/g, (v) => obj[v.substr(1)]);

const route = '/app/:page/:id';
generatePath(route, {
	page : 'products',
	id   : 85
});
// /app/products/123

/*
9. Get params from path:

Yes! Now we need to get our params back. Also, you can pass serializer to parse your data gently.
*/
const getPathParams = (path, pathMap, serializer) => {
	path = path.split('/');
	pathMap = pathMap.split('/');
	return pathMap.reduce((acc, crr, i) => {
		if (crr[0] === ':') {
			const param = crr.substr(1);
			acc[param] =
				serializer && serializer[param]
					? serializer[param](path[i])
					: path[i];
		}
		return acc;
	}, {});
};

getPathParams('/app/products/123', '/app/:page/:id');
// { page: 'products', id: '123' }

getPathParams('/items/2/id/8583212', '/items/:category/id/:id', {
	category : (v) => [ 'Car', 'Mobile', 'Home' ][v],
	id       : (v) => +v
});
// { category: 'Home', id: 8583212 }

/*
10. Generate path with query string:

Of course, we work with paths and we need to generate path with query too.
*/
const generatePathQuery = (path, obj) =>
	path +
	Object.entries(obj)
		.reduce(
			(total, [ k, v ]) =>
				(total += `${k}=${encodeURIComponent(v)}&`),
			'?'
		)
		.slice(0, -1);

generatePathQuery('/user', { name: 'Orkhan', age: 30 });
// "/user?name=Orkhan&age=30"

/*
11. Get params from query string:

Now it's a time to get params from query string.
*/
const getQueryParams = (url) =>
	url.match(/([^?=&]+)(=([^&]*))/g).reduce((total, crr) => {
		const [ key, value ] = crr.split('=');
		total[key] = value;
		return total;
	}, {});

getQueryParams('/user?name=Orkhan&age=30');
// { name: 'Orkhan', age: '30' }
