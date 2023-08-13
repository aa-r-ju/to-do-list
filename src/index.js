import React from "react"
import  ReactDOM  from "react-dom"
import programmer, {favpro,myName} from "./App"
ReactDOM.render(
    <ol>
        <li>Aarju</li>
        <li> {programmer} </li>
        <li> {favpro} </li>
        <li> {myName()} </li>
    </ol>,
    document.getElementById("root")
)