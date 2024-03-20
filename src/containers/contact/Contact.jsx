import React from 'react';
import './contact.css';
import { FaTimes } from 'react-icons/fa';


const Contact = ({ onClose, children }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <button onClick={onClose} className="close-button">
          <FaTimes size={30}/>
        </button>
        {children}
      </div>
    </div>
  );
};
export default Contact;
