import React from 'react';
import './HeroVideo.scss';

const HeroVideo = () => {

  return (
    <div className='video-section'>
      <video autoPlay muted loop className='video'>
        <source src="https://res.cloudinary.com/dv9ax00l4/video/upload/v1721331878/landing-video_gud5vg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );

}

export default HeroVideo;