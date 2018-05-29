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
            flight: null,
               logoURL: ""
        }

    }

    componentDidMount() {
        console.log(this.props.match.params.id);

        flightService.fetchSingleFlight(this.props.match.params.id)
            .then(flight => {
                console.log(flight);

                   flightService.fetchLogo(flight.logo.split(" ").join("%20"))
                       .then(response => {
                           if (response.length === 0) {
                              flightService.fetchLogo(flight.logo.split(" ")[0])
                                   .then(response => {
                                       this.setState({
                                           logoURL: response[0].logo,
                                           isLogoLoaded: true
                                       })
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
                    <p >{this.state.flight.flightNumber}</p>
                    <h5 >Flight Start</h5>
                    <p >{this.state.flight.flightStart}</p>
                    <h5 >Flight End</h5>
                    <p >{this.state.flight.flightEnd}</p>
                    <Link  className="btn btn-danger" to={`/`}>Back to List</Link>
                </div>
            
            </Fragment>    
       );
    }
}

export default SingleFlight;