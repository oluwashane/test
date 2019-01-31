
var output = document.getElementById("output");

var words = ["javascript", "css", "html", "python"];

function start() {
    shuffleArray(words);
    output.innerHTML += words + "<br>";
}

function shuffleArray(arr) {
    for(var x = arr.length - 1; x > 0; x--){
        var holder = Math.floor(Math.random()*(x + 1))
        var temp = arr[x];
        arr[x] = arr[holder]
        arr[holder] = temp
    }
    return arr;
}