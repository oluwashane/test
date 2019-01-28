//Loops and Arrays


var output = document.getElementById("output");

var UserNames = ["mike","luke","chi"];
for(var x = 0; x < UserNames.length; x++){
    output.innerHTML += UserNames[x] + "<br>";
}

for(var x =  UserNames.length - 1; x >= 0; x--){
    output.innerHTML += UserNames[x] + "<br>";
}

var x = 0;
while(UserNames[x]) {
    output.innerHTML += UserNames[x] + "<br>";
    x++;
}

