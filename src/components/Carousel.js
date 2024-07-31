// src/Carousel.js
import React, { useState } from 'react';
import './carousel.css'; // Ensure this file contains the necessary styling
import p1 from '../assests/products/product.png';
import p2 from '../assests/products/product2.png';
import p3 from '../assests/products/product3.png';
import l from '../assests/l.png';
import r from '../assests/r.png'

const images = [
  { src: p1, heading: 'Advanced Oxidation Plasma (AOP) Cell' },
  { src: p2, heading: 'Corrosion Control Unit' },
  { src: p3, heading: 'germiNOX Air Purifier' },
  { src: p1, heading: 'Advanced Oxidation Plasma (AOP) Cell' },
  { src: p2, heading: 'Corrosion Control Unit' },
  { src: p3, heading: 'germiNOX Air Purifier' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container p-5">
      <div className='mt-10 p-2'>
       <h2 className=" font-bold text-3xl sm:text-4xl lg:text-7xl  text-white">
       Discover Our Product Range
      </h2>
      <p className='text-md p-1 text-white'>Breathe easier with ouur advanced air purification solutions.</p>
      </div>
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
         
        {images.map((image, index) => (
          <div key={index} className="carousel-item bg-white ml-5 rounded">
            <img src={image.src} alt={image.heading} className="carousel-image" />
            <div className="carousel-caption strong font-bold w-1/2 text-xl">
              <h2 className='display_hide'>{image.heading}</h2>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="carousel-button prev display_hide"><img src={l} alt="back button"/></button>
      <button onClick={nextSlide} className="carousel-button next display_hide" ><img src={r} alt="forward button"/></button>
      {/* <div className="carousel-dots">
        {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index * 3)}
            className={`carousel-dot ${index === Math.floor(currentIndex / 3) ? 'active' : ''}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
