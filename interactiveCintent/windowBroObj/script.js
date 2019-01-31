
console.log(window);

for(var prop in window) {
    document.write(prop + ": " + window[prop] + "<br>")
}

var output = document.getElementById("output");

output.innerHTML += "innerwidth of screen: " + window.innerWidth +"<br>"+ "innerHeight of screen: "+window.innerHeight 
output.innerHTML += "<br>" + window.location;
//alert("Hello World")
window.open("../README.md")