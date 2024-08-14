import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Using react-icons for the arrow
import { Link } from 'react-router-dom';
function Banner({ src, title, text, updated, buttonUrl, buttonText }) {
  return (
    <div className="relative  text-white display_hide">

      {/* <img src={src} alt="Card image" className="w-full h-full object-cover opacity-100" /> */}
      <img src={src} alt="banner" className="w-full h-full object-cover opacity-75" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold ">{title}</h1>
          <p className="mt-9 text-sm md:text-xl lg:text-2xl w-3/4 text-center m-auto display_hide">{text}</p>
          <p className="mt-0 text-lg md:text-2xl lg:text-3xl font-bold">{updated}</p>
          {buttonUrl && (
            <Link to={buttonUrl} className="sm: mt-1 lg:mt-10 inline-flex items-center px-4 py-2 sm:px-5 sm:py-4 lg:px-8 lg:py-4 bg-white text-blue-700 rounded hover:bg-gray-200 font-medium">
              {buttonText} <FaArrowRight className="ml-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Banner;
