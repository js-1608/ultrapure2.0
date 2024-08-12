import React from "react";
import logo from '../assests/logo.svg';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8 p-10">
        
        <div className="flex flex-col  space-y-8">
        
            <img src={logo} alt="Logo" className="w-56 h-auto md:w-38 md:h-18 " />
          <h1 className="text-xl font-semibold">Subscribe With Us</h1>
          <p className="">
            Sign up now and be the first to know <br /> 
            about new products, offers and <br /> 
            exciting news and announcements.
          </p>
          <input
            type="text"
            placeholder="Enter your email address"
            className="border p-2 rounded w-full max-w-md"
          />
    
      
          <div className="flex space-x-3 my-0">
            <a href="https://www.linkedin.com" className="text-blue-700">
              <img src="./social/Group.png" alt="social" className="w-10 h-10" />
            </a>
            <a href="https://www.whatsapp.com" className="text-green-500">
            <img src="./social/Group (1).png" alt="social" className="w-10 h-10" />
            </a>
            <a href="https://www.instagram.com" className="text-pink-500">
            <img src="./social/Group (2).png" alt="social" className="w-10 h-10" />
            </a>
            <a href="https://www.facebook.com" className="text-blue-600">
            <img src="./social/Group (3).png" alt="social" className="w-10 h-10" />
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold mb-2">Products</h1>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Advances Oxidation Plasma </a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Falcon-S</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Falcon-C</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Bipoler Ionizer</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">CBR Filter</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">ESP Filter</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Virushield Air Purifier</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">odorNOX Unit</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Corrosion Control Unit</a></h2>
        </div>
        
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold mb-2">Solutions</h1>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Indoor Air Quality</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Toxic Gas</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Corrosion</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Control</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">AQI Monitoring</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Odor Control</a></h2>
        </div>
        
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold mb-2">Explore</h1>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Latest Insights</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Download Centre</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Our Test Reports</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Media Gallery</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Corporate Responsibilities</a></h2>
          <h2><a href="#" className="hover:underline hover:text-textBlue">Careers</a></h2>
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default Footer;