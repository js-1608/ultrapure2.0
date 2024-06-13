import React from "react";
import logo from "../assests/logo.png";
import { FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex flex-col lg:flex-row lg:justify-evenly space-y-8 lg:space-y-0 lg:space-x-8">
        
        <div className="flex flex-col items-center space-y-8">
        
            <img src={logo} alt="Logo" className="w-36 h-18" />
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
    
      
          <div className="flex space-x-2 my-0">
            <a href="https://www.linkedin.com" className="text-blue-700">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://www.whatsapp.com" className="text-green-500">
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" className="text-pink-500">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com" className="text-blue-600">
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold">Products</h1>
          <h2><a href="#" className="hover:underline">Advances Oxidation Plasma Cell (AOP)</a></h2>
          <h2><a href="#" className="hover:underline">Falcon-S</a></h2>
          <h2><a href="#" className="hover:underline">Falcon-C</a></h2>
          <h2><a href="#" className="hover:underline">Bipoler Ionizer</a></h2>
          <h2><a href="#" className="hover:underline">CBR Filter</a></h2>
          <h2><a href="#" className="hover:underline">ESP Filter</a></h2>
          <h2><a href="#" className="hover:underline">Virushield Air Purifier</a></h2>
          <h2><a href="#" className="hover:underline">odorNOX Unit</a></h2>
          <h2><a href="#" className="hover:underline">Corrosion Control Unit</a></h2>
        </div>
        
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold">Solutions</h1>
          <h2><a href="#" className="hover:underline">Indoor Air Quality</a></h2>
          <h2><a href="#" className="hover:underline">Toxic Gas</a></h2>
          <h2><a href="#" className="hover:underline">Corrosion</a></h2>
          <h2><a href="#" className="hover:underline">Control</a></h2>
          <h2><a href="#" className="hover:underline">AQI Monitoring</a></h2>
          <h2><a href="#" className="hover:underline">Odor Control</a></h2>
        </div>
        
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold">Explore</h1>
          <h2><a href="#" className="hover:underline">Latest Insights</a></h2>
          <h2><a href="#" className="hover:underline">Download Centre</a></h2>
          <h2><a href="#" className="hover:underline">Our Test Reports</a></h2>
          <h2><a href="#" className="hover:underline">Media Gallery</a></h2>
          <h2><a href="#" className="hover:underline">Corporate Responsibilities</a></h2>
          <h2><a href="#" className="hover:underline">Careers</a></h2>
        </div>
      
      </div>
    </div>
  );
};

export default Footer;