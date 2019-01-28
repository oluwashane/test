var output = document.getElementById("output");

/*var html = "<table>"

for(var row = 0; row < 10; row++){
    html += "<tr>"
    for(var col = 0; col < 10; col++){
        html += "<td>Cell = "+((col+1)+(row * 10))+"</td>"
    }
    html += "</td>"
}
html += "</table>"
output.innerHTML = html ;*/
var html = "";
var total= 0;
for(var x = 0; x < 1000; x++){
    if(x % 2 === 0){
        total += x;
        output.innerHTML += "value of x =" + x +" subtotal = "+total+"<br>";
        
    }
    
}

output.innerHTML += "Total of multiples of 5 =" + total;
