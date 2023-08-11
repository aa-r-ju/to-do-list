import  React from "react"
import  ReactDOM from "react-dom"

const name = "Aarju"
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

ReactDOM.render( 
  <>
    <h1>Hello, My name is {name} </h1>
    <p> Todays Date is {currentDate}</p>
    <p>  Current Time is {currentTime}  </p>
  </>,
  document.getElementById("root")
)