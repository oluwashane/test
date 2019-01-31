

var output = document.getElementById("output");
var myArry = ["shane","mark","matt","obi",12,354,2,4,3,
                "shane","mark","matt","obi",12,354,2,4,3,
                    "shane","mark","matt","obi",12,354,2,4,3]

var cArray = removeDup(myArry)
output.innerHTML = myArry + "<br>" + cArray


function removeDup(arr){
    var cA = [];
    var cObj = {};
    var z = "";
    for(var x = 0; x < arr.length; x++){
        //console.log(arr[x]);
        cObj[arr[x]] = "whatever";
    }
    //console.log(cObj)

    for(z in cObj){
        console.log(z)
        cA.push(z)
    }
    return cA 
}
