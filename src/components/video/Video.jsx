import React from 'react';
import ReactPlayer from 'react-player';
import './video.css';

const Video = ({ url }) => {
  return (
    <div className="video-wrapper">
      <ReactPlayer url={url} controls width="100%" height="100%" />
    </div>
  );
};

export default Video;