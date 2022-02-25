import React from 'react';
import Canvas from '../components/Canvas';
import { heroDraw, heroInit } from '../components/data/canvas-data';
import '../styles/Home.css';

const Hero = () => {

  return (
    <div className='hero'>
      <div className='hero__carousel' style={{display: 'none'}}>
        
      </div>
      
      <div className='hero__display'>
        <div className='hero__display--foreground'>
          <h1>sHoT<span className='hero__blink'>_</span>Nika</h1>
        </div>
        <div className='hero__display--background'>
          <Canvas init={heroInit} draw={heroDraw} />
        </div>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <div className='p-homepage'>
      <Hero />
      <main>
        <section className='home__section home__section-1'>
          <h2 style={{color: 'white'}}>Take advantage of our platform</h2>
          <div className='home__boxes'>  
            <div className='box'>
              <h3>For fun</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='box'>
              <h3>For students</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <div className='box'>
              <h3>For parents</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            </div>
          </div>
        </section>
        
        <section className='home__section home__section-2'>
          <h2>Suitable for professionals</h2>
          <div className='home__boxes'>
            <div className='box'>
              <h3>For teachers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
            <div className='box'>
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
