
//minicalculator....

var output = document.getElementById("output");


var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")
function add(){
    var a = num1.value + " + " + num2.value;
    var b = Number(num1.value) + Number(num2.value)
    outHTML(a,b);
};
function sub(){
    var a = num1.value + " - " + num2.value;
    var b = Number(num1.value) - Number(num2.value)
    outHTML(a,b);
};
function mut(){
    var a = num1.value + " * " + num2.value;
    var b = Number(num1.value) * Number(num2.value)
    outHTML(a,b);
};
function div(){
    var a = num1.value + " / " + num2.value;
    var b = Number(num1.value) / Number(num2.value)
    outHTML(a,b);
};

function outHTML(a,b){
    output.innerHTML += a + " = " + b +"<br>";
}