import React from 'react';
import images from '../../constants/images';
import './Hero.css';

const Hero = () => {
  return (
    <div className='app__hero'>
      <div className='app__hero-img'>
        <img src={images.drone} alt='drone' />
      </div>
      <div>
        <h1 className='app__hero-heading'>F-210</h1>
        <h3 className='app__hero-subheading'>
          "the fastest drone on the planet"
        </h3>
        <p className='app__hero-paragraph'>"the- the wirecutter"</p>
      </div>
    </div>
  );
};

export default Hero;
