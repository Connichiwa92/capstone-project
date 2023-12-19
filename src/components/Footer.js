import React from 'react';
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
            </section>
            
            
        </footer>
    )
}

export default Footer
