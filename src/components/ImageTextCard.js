import React from 'react';

const ImageTextCard = ({ imageUrl, heading, content }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
       <div className="w-full md:w-1/2">
        <img src={imageUrl} alt={heading} className="object-cover w-full h-full opacity-100" />
      </div>
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{heading}</h2>
        <p className="text-gray-700 text-base md:text-lg">{content}</p>
      </div>
     
    </div>
  );
};

export default ImageTextCard;
