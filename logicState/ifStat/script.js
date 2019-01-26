var userName = ['mike','luke','john'];
var output = document.getElementById("output");
var uInput = prompt("Enter username:");
if(userName.indexOf(uInput) > -1){
    output.innerHTML = "Access granted " + uInput;
}else{
    output.innerHTML = "Denied please go and register " + uInput
}