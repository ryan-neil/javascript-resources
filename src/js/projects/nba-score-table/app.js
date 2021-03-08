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

// Create the ul element and this is where we will append a bunch of li's to:
const ulParent = document.createElement('ul');

// then we want to iterate over all the games:
warriorsGames.forEach(game => {
	// destructuring the variables
	const { homeTeam, awayTeam } = game;

	// create the li's
	const gameLI = document.createElement('li');
	// set the text of the li's to away team at home team format (dynamically with template literal)
	gameLI.innerText = `${awayTeam.team} @ ${homeTeam.team}`;

	// we need to add the li's to the ul element
	ulParent.append('gameLI');
});
