
var output = document.getElementById("output");
var answer = "something went wrong";
var quest = prompt("Ask me anything")
var randomeNum = Math.floor(Math.random()* 5)
switch (randomeNum) {
    case 0:
        answer = "it will work out"
        break;
    case 1:
        answer = "may be"    
        break;

    case 2:
        answer = "probably not"
        break;
    
    case 3:
        answer = "highly likely"
        break;
    
    default:
        answer = "I don't know"    
}

output.innerHTML = "you asked me: <br>"+quest+" <br>I think "+answer;