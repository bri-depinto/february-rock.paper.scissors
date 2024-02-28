let playerName = prompt('Enter your username:')

while (playerName === null || playerName === '')[
    playerName = prompt('Please enter valid username:')
]
document.getElementById('userName').innerText = `${playerName}'s`
//getting the username and storing it

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
    //changing imahges based on what computer chose

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

        if (roundNum===6){
            document.getElementById('rockButton').classList.toggle('d-none')
            document.getElementById('paperButton').classList.toggle('d-none')
            document.getElementById('scissorButton').classList.toggle('d-none')
            document.getElementById('changeImage').classList.toggle('d-none')
            document.getElementById('versusThing').classList.toggle('d-none')

        }
      
    }
    //updating round numbes and scores based on winner loser or tie

    document.getElementById('result').innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    document.getElementById('computerScore').innerText = `${computerScore}`;
    document.getElementById('playerScore').innerText = `${playerScore}`;
    document.getElementById('roundNum').innerText = `${roundNum}`;
    //showing the changes on the website
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundNum = 1;
    document.getElementById('changeImage').src = 'images/question.png';
    document.getElementById('result').innerText = 'Who will win?';
    document.getElementById('playerScore').innerText = '0';
    document.getElementById('computerScore').innerText = '0';
    document.getElementById('roundNum').innerText = '1';
    document.getElementById('rockButton').classList.remove('d-none')
    document.getElementById('paperButton').classList.remove('d-none')
    document.getElementById('scissorButton').classList.remove('d-none')
    document.getElementById('changeImage').classList.remove('d-none')
    document.getElementById('versusThing').classList.remove('d-none')

}
//resetting the score, round, and displays