import React from "react";


function App() {
    let curDate = new Date(2023,8,25,18);
curDate = curDate.getHours();
 let greeting = " ";
let cssStyle = { };
    if (curDate >= 1 && curDate < 12) {
        greeting = "Good Morning"
        cssStyle.color = "orange"
    } else if (curDate >= 12 && curDate < 17) {
        greeting = "Good Afternoon"
        cssStyle.color = "green"

    } else if(curDate >= 17 && curDate < 20){
        greeting = "Good Evening"
        cssStyle.color = "Maroon"
    }
    else {
        greeting = "Good Night"
        cssStyle.color = "red"
}
   return (
    <>
        <h1> Hello sir,<span style = {cssStyle}> {greeting} </span> </h1>
    </>
);   
}
export default App;