import React from 'react';
import Video from '../../components/video/Video';
import video1 from '../../assets/images/gabari-tab.mp4';
import video2 from '../../assets/images/gabari-ordi.mp4';
import video3 from '../../assets/images/gabari-mobile.mp4';

const VideoWrapper = () => {
    const videos = [video1, video2, video3];

    return (
        <div className="videos-container">
            {videos.map((video, index) => (
                <Video key={index} url={video} />
            ))}
        </div>
    );
};

export default VideoWrapper;