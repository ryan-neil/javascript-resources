// Practice
// Cmd + Option + K (Console Shortcut)

const fullName = ({ first, last }) => {
	return `${first} ${last}`;
};
const fullProfile = ({ first, last, country }) => {
	return `${first} ${last}, ${country}`;
};
const runner = {
	first   : 'Katie',
	last    : 'Neil',
	country : 'United States'
};
// fullName(runner);
// fullProfile(runner);
console.log(fullName(runner)); // -> Katie Neil
console.log(fullProfile(runner)); // -> Katie Neil, United States
