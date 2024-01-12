import React from 'react';
import Layout from '../../layouts/Layout';
import './realisations.css'
import VideoWrapper from '../../layouts/video-wraper/VideoWrapper.jsx';
import video1 from '../../assets/images/gabari-tab.mp4';
import video2 from '../../assets/images/gabari-ordi.mp4';
import video3 from '../../assets/images/gabari-mobile.mp4';
import video4 from '../../assets/images/ohmyfood.mp4'

const Realisations = () => {

    const videosSection1 = [video1, video2, video3];
    const videosSection2 = [video4];

    return (
        <Layout >
            <div className="realisations">
                <h1>Réalisations</h1>
                <div className="section_container">

                    <h2>Création de la page d'accueil d'une agence de voyage avec <nobr> <b>HTML</b> &amp; <b>CSS</b></nobr></h2>

                    <VideoWrapper videos={videosSection1} />

                    <div >
                        <p>
                            Implémenter une interface <strong >"responsive"</strong> avec <nobr><strong >HTML</strong> et <strong>CSS</strong></nobr> <br></br>
                            Intégrer du contenu <strong>conformément à une maquette</strong> avec <nobr><strong >HTML</strong> et <strong >CSS</strong></nobr>
                        </p>
                    </div>
                </div>
                <div className="section_container">

                    <h2>Améliorez l'interface d'un site mobile avec des animations <b>CSS</b></h2>

                    <VideoWrapper videos={videosSection2} />

                    <div className='container'>
                        <p>
                            Intégrer une <strong>maquette en mobile-first</strong></p>
                        <p>Mettre en œuvre des animations <strong>CSS</strong></p>
                        <p>Versionner son projet avec <strong><nobr>Git et Github</nobr></strong><br></br>
                            utiliser<strong>Sass </strong>.
                        </p>
                    </div>
                </div>

            </div>
        </Layout >
    );
};

export default Realisations;