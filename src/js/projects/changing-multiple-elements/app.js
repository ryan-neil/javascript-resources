// generating HTML with JavaScript:

const colorsRainbowMatte = [
	'#F87171',
	'#FB923C',
	'#FFC857',
	'#34D399',
	'#60A5FA',
	'#A78BFA',
	'#818CF8',
	'#A78BFA'
];

const container = document.querySelector('#cards');

const changeColor = function(event) {
	console.log(event);
	const h1 = document.querySelector('h1');
	h1.style.color = this.style.backgroundColor; // "this" will refer to the individual element that the eventListener has been added to [card]
};

for (let color of colorsRainbowMatte) {
	const card = document.createElement('div');
	card.style.backgroundColor = color;
	card.classList.add('card');
	container.append(card);
	card.addEventListener('click', changeColor); // reference the changeColor function here
}
