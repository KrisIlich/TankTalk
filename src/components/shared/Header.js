import React, {useEffect, useRef, useState} from 'react';
import '../../assets/styles/Home.css';
import logoImage from '../../assets/images/logo.png';
import { Link } from 'react-router-dom'
import { useNavigate} from "react-router-dom";

const Header = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    }

    const handleMouseLeave = () => {
        setDropdownVisible(false)
    };

    useEffect(() => {
        const dropdown = dropdownRef.current;
        if (dropdown && dropdownVisible) {
            dropdown.addEventListener('mouseleave', handleMouseLeave);
        }
        return () => {
            if (dropdown) {
                dropdown.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [dropdownVisible]);



    return (
        <div className="home">
            <header className="home-header">
                <div className="logo-container">
                    <img src={logoImage} onClick={() => navigate(`/`)} alt="TankTalk Logo" className="logo-image"/>
                    <div className="logo-text" onClick={() => navigate(`/`)}> TankTalk</div>
                </div>

                {/*Header Navigation Buttons*/}
                <nav className="navigation">
                    <button onClick={() => navigate("/")}>Dashboard</button>
                    <button onClick={() => navigate("/tanktalkerai")}>Fishtank Assistant</button>
                    <button onClick={() => navigate("/")}>Fishipedia</button>
                    <button onClick={() => navigate("/")}>Community</button>
                    {/*<button onClick={() => navigate("/")}>Sign Up</button>
                    <button onClick={() => navigate("/login")}>Log in</button>*/}
                    <button className="cta" onClick={() => navigate("/login")}>Sign Up</button>
                    <button
                        className={`account ${dropdownVisible ? 'active' : ''}`}
                        onClick={toggleDropdown}
                    >☰</button>
                    {dropdownVisible && (
                        <div className="dropdown-menu" ref={dropdownRef} onClick={(e) => e.stopPropagation()}>
                            <div className="dropdown-menu-inner">
                            <Link to="/">Create Account</Link>
                            <Link to="/login">Log in</Link>
                            <Link to="/">Dashboard</Link>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </div>
    );
};

export default Header;