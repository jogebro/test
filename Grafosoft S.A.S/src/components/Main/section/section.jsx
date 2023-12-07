import React from "react";
import "./style.css";
import NewBook from "./newBook/newBook";
import Information from "./information/information";
import Tips from "./tips/tips";
import News from "./news/theNews";

export default function Section(){
    return(
        <div className="container">
            <div className="main-content">
                <NewBook/>
                <Information/>
                <Tips/>
            </div>
            <News/>
        </div>
    )
}