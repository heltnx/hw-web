import React from 'react';
import Video from '../../components/video/Video';
import './mediaWrapper.css';


const MediaWrapper = ({ mediaList }) => {

    return (
        // Conteneur principal pour les vidéos et images
        <div className="videos-container">
            {/* Mapper à travers la liste de médias */}
            {mediaList.map((media, index) => (
                // Vérifier si le média est une image
                'image' === media.type ? (
                    // Si c'est un élément React (image), le rendre tel quel
                    <div key={index} className="imageContain">
                        <img
                            // Utiliser une URL différente pour les appareils mobiles si non l'url du fichier json
                            src={media.url}
                            alt={media.description}
                        />
                    </div>
                ) : (
                    // Si c'est une chaîne (URL vidéo), rendre le composant Video
                    <Video key={index} url={media.url} alt={media.description} />
                )
            ))}
        </div>
    );
};

// Exporter le composant MediaWrapper
export default MediaWrapper;
