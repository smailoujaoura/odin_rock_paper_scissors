// let e1 = 0
// let e2 = 0
// let e3 = 0
// let tries = 3_000_000;
// for (let i = 0; i < tries; i++)
// {
// 	let random = randomRange(1, 3);
// 	if (random == 1)
// 		e1++
// 	else if (random == 2)
// 		e2++;
// 	else if (random == 3)
// 		e3++;
// }
// console.log(`P1: ${e1 / tries}\n P2: ${e2 / tries}\n P3: ${e3 / tries}`) // probability of getting 1, 2, or 3 is uniform 1/3 for each

let userWins = 0;
let compWins = 0;
let ties = 0;
let rounds = 0;

let playerScore;
let computerScore;
let tiesScore;
let totalRounds;

let rock;
let paper;
let scissors;

let result;

document.addEventListener('DOMContentLoaded', () => {
	playerScore = document.getElementById('player-score');
	computerScore = document.getElementById('comp-score');
	tiesScore = document.getElementById('ties-score')
	totalRounds = document.getElementById('rounds-counter');

	result = document.getElementById('result');

	rockBtn = document.getElementById('rock');
	paperBtn = document.getElementById('paper');
	scissorsBtn = document.getElementById('scissors');

	rockBtn.addEventListener("click", () => startRound("rock"));
	paperBtn.addEventListener("click", () => startRound("paper"));
	scissorsBtn.addEventListener("click", () => startRound("scissors"));
});

function findWinner(playerOption, computerOption)
{
	if (playerOption === computerOption)
		return 'tie';
	if (computerOption === 'rock')
	{
		if (playerOption === 'paper')
			return 'player';
		return 'computer';
	}
	else if (computerOption === 'paper')
	{
		if (playerOption === 'scissors')
			return 'player';
		return 'computer';
	}
	else if (computerOption === 'scissors')
	{
		if (playerOption == 'rock')
			return 'player';
		return 'computer';
	}
}

function startRound(playerOption) {
	let winner = findWinner(playerOption, randomOption());
	rounds++;

	switch (winner)
	{
		case 'player':
			userWins++;
			break;
		case 'computer':
			compWins++;
			break;
		case 'tie':
			ties++;
	}
	totalRounds.textContent = rounds;
	result.textContent = winner;
	tiesScore.textContent = ties;
	playerScore.textContent = userWins;
	computerScore.textContent = compWins;
}

function randomRange(lower, upper) {
	return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

function randomOption() {
	let num = randomRange(1, 3);
	switch (num)
	{
		case 1:
			return "rock";
		case 2:
			return "paper";
		case 3:
			return "scissors";
		default:
			return "what?";
	}
}

function resetResults() {
	userWins = 0;
	compWins = 0;
	rounds = 0;
	ties = 0;

	playerScore.textContent = '0';
	computerScore.textContent = '0';
	totalRounds.textContent = '0';
	tiesScore.textContent = '0';
	result.textContent = 'Tie';
}