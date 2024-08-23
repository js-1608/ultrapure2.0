import React, { useState, useEffect } from 'react';
import './carousel.css'; // Ensure this file contains the necessary styling
import p1 from '../assests/products/product.png';
import p2 from '../assests/products/product2.png';
import p3 from '../assests/products/product3.png';
import p4 from '../assests/products/Group 206.png';
import p5 from '../assests/products/Group 208.png';
import p6 from '../assests/products/Group 209.png';
import p7 from '../assests/products/Group 210.png';
import p8 from '../assests/products/Group 211.png';
import p9 from '../assests/products/Group 212.png';
import p10 from '../assests/products/Group 213.png';

import l from '../assests/l.png';
import r from '../assests/r.png';

const images = [
  { src: p1, heading: 'Advanced Oxidation Plasma ' },
  { src: p2, heading: 'odorNOX Unit ' },
  { src: p3, heading: 'Corrosion Control Unit' },
  { src: p4, heading: 'Virushield Air Purifier ' },
  { src: p5, heading: 'germiNOX Air Purifier' },
  { src: p6, heading: 'Falcon S Air Purifier' },
  { src: p7, heading: 'CBR Filter' },
  { src: p8, heading: 'ESP Filter' },
  { src: p9, heading: 'Ceiling Suspended Air Purifier ' },
  { src: p10, heading: ': ultraSORB® Chemical Media' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    window.addEventListener('resize', updateItemsPerSlide);
    updateItemsPerSlide();

    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  // Set up automatic sliding
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(autoSlide);
  }, [currentIndex, itemsPerSlide]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - itemsPerSlide : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - itemsPerSlide ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container p-10 display_hide">
      <div className='mt-5 p-2'>
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-white">
        Explore Our Product Line        </h2>
        <p className='text-xl p-1 text-white'>Experience the benefits of our advanced air purification solutions for cleaner, healthier air.</p>
      </div>
      <div
        className="carousel-slide m-auto"
        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item bg-white ml-3 rounded">
            <img src={image.src} alt={image.heading} className="carousel-image" />
            <div className="carousel-caption strong font-bold w-1/2 text-xl">
              <h2 className='display_hide'>{image.heading}</h2>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="carousel-button prev display_hide">
        <img src={l} alt="back button" />
      </button>
      <button onClick={nextSlide} className="carousel-button next display_hide">
        <img src={r} alt="forward button" />
      </button>
      <div className='w-full m-auto display_hide_big'>
        <button onClick={prevSlide} className="carousel-button2 prev">
          <img src={l} alt="back button" />
        </button>
        <button onClick={nextSlide} className="carousel-button2 next">
          <img src={r} alt="forward button" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
