import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
    return(
        <div className='confirmationArea'>
            <div className='confirmationBox'>
                <p>Reservation Confirmed!</p>
                <Link to = "/"><button>Ok!</button></Link>
            </div>
            
        </div>
    )
}

export default ConfirmationPage