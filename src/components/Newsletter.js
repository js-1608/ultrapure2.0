
  import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-[#90C03E] text-white p-5  flex flex-col md:flex-row items-center justify-between rounded-lg shadow-md">
      <div className="flex-1 mb-4 md:mb-0 p-10 ">
        <h2 className="text-2xl font-bold mb-2 ">Join Us on Our Mission</h2>
        <p className="text-lg text-justify">Experience the difference that Ultrapure's air purification solutions can make in your indoor environment. Together, let's create a healthier and cleaner world for future generations.</p>
      </div>
      <div className="m-4 lg:w-2/5 sm:w-full text-end">
        <button className="bg-white text-[#90C03E] font-bold py-2 px-10 rounded hover:bg-gray-200  ">
          Contact Us  <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
