import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CCMB from '../assests/tested/CCMB.png';
import CE from '../assests/tested/CE.png';
import CSIR from '../assests/tested/CSIR.png';
import GreenPro from '../assests/tested/GreenPro.png';
import IIT from '../assests/tested/IIT.png';
import ISO from '../assests/tested/ISO.png';
import ROHS from '../assests/tested/ROHS.png';
import image1 from '../assests/tested/image 46.png';
import image2 from '../assests/tested/image 44.png';
import image3 from '../assests/tested/image 43.png';
import image4 from '../assests/tested/image 42.png';
import image5 from '../assests/tested/image 45.png';

const logos = [
  CCMB,
  CE,
  CSIR,
  GreenPro,
  IIT,
  ISO,
  ROHS,
  image1,
  image2,
  image3,
  image4,
  image5,
];

const CarouselComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <button className="slick-next custom-arrow">&rarr;</button>,
    prevArrow: <button className="slick-prev custom-arrow">&larr;</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row p-5 rounded-lg items-center">
      <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start">
        <h2 className="text-xl lg:text-3xl font-bold">
          <span className="text-[#90C03E]">Our</span> Certifications
        </h2>
      </div>
      <div className="w-full lg:w-3/4 flex items-center justify-center relative">
        <Slider {...settings} className="w-full">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center p-2">
              <img 
                src={logo} 
                alt={`Logo ${index + 1}`} 
                className="max-w-full h-24 w-24 object-contain" 
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselComponent;
