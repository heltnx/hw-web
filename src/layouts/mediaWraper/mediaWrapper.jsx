// src/layouts/mediaWrapper/mediaWrapper.jsx

// src/layouts/mediaWrapper/mediaWrapper.jsx

import React from 'react';
import Video from '../../components/video/Video';
import './mediaWrapper.css';


const MediaWrapper = ({ mediaList }) => {
    return (
        <div className="videos-container">
            {mediaList.map((media, index) => (
                // Check if the media is a video or an image
                React.isValidElement(media) ? (
                    // If it's a React element (image), render it as is
                    <div key={index} className="imageContain">{media}</div>
                ) : (
                    // If it's a string (video URL), render the Video component
                    <Video key={index} url={media.media} alt={media.description} />
                )
            ))}
        </div>
    );
};



export default MediaWrapper;

