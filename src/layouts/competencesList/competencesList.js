// src/layouts/componentsList.js
import React, { useState } from 'react';
import Competence from '../../components/competence/Competence.jsx';
import competencesData from '../../competences.json';
import './competencesList.css';

const CompetencesList = () => {
  // Suivre les compétences actives
  const [competencesActives, setCompetencesActives] = useState([]);

  // Fonction pour basculer l'état actif d'une compétence
  const toggleCompetence = (nomCompetence) => {
    setCompetencesActives((prevCompetences) => {
      if (prevCompetences.includes(nomCompetence)) {
        // Si la compétence est déjà active, la retirer
        return prevCompetences.filter((nom) => nom !== nomCompetence);
      } else {
        // Si la compétence n'est pas active, l'ajouter
        return [...prevCompetences, nomCompetence];
      }
    });
  };

  // Rendu du composant CompetencesList
  return (
    <div className="competencesList">
      {/* Parcourir competencesData pour rendre les composants Competence */}
      {competencesData.competences.map((competence) => (
        <div key={competence.id}>

          {/* Composant Competence rendu de manière individuel */}
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
