import React from 'react';
import '../../assets/styles/Home.css';
import logoImage from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className="home">
            {/* Header */}
            <header className="home-header">
                {/* Logo and Title */}
                <div className="logo-container">
                    <img src={logoImage} alt="TankTalk Logo" className="logo-image"/>
                    <div className="logo-text"> TankTalk</div>
                </div>

                {/*Header Navigation Buttons*/}
                <nav className="navigation">
                    <button>Dashboard</button>
                    <button>TankTalker AI</button>
                    <button>Fishipedia</button>
                    <button>Community</button>
                    <button>Sign Up</button>
                    <button>Login</button>
                    <button className="cta">Get Started</button>
                    <button className="account">☰</button>
                </nav>
            </header>
        </div>
    );
};

export default Header;