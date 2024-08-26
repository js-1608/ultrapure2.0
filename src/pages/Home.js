// src/pages/HomePage.js
import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Using react-icons for the arrow
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";

import banner from "../assests/home_banner.png";
import banner2 from "../assests/mbanner.png";

import InfoCard from "../components/InfoCars";
import choose1 from "../assests/whyChose/choose (1).png";
import choose2 from "../assests/whyChose/choose (2).png";
import choose3 from "../assests/whyChose/choose (3).png";
import COUNT from "../assests/banner2.png";
import sol from "../assests/sol.png";
import Carousel from "../components/Carousel";
import Newsletter from '../components/Newsletter';
// import ImageTextCard from './components/ImageTextCard';
import ImageTextCard from "../components/ImageTextCard";
import OurClientele from "../components/OurClientele";
import CarouselComponent from "../components/CarouselComponent";
import MarketCarousel from "../components/MarketCarousel";
import { Link } from "react-router-dom";
import ReportForm from "../components/ReportForm";
import video from '../assests/video.mp4';
import Mobile_product from "../components/Mobile_product";
import Client from "../components/Client";

export default function HomePage() {
  return (
    <div>
      {/* <Banner
        src={banner}
        title="The Future Of Clean Air"
        text="For better health of your family"
        updated="UPGRADE NOW."
        buttonUrl="/contact"
        buttonText=" Get Free Consultation 3"
      /> */}

        {/* <img src={src} alt="Card image" className="w-full h-full object-cover opacity-100" /> */}
        <div className="relative text-white ">
  <video
    src={video} // Replace with your video source URL
    autoPlay
    loop
    muted
    className="w-full h-3/4 object-cover opacity-75"
  />
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="p-4 text-center">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
        The Future Of Clean Air
      </h1>
      <p className="mt-9 text-sm md:text-xl lg:text-2xl w-3/4 text-center m-auto display_hide">
        For better health of your family
      </p>
      <p className="mt-0 text-lg md:text-2xl lg:text-3xl font-bold">
        UPGRADE NOW.
      </p>
      <Link
        to="/contact"
        className="sm:mt-1 lg:mt-10 inline-flex items-center px-4 py-2 sm:px-5 sm:py-4 lg:px-8 lg:py-4 bg-white text-blue-700 rounded hover:bg-gray-200 font-medium"
      >
        Get Free Consultation <FaArrowRight className="ml-2" />
      </Link>
    </div>
  </div>
</div>
{/* 
        <Banner2
          src={banner2}
          title="The Future Of Clean Air"
          text="For better health of your family "
          updated="UPGRADE NOW."
          buttonUrl="/contact"
          buttonText="Get Free Consultation"
        /> */}

        <div className="relative  ">
          <img
            src={COUNT}
            alt="Card"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 flex items-center ">
            {/* <div className="p-8 text-left">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">title</h1>
          <p className="mt-6 text-lg md:text-2xl lg:text-3xl">tex</p>
          <p className="mt-0 text-lg md:text-2xl lg:text-3xl font-bold">pdated</p>
          
        </div> */}
          </div>
        </div>

        <div className="bg-gray-100 order rounded-br-large p-2">
          <div className="text-center m-5">
            {/* <h5 className="font-normal text-2xl">Discover</h5> */}
            <h2 className=" font-bold text-5xl">
              Why Choose <span className="text-textBlue">Ultrapure</span>
            </h2>
            <p className="max-w-4xl text-center m-auto font-normal mt-6 mb-10">
            As a 'Need-based Manufacturer,' we excel in delivering customized, client-focused solutions, earning us a strong reputation and a loyal customer base. With offices in Delhi, Mumbai, and Bengaluru, we efficiently cater to clients across the nation.
            </p>
          </div>
          <div className="flex justify-center mt-16 flex-wrap mb-16">
            <InfoCard
              imageUrl={choose1}
              heading="Superior / Advanced Air Purification Solutions"
              content="Our products are engineered to efficiently remove airborne pollutants, ensuring you enjoy clean and healthy air."
            />
            <InfoCard
              imageUrl={choose3}
              heading="Customized Solutions for Every Environment"
              content="We recognize the uniqueness of each setting, providing air purification solutions designed to meet your specific needs."
            />
            <InfoCard
              imageUrl={choose2}
              heading="Reliable and Durable Performance"
              content="Our products are designed for longevity, delivering consistent and reliable air purification for years to come."
            />
          </div>
          <div className=" flex justify-center mb-2">
            <Link to="/about" className="mt-5 inline-flex items-center px-4 py-2 bg-ultragreen  text-white rounded hover:bg-gray-200 font-medium  text-center m-1" >
              Learn More
              <FaArrowRight className="ml-2" />
            </Link>
            <Link to="/contact" className="mt-5 inline-flex items-center px-4 py-2 rounded hover:bg-gray-200 font-medium  text-center m-1" >
              Contact us
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center mt-10 p-10">
          <ImageTextCard />
        </div>
        <Carousel />
        <Mobile_product/>
        

        <div className="p-4 lg:p-10 border-solid   ">
          <div className="rounded-lg shadow-2xl border-2">
            <h6 className="m-auto text-center text-3xl font-bold p-3">Our <span className="text-[#1D9AD6]">Clientele</span></h6>
              <Client/>
            {/* <OurClientele /> */}
            <hr className=" border-1 border-black lg:w-5/6 sm:w-full m-auto mb-5"></hr>
            <CarouselComponent />
          </div>
        </div>

        <div className="container mx-auto p-4">
          <MarketCarousel />
        </div>
        {/* <Newsletter/> */}
        <ReportForm />
      </div>

      );
}
