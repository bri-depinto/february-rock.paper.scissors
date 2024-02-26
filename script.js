let playerName = prompt('Enter your username:')

while (playerName === null || playerName === '')[
    playerName = prompt('Please enter valid username:')
]
document.getElementById('userName').innerText = `${playerName}'s`

let playerScore=0
let computerScore=0
let roundNum=1

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    document.getElementById('result').innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundNum = 1;
    document.getElementById('result').innerText = '';
    document.getElementById('score').innerText = '';
}