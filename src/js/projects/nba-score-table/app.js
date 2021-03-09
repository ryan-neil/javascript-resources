const warriorsGames = [
	{
		awayTeam : {
			team     : 'Golden State',
			points   : 119,
			isWinner : true
		},
		homeTeam : {
			team     : 'Houston',
			points   : 106,
			isWinner : false
		}
	},
	{
		awayTeam : {
			team     : 'Golden State',
			points   : 105,
			isWinner : false
		},
		homeTeam : {
			team     : 'Houston',
			points   : 127,
			isWinner : true
		}
	},
	{
		homeTeam : {
			team     : 'Golden State',
			points   : 126,
			isWinner : true
		},
		awayTeam : {
			team     : 'Houston',
			points   : 85,
			isWinner : false
		}
	},
	{
		homeTeam : {
			team     : 'Golden State',
			points   : 92,
			isWinner : false
		},
		awayTeam : {
			team     : 'Houston',
			points   : 95,
			isWinner : true
		}
	},
	{
		awayTeam : {
			team     : 'Golden State',
			points   : 94,
			isWinner : false
		},
		homeTeam : {
			team     : 'Houston',
			points   : 98,
			isWinner : true
		}
	},
	{
		homeTeam : {
			team     : 'Golden State',
			points   : 115,
			isWinner : true
		},
		awayTeam : {
			team     : 'Houston',
			points   : 86,
			isWinner : false
		}
	},
	{
		awayTeam : {
			team     : 'Golden State',
			points   : 101,
			isWinner : true
		},
		homeTeam : {
			team     : 'Houston',
			points   : 92,
			isWinner : false
		}
	}
];

// * Step 1: create the ul element and this is where we will append a bunch of li's to
const ulParent = document.createElement('ul');

// * Step 2: iterate over all the games
warriorsGames.forEach(game => {
	// destructuring the variables
	const { homeTeam, awayTeam } = game;
	// * Step 3: create li's for each game
	const gameLI = document.createElement('li');
	// * Step 4: set the text of the li's to away team at home team format (dynamically with template literal)
	// we can destructor awayTeam and homeTeam:
	const { team: hTeam, points: hPoints } = homeTeam;
	const { team: aTeam, points: aPoints } = awayTeam;
	const teamNames = `${aTeam} @ ${hTeam}`;
	// * Step 5: we need to append the li's to the ul
	ulParent.append(gameLI);
	// * Step 6: show the li's on the page (prepend):
	document.body.prepend(ulParent);

	// * Step 7: displaying the scores and make winning score bold
	let scoreLine;
	if (aPoints > hPoints) {
		scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
	} else {
		scoreLine = `${aPoints} - <b>${hPoints}</b>`;
	}
	// * Step 8: add the scores to the li's
	// this needs to be "innerHTML" not "innerText" to display the bold tags
	gameLI.innerHTML = `${teamNames}: ${scoreLine}`;
	// * Step 9: add a background color
	// we need to identify Golden State (reference it)
	const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
	// now we can access the "isWinner" attribute:
	// if the "isWinner" is true then we apply the class "win", otherwise we apply the class of "loss"
	// we can add this expression to the entire class
	gameLI.classList.add(warriors.isWinner ? 'win' : 'loss');
});
