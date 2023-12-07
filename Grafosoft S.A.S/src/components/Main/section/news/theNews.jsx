import React from "react";
import "./style.css"
import person from "../../../../assets/person.jpg";
import imgCard1 from "../../../../assets/plant.jpg";
import imgCard2 from "../../../../assets/space.jpg";
import { Link } from "react-router-dom";

export default function News(){
    return(
        <div className="the-last">
            <div className="nav">
                    <h2>Lo último</h2>
                    <button>Ver Todo</button>
                </div>
                <div className="filters">
                    <Link to="/">Reciente</Link>
                    <Link to="/">Popular</Link>
                </div>
                <div className="containerCards">
                    <div className="card">
                        <div className="background">
                            <img src={imgCard1} alt=". . ." />
                        </div>
                        <div className="infoCard">
                            <div className="title">
                                <h3>La Ciudadela</h3>
                            </div>
                            <div className="description">
                                <p>Descubre las maravillas escondidas en los bosques de Estados Unidos.</p>
                            </div>
                            <div className="infoAuthor">
                                <div className="author">
                                    <div className="authorPhoto">
                                        <img src={person} alt=". . ." />
                                    </div>
                                    <div className="authorDetails">
                                        <p>David Jones</p>
                                        <p>May 6, 2020</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="background">
                            <img src={imgCard2} alt=". . ." />
                        </div>
                        <div className="infoCard">
                            <div className="title">
                                <h3>Space X</h3>
                            </div>
                            <div className="description">
                                <p>Elon Musk, un emprendedor con otra vision multimillonaria.</p>
                            </div>
                            <div className="infoAuthor">
                                <div className="author">
                                    <div className="authorPhoto">
                                        <img src={person} alt=". . ." />
                                    </div>
                                    <div className="authorDetails">
                                        <p>Lauren Murphy</p>
                                        <p>May 3, 2020</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}