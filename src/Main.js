import React from 'react';
import './Main.css'

const Main = () => {
    return (
        
         <div className="container-fluid">
        <Route exacth path="/" component={Home}/>
        <Route exacth path="/SingleFlight" component={singleFlight}/>
         </div>

    ) 
}
 
export default Main; 