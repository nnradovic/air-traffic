import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './SingleRowFlight.css'



const SingleRowFlight = ({ flight }) => {
    


    return (
        <Fragment>

            <Link id="single" to={`/singleFlight/${flight.icao}`}>
                <ul className="flight">
                    <li>{(flight.bearing === 'left') ? <img id="airplaneID" className="airplane" src={require("../src/img/airplaneleft.png")} /> : <img id="airplaneID" className="airplane" src={require("../src/img/airplaneright.png")} />} </li>
                    <li><span>{flight.icao}</span></li>
                    <li>{flight.altitude}</li>


                </ul>
            </Link>
        </Fragment>

    )
}


export default SingleRowFlight;
