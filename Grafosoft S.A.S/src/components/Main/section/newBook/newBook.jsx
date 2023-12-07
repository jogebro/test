import React from "react";
import "./style.css";
import img1 from "../../../../assets/womanBook.svg";

export default function NewBook(){
    return(
        <div className="new-book">
            <div className="contentBook">
                <h4>Hola, Andrés! Tienes ideas sobre un nuevo libro?</h4>
                <div>
                    <p>Vuelve tus libros tendencia mundial!</p>
                    <p>Quieres empezar a escribir una vez más?</p>
                </div>
                <button>Crear Borrador <span>+</span></button>
            </div>
            <div className="imgBook">
                <img src={img1} alt=". . ." />
            </div>
        </div>
    )
}