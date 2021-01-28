const string1 = 'level';
const string2 = 'Le, vel.';

const isPalindrome = (stringToTest) => {
	const stringTransformed = stringToTest
		.replace(/[^\w]/gi, '') // replace all non-letter characters
		.toLowerCase(); // make all characters lower cased

	return (
		stringTransformed ===
		stringTransformed.split('').reverse().join('')
	);
};

isPalindrome(string1); // true
isPalindrome(string2); // true
