/*
JavaScript Notes and Documentation
Deck of Cards Breakdown:
*/

/*
==============================================
Deck of Cards: Individual Functions Approach
==============================================
*/

/*
Step 1: Create deck Function
*/
function makeDeck() {
	const deck = [];
	const suits = [ 'hearts', 'diamonds', 'spades', 'clubs' ];
	const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';

	for (let value of values.split(',')) {
		for (let suit of suits) {
			deck.push({
				value,
				suit
			});
		}
	}
	return deck;
}

/*
Step 2: Add a draw a single card Function
*/
function drawCard(deck, drawnCards) {
	const card = deck.pop();
	drawnCards.push(card);
	return card;
}

/*
Step 3: Add a draw multiple cards Function
*/
function drawMultiple(numCards, deck, drawnCards) {
	const cards = [];
	for (let i = 0; i < numCards; i++) {
		cards.push(drawCard(deck, drawnCards));
	}
	return cards;
}

/*
Step 4: Add a shuffle cards Function
*/
function shuffle(deck) {
	for (let i = deck.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
	}
	return deck;
}

/*
Step 5:
*/
// With using the individual function approach, we have to create a bunch of variables:
const firstDeck = makeDeck();
const drawnCards = [];
shuffle(firstDeck);
// We also have to pass a ton of arguments around:
const hand1 = drawMultiple(2, firstDeck, drawnCards);
const hand2 = drawMultiple(2, firstDeck, drawnCards);
const pokerHand = drawMultiple(5, firstDeck, drawnCards);

/*
=========================================
Deck of Cards: Object + Methods Approach
=========================================
- This approach is much cleaner and more efficient.
*/

// Step 1: Create the entire deck Object
const myDeck = {
	deck         : [],
	drawnCards   : [],
	suits        : [ 'hearts', 'diamonds', 'spades', 'clubs' ],
	values       : '2,3,4,5,6,7,8,9,10,J,Q,K,A',
	// Step 2: Add a reset deck Method
	makeDeck() {
		const { suits, values, deck } = this;
		for (let value of values.split(',')) {
			for (let suit of suits) {
				deck.push({
					value,
					suit
				});
			}
		}
		return deck;
	},
	// Step 3: Add a draw a single card Method
	drawCard() {
		const card = this.deck.pop();
		this.drawnCards.push(card);
		return card;
	},
	// Step 4: Add a draw multiple cards Method
	drawMultiple(numCards) {
		const cards = [];
		for (let i = 0; i < numCards; i++) {
			cards.push(this.drawCard());
		}
		return cards;
	},
	// Step 5: Add a shuffle cards Method
	shuffle() {
		const { deck } = this;
		for (let i = deck.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
		}
	}
};

// Much cleaner!!
myDeck.makeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

/*
===============================================
Deck of Cards: Individual Functions Breakdown
===============================================
*/

/*
Step 1: Create deck Function
*/
function makeDeck() {
	// create an empty deck array
	const deck = [];
	const suits = [ 'hearts', 'diamonds', 'spades', 'clubs' ];
	// string values are separated by commas because we can then call "values.split(',')" on the comma to isolate the values as individual strings in an array ["2","3","4", etc.]
	const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';

	// we want to start by looping over "values". we call .split on the comma to get the individual strings of the array
	for (let value of values.split(',')) {
		// we then loop over "suits"
		for (let suit of suits) {
			// in here we call the empty deck array and attach .push to "push" on a new object with value set to value and suit set to suit
			deck.push({
				// we set the variable "value" from the for loop equal to value
				value : value,
				// we set the variable "suit" from the for loop equal to suit
				suit  : suit
			});
		}
	}
	// here we must return the (empty) array "deck" or else once the function is over "deck" just disappears
	return deck;
}

/*
Step 2: Add a draw a single card Function
*/
// we create the "drawCard()" function with "deck" (from the above function) as an argument
function drawCard(deck, drawnCards) {
	// draw the card by "popping" a card off the end of the deck and assign it to a variable [card]
	// *** calling .pop will always return the value [value: "A", suit: "clubs"] and also change the original array. Because of this we can simple just return "deck.pop()"
	const card = deck.pop();
	// we then "push" the drawn card into the "drawnCards" array
	drawnCards.push(card);
	return card;
}

/*
Step 3: Add a draw multiple cards Function
*/
// we need to give "drawMultiple" a number of cards parameter
// we must pass in a parameter of number of cards, the whole deck, and our drawn cards
function drawMultiple(numCards, deck, drawnCards) {
	// we want to return all of the cards we're drawing into an array
	const cards = [];
	// loop num cards times and take advantage of our "drawCard()" method we already created. we just do a plain old for loop here
	for (let i = 0; i < numCards; i++) {
		// we draw the "card" and push it into the "cards" array
		cards.push(drawCard(deck, drawnCards));
	}
	return cards;
}

/*
Step 4: Add a shuffle cards Function
- for this shuffle we are using an algorithm called the "Fisher Yates Shuffle" and it's used to shuffle an array.
*/
function shuffle(deck) {
	// here we're looping over the "deck" array backwards, so we start at the end of the array and work towards the front
	for (let i = deck.length - 1; i > 0; i--) {
		// pick random index before current element
		let j = Math.floor(Math.random() * (i + 1));
		// shorthand way of swapping elements using destructuring
		[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
	}
	return deck;
}
// *** how this is working under the hood
shuffle([ 'a', 'b', 'c', 'd', 'e', 'f' ]);
// Array(6) [ "a", "b", "c", "d", "f", "e" ] -> "e" & "f" switch
// Array(6) [ "a", "b", "f", "d", "c", "e" ] -> "c" & "f" switch
// Array(6) [ "d", "b", "f", "a", "c", "e" ] -> "a" & "d" switch
// Array(6) [ "f", "b", "d", "a", "c", "e" ] -> "d" & "f" switch
// Array(6) [ "b", "f", "d", "a", "c", "e" ] -> "b" & "f" switch

// *** Another example of how shuffle and destructuring is working
const letters = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
// swapping indexes in the array
[ letters[0], (letters[3] = letters[3]), letters[0] ];
// [ "a", "d" = "d", "a" ]
// -> [ "d", "a" ]
console.log(letters);
// -> [ 'd', 'b', 'c', 'a', 'e', 'f' ]

/*
Step 5:
- With using the individual function approach, we have to create a bunch of variables
- We also have to pass a ton of arguments around:
*/
// We have to create a bunch of variables:
const firstDeck = makeDeck();
const drawnCards = [];
shuffle(firstDeck);
// We have to pass a ton of arguments around:
const hand1 = drawMultiple(2, firstDeck, drawnCards);
const hand2 = drawMultiple(2, firstDeck, drawnCards);
const pokerHand = drawMultiple(5, firstDeck, drawnCards);

/*
===========================================
Deck of Cards: Object + Methods Breakdown
===========================================
- This approach is much cleaner and more efficient.
*/

// Step 1: Create the entire deck Object
const myDeck = {
	deck         : [],
	drawnCards   : [],
	suits        : [ 'hearts', 'diamonds', 'spades', 'clubs' ],
	values       : '2,3,4,5,6,7,8,9,10,J,Q,K,A',
	// Step 2: Add a reset deck Method
	makeDeck() {
		const { suits, values, deck } = this;
		for (let value of values.split(',')) {
			for (let suit of suits) {
				deck.push({
					value,
					suit
				});
			}
		}
		// we now don't have to return "deck" because we wouldn't lose the "deck" since its now a property
		return deck;
	},
	// Step 3: Add a draw single card Method + drawn cards array
	// we need to add a "drawnCards" empty array property to the top of the object
	drawCard() {
		const card = this.deck.pop();
		this.drawnCards.push(card);
		return card;
	},
	// Step 4: Add a draw multiple cards Method
	drawMultiple(numCards) {
		const cards = [];
		for (let i = 0; i < numCards; i++) {
			cards.push(this.drawCard());
		}
		return cards;
	},
	// Step 5: Add a shuffle cards Method
	shuffle() {
		const { deck } = this;
		for (let i = deck.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
		}
	}
};

// Much cleaner!!
myDeck.makeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);
console.log(h1);
// -> { value: "K", suit: "spades" }
// -> { value: "6", suit: "hearts" }
console.log(h2);
// -> { value: "9", suit: "hearts" }
// -> { value: "3", suit: "spades" }
