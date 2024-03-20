import React from 'react'
import './work.css'
import image from '../../assets/ocr.jpg'
import image1 from '../../assets/number.jpg'
import image2 from '../../assets/text.jpg'
import image3 from '../../assets/gilbert.jpg'
import image4 from '../../assets/cancer.jpg'

const work = () => {
  return (
    <div>
      <div className='work' id='ourwork'>
      <div className='work-content'>
        <h1>OUR WORK</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col__3'>
            <div className='work-box pointer'>
            <a href='ocr'>
              <div className='work-about'>
                <img src={image} />
                <h1 >OCR</h1>
                <p>Recognises the characters in the uploaded image, extracts them and prints them separately</p>
              </div></a>
            </div>
          </div>
          <div className='col__3'>
            <div className='work-box pointer'>
            <a href='number-plate'>
              <div className='work-about'>
                <img src={image1} />
                <h1 >Number Plate</h1>
                <p>Extracts the numbers from the image of the number plate and prints it separately</p>
              </div>
              </a>
            </div>
          </div>
          <div className='col__3'>
            <div className='work-box pointer'>
            <a href='cancer'>
              <div className='work-about'>
                <img src={image4} />
                <h1>Cancer Detection </h1>
                <p>Predicts the cancer type based on the numerical inputs given.</p>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col__3'>
            <div className='work-box pointer'>
            <a href='text'>
              <div className='work-about'>
                <img src={image2} />
                <h1 >Text summarization </h1>
                <p>generates a summary of the given text while still retaining all the important information.</p>
              </div></a>
            </div>
          </div>
          <div className='col__3'>
            <div className='work-box pointer'>
            <a href='gilbert'>
              <div className='work-about'>
                <img src={image3} />
                <h1 >Gilbert</h1>
                <p>The large language model that has chat user interface and responds to the user's queries</p>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default work
