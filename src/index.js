import React from "react"
import  ReactDOM from "react-dom"
import {add,mul,min,divi} from "./App"
ReactDOM.render(
    <>
<p>Sum of two numbers is {add(10,20)}</p>
<p>Multiply of two numbers is {mul(10,20)}</p>
<p>Minus of two numbers is {min(10,20)}</p>
<p>Divide of two numbers is {divi(10,3)}</p>
</>,
document.getElementById("root"))