import React from 'react';
import './competence.css';

const Competence = ({ nom, icone, description, isActive, toggleDescription }) => (
    <div className={`competence ${isActive ? 'active' : ''}`} onClick={toggleDescription}>
        <img src={icone} alt={nom} className="icone" />
        <span className="nom">{nom}</span>
        {isActive && (
            <div className="description">
                {description.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        )}
    </div>
);

export default Competence;
