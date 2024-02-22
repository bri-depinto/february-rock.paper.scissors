let playerName = prompt('Enter Name of User')

if(playerName === null){
    prompt('Please enter a valid name')
}
document.getElementById('userName').innerText = `${playerName}'s`