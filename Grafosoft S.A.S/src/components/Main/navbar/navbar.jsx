import React from "react";
import user from "../../../assets/userPhoto.jpg"
import "./style.css"

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Buscar por libros, personas ó articulos" />
            </div>
            <div className="user-options">
                <div className="notifications">
                    <div className="notification">
                        <i className="fa-regular fa-bell"></i>
                    </div>
                    <div className="notification">
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                </div>
                <div className="user">
                    <p>Andrés Vargas</p>
                    <div className="photo">
                        <img src={user} alt=". . ." />
                    </div>
                </div>
            </div>
        </div>
    )
}