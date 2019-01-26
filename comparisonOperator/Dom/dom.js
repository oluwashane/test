/*console.dir(document)
let output = document.getElementById("output")
output.innerHTML = "Welcome to my page"*/

/*var output = document.getElementById("output");
var a = document.getElementById("val");
a.value = output.innerHTML;*/

let q = prompt("What is your name?");
let output = document.getElementById("output");
output.innerHTML = "Welcome to my web page " + q;