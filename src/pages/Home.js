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
import Newsletter from "../components/Newsletter";
// import ImageTextCard from './components/ImageTextCard';
import ImageTextCard from "../components/ImageTextCard";
import OurClientele from "../components/OurClientele";
import CarouselComponent from "../components/CarouselComponent";
import MarketCarousel from "../components/MarketCarousel";
import { Link } from "react-router-dom";
import ReportForm from "../components/ReportForm";
import video from "../assests/video.mp4";
import Mobile_product from "../components/Mobile_product";
import Client from "../components/Client";
import CertificateGallery from "../components/Certificates";
import Counter from "../components/Counter";
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
      <div className="flex flex-col md:flex-row justify-evenly items-center h-auto md:h-96 bg-white aboutbg bg-cover bg-center p-4">
        {/* Text Section */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Air Purified
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-black">Till Now</p>
        </div>

        {/* Counter Section */}
        <div className="relative flex items-center justify-center mt-8 md:mt-0 mb-10 lg:mb-2">
          <div className=" w-40 h-40 md:w-56 md:h-56 bg-ultragreen rounded-full flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-xl md:text-2xl font-bold">
                <Counter />+
              </p>
              <p className="text-xs md:text-sm">Cubic Meter</p>
            </div>
          </div>
          <div className=" absolute w-44 h-44 md:w-64 md:h-64 border-2 border-ultragreen rounded-full animate-glow"></div>
          <div className=" absolute w-52 h-52 md:w-72 md:h-72 border-2 border-ultragreen rounded-full animate-glow"></div>
        </div>
      </div>

      {/* <div className="relative  ">
          <img
            src={COUNT}
            alt="Card"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 flex items-center "> */}
      {/* <div className="p-8 text-left">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">title</h1>
          <p className="mt-6 text-lg md:text-2xl lg:text-3xl">tex</p>
          <p className="mt-0 text-lg md:text-2xl lg:text-3xl font-bold">pdated</p>
          
        </div> */}
      {/* </div>
        </div> */}

      <div className="bg-gray-100 order rounded-br-large p-2">
        <div className="text-center m-5">
          {/* <h5 className="font-normal text-2xl">Discover</h5> */}
          <h2 className=" font-bold text-5xl">
            Why Choose <span className="text-textBlue">Ultrapure</span>
          </h2>
          <p className="max-w-4xl text-center m-auto font-normal mt-6 mb-10">
            As a need-based manufacturer, we specialize in providing tailored
            solutions that meet specific client requirements, which has
            established our strong reputation and loyal customer base. With
            offices in Delhi, Mumbai, and Bengaluru, we effectively serve
            clients throughout the country.
          </p>
        </div>
        <div className="flex justify-center mt-16 flex-wrap mb-16">
          <InfoCard
            imageUrl={choose1}
            heading="Superior / Advanced Air Purification Solutions"
            content="Our products are meticulously engineered to efficiently eliminate airborne pollutants, ensuring that you enjoy cleaner, healthier air in your environment."
          />
          <InfoCard
            imageUrl={choose3}
            heading="Customized Solutions for Every Environment"
            content="
We understand that each environment is unique. That's why we offer tailored air purification solutions designed to address your specific needs and ensure optimal air quality."
          />
          <InfoCard
            imageUrl={choose2}
            heading="Reliable and Durable Performance"
            content="Our products are built for longevity, providing consistent and dependable air purification to ensure optimal air quality for years to come."
          />
        </div>
        <div className=" flex justify-center mb-2">
          <Link
            to="/about"
            className="mt-5 inline-flex items-center px-4 py-2 bg-ultragreen  text-white rounded hover:bg-gray-200 font-medium  text-center m-1"
          >
            Learn More
            <FaArrowRight className="ml-2" />
          </Link>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center px-4 py-2 rounded hover:bg-gray-200 font-medium  text-center m-1"
          >
            Contact us
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      <div className="flex justify-center mt-10 p-10">
        <ImageTextCard />
      </div>
      <Carousel />
      <Mobile_product />

      <div className="p-4 lg:p-10 border-solid   ">
        <div className="rounded-lg shadow-2xl border-2">
          <h6 className="m-auto text-center text-3xl font-bold p-3">
            Our <span className="text-[#1D9AD6]">Clientele</span>
          </h6>
          <Client />
          {/* <hr className=" border-1 border-black lg:w-5/6 sm:w-full m-auto mb-5"></hr> */}
        </div>
      </div>

      <div className="container mx-auto p-4">
        <MarketCarousel />
      </div>
      {/* <Newsletter/> */}
      <ReportForm />
      <OurClientele />

      <CarouselComponent />

      <CertificateGallery />
    </div>
  );
}
