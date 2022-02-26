import React from 'react';
import Canvas from '../../../components/Canvas';
import { heroDraw, heroInit } from '../../../components/data/canvas-data';
import BgSlideshow from './BgSlideshow';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__slideshow' style={{display: 'block'}}>
        <BgSlideshow />
        <div className='hero__slideshow--overlay'></div>
      </div>
      
      <div className='hero__display'>
        <div className='hero__display--foreground'>
          <h1 className='logo'>sHoT<span className='hero__blink'>_</span>Nika</h1>
        </div>
        <div className='hero__display--background'>
          <Canvas init={heroInit} draw={heroDraw} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
