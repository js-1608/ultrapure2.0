import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css'; // Ensure this file contains the necessary styling
import p1 from '../assests/products/Group 266.png';
import p2 from '../assests/products/Group 267.png';
import p3 from '../assests/products/Group 268.png';
import p4 from '../assests/products/Group 206.png';
import p5 from '../assests/products/Group 208.png';
import p6 from '../assests/products/Group 209.png';
import p7 from '../assests/products/Group 210.png';
import p8 from '../assests/products/Group 211.png';
import p9 from '../assests/products/Group 212.png';
import p10 from '../assests/products/Group 213.png';

const images = [
  { src: p1, heading: 'Advanced Oxidation Plasma ' },
  { src: p2, heading: 'odorNOX Unit ' },
  { src: p3, heading: 'germiNOX Air Purifier' },
  { src: p4, heading: 'Virushield Air Purifier ' },
  { src: p5, heading: 'germiNOX Air Purifier' },
  { src: p6, heading: 'Falcon S Air Purifier' },
  { src: p7, heading: 'CBR Filter' },
  { src: p8, heading: 'ESP Filter' },
  { src: p9, heading: 'ultraSORB Chemical Media' },
  { src: p10, heading: 'Ceiling Suspended Air Purifier' },
];

const Mobile_product = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container p-10 display_hide mb-5 mt-5">
      <div className='mt-5 p-2'>
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-white">
          Discover Our Product Range
        </h2>
        <p className='text-xl p-1 text-white'>
          Breathe easier with our advanced air purification solutions.
        </p>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item  sm:m-5 lg:m-2  rounded">
            <img src={image.src} alt={image.heading} className="carousel-image" />
            <h2 className='text-center text-white text-xl'>{image.heading}</h2>

            <div className="carousel-caption strong font-bold w-1/2 text-xl">
            </div>
          </div>
        ))}

      </Slider>
    </div>
  );
};

export default Mobile_product;
