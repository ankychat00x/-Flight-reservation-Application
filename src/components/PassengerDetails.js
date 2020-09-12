
import React from 'react';
import axios from 'axios';

class PassengerDetails extends React.Component{

    state = {}
    componentWillMount(){

        axios.get("http://localhost:8080/flightservices/flights/"+this.props.match.params.flightId).then
        (res=>{
            this.setState(res.data)
        })
    }

    handleSubmit(event){

        event.preventDefault();
        const data = {
            flightId : this.props.match.params.flightId,
            passengerFirstName : this.passengerFirstName,
            passengerLastName : this.passengerLastName,
            passengerMiddleName : this.passengerMiddleName,
            passengerEmail : this.passengerEmail,
            passengerPhone : this.passengerphone,
            cardNumber : this.cardNumber,
            expirationDate : this.expiryDate,
            securityCode : this.securityCode
        }
        axios.post("http://localhost:8080/flightservices/reservations/",data).then(res=>{

            this.props.history.push('/confirmReservation/'+res.data.id)
        })
    }

    render(){

        return(
            <div>
                <h2>Review Reservation</h2>
                <h2>Flight Details:</h2>
                Airline {this.state.operatingAirlines}<br/>
                Departure City {this.state.departureCity}<br/>
                Arrival city {this.state.arrivalCity}<br/>
                Departure date {this.state.dateOfDeparture}<br/>

                <h2>Passenger Details:</h2>
                First Name: <input type="text" name="passengerFirstName" onChange={(e)=>{this.passengerFirstName=e.target.value}}/><br/>
                Last Name: <input type="text" name="passengerLastName" onChange={(e)=>{this.passengerLastName=e.target.value}}/><br/>
                Middle Name: <input type="text" name="passengerMiddleName" onChange={(e)=>{this.passengerMiddleName=e.target.value}}/><br/>
                Email: <input type="text" name="passengerEmail" onChange={(e)=>{this.passengerEmail=e.target.value}}/><br/>
                Phone: <input type="text" name="passengerphone" onChange={(e)=>{this.passengerphone=e.target.value}}/><br/>

                <h2>Card Details</h2>
                Card Number: <input type="text" name="cardNumber" onChange={(e)=>{this.cardNumber=e.target.value}}/><br/>
                Expiry Date: <input type="text" name="expiryDate" onChange={(e)=>{this.expiryDate=e.target.value}}/><br/>
                Security Code: <input type="text" name="securityCode" onChange={(e)=>{this.securityCode=e.target.value}}/><br/>
                <button onClick={this.handleSubmit.bind(this)}>Confirm</button>
            </div>
        )
    }
}

export default PassengerDetails;