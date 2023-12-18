import React from 'react';
import footerLogo from '../images/footerLogo.png'

const Footer = () => {
    return (
        <footer>
            <a href='/'>
                <img src={footerLogo}
                    alt="footer logo"height="200" width="120"/>
            </a>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address & Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
            
        </footer>
    )
}

export default Footer
