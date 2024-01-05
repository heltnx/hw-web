// Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import Button from '../../components/button/Button';


const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header >
            <div className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="divider"></div>
                <div className="container">
                    <div className="logo-container">
                        <img src="logo.png" alt="Logo" className="logo" />
                    </div>

                    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                        <div className="menu-icon" onClick={toggleMenu}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        <ul>
                            <li><NavLink to="/" exact activeclassName="active">Accueil</NavLink></li>
                            <li><NavLink to="/realisations" activeclassName="active">Réalisations</NavLink></li>
                            <li><NavLink to="/competences" activeclassName="active">Compétences</NavLink></li>

                            <Button>
                                <NavLink to="/contact" >Contact</NavLink>
                            </Button>
                        </ul>
                    </nav>

                </div>
            </div>
            <div className="header-divider-bottom"></div>
        </header>
    );
};

export default Header;