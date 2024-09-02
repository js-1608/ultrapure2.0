import React, { useState } from 'react';
import sol from "../assests/sol.png";
import sol1 from "../assests/sol1.png";
import sol2 from "../assests/sol2.png";

const ImageTextCard = () => {
  const [currentImage, setCurrentImage] = useState(sol);

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-white overflow-hidden">
      <div className="w-full md:w-1/2">
        <img src={currentImage} alt="Current" className="object-cover w-full h-full opacity-100" />
      </div>
      <div className="w-full md:w-1/2 p-0 lg:p-8">
        <h2
          className="text-2xl md:text-2xl font-bold mb-1"
          onMouseEnter={() => handleMouseEnter(sol)}
        >
          Purification Technologies
        </h2>
        <p
          className="text-gray-700 text-base md:text-md text-left lg:text-justify"
          onMouseEnter={() => handleMouseEnter(sol)}
        >
          Ultrapure utilizes cutting-edge innovations in air purification to offer highly effective and efficient solutions. Our technologies undergo rigorous testing and certification by leading labs, ensuring top-quality air purification for your environment.</p>
        <h2
          className="text-2xl md:text-2xl font-bold mb-1 mt-6"
          onMouseEnter={() => handleMouseEnter(sol1)}
        >
          Advanced Filtration Systems
        </h2>
        <p
          className="text-gray-700 text-base md:text-md text-left lg:text-justify"
          onMouseEnter={() => handleMouseEnter(sol1)}
        >
          Ultrapure’s air purifiers feature state-of-the-art filtration systems that effectively capture particulates, deactivate microbes, and neutralize gases and odors. Our custom filters and chemical media are specifically designed to target particular pollutants, ensuring clean and healthy air for both commercial and residential settings.
        </p>      <h2
          className="text-2xl md:text-2xl font-bold mb-1 mt-6"
          onMouseEnter={() => handleMouseEnter(sol2)}
        >
          Versatile Applications
        </h2>
        <p
          className="text-gray-700 text-base md:text-md text-left lg:text-justify"
          onMouseEnter={() => handleMouseEnter(sol2)}
        >
          Ultrapure purifiers are designed for diverse industries and environments. Whether in hospitals, office buildings, or residential spaces, our solutions address the specific air quality challenges unique to each sector.
          </p>      
      </div>
    </div>
  );
};

export default ImageTextCard;
