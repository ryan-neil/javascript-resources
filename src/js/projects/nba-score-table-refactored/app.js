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

// * Step 1: Wrap everything in a function
const makeChart = (games, targetTeam) => {
	const ulParent = document.createElement('ul');

	warriorsGames.forEach(game => {
		const gameLI = document.createElement('li');
		gameLI.innerHTML = getScoreLine(game);

		gameLI.classList.add(
			isWinner(game, targetTeam) ? 'win' : 'loss'
		);

		ulParent.append(gameLI);
	});
	return ulParent;
};

// * Step 2: Create a function that gets the winner
// we can destructure "game" here:
const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
	const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
	return target.isWinner;
};

// * Step 3: Create a function that determines the interior of the inner text (Golden State @ Houston: 119 - 106)
// we can destructure the entire game here again:
const getScoreLine = ({ homeTeam, awayTeam }) => {
	const { team: hTeam, points: hPoints } = homeTeam;
	const { team: aTeam, points: aPoints } = awayTeam;
	const teamNames = `${aTeam} @ ${hTeam}`;
	let scoreLine;
	if (aPoints > hPoints) {
		scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
	} else {
		scoreLine = `${aPoints} - <b>${hPoints}</b>`;
	}
	return `${teamNames}: ${scoreLine}`;
};

// Golden State as the targetTeam
const gsSection = document.querySelector('#gs');
const hrSection = document.querySelector('#hr');
const gsChart = makeChart(warriorsGames, 'Golden State');
gsSection.appendChild(gsChart);

const hrChart = makeChart(warriorsGames, 'Houston');
hrSection.appendChild(hrChart);

/**
 * In summary:
 * We have the function MakeChart() that relies on two other functions, isWinner() and getScoreLine().
 */
