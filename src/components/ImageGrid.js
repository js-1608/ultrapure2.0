import React from 'react';
import { Link } from 'react-router-dom';

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4 w-4/5">
      {images.map((image, index) => (
        <Link to={image.link} key={index} className="block">
          <div className="overflow-hidden shadow-lg ">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105 "
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ImageGrid;
