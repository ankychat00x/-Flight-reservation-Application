
import React from 'react';
 
class ConfirmReservation extends React.Component{
    render(){

        return(
            <div>
                <h1>Flight reservation is complete.Your ID is {this.props.match.params.reservationId}</h1>
            </div>
        )
    }
}

export default ConfirmReservation;