import React from 'react';
import Layout from '../../layouts/Layout';
import './realisations.css'
import VideoWrapper from '../../layouts/video-wraper/VideoWrapper.jsx';

const Realisations = () => {
    return (
        <Layout >
            <div className="realisations">
                <h1>Réalisations</h1>

                <div className="video_container">
                    <h2>Création de la page d'accueil d'une agence de voyage avec <b>HTML</b> &amp; <b>CSS</b></h2>
                    <VideoWrapper />
                    <div className='container'>
                        <p>
                            Implémenter une interface <strong className='highlight'>"responsive"</strong> avec <strong className='highlight'>HTML</strong> et <strong className='highlight'>CSS</strong> <br></br>
                            Intégrer du contenu <strong className='highlight'>conformément à une maquette</strong> avec <strong className='highlight'>HTML</strong> et <strong className='highlight'>CSS</strong>
                        </p>

                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Realisations;