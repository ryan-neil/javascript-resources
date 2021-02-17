// Practice
// Cmd + Option + K (Console Shortcut)

const myDeck = {
	deck         : [],
	drawnCards   : [],
	suits        : [ 'hearts', 'diamonds', 'spades', 'clubs' ],
	values       : '2,3,4,5,6,7,8,9,10,J,Q,K,A',

	// Reset the deck
	refillDeck() {
		const { suits, values, deck } = this;
		for (let value of values.split(',')) {
			for (let suit of suits) {
				deck.push({
					value : value,
					suit  : suit
				});
			}
		}
		return deck;
	},
	// Draw single card Method and add to drawn cards Method
	drawCard() {
		const card = this.deck.pop();
		this.drawnCards.push(card);
		return card;
	},
	// Draw multiple cards Method
	drawMultiple(numCards) {
		for (let i = 0; i < numCards; i++) {
			const cards = [];
			cards.push(this.drawCard());
		}
		return cards;
	},
	// Shuffle the deck Method
	shuffle() {
		// destructuring the deck out of "this"
		const { deck } = this;
		for (let i = deck.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
		}
	}
};
