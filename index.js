// Write your code here!
let removedMain = document.getElementById("main");
removedMain.remove();

let newHeader = document.createElement("h1");
let newHeaderOfIdVictoryWithText = newHeader.setAttribute("id", "victory");
let text = newHeader.innerHTML = "George is the champion";
document.getElementById("victory").appendChild(text);