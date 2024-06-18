import React from 'react';

const InfoCard = ({ imageUrl, heading, content }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={heading} />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-center">{heading}</h2>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default InfoCard;
