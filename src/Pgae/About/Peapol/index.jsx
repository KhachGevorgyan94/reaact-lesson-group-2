import React from "react";

export default function Peapol({person}){

    return <div className='G-flex'>
        {person.img ? <img src={person.img} alt="info"/> : ""}
        <div>
            <h2>{person.Name}</h2>
            <h3>{person.position}</h3>
            <p>{person.info}</p>
        </div>
    </div>
}