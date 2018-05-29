import { fetchAll } from './apiService';
import Flight from '../entites/entites';
import { BASELOGO } from '../shared/constants';

class FlightService {

    fetchFlights=(lat,lng) =>{
      return fetchAll(lat,lng)
      .then(flights => {
          return flights.acList.map(flight=>{
              return new Flight(flight)
          })

      })  
    }

    fetchSingleFlight = (icao) =>{
        return fetch(`http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?fIcoQ=${icao}`)
        .then(response => response.json() )
        .then(flight => new Flight(flight.acList[0]))
    }

   

   
    
       fetchLogo = (query) => {
           let url = BASELOGO + query;
           return fetch (url)
               .then(response => response.json())
       }
    
    
    
  
}

    
    export const flightService = new FlightService();