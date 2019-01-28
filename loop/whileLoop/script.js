
var output = document.getElementById("output");
/*var q = prompt("How many times do you want to loop?");
q = Number(q);
var x = 0;*/

var password = "javascript"
var crack = prompt("Enter youur password:")
while (crack != password ) {
    crack = prompt("Guess again...")
}
output.innerHTML += "Access Granted";