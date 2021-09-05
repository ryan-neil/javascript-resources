const btn = document.querySelector(".btn");
const canvas = document.querySelector(".canvas");
const h2 = document.querySelector(".h2");

const colors = [
	"violet",
	"indigo",
	"blue",
	"green",
	"yellow",
	"orange",
	"red"
];

// get random index from array
const getRandomFromArr = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

// change the canvas background color to match randomly selected index
const setCanvasColor = () => {
	return (canvas.style.backgroundColor = getRandomFromArr(colors));
};

// update the inner text of our h2 element
// change the text color to match the background color
const setCanvasElements = () => {
	let canvasText = canvas.style.backgroundColor;
	h2.innerHTML = `Canvas color: <span class="h2-color">${canvasText}</span>`;

	// target the add "color" class from above with a variable
	// set that variable equal to the "canvasText" color
	let innerH2Color = document.querySelector(".h2-color");
	innerH2Color.style.color = canvasText;
};

// function that calls all our functions together
const colorFlipper = () => {
	setCanvasColor();
	setCanvasElements();
};

// pass in our function that initiates all the functions
btn.addEventListener("click", colorFlipper);
