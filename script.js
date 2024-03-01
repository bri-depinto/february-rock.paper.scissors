let playerName = prompt('Enter your username:')

while (playerName === null || playerName === '') [
    playerName = prompt('Please enter valid username:')
]
document.getElementById('userName').innerText = `${playerName}'s`
//getting the username and storing it

let playerScore = 0
let computerScore = 0
let roundNum = 1

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];


    if (roundNum >= 5) {
        document.getElementById('rockButton').classList.toggle('d-none');
        document.getElementById('paperButton').classList.toggle('d-none');
        document.getElementById('scissorButton').classList.toggle('d-none');
        document.getElementById('changeImage').classList.toggle('d-none');
        document.getElementById('versusThing').classList.toggle('d-none');
        document.getElementById('tryMe').innerText = 'Game over!';
        let overallWinner;
        if (playerScore > computerScore) {
            overallWinner = `${playerName} wins the game!`;
            var duration = 5 * 1000;
            var animationEnd = Date.now() + duration;
            var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }

            var interval = setInterval(function () {
                var timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                var particleCount = 50 * (timeLeft / duration);
                // since particles fall down, start a bit higher than random
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
            }, 250);
        } else if (playerScore < computerScore) {
            overallWinner = "Computer wins the game!";
        } else {
            overallWinner = "It's a tie!";
        }
        document.getElementById('result').innerText = `Final Score: ${playerName} ${playerScore}, Computer ${computerScore}. ${overallWinner}`;
        return;
    }


    if (computerChoice === 'rock') {
        document.getElementById('changeImage').src = 'images/rock.png'
    }
    if (computerChoice === 'paper') {
        document.getElementById('changeImage').src = 'images/paper.png'
    }
    if (computerChoice === 'scissors') {
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
    document.getElementById('rockButton').classList.toggle('d-none')
    document.getElementById('paperButton').classList.toggle('d-none')
    document.getElementById('scissorButton').classList.toggle('d-none')
    document.getElementById('changeImage').classList.toggle('d-none')
    document.getElementById('versusThing').classList.toggle('d-none')
    document.getElementById('changeImage').src = 'images/question.png';
    document.getElementById('result').innerText = 'Who will win?';
    document.getElementById('playerScore').innerText = '0';
    document.getElementById('computerScore').innerText = '0';
    document.getElementById('tryMe').innerHTML = `Round <span id="roundNum">1</span>:`;


}
//resetting the score, round, and displays