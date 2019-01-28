var output = document.getElementById("output");

var q = prompt("How many bananas you want?");
var cBan = 89;
var total = 0;
var ban;
//89calories

for (var x = 1; x < q; x++){
    total += cBan;
    ban = x > 1? "bananas" : "banana"
    output.innerHTML += "you ate "+x+" "+ban+" another "+cBan+" calories your total is now "+total+"<br>"; 
}
output.innerHTML += "Total number of bananas "+q+"<br>Total calories count"+total+"<br>"