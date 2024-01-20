import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './competence.css';

const Competence = ({ nom, description, icone }) => {
    // État d'activité de la compétence
    const [isActive, setIsActive] = useState(false);

    // Fonction pour basculer l'état d'activité de la compétence
    const toggleDescription = () => {
        setIsActive(!isActive);
    };

    // Rendu du composant Competence
    return (
        <div className={`competence ${isActive ? 'active' : ''}`}>
            <div className="competence-content">
                {/* Lien vers la page Realisations avec tri sur 3 caractères du nom de la compétence */}
                <Link to={`/realisations#${nom.toLowerCase().substring(0, 3)}`} style={{ textDecoration: 'none' }}>
                    {/* Affiche le nom de la compétence et son icône */}
                    <span className="nom"><img src={icone} alt={nom} />{nom}</span>
                </Link>
                {/* Utilise la classe CSS en fonction de l'état d'activité et ajoute une classe pour la position de la flèche */}
                <div
                    onClick={toggleDescription}
                    className={`arrow ${isActive ? 'arrow-up' : 'arrow-down'} ${isActive ? 'arrow-up-active' : 'arrow-down-active'}`}
                ></div>
                {/* Affiche la description si la compétence est active */}
                {isActive && (
                    <div className="description">
                        {/* Map à travers les lignes de description et les affiche en tant que paragraphes */}
                        {description.map((descriptionLine, index) => (
                            <p key={index}>{descriptionLine}</p>
                        ))}
                        {/* Bouton pour ouvrir la page Realisations avec les éléments associés à la compétence */}
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
