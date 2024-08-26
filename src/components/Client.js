
  import React, { useState } from 'react';

const Client = () => {
  const sections = [
    {
      title: 'Government',
      logos: ['./goverment/image 26.png', './goverment/image 27.png', './goverment/image 28.png', './goverment/image 29.png', './goverment/image 30.png', './goverment/image 31.png', './goverment/image 32.png', './goverment/image 33.png', './goverment/image 34.png', './goverment/image 35.png', './goverment/image 36.png', './goverment/image 37.png', './goverment/image 38.png']

    },
    { title: 'Hospitals', logos: ['./hospital/image.png', 
      './hospital/image (1).png', 
      './hospital/image (2).png', 
      './hospital/image (3).png', 
      './hospital/image (4).png', 
      './hospital/image (5).png', 
      './hospital/image (6).png', 
      './hospital/image (7).png', 
      './hospital/image (8).png', 
      './hospital/image (9).png', 
      './hospital/image (10).png', 
      './hospital/image (11).png', 
      './hospital/image (12).png', 
      './hospital/image (13).png', 
      './hospital/image (14).png',
      './hospital/image (15).png',
      './hospital/image (16).png',
      './hospital/image 39.png',] },
    { title: 'Commercial', logos: [
      './commercial/image.png', 
      './commercial/image (1).png','./commercial/image (4).png','./commercial/image (7).png','./commercial/image (10).png','./commercial/image (13).png','./commercial/image (16).png','./commercial/image (19).png','./commercial/image (22).png','./commercial/image (25).png',
      './commercial/image (2).png','./commercial/image (5).png','./commercial/image (8).png','./commercial/image (11).png','./commercial/image (14).png','./commercial/image (17).png','./commercial/image (20).png','./commercial/image (23).png','./commercial/image (26).png',
      './commercial/image (3).png','./commercial/image (6).png','./commercial/image (9).png','./commercial/image (12).png','./commercial/image (15).png','./commercial/image (18).png','./commercial/image (21).png','./commercial/image (24).png','./commercial/image (27).png',
      './commercial/image (28).png','./commercial/image (29).png','./commercial/image (30).png','./commercial/image (31).png','./commercial/image (32).png',
    ] },
    { title: 'Data Centre', logos: [
       './data/image.png',
       './data/image (1).png',
       './data/image (2).png',
       './data/image (3).png',
       './data/image (4).png',
       './data/image (5).png',
       './data/image (6).png',
       './data/image (7).png',
       './data/image 40.png',
    ] },
    { title: 'School', logos: [
      './school/image.png',
      './school/image (1).png',
      './school/image (2).png',
      './school/image (3).png',
      './school/image (4).png',
    ] },
    { title: 'Banks', logos: [
      './bank/image.png',
       './bank/image (1).png',
        './bank/image (2).png',
         './bank/image (3).png'
      
    ] },
    { title: 'Pharmaceutical', logos: [
      './pharma/image.png',
      './pharma/image 41.png',
    ] },
   
    { title: 'Entertainment', logos: [
      './entertainment/image.png',
      './entertainment/image (1).png',

    ] },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full p-5 mx-auto">
      <div className="flex flex-wrap lg:flex-nowrap mb-4">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`px-5 py-2 m-2 flex-grow flex items-center justify-center rounded  ${activeTab === index
                ? 'bg-gradient-to-r from-textBlue to-ultragreen text-white'
                : 'bg-gray-200  text-gray-600'
              } hover:bg-ultragreen hover:text-white focus:bg-gradient-to-r from-textBlue to-ultragreen `}
            onClick={() => setActiveTab(index)}
            style={{ minHeight: '50px' }} // Optional: Set a minimum height for consistency
          >
            {section.title}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-5 lg:grid-cols-10 gap-7 lg:gap-10 px-1 py-2 lg:px-5 lg:py-10">
        {sections[activeTab].logos.map((logo, logoIndex) => (
          <div
            key={logoIndex}
            className="flex items-center justify-center h-8 lg:h-24"
          >
            <img src={logo} alt={`Logo ${logoIndex + 1}`} className='w-full' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
