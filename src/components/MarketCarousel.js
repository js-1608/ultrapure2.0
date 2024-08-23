import React from 'react';
import Slider from 'react-slick';
import { market } from '../data/Data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const MarketCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Slide transition interval in milliseconds
    responsive: [
      {
        breakpoint: 640, // Tailwind's sm breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="p-4">
        <h1 className="text-3xl font-bold mb-4 pl-5 ">Industries<span className="text-textBlue">We Serve</span></h1>
      <Slider {...settings}>
        {market.map((market) =>
         
            <div key={market.heading} className="p-4">
              <Link to={market.href} className="block relative group">
                <div className="border rounded-lg shadow-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={market.imageUrl}
                      alt={market.heading}
                      className="object-contain w-full h-full"
                    />
                    <div className="absolute inset-0 justify-center items-center textt-center salign-middle bg-green-600 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex ">
                      <h3 className=" font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 text-2xl">
                        <Link
                        to={market.href}>
                        {market.heading}
                        </Link>
                        
                        </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
         
        )}
      </Slider>
    </div>
  );
};




export default MarketCarousel;
