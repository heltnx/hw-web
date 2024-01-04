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
        <div className='header-component'>
            <div className="header-divider"></div>
            <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
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
                            <li><NavLink to="/" exact activeClassName="active">Accueil</NavLink></li>
                            <li><NavLink to="/realisations" activeClassName="active">Réalisations</NavLink></li>
                            <li><NavLink to="/competences" activeClassName="active">Compétences</NavLink></li>

                            <Button>
                                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                            </Button>

                        </ul>
                    </nav>
                </div>
            </header>
            <div className="header-divider-bottom"></div>
            <div className="image-container"></div>
        </div>
    );
};

export default Header;