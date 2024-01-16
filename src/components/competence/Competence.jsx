// src/components/competence/Competence.jsx
// Importez useState
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './competence.css';

const Competence = ({ nom, description }) => {
    // Utilisez useState pour gérer l'état de la compétence active
    const [isActive, setIsActive] = useState(false);

    // Fonction pour basculer l'état de la compétence active
    const toggleDescription = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`competence ${isActive ? 'active' : ''}`}>
            <div className="competence-content">
                <Link to={`/realisations#${nom.toLowerCase().substring(0, 3)}`} style={{ textDecoration: 'none' }}>
                    <span className="nom">{nom}</span>
                </Link>

                {isActive && (
                    <div className="description">
                        {description.map((descriptionLine, index) => (
                            <p key={index}>{descriptionLine}</p>
                        ))}
                    </div>
                )}
            </div>

            {/* Utilisez la classe CSS en fonction de l'état de l'activité */}
            <div onClick={toggleDescription} className={`arrow-button ${isActive ? 'arrow-up' : 'arrow-down'} detail-button `}></div>
        </div>
    );
};

export default Competence;
