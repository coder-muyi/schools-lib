import React from 'react';
import { Zoom } from 'react-slideshow-image';
import '../slideshow_styles.css';

const BgSlideshow = () => {
  const images = [
    './src/pages/homepage/images/slide_image1.jpeg',
    './src/pages/homepage/images/slide_image2.jpeg',
    './src/pages/homepage/images/slide_image3.jpeg',
    './src/pages/homepage/images/slide_image4.jpeg',
    './src/pages/homepage/images/slide_image5.jpeg',
    './src/pages/homepage/images/slide_image6.jpeg',
    './src/pages/homepage/images/slide_image7.jpeg',
  ];
  
  const zoomInProperties = {
    scale: 1.4,
    duration: 2500,
    transitionDuration: 2000,
    autoPlay: true,
    arrows: false,
    pauseOnHover: false,
  }
  
  return (
    <div style={{}} className='hero__zoom'>
      <Zoom {...zoomInProperties} cssClass='hero__zoom'>
        {images.map((src, index) => (
          <div key={index} style={{width: "inherit", height: 'inherit'}}>
            <img style={{ objectFit: "cover", height: "34rem", width: '100%' }} src={src} />
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default BgSlideshow;
