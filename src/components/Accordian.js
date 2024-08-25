import React, { useState } from 'react';

const Accordian = () => {
  const sections = [
    {
      title: 'Government',
      logos: ['./goverment/image 26.png', './goverment/image 27.png', './goverment/image 28.png','./goverment/image 29.png','./goverment/image 30.png','./goverment/image 31.png', './goverment/image 32.png','./goverment/image 33.png','./goverment/image 34.png','./goverment/image 35.png','./goverment/image 36.png','./goverment/image 37.png','./goverment/image 38.png']

    },
    { title: 'Hospitals', logos: [] }, // Add logos accordingly
    { title: 'Commercial', logos: [] },
    { title: 'Data Centre', logos: [] },
    { title: 'School', logos: [] },
    { title: 'Banks', logos: [] },
    { title: 'Pharmaceutical', logos: [] },
    { title: 'Entertainment', logos: [] },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full p-5 mx-auto">
      <div className="flex flex-wrap lg:flex-nowrap mb-4">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`px-5 py-2 m-2 flex-grow flex items-center justify-center rounded ${
              activeTab === index
                ? 'bg-gradient-to-r from-textBlue to-ultragreen text-white'
                : 'bg-gray-200 text-gray-600'
            } hover:bg-ultragreen focus:bg-gradient-to-r from-textBlue to-ultragreen text-white`}
            onClick={() => setActiveTab(index)}
            style={{ minHeight: '50px' }} // Optional: Set a minimum height for consistency
          >
            {section.title}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-5 lg:grid-cols-10 gap-10 px-5 py-10">
        {sections[activeTab].logos.map((logo, logoIndex) => (
          <div
            key={logoIndex}
            className="flex items-center justify-center h-8 lg:h-24"
          >
            <img src={logo} alt={`Logo ${logoIndex + 1}`} className='w-full'/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
