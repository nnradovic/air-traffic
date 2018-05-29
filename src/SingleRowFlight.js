import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import './SingleRowFlight.css'

const SingleRowFlight = ({flight}) => {
    console.log(flight.icao);
    
     
    return(
        <Fragment>
                    <Link  to={`/singleFlight/${flight.icao}`}>
                  <ul>
                      <li>{(flight.bearing === 'left')? <img id="airplaneID" className="airplane" src={require("../src/img/airplaneleft.png")}/> :  <img  id="airplaneID" className="airplane" src={require("../src/img/airplaneright.png")}/>  } </li>
                      <li>{flight.flightNumber}</li>
                      <li>{flight.altitude}</li>
                   
                     
                 </ul>
                 </Link>
        </Fragment>
      
    )
}


export default SingleRowFlight;
