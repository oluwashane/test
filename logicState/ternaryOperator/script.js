 let userName = ["shane","mike","ada"];
 let q = prompt("Enter your username:");
 let holder = "";
 let ter = userName.indexOf(q) > -1 ? holder ="Access Granted" : holder = "sign-up";
 output.innerHTML = ter;
 console.log(ter);