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

    if(computerChoice === 'rock'){
        document.getElementById('changeImage').src = 'images/rock.png'
    }
    if(computerChoice === 'paper'){
        document.getElementById('changeImage').src = 'images/paper.png'
    }
    if(computerChoice === 'scissors'){
        document.getElementById('changeImage').src = 'images/sciz.png'
    }

    let result;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        roundNum++;
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = "You win!";
        playerScore++;
        roundNum++;
    } else {
        result = "Computer wins!";
        computerScore++;
        roundNum++;
    }


    document.getElementById('result').innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    document.getElementById('computerScore').innerText = `${computerScore}`;
    document.getElementById('playerScore').innerText = `${playerScore}`;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundNum = 1;
    document.getElementById('changeImage').src = 'images/question.png';
    document.getElementById('result').innerText = 'Who will win?';
    document.getElementById('score').innerText = '';
}