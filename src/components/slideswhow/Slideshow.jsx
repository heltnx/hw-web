// Slideshow.jsx
import React, { useState, useEffect } from 'react';
import './slideshow.css';

// Import des images du slideshow
import image1 from '../../assets/images/slideshow/argentbank.jpg';
import image2 from '../../assets/images/slideshow/kasa.jpg';
import image3 from '../../assets/images/slideshow/ohmyfood.jpg';
import image4 from '../../assets/images/slideshow/qwenta.jpg';

const Slideshow = ({ title }) => {
    const homeImages = [image1, image2, image3, image4];
    // État pour suivre l'index de l'image actuellement affichée
    const [currentIndex, setCurrentIndex] = useState(0);

    // Effet pour changer automatiquement d'image à intervalles réguliers
    useEffect(() => {
        const intervalId = setInterval(() => {
            goToNext();
        }, 2000); // Change d'image toutes les 2000 ms (2 secondes)

        // Nettoie la minuterie lors du démontage du composant
        return () => clearInterval(intervalId);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Ne s'exécute qu'une seule fois au montage

    // Fonction pour passer à l'image suivante
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % homeImages.length);
    };

    // Détermine s'il faut afficher la pagination (true si plus d'une image)
    const showPagination = homeImages.length > 1;

    // Rendu du composant Slideshow
    return (
        <div className="slideshow">
            {/* Map à travers les images du slideshow */}
            {homeImages.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`${title} - Slide ${index + 1}`}
                    className={`slideshow-image ${index === currentIndex ? 'active' : ''}`}
                />
            ))}
            {/* Affiche la pagination si plus d'une image */}
            {showPagination && (
                <div className="outilsPagination">
                    <div className="pagination">
                        {currentIndex + 1}/{homeImages.length}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Slideshow;
