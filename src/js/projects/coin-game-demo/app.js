// create the avatar variable
const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");

window.addEventListener("keyup", function(e) {
	// only fire on arrow down key
	if (e.key === "ArrowDown") {
		// invoke the moving functions
		moveVertical(avatar, 50);
	} else if (e.key === "ArrowUp") {
		moveVertical(avatar, -50);
	} else if (e.key === "ArrowRight") {
		moveHorizontal(avatar, 50);
		// make the avatar face direction he's going
		avatar.style.transform = "scale(1,1";
	} else if (e.key === "ArrowLeft") {
		moveHorizontal(avatar, -50);
		// make the avatar face direction he's going
		avatar.style.transform = "scale(-1,1";
	}

	// check if the avatar and coin are touching
	if (isTouching(avatar, coin)) moveCoin();
});

// avatar moving functions
const moveVertical = (element, amount) => {
	const currTop = extractPos(element.style.top);
	element.style.top = `${currTop + amount}px`;
};
const moveHorizontal = (element, amount) => {
	const currLeft = extractPos(element.style.left);
	element.style.left = `${currLeft + amount}px`;
};

// function to update the avatars location in the window
const extractPos = (pos) => {
	if (!pos) return 100; // match the 100px in the css file for img
	// to turn it into a number and remove the quotations we ue parseInt()
	// then to remove the 'px' we use slice
	return parseInt(pos.slice(0, -2));
};

// function to move the coin
const moveCoin = () => {
	// pick a random position to move the coin to on the x and y axis
	const y = Math.floor(Math.random() * window.innerHeight);
	const x = Math.floor(Math.random() * window.innerWidth);
	// then move the coin to that position
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;
};

moveCoin();

// this determines if the avatar man and coin are overlapping
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}
