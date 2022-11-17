import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "../../assets/images/Logo.png"
import Background from "../../assets/images/Header.jpg";

export default function Header(){
    return<header className='G-backgroundimg'  style={{backgroundImage:`url(${Background})`}}>
        <div className='G-container G-justify-between'>
            <div className='G-flex'>
                <img src={Logo} alt="logo"/>
                <div>
                    <h1>Simple House</h1>
                    <h6>new restaurant template</h6>
                </div>
            </div>
            <ul className='G-flex'>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </li>
            </ul>
        </div>
    </header>
}