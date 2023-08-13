import React from "react"
import  ReactDOM  from "react-dom"
import programmer, {favpro} from "./App"
ReactDOM.render(
    <ol>
        <li>Aarju</li>
        <li> {programmer} </li>
        <li> {favpro} </li>
    </ol>,
    document.getElementById("root")
)