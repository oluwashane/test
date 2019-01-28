
var output = document.getElementById("output");

var additems;
var shoppingList = [];
var numItems = prompt("How many items would you like to add?");
for(var x = 0; x < numItems; x++) {
    additems = prompt("what do you want to add?");
    if(additems == "no"){break}
    shoppingList.push(additems);
}

for(myI of shoppingList) {
    output.innerHTML += + " " +myI + "<br>"
}
