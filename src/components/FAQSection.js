import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown ,faChevronRight} from '@fortawesome/free-solid-svg-icons';

const FAQSection = ({ faqs }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleToggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div>
      {faqs.map(faq => (
        <div key={faq.id} className="mb-4 p-4 border rounded-lg transition-shadow duration-300 hover:shadow-lg">
          <div 
            onClick={() => handleToggleFAQ(faq.id)} 
            className="flex justify-between items-center cursor-pointer"
          >
            <h3 className="text-xl font-bold mt-2 mb-2">
              {faq.heading}
            </h3>
            <FontAwesomeIcon icon={openFAQ === faq.id ? faChevronDown:  faChevronRight } />
          </div>

          {openFAQ === faq.id && (
            <div className="mt-2 flex flex-wrap m-auto  justify-evenly  ">
              {faq.content.map((item, index) => (
                <div key={index} className="m-2 hover:shadow-lg ">
                    <a
                      href={item.href}
                      rel="noopener noreferrer"
                      className="hover:underline block hover:text-ultragreen "
                    >
                  <img src={item.imageUrl} alt={item.heading} className="w-full h-auto" />
                  <h4 className="bg-gray-100 mt-0 p-2 text-lg font-semibold">
                    {item.heading}
                  </h4>
                  </a>
                  <hr className="border-1 border-grey shadow-xl"></hr>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default FAQSection;