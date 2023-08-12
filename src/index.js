import React from "react"
import  ReactDOM from "react-dom"


const name = "Aarju"
const img1= "https://fastly.picsum.photos/id/458/200/300.jpg?hmac=2d4QALnxYzzYD8DSwuNsa7lutkdOxLsKojuxbNfd31I"
const img2 = "https://fastly.picsum.photos/id/487/200/200.jpg?hmac=acsZoF1o2OcaX5f6QJScaXgr19-izrth6ECMjr7hG9M"
const img3 = "https://fastly.picsum.photos/id/487/200/200.jpg?hmac=acsZoF1o2OcaX5f6QJScaXgr19-izrth6ECMjr7hG9M"
const img4 = "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
ReactDOM.render(
  <>
    <h1 contentEditable = "true"> Hello, my name is {name}</h1>
    <img src = {img1} alt = "randomImage"  />
    <img src = {img2} alt = "randomImage1"  />
    <img src = {img3} alt = "randomImage1"  />
    <img src = {img4} alt = "randomImage1"  />
  </>,document.getElementById("root")
)