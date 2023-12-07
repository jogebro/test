import React from "react";
import "./style.css"
import img2 from "../../../../assets/womanBook2.svg";

export default function Tips(){
    return(
        <div className="tips">
            <div className="contentTips">
                <h4>Andrés, nos gusta tu contenido y queremos darte los siguientes tips:</h4>
                <div>
                    <p>1. Lee los comentarios de tus lectores.</p>
                    <p>2. Elije el género que quieres para tu público.</p>
                    <p>3. Busca siempre a un editor de confianza!</p>
                </div>
            </div>
            <div className="imgBook">
                <img src={img2} alt=". . ." />
            </div>
        </div>
    )
}