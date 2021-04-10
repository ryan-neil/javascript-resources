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

// create the avatar variable
const avatar = document.querySelector("#player");

window.addEventListener("keyup", function(e) {
	// to use our extractPosition function:
	const currTop = extractPos(avatar.style.top);
	avatar.style.top = `${currTop + 50}px`;
});

// function to update the avatars location in the window
const extractPos = (pos) => {
	// to turn it into a number and remove the quotations we ue parseInt()
	// then to remove the 'px' we use slice
	return parseInt(pos.slice(0, -2));
};
