import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './competence.css';

const Competence = ({ nom, description, icone }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleDescription = () => {
        setIsActive(!isActive);
    };

    return (

        <div className={`competence ${isActive ? 'active' : ''}`}>
            <div className="competence-content">
                <Link to={`/realisations#${nom.toLowerCase().substring(0, 3)}`} style={{ textDecoration: 'none' }}>
                    <span className="nom"><img src={icone} alt={nom} />{nom}</span>
                </Link>
                {/* Utilisez la classe CSS en fonction de l'état de l'activité et ajoutez une classe pour la position */}
                <div
                    onClick={toggleDescription}
                    className={`arrow ${isActive ? 'arrow-up' : 'arrow-down'} ${isActive ? 'arrow-up-active' : 'arrow-down-active'}`}
                ></div>
                {isActive && (
                    <div className="description">
                        {description.map((descriptionLine, index) => (
                            <p key={index}>{descriptionLine}</p>
                        ))}

                        {/* Bouton pour ouvrir la page Realisations avec les éléments associés */}
                        <Link to={`/realisations#${nom.toLowerCase().substring(0, 3)}`}>
                            <button className='look-button'>Voir mes réalisations utilisant {nom}</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Competence;

