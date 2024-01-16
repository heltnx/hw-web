// src/layouts/componentsList.js
import React, { useState } from 'react';
import Competence from '../../components/competence/Competence.jsx';
import competencesData from '../../competences.json';
import { Link } from 'react-router-dom';
import './competencesList.css';

const CompetencesList = () => {
  const [competencesActives, setCompetencesActives] = useState([]);

  const toggleCompetence = (nomCompetence) => {
    setCompetencesActives((prevCompetences) => {
      if (prevCompetences.includes(nomCompetence)) {
        return prevCompetences.filter((nom) => nom !== nomCompetence);
      } else {
        return [...prevCompetences, nomCompetence];
      }
    });
  };

  return (
    <div className="competencesList">
      {competencesData.competences.map((competence) => (
        <div key={competence.id}>
          {/* Bouton pour ouvrir la page Realisations avec les éléments associés */}
          <Link to={`/realisations#${competence.nom.toLowerCase().substring(0, 3)}`}>
            <button className='custom-button'>Voir les réalisations utilisant {competence.nom}</button>
          </Link>

          {/* Compétence correspondante */}
          <Competence
            nom={competence.nom}
            icone={competence.icone}
            description={competence.description}
            isActive={competencesActives.includes(competence.nom)}
            toggleDescription={() => toggleCompetence(competence.nom)}
            anchor={competence.nom}
          />
        </div>
      ))}
    </div>
  );
};

export default CompetencesList;
