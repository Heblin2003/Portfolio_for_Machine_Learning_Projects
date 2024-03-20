import React from 'react'
import './ourwork.css'
import { FaLaptopCode } from 'react-icons/fa';
import { FaRobot } from 'react-icons/fa';
import { FaNetworkWired } from 'react-icons/fa';
import { FaPalette } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaCamera } from 'react-icons/fa';


const Ourwork = () => {
  return (
    <div className='services' id='services'>
      <div className='services-content'>
        <h1>SERVICES</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col__3'>
            <div className='services-box pointer'>
              <div className='service-about'>
              <FaLaptopCode size={45} />
                <h1 >Web Development</h1>
                <p>Our area of expertise is full-stack web development, which includes database management, UI design, front-end and back-end development, and smooth integration with third-party APIs.</p>
              </div>
            </div>
          </div>
          <div className='col__3'>
            <div className='services-box pointer'>
              <div className='service-about'>
                <FaRobot size={45}/>
                <h1 >Machine learning</h1>
                <p> With a wealth of experience in data processing, model training, and deployment, we are experts in creating solutions for a wide range of problems using machine learning.</p>
              </div>
            </div>
          </div>
          <div className='col__3'>
            <div className='services-box pointer'>
              <div className='service-about'>
                <FaPalette size={45}/>
                <h1 >Designing</h1>
                <p>With expertise in UI, UX, and visual design, we produce aesthetically pleasing and intuitive designs for a range of platforms and devices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col__3'>
            <div className='services-box pointer'>
              <div className='service-about'>
               <FaNetworkWired size={45}/>
                <h1 >IoT Development</h1>
                <p>We help you develop and deploy innovative solutions that meet your business needs, in industries such as agriculture, construction, delivery, inspection, and security.</p>
              </div>
            </div>
          </div>
          <div className='col__3'>
            <div className='services-box pointer'>
              <div className='service-about'>
                <FaDatabase size={45}/>
                <h1 >Data Analysis</h1>
                <p>By using data-driven techniques, such as focused marketing campaigns and predictive sales modeling, we improve business performance.</p>
              </div>
            </div>
          </div>
          <div className='col__3'>
            <div className='services-box pointer'>
              <div className='service-about'>
                <FaCamera size={45}/>
                <h1 >Computer Vision</h1>
                <p>For projects like object identification, medical picture analysis, and defect inspection, our skilled team creates and applies computer vision solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourwork
