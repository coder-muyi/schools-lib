import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import { scrollEffect } from './components/effects';
import './Home.css';

const Home = () => {
  const boxContainer1Ref = useRef(null);
  const boxContainer2Ref = useRef(null);
  
  useEffect(() => {
    scrollEffect(boxContainer1Ref.current);
    scrollEffect(boxContainer2Ref.current);
  }, []);

  return (
    <div className='p-homepage'>
      <Hero />
      <main>
        <section className='home__section home__section-1'>
          <h2 style={{color: 'white'}}>Take advantage of our platform</h2>
          <div className='home__boxes' ref={boxContainer1Ref}>  
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
          <div className='home__boxes' ref={boxContainer2Ref}>
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
