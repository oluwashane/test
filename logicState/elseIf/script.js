let output = document.getElementById("output");
let name = prompt("Set your username: ")
let myTime = 15;

if(myTime <= 8){
    output.innerHTML = "Good Morning "+ name + ". Hope you slept well?"
} else if(myTime >= 13 && myTime <= 16){
    output.innerHTML = "Don't be late for work " + name;
}