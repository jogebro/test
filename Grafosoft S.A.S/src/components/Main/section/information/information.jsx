import React, {useState, useEffect} from "react";
import axios from "axios";
import "./style.css";

export default function Information(){
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
    )
}