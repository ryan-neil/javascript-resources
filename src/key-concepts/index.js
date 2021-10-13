function foo() {
	let a = 20;
	var b = 40;

	console.log(a); // -> 20
	console.log(b); // -> 40
}
foo();

console.log(a); // -> ReferenceError: a is not defined
console.log(b); // -> ReferenceError: b is not defined
