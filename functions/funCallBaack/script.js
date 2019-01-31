
//minicalculator....

var output = document.getElementById("output");


var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")


function add() {
    outC(num1.value,num2.value,"+",function(a,b) {
        return a + b;
    })
}

function sub() {
    outC(num1.value,num2.value,"-",function(a,b) {
        return a - b;
    })
}

function mut() {
    outC(num1.value,num2.value,"*",function(a,b) {
        return a * b;
    })
}

function div() {
    outC(num1.value,num2.value,"/",function(a,b) {
        return a / b;
    })
}

function outC(a,b,s,cback) {
    var result = cback(Number(a),Number(b));
    output.innerHTML += a + " " + s + " " + b + " = " + result + "<br>"
}