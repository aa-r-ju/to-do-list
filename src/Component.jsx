import React  from "react";
import {add,mul,min,divi} from "./App"


function Component() {
    return(
        <>
        <ul>
        <li>Sum of two numbers is {add(10,20)}</li>
        <li>Multiply of two numbers is {mul(10,20)}</li>
        <li>Minus of two numbers is {min(10,20)}</li>
        <li>Divide of two numbers is {divi(10,3)}</li>
        </ul>
        </>
    )
}

export default Component;