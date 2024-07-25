import React from 'react';
import logo from '../assests/logo.png';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // Adjust the import path as necessary

const TopNav = () => {
  const data = [
    { id: 1, name: 'about', description: 'Description of Product 1', path: '/about' },
    { id: 2, name: 'Out Techology', description: 'Description of Product 2', path: '/technology' },
    { id: 3, name: 'Product', description: 'Description of Product 3', path: '/product' },
    { id: 4, name: 'Home', description: 'Description of Product 3', path: '/' },
    { id: 5, name: 'Market served', description: 'Description of Product 3', path: '/market-served' },
    { id: 6, name: 'faq', description: 'Description of Product 3', path: '/faq' },
    { id: 7, name: 'career', description: 'Description of Product 3', path: '/work' },
    { id: 8, name: 'download', description: 'Description of Product 3', path: '/download' },
    { id: 9, name: 'contact', description: 'Description of Product 3', path: '/contact' },
    { id: 4, name: 'Gallery', description: 'Description of Product 3', path: '/gallery' },





    // Add more data as needed
  ];

  return (
    <div className="flex items-center justify-between p-4 border-b-2">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-40 h-auto md:w-38 md:h-18" />
      </Link>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-2">
          <FiPhoneCall className="text-lg md:text-xl text-gray-700" />
          <div className="flex flex-col text-right">
            <h2 className="text-sm md:text-lg font-semibold">For Business Enquiry</h2>
            <p className="text-xs md:text-sm">1800 1100 50</p>
          </div>
        </div>
        <SearchBar data={data} />
      </div>
      
    </div>
  );
}

export default TopNav;




   
