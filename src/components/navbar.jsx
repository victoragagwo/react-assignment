import React, { useState } from 'react';
import Logo from '../assets/logo.png'; // Assuming you have a logo image in the assets folder
import chevronDown from '../assets/chevron-down.png'; // Assuming you have a chevron down icon in the assets folder
import '../styling/navbar.css'; // Assuming you have a CSS file for styling the navbar

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

    return (
        <header id="myurls">
            <a href="#myurls">
                <img src={Logo} alt="Logo" className="logo" />
            </a>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className={`nav_links ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#myurls" style={{ color: "#0065FE" }}>My URLs</a></li>
                    <li><a href="#features" className="hov">Features <img src={chevronDown} alt="chevronDown" className="chevronDown" /></a></li>
                    <li><a href="#pricing" className="hov">Pricing</a></li>
                    <li><a href="#analytics" className="hov">Analytics</a></li>
                    <li><a href="#faqs" className="hov">FAQs</a></li>
                </ul>
                <div className="cta-container">
                    <a href="#" className="cta" style={{ color: "#0065FE" }}>Login</a>
                    <a href="#" className="cta-button"><button>Try for free</button></a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;