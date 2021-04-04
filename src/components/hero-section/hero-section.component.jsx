import React from 'react';
import './hero-section.styles.scss';
import {ReactComponent as HeroImage} from '../../assets/HeroImage.svg';

const HeroSection=()=>(
    <div className='hero-section'>
    <div className='hero'>
      <div className='greeting'>
       <h1 className='title'>Hello,I'm Abhishek</h1>
       <p className='sub-title'>A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
      </div>
      <HeroImage className='hero-image'/>
    </div>
    </div>
)

export default HeroSection;