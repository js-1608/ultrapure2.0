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
          Cutting-Edge Purification Technologies
        </h2>
        <p
          className="text-gray-700 text-base md:text-md text-left lg:text-justify"
          onMouseEnter={() => handleMouseEnter(sol)}
        >
          Ultrapure utilizes innovative technologies in their air purifier to provide most effective and efficient purification solutions. These technologies have been tested and certified by various labs, ensuring the highest quality air purification.
        </p>
        
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
          With advanced air filtration systems, Ultrapure’s air purifier can effectively capture particulates, microbes, and gases. Our custom filters and chemical media are designed to target specific pollutants, providing clean and healthy air for both commercial and residential use.
        </p>
        
        <h2
          className="text-2xl md:text-2xl font-bold mb-1 mt-6"
          onMouseEnter={() => handleMouseEnter(sol2)}
        >
          Wide Range of Applications
        </h2>
        <p
          className="text-gray-700 text-base md:text-md text-left lg:text-justify"
          onMouseEnter={() => handleMouseEnter(sol2)}
        >
          Ultrapure purifiers are suitable for a wide range of industries and environments. Whether it’s a hospital, office building, or residential space, their solutions can effectively address the unique air quality challenges faced by different sectors.
        </p>
      </div>
    </div>
  );
};

export default ImageTextCard;
