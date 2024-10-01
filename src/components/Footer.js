import React from "react";
import logo from '../assests/logo.svg';
import { Link } from 'react-router-dom';
import Input from "./Input";

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
          {/* <input
            type="text"
            placeholder="Enter your email address"
            className="border p-2 rounded w-full max-w-md"
          /> */}
          <Input/>
    
      
          <div className="flex space-x-3 my-0">
            <a href="https://www.linkedin.com/company/ultrapureindia/" className="text-blue-700">
              <img src="./social/Group.png" alt="social" className="w-10 h-10" />
            </a>
            <a href="https://wa.me/7428534141" target="_blank" rel="noreferrer" className="text-green-500">
            <img src="./social/Group (1).png" alt="social" className="w-10 h-10" />
            </a>
            <a href="https://www.instagram.com/ultrapure_india/" className="text-pink-500">
            <img src="./social/Group (2).png" alt="social" className="w-10 h-10" />
            </a>
            <a href="https://www.facebook.com/ultrapureindia" className="text-blue-600">
            <img src="./social/Group (3).png" alt="social" className="w-10 h-10" />
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold mb-2">Products</h1>
          <h2><Link to="/aop" className="hover:underline hover:text-textBlue">Advanced Oxidation Plasma </Link></h2>
          <h2><Link to="/fsap" className="hover:underline hover:text-textBlue">Falcon-S</Link></h2>
          <h2><Link to="/fcap" className="hover:underline hover:text-textBlue">Falcon-C</Link></h2>
          <h2><Link to="/gap" className="hover:underline hover:text-textBlue">Germinox</Link></h2>
          <h2><Link to="/cf" className="hover:underline hover:text-textBlue">CBR Filter</Link></h2>
          <h2><Link to="/ef" className="hover:underline hover:text-textBlue">ESP Filter</Link></h2>
          <h2><Link to="/vap" className="hover:underline hover:text-textBlue">Virushield Air Purifier</Link></h2>
          <h2><Link to="/OdorNOX" className="hover:underline hover:text-textBlue">odorNOX Unit</Link></h2>
          <h2><Link to="/Ccu" className="hover:underline hover:text-textBlue">Corrosion Control Unit</Link></h2>
        </div>
        
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold mb-2">Market Served</h1>
          <h2><Link to="/commercial" className="hover:underline hover:text-textBlue">Commerical & Public Building</Link></h2>
          <h2><Link to="/Industrial" className="hover:underline hover:text-textBlue">Industrial / Transportation</Link></h2>
          <h2><Link to="/Food" className="hover:underline hover:text-textBlue">Food and Beverage</Link></h2>
          <h2><Link to="/Material" className="hover:underline hover:text-textBlue">Material Processing</Link></h2>
          <h2><Link to="/Waste" className="hover:underline hover:text-textBlue">Water/Waste</Link></h2>
        </div>
        
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold mb-2">Explore</h1>
          {/* <h2><a href="#" className="hover:underline hover:text-textBlue">Latest Insights</a></h2> */}
          {/* <h2><Link to="/download" className="hover:underline hover:text-textBlue">Download Centre</Link></h2> */}
          {/* <h2><Link to="/report" className="hover:underline hover:text-textBlue">Our Test Reports</Link></h2> */}
          {/* <h2><a href="#" className="hover:underline hover:text-textBlue">Media Gallery</a></h2> */}
          {/* <h2><a href="#" className="hover:underline hover:text-textBlue">Corporate Responsibilities</a></h2> */}
          <h2><Link to="/work" className="hover:underline hover:text-textBlue">Careers</Link></h2>
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default Footer;