/*
JavaScript Notes and Documentation
Practice:
*/

/*
=================================
Deck of Cards
=================================
*/
function makeDeck() {
	const deck = [];
	const suits = [ 'hearts', 'diamonds', 'spades', 'clubs' ];
	const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';

	// goal is to return an object that has a suit set to one of the suits and a value set to one of the suits
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

// Create a deck and then draw a single card
function drawCard(deck) {
	// pop returns the value and also changes the original array so we can simply "return" deck.pop()
	return deck.pop();
}

const myDeck = makeDeck();
const card1 = drawCard(myDeck);

// Re-writing more efficiently
const myDeck = {
	deck           : [],
	suits          : [ 'hearts', 'diamonds', 'spades', 'clubs' ],
	values         : ',3,4,5,6,7,8,9,10,J,Q,K,A',
	initializeDeck() {
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
	}
};

/*
=================================
Deck of Cards: Breakdown
=================================
Features:
- Create deck of cards [makeDeck function]
- Draw a single card from the deck
- Discard pile of cards
- Shuffle the deck of cards
- Refill the deck (start over)
- Draw multiple cards from the deck

'hearts', 'diamonds', 'spades', 'clubs'
'2,3,4,5,6,7,8,9,10,J,Q,K,A'
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
		// we also want to loop over "suits"
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
Step 2: Draw a single card Function
*/
// we create the "drawCard()" function with "deck" (from the above function) as an argument
function drawCard(deck) {
	// draw the card by "popping" a card off the end of the deck
	// *** calling .pop will always return the value [value: "A", suit: "clubs"] and also change the original array. Because of this we can simple just return "deck.pop()"
	return deck.pop();
}
// to draw a single card, we need to make a "deck" variable from the makeDeck() function
const myDeck = makeDeck();
// then we need to call "drawCard" from the function above and pass in "myDeck" which we just assigned to the "makeDeck()" function
const card1 = drawCard(myDeck);
console.log(card1); // -> [value: "A", suit: "clubs"]
console.log(myDeck); // -> (51) item array
console.log(drawCard(myDeck)); // -> [value: "A", suit: "spades"]
console.log(myDeck); // -> (50) item array
console.log(drawCard(myDeck)); // -> [value: "A", suit: "diamonds"]
console.log(myDeck); // -> (49) item array

/*
Step 3: Refactoring the code
- we can refactor this code by using objects. we can use an object to store the deck and on that object we can have a method called "drawCard()", "shuffleDeck()", etc. We then have access to the deck with the keyword "this".
*/
// we create the entire "deck" object. in here we're grouping data with functionality.
const myDeck = {
	// create the property "deck" which can start as an empty array
	deck         : [],
	drawnCards   : [],
	// instead of a variable we can make "suits" and "values" a property
	suits        : [ 'hearts', 'diamonds', 'spades', 'clubs' ],
	values       : '2,3,4,5,6,7,8,9,10,J,Q,K,A',
	// then we create a new method called "refillDeck". this new refill method will update the "deck" property
	refillDeck() {
		// we can use destructuring on "suits", "values" and "deck"
		const { suits, values, deck } = this; // this code equates to this.suits, this.values, this.deck
		for (let value of values.split(',')) {
			for (let suit of suits) {
				deck.push({
					value : value,
					suit  : suit
				});
			}
		}
		// we now don't have to return "deck" because we wouldn't lose the "deck" since its now a property
		return deck;
	},

	// Step 4: Create a Method to draw a single card and add a discard pile
	// we need to add a "drawnCards" empty array property to the top of the function
	drawCard() {
		// we draw a card and pop it off the end of the "deck"
		const card = this.deck.pop();
		// after we draw a single card we will push the "card" we "popped" from the "deck" into the "drawnCards" array
		this.drawnCards.push(card);
		return card;
	},

	// Step 5: Create a Method to draw multiple cards
	// we need to give "drawMultiple" a number of cards parameter
	drawMultiple(numCards) {
		// loop num cards times and take advantage of our "drawCard()" method we already created. we just do a plain old for loop here
		for (let i = 0; i < numCards; i++) {
			// we want to return all of the cards we're drawing into an array
			const cards = [];
			// we draw the "card" and push it into the "cards" array
			cards.push(this.drawCard());
		}
		return cards;
	}
};
console.log(myDeck.drawMultiple(4));
// -> [value: "A", suit: "clubs"]
// -> [value: "A", suit: "spades"]
// -> [value: "A", suit: "diamonds"]
// -> [value: "A", suit: "hearts"]
console.log(drawnCards);
// -> [value: "A", suit: "clubs"]
// -> [value: "A", suit: "spades"]
// -> [value: "A", suit: "diamonds"]
// -> [value: "A", suit: "hearts"]
console.log(myDeck);
// -> (48) cards in deck now

/*
Step 6: Create shuffle Function
- for this shuffle we are using an algorithm called the "Fisher Yates Shuffle" and it's used to shuffle an array.
*/
function shuffle(arr) {
	// here we're looping over the array backwards, so we start at the end of the array and work towards the front
	for (let i = arr.length - 1; i > 0; i--) {
		// pick random index before current element
		let j = Math.floor(Math.random() * (i + 1));
		// shorthand way of swapping elements using destructuring
		[ arr[i], arr[j] ] = [ arr[j], arr[i] ];
		// console.log() the array we pass in so we can see how it works
		console.log(arr);
	}
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
Step 7: Refactoring the code more and adding "shuffle" method
*/
// Whole deck object with different Methods inside
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
