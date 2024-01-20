import React from 'react';
import Video from '../../components/video/Video';
import './mediaWrapper.css';

const MediaWrapper = ({ mediaList }) => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    return (
        <div className="videos-container">
            {mediaList.map((media, index) => (
                // Check if the media is a video or an image
                'image' === media.type ? (
                    // If it's a React element (image), render it as is
                    <div key={index} className="imageContain">
                        <img
                            src={isMobile ? `./assets/images/mobile/${media.url.split('/').pop()}` : media.url}
                            alt={media.description}
                        />
                    </div>
                ) : (
                    // If it's a string (video URL), render the Video component
                    <Video key={index} url={media.url} alt={media.description} />
                )
            ))}
        </div>
    );
};

export default MediaWrapper;

