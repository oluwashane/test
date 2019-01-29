
var output = document.getElementById("output");

var cCode = []
var count = 0;
var c1 = document.getElementById("code1");
var c2 = document.getElementById("code2");
var c3 = document.getElementById("code3");

for(var x = 0; x < 3; x++){
    cCode.push( Math.floor(Math.random()*9));
}

//output.innerHTML = cCode;

function crack() {
    count = 0;
    var guess = [c1.value, c2.value, c3.value];
    for(var x = 0; x < cCode.length; x++){
        output.innerHTML += checkNum(guess[x],cCode[x]);
    }
    if(count == 3){
        output.innerHTML += "You guessed it<br>"
    }else{
        output.innerHTML += "<br>"
    }
}

function checkNum(a, b) {
    if(a > b){return "L"}
    if(a < b){return "H"}
    if(a == b){
        count++;
        return a;
    }

}
