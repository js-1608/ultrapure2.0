import React from 'react';
import logo from '../assests/logo.png';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // Adjust the import path as necessary

const TopNav = () => {
  const data = [
    { id: 1, name: 'al', description: 'Description of Product 1', path: '/product1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', path: '/product2' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', path: '/product3' },
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




   
