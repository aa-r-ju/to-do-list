// import React from "react"
// import ReactDOM from "react-dom"

// let crnTime = new Date();
// crnTime = crnTime.getHours();
// let greeting = " ";
// let make = { };

// if(crnTime >= 1 && crnTime < 12) {
//   greeting = "Good Morning";
//   make.color = "orange"
// } else if (crnTime >= 12 && crnTime < 19) {
//   greeting = "Good Afternoon";
//   make.color = "Green"
// } else {
//   greeting = "Good Night";
//   make.color = "maroon"

// }
// ReactDOM.render(<h1>Hello Sir, <span cssSt ={make}> {greeting} </span> </h1>,
// document.getElementById("root"))



import React from "react"
import ReactDOM from "react-dom"

let curDate = new Date(2023,8,25,15);
curDate = curDate.getHours();
let greeting = " ";
let cssStyle = { };

if(curDate >= 1 && curDate < 12){
  greeting = "Good Morning";
  cssStyle.color = "orange"
} else if (curDate >=12 && curDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "green"

} else {
  greeting = "Good Night"
  cssStyle.color = "maroon"

}

ReactDOM.render(<h1> Hello Sir, <span style = {cssStyle}>{greeting}</span></h1>,document.getElementById("root"))