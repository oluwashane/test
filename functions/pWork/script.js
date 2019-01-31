
var output = document.getElementById("output");

var word = ["mike","john","udo","ebenzer"];

function start() {
    shuffleWord(word);
    output.innerHTML += word + "<br>"
}

function shuffleWord(arr) {
    for(var x = arr.length - 1; x > 0; x--) {
        var holder = Math.floor(Math.random()*(x + 1));
        var temp = arr[x];
        arr[x] = arr[holder];
        arr[holder] = temp;
    }
    return arr;
}