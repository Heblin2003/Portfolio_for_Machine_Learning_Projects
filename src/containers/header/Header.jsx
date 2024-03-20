import React, { useState, useEffect } from 'react';
import './header.css';
import { Carousel } from 'react-bootstrap';
import home1 from '../../assets/home1.mp4';
import home2 from '../../assets/home2.mp4';
import ReactPlayer from 'react-player';
import home from '../../assets/home.mp4';
import { Contact } from '../../containers';
import "bootstrap/dist/css/bootstrap.css";
// import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const words = ['Accomplishment','Supremacy','Brilliance'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount

  }, []);
  

  const [showOverlay, setShowOverlay] = useState(false);

  // const Videoslider = [
  //   {
  //     id: 1,
  //     src: home1, // Update with your video URLs
  //   },
  //   {
  //     id: 2,
  //     src: home2, // Update with your video URLs
  //   }
  // ];

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
      Message: ${message}
      Accepted Terms: ${acceptedTerms}
    `);

    event.preventDefault();
  }
  

  // const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide

  // const handleSlideChange = (selectedIndex) => {
  //   setActiveIndex(selectedIndex);
  // };

  return (
    <div className='header section_padding' id='home'>
      <div className='bacground-video'>
      <video class='video1' src={home} autoPlay loop muted/></div>
      <div className='header-content'>
        <h1 className='gradient__text'>Xeleti - The Pinnacle of {words[currentWordIndex]}</h1>
        <p>Where Innovation Meets Destiny. Forge Your Path to Technological Greatness and Embrace Limitless Opportunities.</p>
        <button class="btn-lg mt-0 mb-3" onClick={() => setShowOverlay(true)}>Get started</button>
      </div>
      <div className='header-image'>
      <video class='video2' src={home2} autoPlay loop muted/></div>
      <div className="App">
            {showOverlay && (
            <Contact onClose={() => setShowOverlay(false)}>
              <div className='contact'>
                <h2>CONTACT</h2>
                <p>This is the content of the overlay.</p>
                <div className='contact-details'>
                  <form onSubmit={handleSubmit}>
                    <label>
                      Email:
                      <input
                      name="email"
                      type="email"
                      placeholder="email..."
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required />
                    </label>

                    <label>
                      Password:
                      <input
                        name="password"
                        type="password"
                        placeholder="password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />
                    </label>

                    <label>
                      Message:
                      <textarea className='message'
                        name="message"
                        value={message}
                        placeholder="Write your message..."
                        rows={3} // Adjust the number of visible text lines for around 5 sentences
                        cols={40}
                        type="message"
                        onChange={e => setMessage(e.target.value)}
                        required />
                    </label>

                    <label>
                      <input
                        name="acceptedTerms"
                        type="checkbox"
                        onChange={e => setAcceptedTerms(e.target.value)}
                        required />
                      I accept the terms of service
                    </label>

                    <button>Submit</button>
                  </form>
                </div>
              </div>
            </Contact>
           )}
          </div>

          <div className='app'>
            
          </div>
      {/* <div className='header-image'> */}
        {/* <Carousel activeIndex={activeIndex} onSelect={handleSlideChange}>
          {Videoslider.map((videoObj, index) => (
            <Carousel.Item key={videoObj.id} >
              <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <ReactPlayer
                url={videoObj.src}
                width="100%"
                pip={true}
                controls={true}
                playing={index === activeIndex} // Auto-play only when the slide is active
                loop={true} // Loop the video
                style={{ borderRadius: '20px', overflow: 'hidden' }}
              /></div>
            </Carousel.Item>
          ))}
        </Carousel> */}
      {/* </div> */}
    </div>
  )
}

export default Header
