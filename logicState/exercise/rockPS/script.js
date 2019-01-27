
var output = document.getElementById("output");
var player = prompt("Do you choose Rock Paper or Scissors? ");
var ps = player.charAt(0).toUpperCase();
var win = false;
var computer = Math.random()

if(computer < 0.34){
    computer = "Rock"
} else if (computer < 0.67){
    computer = "paper"
}else {
    computer = "Scissor"
}
var cs = computer.charAt(0).toUpperCase();
console.log(computer);
var html = ""; 

if(cs == ps){
    html += "it's a TIE!"
}else{
    if(ps == "R"){
        player = "Rock"
        if(cs == "S"){win = true}
    }
    else if(ps == "P"){
        player = "Paper"
        if(cs == "R"){win = true}
    }

    else {
        player = "Scissor"
        if(cs == "P"){win = true}
    }

    if(win) {
        html += "Player Wins"
    }else{
        html += "Compuer Wins"
    }
}
output.innerHTML = "Player vs Computer<br>"+player+" vs "+computer+"<br>Result "+html;