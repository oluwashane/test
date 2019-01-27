

var output = document.getElementById("output");
var html;
var quest = prompt("heads or tails");
var result = quest == "heads" ? 1 : 0;
var randomNumber = Math.floor(Math.random()*2);
if(result == randomNumber) {
    html = "you guessed correctly";
} else {
    html = "you were wrong";
}

output.innerHTML = html;