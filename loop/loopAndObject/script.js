var output = document.getElementById("output");

var userNames = {a:"mike", b:"john",c:"larry"};
//looping tru the dom....
for(var x in document){
    output.innerHTML += x +": "+document[x] + "<br>"
}