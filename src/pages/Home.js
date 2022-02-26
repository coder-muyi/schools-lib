import React, { useEffect, useRef } from 'react';
import Canvas from '../components/Canvas';
import { heroDraw, heroInit } from '../components/data/canvas-data';
import '../styles/Home.css';

import { Zoom } from 'react-slideshow-image';
import './slideshow_styles.css';

const Slideshow = () => {
  const images = [
    './src/images/homepage/slide_image1.jpeg',
    './src/images/homepage/slide_image2.jpeg',
    './src/images/homepage/slide_image3.jpeg',
    './src/images/homepage/slide_image4.jpeg',
  ];
  
  const zoomInProperties = {
    scale: 1.4,
    duration: 2500,
    transitionDuration: 2000,
    autoPlay: true,
    arrows: false
  }
  return (
    <div style={{}} className='hero__zoom'>
      <Zoom {...zoomInProperties} cssClass='hero__zoom'>
        {images.map((each, index) => (
          <div key={index} style={{width: "inherit", height: 'inherit'}}>
            <img style={{ objectFit: "cover", height: "34rem", width: '100%' }} src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  )
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__carousel' style={{display: 'block'}}>
        <Slideshow />
        <div className='slideshow-overlay'></div>
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

const Home = () => {
  const boxContainerRef = useRef(null);
  
  useEffect(() => {
    const boxContainer = boxContainerRef.current;
    let scrollElements = [];
    for (let el of boxContainer.children) {
      scrollElements.push(el)
    }

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
    
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };
    
    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top;
    
      return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
      );
    };
    
    const displayScrollElement = (element) => element.classList.add("scrolled");
    
    const hideScrollElement = (element) =>  element.classList.remove("scrolled");
    
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el)
        }
      })
    }
    
    window.addEventListener("scroll", () => {
      handleScrollAnimation();
    });

  }, []);

  return (
    <div className='p-homepage'>
      <Hero />
      <main>
        <section className='home__section home__section-1'>
          <h2 style={{color: 'white'}}>Take advantage of our platform</h2>
          <div className='home__boxes' ref={boxContainerRef}>  
            <div className='home__box scrolled'>
              <h3>For fun</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='home__box'>
              <h3>For students</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'' incididunt</p>
            </div>
            <div className='home__box'>
              <h3>For parents</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            </div>
          </div>
        </section>
        
        <section className='home__section home__section-2'>
          <h2>Suitable for professionals</h2>
          <div className='home__boxes'>
            <div className='home__box'>
              <h3>For teachers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
            <div className='home__box'>
              <h3>For schools</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
