import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = (props) => {
    return(
        <>
        <header className='header'>
            <section className='banner'>
                <h2>Little Lemon Reservation</h2>
                <h3>Chicago Location</h3>
            </section>
        </header>
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.submitForm}/>
        </>
    )
}

export default BookingPage