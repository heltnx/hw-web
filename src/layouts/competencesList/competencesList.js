// src/components/CompetencesList.js
import React, { useState } from 'react';
import Competence from '../../components/competence/Competence.jsx';
import competencesData from '../../competences.json';
import './competencesList.css'

const CompetencesList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="competencesList">
      {competencesData.competences.map((competence, index) => (
        <Competence
          key={index}
          isActive={index === activeIndex}
          toggleDescription={() => toggleDescription(index)}
          {...competence}
        />
      ))}
    </div>
  );
};

export default CompetencesList;

