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

let main;
let announcement;



document.addEventListener('DOMContentLoaded', () => {
	main = document.querySelector("main");

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
	if (computerOption === 'rock') {
		if (playerOption === 'paper')
			return 'player';
		return 'computer';
	}
	else if (computerOption === 'paper') {
		if (playerOption === 'scissors')
			return 'player';
		return 'computer';
	}
	else if (computerOption === 'scissors') {
		if (playerOption == 'rock')
			return 'player';
		return 'computer';
	}
}

function announceWinner() {
	announcement = document.createElement('div');
	if (userWins > compWins) {
		announcement.textContent = "You won!";
		announcement.setAttribute("style", "color: green; font-size: 24px")
	}
	else if (userWins < compWins) {
		announcement.textContent = "Game lost!";
		announcement.setAttribute("style", "color: red; font-size: 24px")
	}
	else {
		announcement.textContent = "It's a tie.";
		announcement.setAttribute("style", "color: lightskyblue; font-size: 24px")
	}
	announcement.setAttribute("style", announcement.getAttribute("style") 
		+ "; border: 1px solid #282828; padding: 10px; border-radius: 20px;")
	main.insertBefore(announcement, main.querySelector(".results"));
}

function startRound(playerOption) {
	if (rounds === 5)
		resetResults();
	let winner = findWinner(playerOption, randomOption());
	rounds++;

	switch (winner) {
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
	result.textContent = winner.toUpperCase();
	tiesScore.textContent = ties;
	playerScore.textContent = userWins;
	computerScore.textContent = compWins;

	if (rounds === 5)
		announceWinner();
}

function randomRange(lower, upper) {
	return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

function randomOption() {
	let num = randomRange(1, 3);
	switch (num) {
		case 1:
			return "rock";
		case 2:
			return "paper";
		case 3:
			return "scissors";
		default:
			return "what? no way";
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
	if (typeof announcement !== "undefined")
		announcement.setAttribute("style", "display: none");
}