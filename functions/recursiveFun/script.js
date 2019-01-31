//word Guessing game
var secretWord = ["JavaScript","html","css","python","php","mysql"];
var ram ;

var output = document.getElementById("output");

function start() {
    ram = Math.floor(Math.random()*secretWord.length)
    console.log(ram[secretWord])
    getpass(prompt("Enter pass code:"))
}

function getpass(pass) {
    
    if(pass == secretWord[ram]) {
        output.innerHTML = "Access Granted"
    }else {
        getpass(prompt("Enter pass code:"))
    }
}