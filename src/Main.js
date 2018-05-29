import React from 'react';
import './Main.css'
import { Route } from 'react-router-dom';
import Home from './Home';
import SingleFlight from './SingleFlight';



const Main = () => {
    return (
        
         <div className="holder">
        <Route exact path="/" component={Home}/>
        <Route  path="/singleFlight/:id" component={SingleFlight}/>
         </div>

    ) 
}
 
export default Main; 