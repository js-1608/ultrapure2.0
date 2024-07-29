import React from 'react';
import Slider from 'react-slick';
import faqs from '../data/Data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MarketCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Slide transition interval in milliseconds
  };

  return (
    <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 ">Markets <span className="text-textBlue">We Serve</span></h1>
      <Slider {...settings}>
        {faqs.map((faq) =>
          faq.content.map((item) => (
            <div key={item.heading} className="p-4">
              <a href={item.href} className="block relative group">
                <div className="border rounded-lg shadow-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={item.imageUrl}
                      alt={item.heading}
                      className="object-contain w-full h-full"
                    />
                    <div className="absolute inset-0 bg-green-600 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex ">
                      <h3 className="text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">{item.heading}</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
};




export default MarketCarousel;
