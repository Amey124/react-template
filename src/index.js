import React from "react"
import ReactDOM from "react-dom"
import Photo from "./photo"
import Basic from "./basic"
import Reach from "./reach"
import Contact from "./contact"
import About from "./about"
import "./styles.css"

function Index(){
    return (
    <div>
       <Photo />
       <Basic />
       <Contact />
       <About />
       <Reach />
       </div>
       )
}

ReactDOM.render(Index(), document.getElementById("root"))