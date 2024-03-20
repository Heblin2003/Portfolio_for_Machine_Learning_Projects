import React, { useState } from 'react';
import './navbar.css';
import { Contact } from '../../containers';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';



// const Menu = () =>(
//   <>
//   <p><a href='home'>HOME</a></p>
//   <p><a href='about'>ABOUT</a></p>
//   <p><a href='#services'>SERVICES</a></p>
//   <p><a href='#contact'onClick={() => setShowOverlay(true)}>CONTACT</a></p>
//   <p><a href='#ourwork'>OUR WORK</a></p>
//   </>
// )

const Navbar = () => {
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
  const [showOverlay, setShowOverlay] = useState(false);

  

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
        <div className='navbar-links'>
          <div className='navbar-logo'>
            <svg width="200" height="50" viewBox="0 0 244 61" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div className='navbar-container'>
                <p><a href='home'>HOME</a></p>
                <p><a href='about'>ABOUT</a></p>
                <p><a href='#services'>SERVICES</a></p>
                <p><a href='#contact'onClick={() => setShowOverlay(true)}>CONTACT</a></p>
                <p><a href='#ourwork'>OUR WORK</a></p>
          </div>
          </div>  
            <div className='navbar_menu'>
              {toggleMenu
                ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)}/>
                : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)}/>
              }
              {toggleMenu && (
                <div className='navbar_menu-container scale-up '>
                  <div className='navbar_menu-container-links'>
                  <p><a href='home'>HOME</a></p>
                  <p><a href='about'>ABOUT</a></p>
                  <p><a href='#services'>SERVICES</a></p>
                  <p><a href='#contact'onClick={() => setShowOverlay(true)}>CONTACT</a></p>
                  <p><a href='#ourwork'>OUR WORK</a></p>
                  </div>
                </div>
              )}
            </div>
    </div>
  )
}

export default Navbar
