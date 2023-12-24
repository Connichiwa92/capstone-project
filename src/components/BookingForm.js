import React, { useState } from 'react';
import restaurantSeating from '../images/restaurantsetting.png';

const BookingForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [comments, setComments] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // validate(value);
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return(
        <>
        <header className="bookingForm">
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/* first name */}
                        <div>
                            <label htmlFor='bookingFirstName'>First Name:</label>
                            <input id='bookingFirstName' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                        </div>

                        {/* last name */}
                        <div>
                            <label htmlFor='bookingLastName'>Last Name:</label>
                            <input id='bookingLastName' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                        </div>

                        {/* phone number */}
                        <div>
                            <label htmlFor='bookingPhoneNumber'>Phone number:</label>
                            <input id='bookingPhoneNumber' type='number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
                        </div>

                        {/* booking date */}
                        <div>
                            <label htmlFor='bookingDate'>Date:</label>
                            <input id='bookingDate' type='date' value={date} onChange={(e) => handleChange(e.target.value)} required/>
                        </div>

                        {/* booking time */}
                        <div>
                            <label htmlFor='bookingTime'>Time:</label>
                            <select id='bookingTime' value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value=""> Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>

                        {/* booking guest */}
                        <div>
                            <label htmlFor='bookingGuests'>Number of Guests:</label>
                            <select id='bookingGuests' value={guests} onChange={(e) => setGuests(e.target.value)}>
                                <option>1 Guest</option>
                                <option>2 Guests</option>
                                <option>3 Guests</option>
                                <option>4 Guests</option>
                            </select>

                        </div>

                        {/* occasion */}
                        <div>
                            <label htmlFor='bookingOccasion'>Occasion:</label>
                            <select id='bookingOccasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Occasion</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Engagement</option>
                            </select>
                        </div>

                        {/* comments */}
                        <div>
                            <label htmlFor='bookingComments'>Comments:</label>
                            <input id='bookingComments' type='text' value={comments} onChange={(e) => setComments(e.target.value)}/>
                        </div>
                        <div id="seating">
                            <img src={restaurantSeating} alt="seating chart"/>
                        </div>
                        <div>
                            <button type='submit' id='formButton' aria-label='On Click'>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
        </>
    )
}

export default BookingForm