import React from "react"
import  ReactDOM  from "react-dom"

const name = "Aarju"
const lname = "Pariyar"
const age =  22

ReactDOM.render(
<>
<h1> Introduction </h1>
<p> {`Hello my name is ${name} ${lname}`}</p>
<p> {`I am ${age} years old`}</p>
<p> {`my birth date is ${20 + 5} August`}</p>
</>, 
document.getElementById("root"))