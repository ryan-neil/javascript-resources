function firstAction(callback, message, anotherCallback) {
	console.log(message); // -> Im the first action!
	setTimeout(callback, 1000); // 'secondAction' is the callback function and will execute after 1 second of being invoked
	anotherCallback();
}

function secondAction(message) {
	console.log(message); // -> Im the second action!
}

function thirdAction() {
	console.log('Im the third action!');
}

setTimeout(
	() =>
		firstAction(
			() => secondAction('Im the second action!'),
			'Im the first action!',
			thirdAction
		),
	3000
);
