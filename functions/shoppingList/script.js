

var list = [];

function addItem() {
    var item = document.getElementById("item").value
    list.push(item);

    function result() {
        var html = "<h1>Shopping List</h1>";
        var output = document.getElementById("output");
        for(var x = 0; x < list.length; x++){
            html +=(x + 1) + ": "+ list[x] +"<br>";
        }
        output.innerHTML = html
    }
    result();
}

