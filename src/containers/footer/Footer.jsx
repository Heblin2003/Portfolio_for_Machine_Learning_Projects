import React from 'react'
import './footer.css'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
      <svg width="250" height="100" viewBox="0 0 244 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43 30L21.3494 0L64.6506 0L43 30Z" fill="#D9D9D9"/>
<path d="M43 31L64.6506 61H21.3494L43 31Z" fill="black"/>
<path d="M18 0L35.3205 30H0.679491L18 0Z" fill="black"/>
<path d="M18 60L0.679489 30L35.3205 30L18 60Z" fill="#D9D9D9"/>
<line x1="74" y1="15" x2="104" y2="15" stroke="black" stroke-width="10"/>
<line x1="74" y1="35" x2="104" y2="35" stroke="black" stroke-width="10"/>
<line x1="74" y1="55" x2="104" y2="55" stroke="black" stroke-width="10"/>
<line x1="119" y1="10" x2="119" y2="40" stroke="black" stroke-width="10"/>
<line x1="114" y1="55" x2="144" y2="55" stroke="black" stroke-width="10"/>
<line x1="154" y1="15" x2="184" y2="15" stroke="black" stroke-width="10"/>
<line x1="154" y1="35" x2="184" y2="35" stroke="black" stroke-width="10"/>
<line x1="154" y1="55" x2="184" y2="55" stroke="black" stroke-width="10"/>
<line x1="194" y1="15" x2="224" y2="15" stroke="black" stroke-width="10"/>
<line x1="209" y1="30" x2="209" y2="60" stroke="black" stroke-width="10"/>
<line x1="239" y1="10" x2="239" y2="60" stroke="black" stroke-width="10"/>
</svg>
      </div>

    <div className='footer-content1'>
    <h1>Xeleti</h1>
    <p>Home<br></br>About<br></br>Services<br></br>Our work</p>
    

    </div>
    <div className='footer-content2'>
    <h1>Social</h1>
    <p>Facebook<br></br>Linkedin<br></br>Twitter</p>
    </div>
    <div className='footer-content3'>
    <h1>Services</h1>
    <p>Web Development<br></br>Machine Learning<br></br>Designing<br></br>IoT Development<br></br>Data Analysis<br></br>Computer Vision</p>
    </div>
    <div className='footer-content'>
      <div class="form-group ">
        <label for="email" class="mb-3">
          <h1>Join our newsletter</h1>
          <p>Subscribe to our newsletter and Get 10% off</p>
        </label>
        <div className='input'>
        <input type="email" class="form-control form-control-lg" placeholder="Enter email" id="email"/>
        <button type="button" class="btn-lg mt-0 mb-3">Subscribe</button>
      </div>
      {/* <div className='icons'style={{ padding: '10px'}}>
        <FaFacebook size={25} /> 
        <FaTwitter size={25} /> 
        <FaLinkedin size={25}/>  
      </div> */}
      </div>
    </div>
  </div>
  )
}

export default Footer

