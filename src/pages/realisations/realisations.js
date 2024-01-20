// src/pages/realisations.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import MediaWrapper from '../../layouts/mediaWraper/mediaWrapper.jsx';
import realisationsData from '../../realisations.json';
import './realisations.css';

const Realisations = () => {
    const [competencesActives, setCompetencesActives] = useState([]);
    const location = useLocation();

    useEffect(() => {
        // Extraire l'ancrage de l'URL et mettre à jour les compétences actives en conséquence
        const anchor = location.hash.substring(1);
        setCompetencesActives([anchor]);
    }, [location.hash]);

    // Fonction pour déterminer si une réalisation est ciblée en fonction des compétences actives
    const isRealisationTargeted = (realisation) => {
        if (competencesActives.length === 0) {
            // Aucune compétence active, toutes les réalisations sont ciblées
            return true;
        }

        // Vérifiez si au moins une compétence active correspond à l'ancrage de la réalisation
        const realisationAnchor = realisation.anchor.toLowerCase(); // Convertir en minuscules pour une correspondance insensible à la casse
        return competencesActives.some((nom) => realisationAnchor.includes(nom.toLowerCase().substring(0, 3)));
    };

    return (
        <Layout>
            <div className="realisations">
                <h1>Réalisations</h1>
                <div className="section_container">
                    {realisationsData.realisations.map((realisation) => (
                        isRealisationTargeted(realisation) && (
                            <div key={realisation.id}>
                                <h2 dangerouslySetInnerHTML={{ __html: realisation.projectTitle }} />
                                <MediaWrapper mediaList={realisation.medias} />
                                <div>
                                    {realisation.description && realisation.description.map((desc, index) => (
                                        <p key={index} dangerouslySetInnerHTML={{ __html: desc }} />
                                    ))}
                                </div>

                                <div className="link">
                                    {realisation.link && (
                                        <p><a href={realisation.link} target='blank'>Voir le site</a></p>
                                    )}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Realisations;
