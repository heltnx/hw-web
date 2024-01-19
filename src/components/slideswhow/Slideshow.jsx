// Slideshow.jsx
import React, { useState, useEffect } from 'react';
import './slideshow.css';


import image1 from '../../assets/images/slideshow/argentbank.jpg';
import image2 from '../../assets/images/slideshow/kasa.jpg';
import image3 from '../../assets/images/slideshow/ohmyfood.jpg';
import image4 from '../../assets/images/slideshow/qwenta.jpg';

const Slideshow = ({ title }) => {
    const homeImages = [image1, image2, image3, image4];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            goToNext();
        }, 2000); // Change d'image toutes les 1000 ms (1 seconde)

        return () => clearInterval(intervalId); // Nettoie la minuterie lors du démontage du composant

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); //ne s'exécute qu'une seule fois au montage


    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % homeImages.length);
    };

    const showPagination = homeImages.length > 1;

    return (
        <div className="slideshow">
            {homeImages.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`${title} - Slide ${index + 1}`}
                    className={`slideshow-image ${index === currentIndex ? 'active' : ''}`}
                />
            ))}
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
