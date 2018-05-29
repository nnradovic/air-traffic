import React from 'react';
import "./header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar">
                <div className="logo">
                <Link to={'/'}><img   src={require("../img/airplane.png")} alt=""></img></Link>

                </div>
                <div className="header">
                <p  >Air Traffic</p>

                </div>

           
        </nav>
    )
}

export default Header;