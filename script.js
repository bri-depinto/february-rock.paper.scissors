let playerName = prompt('Enter your username:')

while (playerName === null || playerName === '')[
    playerName = prompt('Please enter valid username:')
]
document.getElementById('userName').innerText = `${playerName}'s`