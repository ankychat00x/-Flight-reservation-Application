import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import FindFlights from './components/FindFlights';
import DisplayFlights from './components/DisplayFlights';
import PassengerDetails from './components/PassengerDetails';
import ConfirmReservation from './components/ConfirmReservation';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" component={FindFlights}/>
            <Route exact path="/displayFlights/:from/:to/:date" component={DisplayFlights}/>
            <Route exact path="/passengerDetails/:flightId" component={PassengerDetails}/>
            <Route exact path="/confirmReservation/:reservationId" component={ConfirmReservation}/>
        </Switch>
    </div>
  );
}

export default App;
