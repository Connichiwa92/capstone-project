import React from 'react';
import { Link } from 'react-router-dom';
import headerPicture from '../images/headerPicture.jpg';
// import Booking from './components/Booking';

const Header = () => {
    return (
        <header className='header'>
            {/* <section> */}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking"><button>Reserve Table</button></Link>
                </div>
                <div className='banner-img'>
                    <img src={headerPicture} alt="header picture"/>
                </div>
            {/* </section> */}
        </header>
    )
}

export default Header;
