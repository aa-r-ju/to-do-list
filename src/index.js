import React from "react"
import  ReactDOM  from "react-dom"
import * as kuch from "./App"
ReactDOM.render(
    <ol>
        <li>Aarju</li>
        <li> {kuch.default} </li>
        <li> {kuch.favpro} </li>
        <li> {kuch.myName()} </li>
    </ol>,
    document.getElementById("root")
)