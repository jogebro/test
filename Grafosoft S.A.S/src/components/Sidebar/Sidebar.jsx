import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
      <div className="sidebar">
        <div className="icon-container">
          <i className="fa-solid fa-book"></i>
        </div>
        <div className="list-items">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/">Inicio</Link>
            </li>
            <li className="menu-item">
              <Link to="/">Libros</Link>
            </li>
            <li className="menu-item">
              <Link to="/">Editores</Link>
            </li>
            <li className="menu-item">
              <Link to="/">Lectores</Link>
            </li>
          </ul>
        </div>
        <div className="button-create">
          <button>
            Crear <span>+</span>
          </button>
        </div>
      </div>
  );
}
