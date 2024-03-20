import React from 'react';
import './about.css'
import { Ourwork } from '../../containers';
import { Work } from '../../containers';
import { Navbar } from '../../components';
import aboutgif from '../../assets/about.mp4';
import { Footer } from '../../containers';

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='about'>
        <div className='about-heading'>
          <h1>ABOUT</h1>
        </div>
        <h1 className='heading'>OUR INFORMATION</h1>
        <div className='about-info'>
          <div className='about-content'>
            <p>We are passionate about using our expertise in technology to create innovative solutions that meet the needs of our clients. We are committed to delivering high-quality services. Our mission is to help our clients succeed by providing them with the best possible web development, machine learning and designing services. We believe that technology can be used to solve complex problems and to create a better world.</p>
          </div>
          <div className='about-image'>
            <video class='video1' src={aboutgif} autoPlay loop muted/>
          </div>
        </div>
      </div>
      <Ourwork></Ourwork>
      <Work></Work>
      <Footer></Footer>
    </div>
  );
};

export default About
