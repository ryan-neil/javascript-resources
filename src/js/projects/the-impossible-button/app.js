/**
 * The World's Most Annoying Button
 * Goal:
 * A button that when we try and click it, it moves out of the way and we must click the button in order to win.
 */

// we target the button from the DOM:
const btn = document.querySelector('.btn');

// add the user mouseover eventListener:
btn.addEventListener('mouseover', () => {
	// add feature that when moused over the button randomly moves around the screen:
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	btn.style.left = `${width}px`;
	btn.style.top = `${height}px`;
});

// add the user click eventListener:
btn.addEventListener('click', () => {
	// change the text on the button on click:
	btn.innerText = 'You clicked me!';
	// change the background color of the page on click:
	document.body.style.backgroundColor = '#28a745';

	// adding a message when button is successfully clicked:
	const h2 = document.createElement('h2');
	h2.innerHTML = 'Congratulations you won!';
	document.body.append(h2);
});
