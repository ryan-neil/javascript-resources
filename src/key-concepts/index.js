const credits = ((num) => {
	let credits = num;
	console.log(`Initial credits value: ${credits}`);

	return () => {
		credits -= 1;
		if (credits > 0)
			console.log(`Continue playing the game: ${credits} credit(s) remaining`);
		if (credits <= 0) console.log(`Game over! Not enough credits`);
	};
})(3);

credits();
credits();
credits();

// [Console]
// -> Initial credits value: 3
// -> Continue playing the game: 2 credit(s) remaining
// -> Continue playing the game: 1 credit(s) remaining
// -> Game over! Not enough credits
