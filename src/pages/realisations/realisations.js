import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import MediaWrapper from '../../layouts/mediaWraper/mediaWrapper.jsx';
import realisationsData from '../../realisations.json';
import './realisations.css';

const Realisations = () => {
    // État local pour stocker les compétences actives basées sur l'ancrage de l'URL.
    const [competencesActives, setCompetencesActives] = useState([]);

    // obtenir l'emplacement actuel
    const location = useLocation();

    useEffect(() => {
        // Extraction de l'ancrage de l'URL actuelle.
        const anchor = location.hash.substring(1);

        // Mise à jour des compétences actives avec l'ancrage extrait.
        setCompetencesActives([anchor]);
    }, [location.hash]);

    // Fonction pour déterminer si une réalisation est ciblée en fonction des compétences actives.
    const isRealisationTargeted = (realisation) => {
        // Si aucune compétence active, toutes les réalisations sont ciblées.
        if (competencesActives.length === 0) {
            return true;
        }

        // Convertir l'ancrage de la réalisation en minuscules
        const realisationAnchor = realisation.anchor.toLowerCase();
        // Vérifier si au moins une compétence active correspond aux trois premiers caractères de l'ancrage
        return competencesActives.some((nom) => realisationAnchor.includes(nom.toLowerCase().substring(0, 3)));
    };

    // Rendu de la page des réalisations.
    return (
        <Layout>

            <div className="realisations">
                <h1>Réalisations</h1>

                <div className="section_container">
                    {/* Mapper les réalisations et les afficher si elles sont ciblées. */}
                    {realisationsData.realisations.map((realisation) => (
                        isRealisationTargeted(realisation) && (
                            <div key={realisation.id}>
                                {/* Titre de la réalisation (HTML autorisé). */}
                                <h2 dangerouslySetInnerHTML={{ __html: realisation.projectTitle }} />

                                {/* Composant pour afficher la liste des réalisation. */}
                                <MediaWrapper mediaList={realisation.medias} />

                                {/* Description (HTML autorisé). */}
                                <div>
                                    {realisation.description && realisation.description.map((desc, index) => (
                                        <p key={index} dangerouslySetInnerHTML={{ __html: desc }} />
                                    ))}
                                </div>

                                {/* Lien vers le site de la réalisation (si disponible). */}
                                <div className="link">
                                    {realisation.link && (
                                        <p><a href={realisation.link} target='_blank' rel='noopener noreferrer'>Voir le site</a></p>
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
