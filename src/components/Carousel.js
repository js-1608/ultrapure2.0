// src/Carousel.js
import React, { useState } from 'react';
import './carousel.css'; // Create this file for custom styling if needed

const images = [
  { src: '/assests/products/p_(1).png', heading: 'Heading 1' },
  { src: '/assests/products/p_(2).png', heading: 'Heading 2' },
  { src: '/assests/products/p_(3).png', heading: 'Heading 3' },
  { src: '/assests/products/p_(4).png', heading: 'Heading 4' },
  { src: '/assests/products/p_(5).png', heading: 'Heading 5' },
  { src: '/assests/products/p_(6).png', heading: 'Heading 6' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-1/3 flex-shrink-0 p-5"
            style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="relative h-64">
              <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-50 text-white text-center">
                <h2>{image.heading}</h2>
              </div>
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
        {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index * 3)}
            className={`mx-1 w-3 h-3 rounded-full ${index === Math.floor(currentIndex / 3) ? 'bg-gray-800' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;