let x = 1;

const parentFunction = () => {
	let myValue = 2;
	console.log(x);
	console.log(myValue);

	const childFunction = () => {
		console.log((x += 5));
		console.log((myValue += 1));
	};

	return childFunction;
};

const result = parentFunction();

// call result twice (the child function continues to increment)
result();
result();
console.log(x);
console.log(myValue);
// -> 1
// -> 2
// -> 6
// -> 3
// -> 11
// -> 4
// -> 11
// -> reference error since myValue is a private variable
