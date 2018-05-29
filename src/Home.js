import React, { Component} from 'react';
import { flightService} from './service/FlightService';
import { altitudeFilter} from './altitudeFilter';
import SingleRowFlight from './SingleRowFlight';
import './home.css'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: []
        }
    }


    componentWillMount() {

        navigator.geolocation.getCurrentPosition(this.position, this.showError)



    }

    position = (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        flightService.fetchFlights(lat, lng)
            .then(response => {
                console.log(response);
                response.sort(altitudeFilter)
                console.log(response);
                this.setState({
                    flights: response
                })
                setInterval(function (lat, lng) {
                    flightService.fetchFlights(lat, lng)
                        .then(flights => {
                            flights.sort(altitudeFilter)
                            refreshState(flights)
                        })
                }, 600000,lat, lng);
                const refreshState = (flights) => {
                    this.setState({
                        flights
                    });
                }


            })

    }


    showError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;
        }
    }

    render() {
        console.log(this.state.flights);
        return ( 
            
            <div className="container">
                  <div class="col-12">
                  <ul>
                      <li>Flight Bearing </li>
                      <li>Flight Number</li>
                      <li>Flight Altitude</li>
                 </ul>
                {this.state.flights.map(flight=><SingleRowFlight flight={flight} key={flight.id}/>)}
                  </div>
        
          
            </div>
          
       
        )
    }
}



export default Home;