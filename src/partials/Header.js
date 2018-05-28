import React from 'react';
import "./header.css"


const Header = () => {
    return (
        <nav className="navbar">
           
                <img  className="logo" src={require("../img/airplane.png")} alt=""></img>
                <p className="" >Air Traffic</p>
           
        </nav>
    )
}

export default Header;