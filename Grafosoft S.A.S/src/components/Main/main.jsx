import React from "react";
import "./style.css"
import Navbar from "./navbar/navbar";
import Section from "./section/section";

export default function Main(){
    return(
        <div className="main">
           <Navbar/>
           <Section/>
        </div>
    )
}