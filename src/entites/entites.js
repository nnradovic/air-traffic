class Flight {
    constructor(flight){
        this.id = flight.Id;
        this.bearing =  parseInt(flight.Brng)>180? "left":"right";
        this.altitude = flight.Alt;    
        this.airplaneModel = flight.Mdl;
        this.flightStart =  flight.From || 'unknown';
        this.flightEnd = flight.To || 'unknown';
        this.logo = flight.Op
        this.icao = flight.Icao;

    }
}

export default Flight;