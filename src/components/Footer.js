import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../images/footerLogo.png'
import marioAndAdrian from '../images/Mario and Adrian b.jpg';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='about-us-description'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Family owned restaurant located in the heart of Chicago</p>
                </div>
                <div className='footer-img'>
                    <img src ={marioAndAdrian} alt="owner picture" height='300vh'/>
                </div>
            </section>
            <section>
                <a href='/'>
                    <img src={footerLogo}
                        alt="footer logo"height="200" width="120"/>
                </a>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/Booking">Reservations</Link></li>
                        <li><Link to="/">Order Online</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: 111 Lemon Road, Chicago</li>
                        <li>Phone Number: +1 312-123-1234</li>
                        <li>Email: littlelemon@restaurants.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer
