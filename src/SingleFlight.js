import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { flightService } from '../src/service/FlightService';
import "./singleFlight.css"

class SingleFlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlightLoaded: false,
               isLogoLoaded: false,
            flight: null || "NO FLIGHT LOADED",
               logoURL: "" || "NO LOGO"
        }

    }

    componentDidMount() {
       
        flightService.fetchSingleFlight(this.props.match.params.id)
            .then(flight => {
                console.log(flight);

                   flightService.fetchLogo(flight.logo.split(" ").join("%20"))
                       .then(response => {
                           if (response.length === 0) {
                              flightService.fetchLogo(flight.logo.split(" ")[0])
                                   .then(response => {
                                    if (response.length === 0) {
                                       this.setState({
                                           logoURL: response[0].logo,
                                           isLogoLoaded: true
                                        })
                                       }else{
                                        
                                        this.setState({
                                          logoURL: "data:image/png;base64,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",
                                           isLogoLoaded: true
                                        })
                                       }
                                   })
                           } else {
                               this.setState({
                                   logoURL: response[0].logo,
                                   isLogoLoaded: true
                               })
                           }
                   })
                this.setState({
                    flight,
                    isFlightLoaded: true
                })

            })

    }

    render() {
      
        if (!this.state.isFlightLoaded && !this.state.isLogoLoaded) {
       
            return  <img id="loader" src={require("../src/img/loader.gif")} alt="Card image cap" />
        }

        return (

            <Fragment>
            
            <div className="singleflight col-6 offset-3" >
                <img id="logo" src={this.state.logoURL} alt="Card image cap" />
               
                    <h5 >Airplane Model</h5>
                    <p >{this.state.flight.airplaneModel}</p>
                    <h5 >Flight Number</h5>
                    <p >{this.state.flight.icao}</p>
                    <h5 >Flight Start</h5>
                    <p >{this.state.flight.flightStart}</p>
                    <h5 >Flight End</h5>
                    <p >{this.state.flight.flightEnd}</p>
                    <Link   className="btn btn-danger" to={`/`}>Back to List</Link>
                </div>
            
            </Fragment>    
       );
    }
}

export default SingleFlight;