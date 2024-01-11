import React from 'react';
import Video from '../../components/video/Video';

const VideoWrapper = ({ videos }) => {
    return (
        <div className="videos-container">
            {videos.map((video, index) => (
                <Video key={index} url={video} />
            ))}
        </div>
    );
};

export default VideoWrapper;
