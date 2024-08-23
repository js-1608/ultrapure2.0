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
         State-of-the-Art Purification Technologies
        </h2>
        <p
          className="text-gray-700 text-base md:text-md text-left lg:text-justify"
          onMouseEnter={() => handleMouseEnter(sol)}
        >
Ultrapure leverages advanced innovations in their air purifiers to deliver highly effective and efficient solutions. These technologies are rigorously tested and certified by various labs, guaranteeing top-quality air purification.        </p>
        
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
Ultrapure's air purifiers are equipped with cutting-edge filtration systems that effectively capture particulates, deactivate microbes, and neutralizes gases & odors. Our custom filters and chemical media are tailored to target specific pollutants, ensuring clean and healthy air for both commercial and residential environments.        </p>
        
        <h2
          className="text-2xl md:text-2xl font-bold mb-1 mt-6"
          onMouseEnter={() => handleMouseEnter(sol2)}
        >
          Versatile Applications
        </h2>
        <p
          className="text-gray-700 text-base md:text-md text-left lg:text-justify"
          onMouseEnter={() => handleMouseEnter(sol2)}
        >
Ultrapure purifiers are ideal for various industries and environments. From hospitals and office buildings to residential spaces, our solutions effectively tackle the unique air quality challenges of each sector.        </p>
      </div>
    </div>
  );
};

export default ImageTextCard;
