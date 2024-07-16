// src/pages/HomePage.js
import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Using react-icons for the arrow
import Banner from "../components/Banner";
import banner from "../assests/home_banner.png";
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
export default function HomePage() {
  return (
    <div>
      <Banner
        src={banner}
        title="The Future Of Clean Air"
        text="For better health of your family "
        updated="UPGRADE NOW."
        buttonUrl="https://example.com"
        buttonText="Get Free Consultation"
      />

      <div className="relative  ">
        <img
          src={COUNT}
          alt="Card image"
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
          <h5 className="font-normal text-2xl">Discover</h5>
          <h2 className=" font-bold text-5xl">
            Why Choose <span className="text-textBlue">Ultrapure</span>
          </h2>
          <p className="max-w-4xl text-center m-auto font-normal mt-10">
            We stand out as a 'Need-based Manufacturer,' focusing on
            client-specific solutions, which has built our strong reputation and
            loyal customer base. With offices in Delhi, Mumbai, and Bengaluru,
            we effectively serve clients nationwide.
          </p>
        </div>
        <div className="flex justify-center mt-10 flex-wrap mb-10">
          <InfoCard
            imageUrl={choose1}
            heading="Superior Air Purification Solutions"
            content="Our products are designed to effectively eliminate airborne pollutants and provide you with clean and healthy air."
          />
          <InfoCard
            imageUrl={choose3}
            heading="Customised Solutions for Every Need"
            content="We understand that every environment is unique, which is why we offer air purification solutions to meet your specific requirements."
          />
          <InfoCard
            imageUrl={choose2}
            heading="Reliable and Long Lasting Performance"
            content="our products are built to last, providing you with consistent and reliable air purification performance for years to come."
          />
        </div>
        <div className=" flex justify-center mb-2">
          <button className="mt-5 inline-flex items-center px-4 py-2 bg-ultragreen  text-white rounded hover:bg-gray-200 font-medium  text-center m-1">
            Learn More
            <FaArrowRight className="ml-2" />
          </button>
          <button className="mt-5 inline-flex items-center px-4 py-2 rounded hover:bg-gray-200 font-medium  text-center m-1">
            Contact us
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-10 p-10">
        <ImageTextCard
          imageUrl={sol}
        />
      </div>
      <Carousel />

      <div className="p-10 border-solid   ">
        <div className="rounded-lg shadow-2xl border-2">
        <h6 className="m-auto text-center text-3xl font-bold p-3">Our <span className="text-[#1D9AD6]">Clientele</span></h6>

        <OurClientele />
        <hr className=" border-1 border-black lg:w-4/5 sm:w-full m-auto"></hr>
        <CarouselComponent />
        </div>
      </div>
        <Newsletter/>
    </div>

  );
}
