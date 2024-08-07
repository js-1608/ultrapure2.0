import React from 'react';
import logo from '../assests/logo.svg';
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
    { id: 10, name: 'Gallery', description: 'Description of Product 3', path: '/gallery' },
    { id: 11, name: 'Advanced Oxidation Plasma (AOP) Cell', description: 'Description of Product 3', path: '/aop' },
    { id: 12, name: 'Advanced Oxidation Plasma (AOP) Cell (for AHU)', description: 'Description of Product 1', path: '/aop' },
		{ id: 13, name: 'odorNOX Unit', description: 'Description of Product 1', path: '/OdorNOX' },
		{ id: 14, name: 'Virushield Air Purifier', description: 'Description of Product 1', path: '/vap' },
		{ id: 15, name: 'Corrosion Control Unit', description: 'Description of Product 1', path: '/ccu' },
		{ id: 16, name: 'germiNOX Air Purifier', description: 'Description of Product 1', path: '/gap' },
		{ id: 17, name: 'Falcon S Air Purifier', description: 'Description of Product 1', path: '/fsap' },
		{ id: 18, name: 'Falcon C Air Purifier', description: 'Description of Product 1', path: '/fcap' },
		{ id: 19, name: 'Chemical BiologicalRadiological Filter (CBR)', description: 'Description of Product 1', path: '/cf' },
		{ id: 20, name: 'ESP Filter', description: 'Description of Product 1', path: '/ef' },
		{ id: 21, name: 'ultraSORB Chemical Media', description: 'Description of Product 1', path: '/ucm' },
		{ id: 22, name: 'Ceiling Suspended Air Purifier', description: 'Description of Product 1', path: '/csap' },





    // Add more data as needed
  ];

  return (
    <div className="flex items-center justify-between pl-10 pr-10 p-3 border-b-2">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-40 h-auto md:w-38 md:h-18 "  />
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




   
