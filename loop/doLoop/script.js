var output = document.getElementById("output");


var x = 0;

do {
    if(x % 2 === 0){
        output.innerHTML += "Value of x = "+x+"<br>";
    }
    x++
}
while (x < 31);
output.innerHTML += "Finale value of x = "+x+"<br>"