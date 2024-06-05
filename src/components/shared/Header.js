import React from 'react';
import '../../assets/styles/Home.css';
import logoImage from '../../assets/images/logo.png';
import { Link } from 'react-router-dom'
import { useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="home">
            {/* Header */}
            <header className="home-header">
                {/* Logo and Title */}
                <div className="logo-container">
                    <img src={logoImage} onClick={() => navigate(`/`)} alt="TankTalk Logo" className="logo-image"/>
                    <div className="logo-text" onClick={() => navigate(`/`)}> TankTalk</div>
                </div>

                {/*Header Navigation Buttons*/}
                <nav className="navigation">
                    <button onClick={() => navigate("/")}>Dashboard</button>
                    <button onClick={() => navigate("/tanktalkerai")}>Fishtank Assistant</button>
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