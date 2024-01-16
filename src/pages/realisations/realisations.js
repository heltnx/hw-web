
// Importation des composants nécessaires
import React from 'react';
import Layout from '../../layouts/Layout';
import VideoWrapper from '../../layouts/mediaWraper/mediaWrapper.jsx';
import realisationsData from '../../realisations.json';
import './realisations.css';

// Composant Realisations
const Realisations = () => {
    return (
        <Layout>
            <div className="realisations">
                <h1>Réalisations</h1>
                <div className="section_container">
                    {realisationsData.realisations.map((realisation) => (
                        <div key={realisation.id} >
                            <h2>{realisation.projectTitle}</h2>

                            {/* Utilisation de VideoWrapper pour afficher la liste de médias */}
                            <VideoWrapper mediaList={realisation.medias} />
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: realisation.description }} />
                            </div>
                            <div >
                                <p><a href={realisation.link} target='blank'>Voir le site :</a></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Realisations;
