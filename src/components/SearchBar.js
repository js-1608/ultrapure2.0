import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleProductClick = (product) => {
    navigate(product.path, { state: product });
  };

  const filteredData = query
    ? data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className=" max-w-md  relative">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Search for products..."
        value={query}
        onChange={handleInputChange}
      />
      {query && (
        <ul className="absolute left-0 right-0 border border-gray-300 rounded-lg mt-2 bg-white max-h-60 overflow-y-auto z-10">
          {filteredData.map((item) => (
            <li
              key={item.id}
              onClick={() => handleProductClick(item)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default SearchBar;
