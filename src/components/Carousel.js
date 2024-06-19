// src/Carousel.js
import React, { useState } from 'react';
import './carousel.css'; // Create this file for custom styling if needed

const images = [
  { src: '../assests/products/p (1).png', heading: 'Heading 1' },
  { src: '../assests/products/p (2).png', heading: 'Heading 2' },
  { src: '../assests/products/p (3).png', heading: 'Heading 3' },
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
    <div className="relative w-full max-w-2xl mx-auto z-10">
      <div className="relative overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ><p>
            hekloooooooooooooooooooooo
          </p>
            <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-50 text-white text-center">
              <h2>{image.heading}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button onClick={prevSlide} className="p-2 bg-gray-800 bg-opacity-50 text-white">
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button onClick={nextSlide} className="p-2 bg-gray-800 bg-opacity-50 text-white">
          &gt;
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-1 w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
