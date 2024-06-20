import React from 'react';

const ImageTextCard = ({ imageUrl }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white  overflow-hidden ">
      <div className="w-full md:w-1/2">
        <img src={imageUrl} alt={imageUrl} className="object-cover w-full h-full opacity-100" />
      </div>
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-2xl md:text-2xl font-bold mb-1">Cutting-Edge Purification Technologies</h2>
        <p className="text-gray-700 text-base md:text-md">Ultrapure utilizes innovative technologies in their air purifier to provide mose effective and efficient purification solutions. These technologies have been tested and certified by various labs, ensuring the highest quality air purification.</p>
        <h2 className="text-2xl md:text-2xl font-bold mb-1 mt-6">Advanced Filtration Systems</h2>
        <p className="text-gray-700 text-base md:text-md">
        With advanced air filtration systems, ultrapure’s air purifier can effectively capture particualtes, microbes and gases. Our custom filters and chemical media are designed to target specific pollutants, providing cleand and healthy for both commerical and residential use.</p> 
        <h2 className="text-2xl md:text-2xl font-bold mb-1 mt-6">Wide Rang of Applications</h2>
        <p className="text-gray-700 text-base md:text-md">
        Ultrapure purifiers are suitable for wide range of industries and environments. Whether it’s a hospital, office building, or residential space, their solutions can effectively address the unique air quality challenges faced by different sectors.</p>      </div>

    </div>
  );
};

export default ImageTextCard;
