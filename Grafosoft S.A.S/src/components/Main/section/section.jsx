import React, {useState, useEffect} from "react";
import img1 from "../../../assets/womanBook.svg";
import img2 from "../../../assets/womanBook2.svg";
import person from "../../../assets/person.jpg";
import imgCard1 from "../../../assets/plant.jpg";
import imgCard2 from "../../../assets/space.jpg";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Section(){
    const [authors, setAuthors] = useState([]);

    let authors3 = []

    useEffect( ()=>{
        async function getData(){
            await axios.get("https://rickandmortyapi.com/api/character")
            .then((response)=>{
                setAuthors(response.data.results)
            }).catch((err)=>{
            console.error("ha ocurrido un error", err);
            })
        }getData()
    },[]);

    if(authors.length > 0){
        for (let i = 0; i < 3; i++) {
        authors3.push(authors[i])      
        }
    }

    return(
        <div className="container">
            <div className="main-content">
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
                <div className="information">
                    <div className="first">
                        <div className="statistics">
                            <div className="infoStadistics">
                                <div>
                                    <p>Libreria</p>
                                    <p>124</p>
                                </div>
                            </div>
                            <div className="infoStadistics">
                                <div>
                                    <p>Me Gusta</p>
                                    <p>155 k</p>
                                </div>
                            </div>
                            <div className="infoStadistics">
                                <div>
                                    <p>Lectores</p>
                                    <p>8 k</p>
                                </div>
                            </div>
                            <div className="infoStadistics">
                                <div>
                                    <p>Opiniones</p>
                                    <p>163 k</p>
                                </div>
                            </div>
                        </div>
                        <div className="authors">
                            <div className="nav">
                                <h2>Autores</h2>
                                <button>Ver Todo</button>
                            </div>
                            <div className="containerAuthors">
                                {authors3.map((author)=>(
                                <div key={author.id} className="infoAuthor">
                                    <div className="author">
                                        <div className="authorPhoto">
                                            <img src={author.image} alt=". . ." />
                                        </div>
                                        <div className="authorDetails">
                                            <p>{author.name}</p>
                                            <p>{author.species}</p>
                                        </div>
                                    </div>
                                    <div className="readers">
                                        <p>Lectores</p>
                                        <p>143 k</p>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="last">
                        <div className="nav">
                            <h2>Reciente</h2>
                            <button>Ver Todo</button>
                        </div>
                        <div className="containerRecents">
                            <div className="recent">
                                <div className="description">
                                    <p><span className="strong">Victoria Evans</span> ha comentado en "La Ciudadela"</p>
                                </div>
                                <div className="date">
                                    <p>May 7</p>
                                </div>
                            </div>
                            <div className="recent">
                                <div className="description">
                                    <p><span className="strong">Ethan Williams</span> ha comenzado a seguirte</p>
                                </div>
                                <div className="date">
                                    <p>May 5</p>
                                </div>
                            </div>
                            <div className="recent">
                                <div className="description">
                                    <p><span className="strong">Nathan Fox</span> le ha gustado "Inolvidable"</p>
                                </div>
                                <div className="date">
                                    <p>May 1</p>
                                </div>
                            </div>
                            <div className="recent">
                                <div className="description">
                                    <p><span className="strong">Megan Walsh</span> ha comenzado a seguirte</p>
                                </div>
                                <div className="date">
                                    <p>Apr 29</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            </div>
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
        </div>
    )
}