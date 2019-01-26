//let myArray = ["string", 100 ,false ]

//console.log(myArray)

//Task List Of What I Do Every Morning In School

let task = ["take out garbage","read a book","write javascript","go to work" ]

/*let progress = ["Done","In progress","To do"];
let question = prompt("Which task 1-"+task.length+"?");
let question2 = prompt("status 1 = Done 2 = In progress 3 = To do"); 

console.log("Today you will "+task[(question - 1)]+". status of task "+progress[(question2 - 1)])*/

//task[task.length] = "Watch Tv";
//console.log(task)

//Array Type
/*let animals = ["duck","goat","dog","lion"]
let randomIndex = Math.floor(Math.random()*animals.length);
let randomAni = animals[randomIndex];
let message = prompt("Select the correct index of "+randomAni)
let response = ((message - 1) == randomIndex )? "Correct":"Wrong the correct index is "+randomIndex;
alert(response);
console.log()*/

/*let animals = ["sheep","duck","goat","dog","lion"];
animals.push("snake");
//animals.pop();
animals.unshift("Helps")
console.log(animals)*/

//let newHolder = ["cat","dog","rabbit","bird"]
/*let startInter = newHolder.length
newHolder.shift();
newHolder.unshift("sheep")
newHolder[10]= "horse"
newHolder.fill("fish",(startInter-1), (newHolder.length - 1))
newHolder.reverse()
console.log(newHolder)*/
/*let animals = ["cat","dog","rabbit","bird"]
let question = prompt("write any animal you have in your head:")
let p = animals.indexOf(question);
let response = (p > -1 )? "Found" : "Not in array"
console.log(response);*/

/*var arr = [2, 4, 5, 6, 7, 22, 34, "cat", "goat"];
arr.sort();
var q = prompt("What do you want to remove? ");
var finder = arr.indexOf(q);

var remover = (finder > -1)? arr.splice(finder,1) : q + " not found in array refresh....." 
console.log(finder);
console.log(arr);*/

//Multidimensional Array
/*
let myFriends = [["ebenezer","obinna","onyedikachi","daniel"],[2018,2016,2017,2019]]
let q = prompt("Which friend?")
console.log(myFriends[0][q] + " year we met "+ myFriends[1][q]);
*/

//Looping through an array;
let myFriends = ["ebenezer","obinna","onyedikachi","daniel",2018,2016,2017,2019]

for(let x in myFriends){
    console.log(x);
    console.log(myFriends[x]);
}
