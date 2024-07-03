import React, { useState } from 'react';
import CCMB from '../assests/tested/CCMB.png';
import CE from '../assests/tested/CE.png';
import CSIR from '../assests/tested/CSIR.png';
import GreenPro from '../assests/tested/GreenPro.png';
import IIT from '../assests/tested/IIT.png';
import ISO from '../assests/tested/ISO.png';
import ROHS from '../assests/tested/ROHS.png';

const logos = [
  CCMB,
  CE,
  CSIR,
  GreenPro,
  IIT,
  ISO,
  ROHS
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
    <div className="flex  p-5 rounded-lg">
      <div className="w-1/4 flex flex-col items-center justify-center">
        <h2 className="lg:text-3xl sm:text-sm font-bold "><span className='text-[#90C03E]'>Tested</span>By</h2>
        <div className="flex space-x-4">
          <button 
            onClick={handlePrev}
            className="   rounded-lg lg:text-4xl sm:text-2xl"
          >
            <span aria-hidden="true">&larr;</span>
          </button>
          <button 
            onClick={handleNext}
            className=" rounded-lg lg:text-4xl sm:text-2xl"
          >
           <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
      <div className="w-3/4 flex items-center justify-center">
        <div className="overflow-hidden w-full">
          <div 
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * (100 / 7)}%)` }}
          >
            {logos.map((logo, index) => (
              <div key={index} className="flex  w-1/2 ">
                <img src={logo} alt={`Logo ${index + 1}`} className="mx-auto max-w-full  " />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;
