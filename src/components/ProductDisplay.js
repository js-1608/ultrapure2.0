import React, { useState } from 'react';
import { FaCloudArrowDown } from "react-icons/fa6";

const ProductDisplay = ({ headingText, title, downloadFile, mainImage, relativeImages }) => {
  const [currentMainImage, setCurrentMainImage] = useState(mainImage);

  const handleRelativeImageClick = (image) => {
    setCurrentMainImage(image);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-500 p-10">
      <div className="md:w-1/2 flex flex-col justify-center">
        <p className="text-xl uppercase text-white font-semibold">{headingText}</p>
        <h1 className="lg:text-6xl  text-3xl text-white font-bold mt-2">{title}</h1>
        <div className="flex space-x-5 mt-10">
          <a className="bg-ultragreen text-white px-4 py-2 rounded flex items-center font-semibold text-md lg:text-lg" href="contact">
            Get Quote →
          </a>
          <a
            href={downloadFile}
            download
            className=" flex items-center text-white  hover:text-ultragreen text-md lg:text-lg"
          >
            Download Brochure <span className="ml-2"><FaCloudArrowDown  className="ml-2 w-5 h-5"/>
            </span>
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex lg:justify-end sm:text-center justify-center items-center mt-10">
          <div className='rounded flex items-center'>
          <img src={currentMainImage} alt="Main product" className="w-3/4 h-auto mb-4 rounded-lg "/>
          {/* <div className="flex flex-col  space-y-3 ml-8 items-center m-auto">
          {relativeImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Relative ${index + 1}`}
              className="w-18 h-16 cursor-pointer rounded"
              onClick={() => handleRelativeImageClick(image)}
            />
          ))}
        </div> */}
          </div>
       
      </div>
    </div>
  );
};

export default ProductDisplay;
