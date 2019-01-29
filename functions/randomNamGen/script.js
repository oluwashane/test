
var output = document.getElementById("output");

var adj = ["smart","bad", "selfish", "careful", "angry", "wonderful"];

console.log()
function myFun(){
    var q = prompt("What is your name?")
    var r = Math.floor(Math.random()* adj.length);
    output.innerHTML += "user input: "+ q +" you are "+adj[r]+"<br>";
}