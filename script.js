let userName =prompt('Enter your name')
let names='${userName} score'
let userNameOutputDiv = document.getElementbyId('userNameOutput')
console.log(names)
userNameOutputDiv.innerHTML=`<h1>${names}</h1>`