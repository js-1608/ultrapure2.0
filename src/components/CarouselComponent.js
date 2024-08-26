import React, { useState } from 'react';
import CCMB from '../assests/tested/CCMB.png';
import CE from '../assests/tested/CE.png';
import CSIR from '../assests/tested/CSIR.png';
import GreenPro from '../assests/tested/GreenPro.png';
import IIT from '../assests/tested/IIT.png';
import ISO from '../assests/tested/ISO.png';
import ROHS from '../assests/tested/ROHS.png';
import image1 from '../assests/tested/image 46.png';
import image2 from '../assests/tested/image 44.png';
import image3 from '../assests/tested/image 43.png';
import image4 from '../assests/tested/image 42.png';
import image5 from '../assests/tested/image 45.png';


const logos = [
  CCMB,
  CE,
  CSIR,
  GreenPro,
  IIT,
  ISO,
  ROHS,
  image1,
  image2,
  image3,
  image4,
  image5
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length);
  };

  return (
    <div className="flex p-5 rounded-lg">
      <div className="w-1/4 flex flex-col items-center justify-center">
        <h2 className="text-md lg:text-3xl  font-bold"><span className='text-[#90C03E]'>Our 
        </span> Certifications</h2>
        <div className="flex space-x-4 mt-4">
          <button 
            onClick={handlePrev}
            className="rounded-lg lg:text-4xl sm:text-2xl"
          >
            <span aria-hidden="true">&larr;</span>
          </button>
          <button 
            onClick={handleNext}
            className="rounded-lg lg:text-4xl sm:text-2xl"
          >
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
      <div className="w-3/4 flex items-center justify-center">
        <div className="overflow-hidden w-full">
          <div 
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-1/3 sm:w-1/3 md:w-1/6 lg:w-1/7 flex justify-center"
              >
                <img src={logo} alt={`Logo ${index + 1}`} className="p-4 max-w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;
