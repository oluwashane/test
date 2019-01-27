var myTime = prompt("To do action?");
var output = document.getElementById("output");
var html;

switch ( myTime) {
    case "wake up":
        html = 8 + "am";
        break
    case "lunch time":
        html = 12 + "pm";
        break;

    case "dinner":
        html = 16 +"pm";    
        break;
      
    default:
    html = "Not found"    
}

output.innerHTML = html;