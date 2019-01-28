var output = document.getElementById("output");

/*myFunction();
myFunction();
myFunction();

function myFunction() {
    output.innerHTML += "Hello, I am Jarvis <br>";
}*/

//Return and Local Variables.....
myFun1(4,5,6);
function myFun1(a,b,c) {
    var response = a + b + c;
    output.innerHTML = response;
    return response;
}
